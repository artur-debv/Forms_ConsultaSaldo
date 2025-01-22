import { render } from "@testing-library/react";

describe("login", () => {
    it("should render login form", () => {
        const { getByTestId } = render(<Login />)
        expect(getByTestId("login-form")).toBeInTheDocument()
    }
})


