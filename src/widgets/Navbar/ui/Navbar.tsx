import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

type NavbarProps = {
  className?: string;
};

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Navbar)}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to="/">
          {t("Главная")}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          {t("О сайте")}
        </AppLink>
      </div>
    </div>
  );
};
