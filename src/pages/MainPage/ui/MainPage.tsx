import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  // useEffect(() => {
  //   if (Math.random() > 0.5) {
  //     throw new Error("тестовая ошибка");
  //   }
  // }, []);
  const { t } = useTranslation();
  return <div>{t("Главная страница")}</div>;
};

export default MainPage;
