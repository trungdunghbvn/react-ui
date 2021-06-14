import React, { useState, useCallback } from "react";

import { OnOff, CrossSell, Toast } from "../src";

export function Playground() {
  const [state, setstate] = useState(false);
  const [active, setActive] = useState(false);
  const tongleActive = useCallback(() => {
    setActive(!active);
  }, [active]);
  return (
    <>
      <OnOff status={state} changeStatus={setstate} size="medium" />
      <CrossSell app="top-pin" />
      <button onClick={() => setActive(!active)}>dev12</button>
      <Toast title="Success" duration={500000} open={active} onDismiss={tongleActive} />
    </>
  );
}
