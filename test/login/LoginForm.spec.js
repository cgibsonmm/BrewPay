import React from "react";
import { render, cleanup, fireEvent } from "react-native-testing-library";
import LoginForm from "../../components/Login/LoginForm";

beforeEach(cleanup);

describe("<LoginForm/>", () => {
  test("should render", () => {
    const handleSubmit = jest.fn();
    const { getByTestId, getByText } = render(
      <LoginForm handleSubmit={handleSubmit} />
    );
    fireEvent.changeText(getByTestId("email"), "Hello");
    fireEvent.changeText(getByTestId("password"), "1234567");
    fireEvent.press(getByText("Submit"));
    expect(handleSubmit).toHaveBeenCalledWith({});
  });
});
