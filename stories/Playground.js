import React, { useState, useCallback } from "react";

import { OnOff, CrossSell, Toast, Modal, Sheet } from "../src";

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
      <Sheet open={active}
        onClose={() => setActive(!active)}
        accessibilityLabel="Manage sales channels" app="top-pin" ><div onClick={() => setActive(!active)}>dev</div></Sheet>
      {/* <Modal open={active} app="top-pin" onClose={() => setActive(!active)} /> */}
      <button onClick={() => setActive(!active)}>dev12</button>
      {/* <Toast title="Success" duration={500000} open={active} onDismiss={tongleActive} /> */}
    </>
  );
}
