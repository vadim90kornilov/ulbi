import cls from "./Applink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

type AppLinkProps = LinkProps & {
  className?: string;
  theme?: AppLinkTheme;
};

export const AppLink: FC<AppLinkProps> = (props: AppLinkProps) => {
  const {
    className,
    to,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
