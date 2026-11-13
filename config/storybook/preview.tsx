import type { Preview } from "@storybook/react-webpack5";
import { withThemeByClassName } from "@storybook/addon-themes";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import "../../src/app/styles/index.scss";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    // Обёртка Router — должна быть снаружи, чтобы Link внутри Story
    // имел доступ к контексту роутера
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
    // Обёртка .app — нужна для работы withThemeByClassName
    (Story) => (
      <div className="app">
        <Story />
      </div>
    ),
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
      parentSelector: ".app",
    }),
  ],
};

export default preview;
