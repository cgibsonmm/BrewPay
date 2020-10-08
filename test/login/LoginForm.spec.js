import React from "react";
import { render, cleanup, fireEvent } from "react-native-testing-library";
import LoginForm from "../../components/Login/LoginForm";

jest.mock("react-native/Libraries/Utilities/Platform", () => {
  const Platform = require.requireActual(
    "react-native/Libraries/Utilities/Platform"
  );
  Platform.OS = "ios";
  return Platform;
});
const Platform = require("react-native/Libraries/Utilities/Platform");

beforeEach(cleanup);

const form = { email: "test@email.com", password: "test" };

describe("<LoginForm/>", () => {
  const handleSubmit = jest.fn();
  test("Snapshot", () => {
    expect(render(<LoginForm handleSubmit={handleSubmit} />)).toMatchSnapshot();
  });

  test("should render", () => {
    const { getByTestId, getByText } = render(
      <LoginForm handleSubmit={handleSubmit} />
    );

    fireEvent.changeText(getByTestId("email"), form.email);
    fireEvent.changeText(getByTestId("password"), form.password);
    fireEvent.press(getByText("Submit"));
    expect(handleSubmit).toHaveBeenCalledWith(form);
  });
});
