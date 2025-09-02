import { classNames } from "shared/lib/classNames/classNames";
import "./Loader.scss";

type LoaderProps = {
  className?: string;
};

export const Loader = (props: LoaderProps) => {
  const { className } = props;
  return (
    <div className={classNames("loadingio-spinner-ellipsis", {}, [className])}>
      <div className="ldio-x2uulkbinbj">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
