import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ErrorBoundary.module.scss";
import { ReactNode, Suspense } from "react";
import { ErrorBoundary as _ErrorBoundary } from "react-error-boundary";
import { PageError } from "widgets/PageError/PageError";

type ErrorBoundaryProps = {
  children: ReactNode;
};

export const ErrorBoundary = (props: ErrorBoundaryProps) => {
  const { children } = props;

  const logError = (error: Error, info: { componentStack: string }) => {
    // Do something with the error, e.g. log to an external API
    console.warn("Error: ", error);
  };

  return (
    <_ErrorBoundary
      fallback={
        <Suspense fallback="">
          <PageError />
        </Suspense>
      }
      onError={logError}
    >
      {children}
    </_ErrorBoundary>
  );
};
