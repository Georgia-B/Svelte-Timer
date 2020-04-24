import { render } from '@testing-library/svelte';
import Button from "../Button.svelte";

jest.mock('../../store.js');
import { finished } from "../../store.js";

describe("Button component", () => {
    test("should render start button correctly", () => {
        finished.subscribe = (fn) => {
            fn(false);
        };
        const label = "Start";
        const className = "button-start";
        const result = render(Button, {
            props: {
                label,
                className,
                onClick: () => { }
            }
        });
        const button = result.container.getElementsByTagName("button")[0];
        expect(button).toHaveClass(className);
        expect(button).toHaveTextContent(label);
        expect(button).not.toHaveClass("animate");
    });

    test("should render start button correctly with animation", () => {
        finished.subscribe = (fn) => {
            fn(true);
        };
        const label = "Start";
        const className = "button-start";
        const result = render(Button, {
            props: {
                label,
                className,
                onClick: () => { }
            }
        });
        const button = result.container.getElementsByTagName("button")[0];
        expect(button).toHaveClass(className);
        expect(button).toHaveTextContent(label);
        expect(button).toHaveClass("animate");
    });

    test("should render pause button correctly", () => {
        finished.subscribe = (fn) => {
            fn(false);
        };
        const label = "Pause";
        const className = "button-pause";
        const result = render(Button, {
            props: {
                label,
                className,
                onClick: () => { }
            }
        });
        const button = result.container.getElementsByTagName("button")[0];
        expect(button).toHaveClass(className);
        expect(button).toHaveTextContent(label);
    });
    test("should render pause button correctly", () => {
        finished.subscribe = (fn) => {
            fn(false);
        };
        const label = "Clear";
        const className = "button-clear";
        const result = render(Button, {
            props: {
                label,
                className,
                onClick: () => { }
            }
        });
        const button = result.container.getElementsByTagName("button")[0];
        expect(button).toHaveClass(className);
        expect(button).toHaveTextContent(label);
    });
});