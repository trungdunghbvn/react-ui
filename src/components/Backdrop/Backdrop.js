import React from "react";
import { classNames } from "../../utilities/css";
import styles from "./Backdrop.scss";

export function Backdrop(props) {
  const { onClick, transparent } = props;
  const className = classNames(
    styles.Backdrop,
    transparent && styles.transparent
  );

  return <div className={className} onClick={onClick} />;
}
