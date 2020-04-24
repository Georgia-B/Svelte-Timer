import { render, fireEvent } from '@testing-library/svelte';
import Form from "../Form.svelte";

describe("Form component", () => {
    test("should render correctly", () => {
        const minutes = 10;
        const seconds = 25;
        const isVisible = true;
        const onEnter = jest.fn();
        const allowOnEnter = true;
        const result = render(Form, {
            props: {
                minutes,
                seconds,
                isVisible,
                onEnter,
                allowOnEnter
            }
        });
        const form = result.container.getElementsByTagName("form")[0];
        expect(form).not.toHaveClass("invisible");
        const inputs = form.getElementsByTagName("input");
        expect(inputs[0]).toHaveValue(minutes);
        expect(inputs[1]).toHaveValue(seconds);
    });

    test("should render as not visible", () => {
        const minutes = 10;
        const seconds = 25;
        const isVisible = false;
        const onEnter = jest.fn();
        const allowOnEnter = true;
        const result = render(Form, {
            props: {
                minutes,
                seconds,
                isVisible,
                onEnter,
                allowOnEnter
            }
        });
        const form = result.container.getElementsByTagName("form")[0];
        expect(form).toHaveClass("invisible");
    });

    test("should fire onEnter function", () => {
        const minutes = 10;
        const seconds = 25;
        const isVisible = true;
        const onEnter = jest.fn();
        const allowOnEnter = true;
        const result = render(Form, {
            props: {
                minutes,
                seconds,
                isVisible,
                onEnter,
                allowOnEnter
            }
        });
        const form = result.container.getElementsByTagName("form")[0];
        fireEvent.keyDown(form, { key: 'Enter', keyCode: 13 })
        expect(onEnter).toHaveBeenCalledTimes(1);
    });

    test("should not fire onEnter function", () => {
        const minutes = 10;
        const seconds = 25;
        const isVisible = true;
        const onEnter = jest.fn();
        const allowOnEnter = false;
        const result = render(Form, {
            props: {
                minutes,
                seconds,
                isVisible,
                onEnter,
                allowOnEnter
            }
        });
        const form = result.container.getElementsByTagName("form")[0];
        fireEvent.keyDown(form, { key: 'Enter', keyCode: 13 })
        expect(onEnter).not.toBeCalled();
    });
});