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

beforeEach(cleanup);

describe("<Login />", () => {
  test("Should render", () => {
    const { getByTestId, debug } = render(<Login />);
    expect(getByTestId("login")).toHaveTextContent("Login");
  });

  test("should login user", async () => {
    const mock = new MockAdapter(axios);
    mock.onGet("/").reply(200, { message: "success" });
    const { getByTestId, debug, getByText } = render(<Login />);
    fireEvent.press(getByTestId("login-btn"));
    await waitFor(() => getByText("success"));
  });
});
