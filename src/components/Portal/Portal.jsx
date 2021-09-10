import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import { usePortalsManager } from "../../utilities/portals";
import { useUniqueId } from "../../utilities/unique-id";

export function Portal({
  children,
  idPrefix = "",
  classPrefix = "",
  idProp = "",
}) {
  const { container } = usePortalsManager();

  //   const uniqueId = useUniqueId("portal");
  const uniqueId = useUniqueId("portal", idProp);
  const portalId = idPrefix !== "" ? `${idPrefix}-${uniqueId}` : uniqueId;

  return container
    ? createPortal(
        <div data-portal-id={portalId} className={classPrefix}>
          {children}
        </div>,
        container
      )
    : null;
}
