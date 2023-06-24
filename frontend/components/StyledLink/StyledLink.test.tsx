import { render } from '../../test-utils';
import { StyledLink } from './StyledLink';

describe("StyledLink test cases", () => {
    it("StyledLink render check", () => {
        const { asFragment } = render(
            <StyledLink href='/hands-on-react-js'>
                Hands On React. Build advanced React JS Frontend with Expert
            </StyledLink>
        );

        expect(asFragment()).toMatchSnapshot();
    })
});