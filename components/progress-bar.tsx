"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const StyledProgressBar = () => {
  return (
    <>
      <ProgressBar
        height="4px"
        color="#0071bc"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default StyledProgressBar;
