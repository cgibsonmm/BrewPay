import React from "react";
import { render, cleanup, fireEvent } from "react-native-testing-library";
import LoginForm from "../../components/Login/LoginForm";

beforeEach(cleanup);

const form = { email: "test@email.com", password: "test" };

describe("<LoginForm/>", () => {
  test("should render", () => {
    const handleSubmit = jest.fn();
    const { getByTestId, getByText } = render(
      <LoginForm handleSubmit={handleSubmit} />
    );
    fireEvent.changeText(getByTestId("email"), form.email);
    fireEvent.changeText(getByTestId("password"), form.password);
    fireEvent.press(getByText("Submit"));
    expect(handleSubmit).toHaveBeenCalledWith(form);
  });
});
