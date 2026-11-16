import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "background_inverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
};

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const {
    className,
    children,
    theme,
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Record<string, boolean | undefined> = {
    [cls.square]: square,
  };

  return (
    <button
      className={classNames(cls.Button, mods, [
        className,
        theme && cls[theme],
        size && cls[size],
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
