import React, { useState } from "react";

import { OnOff, CrossSell, Modal } from "../src";

export function Playground() {
  const [state, setstate] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <>
      <OnOff status={state} changeStatus={setstate} size="medium"/>
      <CrossSell app="top-pin" />
      <button onClick={()=>setActive(!active)}>dev12</button>
      <Modal open={active} onClose={()=>setActive(!active)} >dev12</Modal>
    </>
  );
}
