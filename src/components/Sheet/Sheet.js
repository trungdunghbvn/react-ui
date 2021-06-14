import React, { useRef, useCallback, useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import debounce from "lodash/debounce";

import { Backdrop } from "../Backdrop";
import { classNames } from "../../utilities/css";
import { layer, overlay } from "../shared";

import { navigationBarCollapsed } from "../../utilities/breakpoints";

import styles from "./Sheet.scss";

const BOTTOM_CLASS_NAMES = {
  enter: classNames(styles.Bottom, styles.enterBottom),
  enterActive: classNames(styles.Bottom, styles.enterBottomActive),
  exit: classNames(styles.Bottom, styles.exitBottom),
  exitActive: classNames(styles.Bottom, styles.exitBottomActive),
};

const RIGHT_CLASS_NAMES = {
  enter: classNames(styles.Right, styles.enterRight),
  enterActive: classNames(styles.Right, styles.enterRightActive),
  exit: classNames(styles.Right, styles.exitRight),
  exitActive: classNames(styles.Right, styles.exitRightActive),
};

export function Sheet({
  children,
  open,
  onClose,
  onEntered,
  onExit,
  accessibilityLabel,
}) {
  const container = useRef(null);
  const [isNavigationCollapsed, setIsNavigationCollapsed] = useState(
    navigationBarCollapsed().matches
  );

  const handleResize = useCallback(
    debounce(
      () => {
        if (isNavigationCollapsed !== navigationBarCollapsed().matches) {
          setIsNavigationCollapsed(!isNavigationCollapsed);
        }
      },
      40,
      { trailing: true, leading: true, maxWait: 40 }
    ),
    [isNavigationCollapsed]
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <CSSTransition
        nodeRef={container}
        classNames={
          isNavigationCollapsed ? BOTTOM_CLASS_NAMES : RIGHT_CLASS_NAMES
        }
        timeout={300}
        in={open}
        mountOnEnter
        unmountOnExit
        onEntered={onEntered}
        onExit={onExit}
      >
        <div
          className={styles.Container}
          {...layer.props}
          {...overlay.props}
          ref={container}
        >
          <div
            role="dialog"
            aria-modal
            tabIndex={-1}
            className={styles.Sheet}
            aria-label={accessibilityLabel}
          >
            {children}
          </div>
        </div>
      </CSSTransition>
      {open && <Backdrop transparent onClick={onClose} />}
    </div>
  );
}
