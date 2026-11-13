import { BuildPaths } from "./../build/types/config";
import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";
import { fileURLToPath } from "url";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { RuleSetRule } from "webpack";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isSvgRule = (rule: RuleSetRule): boolean => {
  const test = rule.test;
  if (!test) return false;
  if (test instanceof RegExp) return test.test(".svg");
  if (Array.isArray(test)) {
    return test.some((t) => t instanceof RegExp && t.test(".svg"));
  }
  return false;
};

const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-styling-webpack",
    "@storybook/addon-themes",
  ],
  framework: "@storybook/react-webpack5",
  webpackFinal: async (config) => {
    const paths: BuildPaths = {
      build: "",
      html: "",
      entry: "",
      src: path.resolve(__dirname, "..", "..", "src"),
    };
    if (config.resolve) {
      // config.resolve.alias = {
      //   ...config.resolve.alias,
      //   // Указываем путь к папке src, чтобы алиас 'shared' разрешался оттуда
      //     shared: path.resolve(__dirname, '../../src/shared'),
      // };
      config.resolve.modules?.push(paths.src);
      config.resolve.extensions?.push(".ts", ".tsx");

      // 2. Исключаем .svg из встроенных правил (не удаляя сами правила)
      const rules = (config.module?.rules ?? []) as RuleSetRule[];
      config.module!.rules = rules.map((rule) => {
        if (isSvgRule(rule)) {
          return { ...rule, exclude: /\.svg$/i };
        }
        return rule; // ← обязательно вернуть правило
      });

      // 3. Своё правило для SVG
      config.module?.rules?.unshift({
        test: /\.svg$/i,
        use: ["@svgr/webpack"],
      });

      config.module?.rules?.push(buildCssLoader(true));
    }
    return config;
  },
};
export default config;
