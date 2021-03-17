/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import styles from "./OnOff.scss";
import { classNames, variationName } from "../../utilities/css";

export function OnOff({
  status,
  changeStatus,
  disabled,
  size = "medium",
  color,
  bgImage,
}) {
  const handleChange = () => {
    if (changeStatus === null || disabled) {
      return;
    }
    changeStatus(!status);
  };
  // size medium or large
  const stylesMap = () => {
    return {
      "--ak-bg-on-off": color,
      "--ak-bg-image-on-off": bgImage,
    };
  };
  return (
    <div style={stylesMap()}>
      <label
        className={classNames(
          styles.OnOff,
          styles[variationName("size", size)],
          disabled && styles.disabled
        )}
        id={disabled ? "disabled-on-off" : ""}
      >
        <input
          type="checkbox"
          checked={status}
          onChange={handleChange}
          disabled={disabled}
        />
        <span className={styles.Slider}>
          <span className={status ? styles.Left : styles.Right}>
            {status ? "ON" : "OFF"}
          </span>
        </span>
      </label>
    </div>
  );
}
