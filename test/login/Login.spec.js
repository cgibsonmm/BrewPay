import React from "react";
import {
  render,
  cleanup,
  waitFor,
  fireEvent,
} from "react-native-testing-library";
import Login from "../../components/Login/Login";
import axios from "axios";

import MockAdapter from "axios-mock-adapter";

jest.mock("react-native/Libraries/Utilities/Platform", () => {
  const Platform = require.requireActual(
    "react-native/Libraries/Utilities/Platform"
  );
  Platform.OS = "ios";
  return Platform;
});
const Platform = require("react-native/Libraries/Utilities/Platform");

beforeEach(cleanup);

describe("<Login />", () => {
  test("Snapshot", () => {
    expect(render(<Login />)).toMatchSnapshot();
  });

  test("Should render", () => {
    const { getByTestId, debug } = render(<Login />);
    expect(getByTestId("login")).toHaveTextContent("LOGIN");
  });

  test("should login user", async () => {
    const mock = new MockAdapter(axios);
    mock.onGet("/").reply(200, { message: "success" });
    const { getByTestId, getByText } = render(<Login />);
    fireEvent.press(getByTestId("login-btn"));
    await waitFor(() => getByText("success"));
  });
});
