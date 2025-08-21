import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ThemeButton {
  CLEAR = "clear",
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  theme?: ThemeButton;
};

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
