import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App components", () => {
  test("renders 'Hello World' as a new task if the input field is filled", () => {
    //Arrange
    render(<App />);

    //Act
    const textboxElement = screen.getByRole("textbox");
    userEvent.type(textboxElement, "Hello, World!");

    //Assert
    const outputElement = screen.getByDisplayValue("Hello, World!");
    expect(outputElement).toBeInTheDocument();
  });

  test("renders tasks if there is 1 or more tasks saved", async () => {
    render(<App />);

    // simulate we have to wait to fecth the data from an API
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });

  test("not renders a task if deleted", () => {
    render(<App />);

    const outputElement = screen.getByText(/first task/i);
    userEvent.click(outputElement);

    expect(outputElement).not.toBeInTheDocument();
  });
});
