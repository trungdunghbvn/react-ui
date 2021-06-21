import React, { useState, useCallback } from "react";

import { OnOff, CrossSell, Toast, Modal, Sheet, AppProvider } from "../src";

export function Playground() {
  const [state, setstate] = useState(false);
  const [active, setActive] = useState(false);
  const tongleActive = useCallback(() => {
    setActive(!active);
  }, [active]);
  return (
    <>
      <AppProvider>
        <OnOff status={state} changeStatus={setstate} size="medium" />
        <CrossSell app="top-pin" />
        <Sheet
          open={active}
          onClose={() => setActive(!active)}
          accessibilityLabel="Manage sales channels"
          app="top-pin"
          className="dev-autoketing"
        >
          <div onClick={() => setActive(!active)}>dev</div>
        </Sheet>
        <Sheet
          open={active}
          onClose={() => setActive(!active)}
          accessibilityLabel="Manage sales channels"
          app="top-pin"
          className="dev-autoketing"
        >
          <div onClick={() => setActive(!active)}>dev</div>
        </Sheet>
        {/* <Modal open={active} app="top-pin" onClose={() => setActive(!active)} /> */}
        <button onClick={() => setActive(!active)}>dev12</button>
        {/* <Toast title="Success" duration={500000} open={active} onDismiss={tongleActive} /> */}
      </AppProvider>
    </>
  );
}
