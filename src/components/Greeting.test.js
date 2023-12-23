import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

test("renders Hello World as a text", () => {
  //1. Arrange
  render(<Greeting />);

  //2. Act
  //...nothing yet

  //3.Assert
  const helloWorldElement = screen.getByText("Hello World");
  expect(helloWorldElement).toBeInTheDocument();
});

test("renders text when changedText is false", () => {
  //1. Arrange
  render(<Greeting />);

  //2. Act
  const buttonElement = screen.getByRole("button");
  userEvent.click(buttonElement);

  //3.Assert
  const buttonFalseElement = screen.queryByText("good to see you", {
    exact: false,
  });
  expect(buttonFalseElement).toBeNull();
});

test("renders text when changedText is true", () => {
  //1. Arrange
  render(<Greeting />);

  //2. Act
  const buttonElement = screen.getByRole("button");
  userEvent.click(buttonElement);

  //3.Assert
  const buttonTrueElement = screen.getByText("changed", {
    exact: false,
  });
  expect(buttonTrueElement).toBeInTheDocument();
});
