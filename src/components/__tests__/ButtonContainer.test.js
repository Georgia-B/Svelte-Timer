import { render } from '@testing-library/svelte';
import ButtonContainer from "../ButtonContainer.svelte";

describe("Button component", () => {
    test("should render buttons correctly when timer not started", () => {
        const result = render(ButtonContainer, {
            props: {
                started: false,
                paused: false,
                isFinished: false,
                startTimer: jest.fn(),
                pauseTimer: jest.fn(),
                clearTimer: jest.fn()
            }
        });

        const buttons = result.container.getElementsByTagName("button");
        expect(buttons.length).toBe(2);
        expect(buttons[0]).toHaveClass("button-start");
        expect(buttons[1]).toHaveClass("button-clear");
    });

    test("should render buttons correctly when timer started", () => {
        const result = render(ButtonContainer, {
            props: {
                started: true,
                paused: false,
                isFinished: false,
                startTimer: jest.fn(),
                pauseTimer: jest.fn(),
                clearTimer: jest.fn()
            }
        });

        const buttons = result.container.getElementsByTagName("button");
        expect(buttons.length).toBe(2);
        expect(buttons[0]).toHaveClass("button-pause");
        expect(buttons[1]).toHaveClass("button-clear");
    });

    test("should render buttons correctly when timer paused", () => {
        const result = render(ButtonContainer, {
            props: {
                started: false,
                paused: true,
                isFinished: false,
                startTimer: jest.fn(),
                pauseTimer: jest.fn(),
                clearTimer: jest.fn()
            }
        });

        const buttons = result.container.getElementsByTagName("button");
        expect(buttons.length).toBe(2);
        expect(buttons[0]).toHaveClass("button-start");
        expect(buttons[1]).toHaveClass("button-clear");
    });

    test("should render buttons correctly when timer finished", () => {
        const result = render(ButtonContainer, {
            props: {
                started: true,
                paused: false,
                isFinished: true,
                startTimer: jest.fn(),
                pauseTimer: jest.fn(),
                clearTimer: jest.fn()
            }
        });

        const buttons = result.container.getElementsByTagName("button");
        expect(buttons.length).toBe(1);
        expect(buttons[0]).toHaveClass("button-clear");
    });
});