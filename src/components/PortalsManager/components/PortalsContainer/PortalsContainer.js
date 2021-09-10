import React, { forwardRef } from "react";

function PortalsContainerComponent(_props, ref) {
  return <div id="AutoketingPortalsContainer" ref={ref} />;
}

export const PortalsContainer = forwardRef(PortalsContainerComponent);
