import React from "react";
import { cleanup, render, wait, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import RegistrationForm from "./RegistrationForm";

afterEach(cleanup);

/* Test ID 2
 * Determine the register button is fired in RegisterForm.js
 */
describe("Registration Form Testsuite", () => {
  test("register button is fired when a user clicks on it", async () => {
    const mockSubmit = jest.fn();

    /* Assertions */
    const { getByTestId } = render(
      <RegistrationForm registerUser={mockSubmit} />
    );
    const userNameInput = getByTestId("username-input");
    const passWordInput = getByTestId("password-input");
    const regForm = getByTestId("form");

    fireEvent.change(userNameInput, {
      target: { value: "tnguyen_2" }
    });
    expect(userNameInput.value).toBe("tnguyen_2");
    fireEvent.change(passWordInput, {
      target: { value: "tnguyen_123456" }
    });
    expect(passWordInput.value).toBe("tnguyen_123456");

    fireEvent.submit(regForm);

    await wait(() => {
      expect(mockSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
