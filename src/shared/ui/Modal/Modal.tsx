import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Portal } from "../Portal/Portal";
import { useTheme } from "app/providers/ThemeProvider";

type ModalProps = {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
};

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose } = props;

  const { theme } = useTheme();

  const [isClosing, setIsClosing] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const ANIMATION_DELAY = 300;

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      clearTimeout(timerRef.current);
    };
  }, [isOpen, onKeyDown]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const mods: Record<string, boolean | undefined> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
    [cls[theme]]: true,
  };
  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={classNames(cls.overlay)} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
