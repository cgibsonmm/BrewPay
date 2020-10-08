import React from "react";
import { render, cleanup } from "react-native-testing-library";
import HomeScreen from "../../views/HomeScreen";

beforeEach(cleanup);

describe("<HomeScreen />", () => {
  test("it should render", () => {
    const { getByText } = render(<HomeScreen />);

    expect(getByText("Test Home")).toHaveTextContent("Test Home");
  });
});
