import React from "react";
import { render, cleanup } from "react-native-testing-library";
import Login from "../../components/Login/Login";

beforeEach(cleanup);

describe("<Login />", () => {
  test("Should render", () => {
    const { getByTestId, debug } = render(<Login />);
    expect(getByTestId("login")).toHaveTextContent("Login");
  });
});
