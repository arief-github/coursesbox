import { render } from "../../../test-utils";
import { Feedback } from "./Feedback";

describe("Feedback test cases", () => {
    it("Render check for valid", () => {
        const { asFragment } = render(<Feedback isValid>Looks Good!</Feedback>);

        expect(asFragment()).toMatchSnapshot();
    });

    it("Render Check for invalid", () => {
        const { asFragment } = render(<Feedback>Please provide a valid value</Feedback>);

        expect(asFragment()).toMatchSnapshot();
    });
});


