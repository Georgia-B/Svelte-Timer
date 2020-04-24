import { render } from '@testing-library/svelte';
import Display from "../Display.svelte";

jest.mock('../../store.js');
import { finished } from "../../store.js";

describe("Display component", () => {
    test("should render correctly", () => {
        const minutes = 10;
        const seconds = 25;
        const isVisible = true;
        const result = render(Display, {
            props: {
                minutes,
                seconds,
                isVisible
            }
        });
        const container = result.container.getElementsByClassName("container")[0];
        expect(container).toHaveClass("visible");
    });

    test("should render as not visible", () => {
        const result = render(Display, {
            props: {
                minutes: 10,
                seconds: 25,
                isVisible: false
            }
        });
        const container = result.container.getElementsByClassName("container")[0];
        expect(container).not.toHaveClass("visible");
    });

    test("should render with animation", () => {
        finished.subscribe = (fn) => {
            fn(true);
        };
        const result = render(Display, {
            props: {
                minutes: 10,
                seconds: 25,
                isVisible: true
            }
        });
        const container = result.container.getElementsByClassName("container")[0];
        expect(container).toHaveClass("animate");
    });
});