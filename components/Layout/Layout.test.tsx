import { render } from "../../test-utils";
import { Layout } from "./Layout";

describe("Layout test case", () => {
    const child = (
        <>
            <h1>Main Article Area</h1>
            <p>
                    In this layout, we display the areas in source order for any screen less
                that 500 pixels wide. We go to a two column layout, and then to a three
                column layout by redefining the grid, and the placement of items on the
                grid.
            </p>
        </>
    )

    it("Render Check", () => {
        const { asFragment } = render(<Layout isDark onThemeToggle={() => undefined}>{child}</Layout>);

        expect(asFragment()).toMatchSnapshot();
    })
})
