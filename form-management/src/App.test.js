import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

afterEach(rtl.cleanup);

/* Test ID 1
 * Determine grid layout element is display on App.js
 */
it("has grid layout in App.js", () => {
  const appWrapper = rtl.render(<App />);
  const hasGridLayout = appWrapper.queryByTestId(/grid-layout/);
  expect(hasGridLayout).toBeInTheDocument();
});
