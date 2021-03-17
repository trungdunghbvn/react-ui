import React, { useState } from "react";

import { OnOff, CrossSell } from "../src";

export function Playground() {
  const [state, setstate] = useState(false);
  return (
    <>
      <OnOff status={state} changeStatus={setstate} size="medium"/>
      <CrossSell app="top-pin" />
    </>
  );
}
