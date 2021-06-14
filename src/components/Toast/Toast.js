import React, { createRef, useCallback, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./Toast.scss";
import { classNames } from "../../utilities/css";
import { Notification } from './components'

export function Toast({ open, ...props }) {

  const toastNode = createRef();
  const updateToasts = useCallback(() => {
    let targetInPos = 0;
    const currentToast = toastNode;
    if (!currentToast.current) return;
    targetInPos += currentToast.current.clientWidth;
    currentToast.current.style.setProperty(
      "--toast-translate-y-in",
      `-${targetInPos + 20}px`
    );
    currentToast.current.style.setProperty(
      "--toast-translate-y-out",
      `${targetInPos - 300}px`
    );
  }, [toastNode]);

  useEffect(() => {
    updateToasts();
  }, [toastNode]);

  return (
    <>
      <div className={styles.Toast}>
        <TransitionGroup component={null}>
          {open && (
            <CSSTransition
              in={open}
              nodeRef={toastNode}
              timeout={{ enter: 0, exit: 400 }}
              classNames={toastClasses}
            >
              <div ref={toastNode}>
                <Notification {...props}/>
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    </>
  );
}

const toastClasses = {
  enter: classNames(styles.ToastWrapper, styles["ToastWrapper-enter"]),
  enterDone: classNames(styles.ToastWrapper, styles["ToastWrapper-enter-done"]),
  exit: classNames(styles.ToastWrapper, styles["ToastWrapper-exit"]),
};
