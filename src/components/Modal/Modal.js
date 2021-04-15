import React from "react";
import styles from "./Modal.scss";
import { classNames } from "../../utilities/css";
// import Close from "./close.svg";
import { Backdrop } from "../Backdrop";
import Close from '../../utilities/Icons/Close'
// import { ReactComponent as Close } from './close.svg';

export function Modal({
  children,
  open,
  maxWidth,
  onClose,
  closeIcon = true,
  fullwidth = true,
}) {
  return (
    <>
      <div
        className={classNames(styles.Modal, open && styles.active)}
        onClick={onClose}
      >
        <div
          className={classNames(styles.Inner, fullwidth && styles.fullwidth)}
          style={maxWidth && {maxWidth: `${maxWidth}px`}}
          onClick={(event) => event.stopPropagation()}
        >
          {closeIcon && (
            <div className={styles.Close} onClick={onClose}>
              {/* <img src={Close} alt="close" /> */}
              <Close />
            </div>
          )}
          {children}
        </div>
      </div>
      {open && <Backdrop />}
      {/* {backdrop} */}
    </>
  );
}
