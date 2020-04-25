import { render } from '@testing-library/svelte';
import Display from "../Display.svelte";

jest.mock('../../store.js');
import { finished } from "../../store.js";

describe("Display component", () => {
    test("should render correctly", () => {
        const minutes = 10;
        const seconds = 25;
        const result = render(Display, {
            props: {
                minutes,
                seconds
            }
        });
        const timers = result.container.getElementsByClassName("timer");
        expect(timers.length).toBe(2);

        const minutesDisplay = timers[0].getElementsByClassName("number")[0];
        expect(minutesDisplay).toHaveTextContent(minutes);

        const secondsDisplay = timers[1].getElementsByClassName("number")[0];
        expect(secondsDisplay).toHaveTextContent(seconds);
    });

    test("should render with animation", () => {
        finished.subscribe = (fn) => {
            fn(true);
        };
        const result = render(Display, {
            props: {
                minutes: 10,
                seconds: 25,
            }
        });
        const container = result.container.getElementsByClassName("countdown")[0];
        expect(container).toHaveClass("animate");
    });
});