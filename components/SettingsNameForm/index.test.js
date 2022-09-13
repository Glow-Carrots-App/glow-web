import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import SettingsNameForm from ".";
import UserModel from "../../model/user";

jest.mock("../../model/user");

const USER = {
  uid: "abc123",
  firstName: "Tester",
};

describe("SettingsNameForm component", () => {
  beforeEach(() => render(<SettingsNameForm user={USER} />));
  UserModel.updateName.mockImplementation(() => jest.fn());

  it("should render a form", () => {
    const formElement = screen.getByRole("form");
    expect(formElement).toBeInTheDocument();
  });

  describe("form", () => {
    it("should render a name label", () => {
      const nameLabel = screen.getByText(/^Name$/);
      expect(nameLabel).toBeInTheDocument();
    });

    it("should render a name input field", () => {
      const nameInput = screen.getByDisplayValue(USER.firstName);
      expect(nameInput).toBeInTheDocument();
    });

    it("should render a submit button", () => {
      const submitButton = screen.getByText(/Save/);
      expect(submitButton).toBeInTheDocument();
    });

    describe("submitButton", () => {
      it("should render 'Save' and have inputButton style by default", () => {
        const submitButton = screen.getByText("Save");
        expect(submitButton).toHaveValue("Save");
        expect(submitButton).toHaveClass("inputButton");
      });

      it("should render 'Saved' and have inputButtonSaved style when form is submitted", () => {
        const submitButton = screen.getByText("Save");
        const nameInput = screen.getByDisplayValue(USER.firstName);

        fireEvent.change(nameInput, { target: { value: "TesterName" } });
        fireEvent.click(submitButton);

        expect(submitButton).toHaveValue("Saved!");
        expect(submitButton).toHaveClass("inputButtonSaved");
      });
    });
  });
});

describe("SettingsNameForm with error", () => {
  it("should render an error message upon handleNewEmail failure", async () => {
    UserModel.updateName.mockImplementation(() => {
      return Promise.reject(new Error());
    });

    render(<SettingsNameForm user={USER} />);

    const submitButton = screen.getByText(/^Save$/);
    const nameInput = screen.getByDisplayValue(USER.firstName);

    fireEvent.change(nameInput, {
      target: { value: "TesterBoo" },
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      const errorMessage = screen.getByText(/Something went wrong/);
      expect(errorMessage).toBeInTheDocument();
    });

    screen.debug();
  });
});
