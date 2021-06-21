import React, { useMemo, useState } from "react";

import { PortalsManagerContext } from "../../utilities/portals";

import { PortalsContainer } from "./components";

export function PortalsManager({ children, container }) {
  const [portalContainerElement, setPortalContainerElement] = useState(null);

  const currentContainer = container ?? portalContainerElement;
  const contextValue = useMemo(() => ({ container: currentContainer }), [
    currentContainer,
  ]);

  return (
    <PortalsManagerContext.Provider value={contextValue}>
      {children}
      {container ? null : <PortalsContainer ref={setPortalContainerElement} />}
    </PortalsManagerContext.Provider>
  );
}
