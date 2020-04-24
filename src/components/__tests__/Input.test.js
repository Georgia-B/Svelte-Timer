import { render, fireEvent } from '@testing-library/svelte';
import Input from "../Input.svelte";

describe("Input component", () => {
    test("should limit input length correctly", () => {
        const label = "Seconds";
        const id = "seconds";
        const value = 11;
        const result = render(Input, {
            props: {
                label,
                id,
                value
            }
        });
        const inputContainer = result.container.getElementsByClassName("input-container")[0];
        expect(inputContainer).toHaveTextContent(label);
        const input = inputContainer.firstChild;
        expect(input).toHaveValue(value);

        fireEvent.input(input, { target: { value: 234 } })
        expect(input).toHaveValue(23);
    });

    test("should not allow string input", () => {
        const label = "Seconds";
        const id = "seconds";
        const value = 11;
        const result = render(Input, {
            props: {
                label,
                id,
                value
            }
        });
        const input = result.container.getElementsByTagName("input")[0];
        expect(input).toHaveValue(value);

        fireEvent.input(input, { target: { value: "hi" } })
        expect(input).toHaveValue(null);
    });
});