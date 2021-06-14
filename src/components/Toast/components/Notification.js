import React, { createRef, useCallback, useEffect } from "react";

import styles from "./Notification.scss";
import { classNames } from "../../../utilities/css";
import Close from "../../../utilities/Icons/Close";

export const DEFAULT_TOAST_DURATION = 5000;

export function Notification({
  content,
  error = false,
  onDismiss,
  duration,
  background,
  color,
  title,
}) {
  const notiNode = createRef();
  useEffect(() => {
    const timeoutDuration = duration || DEFAULT_TOAST_DURATION;
    const timer = setTimeout(onDismiss, timeoutDuration);
    return () => {
      clearTimeout(timer);
    };
  }, [duration, onDismiss]);

  useEffect(() => {
    if (background || color) {
      notiNode.current.style.setProperty("background-color", background);
      notiNode.current.style.setProperty("color", color);
    }
  }, [background, notiNode, color]);

  return (
    <div
      ref={notiNode}
      className={classNames(styles.Notification, error && styles.error)}
    >
      <span className="checked">{/* <CheckCircle /> */}</span>
      <div>
        {title && <h3 className={styles.Title}>{title}</h3>}
        <div className={styles.Message}>{content || "Message"}</div>
      </div>
      <span className={styles.Close} onClick={onDismiss}>
        <Close />
      </span>
    </div>
  );
}
