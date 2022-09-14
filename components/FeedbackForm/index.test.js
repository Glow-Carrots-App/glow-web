import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import FeedbackForm from ".";

const USER = {
  uid: "abc123",
};

describe("FeedbackForm component", () => {
  beforeEach(() => render(<FeedbackForm user={USER} />));
  afterEach(cleanup);

  describe("container element", () => {
    it("should render a helper text", () => {
      const paragraphCElement = screen.getByText(/send us your/i);
      expect(paragraphCElement).toBeInTheDocument();
    });

    it("should render a form element", () => {
      const formElement = screen.getByRole("form");
      expect(formElement).toBeInTheDocument();
    });

    describe("form element", () => {
      it("should render an anchor tag with a /settings href", () => {
        const anchorElement = screen.getByRole("link");
        expect(anchorElement).toBeInTheDocument();
        expect(anchorElement).toHaveAttribute("href", "/settings");
      });

      it("should render am image with the back image src", () => {
        const imageElement = screen.getByRole("img");
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute("src", "/buttonIcons/back.png");
      });

      it("should render a Subject label", () => {
        const subjectLabel = screen.getByText(/Subject/);
        expect(subjectLabel).toBeInTheDocument();
      });

      it("should render a Subject input field", () => {
        const subjectInput = screen.getByRole("subjectInput");
        expect(subjectInput).toBeInTheDocument();
      });

      it("should render a Message label", () => {
        const messageLabel = screen.getByText(/Message/);
        expect(messageLabel).toBeInTheDocument();
      });

      it("should render a Message input field", () => {
        const messageInput = screen.getByRole("messageInput");
        expect(messageInput).toBeInTheDocument();
      });

      it("should render a button container", () => {
        const buttonContainer = screen.getByRole("buttonContainer");
        expect(buttonContainer).toBeInTheDocument();
      });

      describe("buttonContainer", () => {
        it("should render a reset button", () => {
          const resetButton = screen.getByText(/Reset/);
          expect(resetButton).toBeInTheDocument();
        });

        describe("reset button", () => {
          it("should reset input fields upon click", () => {
            const resetButton = screen.getByText(/Reset/);
            const subjectInput = screen.getByRole("subjectInput");
            const messageInput = screen.getByRole("messageInput");

            fireEvent.change(subjectInput, { target: { value: "Subject" } });
            fireEvent.change(messageInput, { target: { value: "Message" } });
            fireEvent.click(resetButton);

            expect(subjectInput).toHaveValue("");
            expect(messageInput).toHaveValue("");
          });
        });

        it("should render a submit button", () => {
          const submitButton = screen.getByRole("submit");
          expect(submitButton).toBeInTheDocument();
        });

        describe("submit button", () => {
          it("should be disabled as a default", () => {
            const submitButton = screen.getByRole("submit");
            expect(submitButton).toBeDisabled();
          });

          it("should be enabled when both input fields are populated and change values when submitted", async () => {
            const submitButton = screen.getByRole("submit");
            const subjectInput = screen.getByRole("subjectInput");
            const messageInput = screen.getByRole("messageInput");

            fireEvent.change(subjectInput, { target: { value: "Subject" } });
            fireEvent.change(messageInput, { target: { value: "Message" } });

            expect(submitButton).toBeEnabled();

            fireEvent.click(submitButton);
            expect(submitButton).toHaveValue("Submitted!");
          });
        });
      });
    });
  });
});
