import { render, fireEvent } from '@testing-library/svelte';
import Form from "../Form.svelte";

jest.mock('../../store.js');
import { secondInput, minuteInput } from "../../store.js";

describe("Form component", () => {
    test("should render correctly", () => {
        const minutes = 10;
        const seconds = 25;
        secondInput.subscribe = (fn) => {
            fn(seconds);
        };
        minuteInput.subscribe = (fn) => {
            fn(minutes);
        };

        const onEnter = jest.fn();
        const allowOnEnter = true;
        const result = render(Form, {
            props: {
                onEnter,
                allowOnEnter
            }
        });
        const form = result.container.getElementsByTagName("form")[0];
        const inputs = form.getElementsByTagName("input");
        expect(inputs[0]).toHaveValue(minutes);
        expect(inputs[1]).toHaveValue(seconds);
    });

    test("should fire onEnter function", () => {
        const onEnter = jest.fn();
        const allowOnEnter = true;
        const result = render(Form, {
            props: {
                onEnter,
                allowOnEnter
            }
        });
        const form = result.container.getElementsByTagName("form")[0];
        fireEvent.keyDown(form, { key: 'Enter', keyCode: 13 })
        expect(onEnter).toHaveBeenCalledTimes(1);
    });

    test("should not fire onEnter function", () => {
        const onEnter = jest.fn();
        const allowOnEnter = false;
        const result = render(Form, {
            props: {
                onEnter,
                allowOnEnter
            }
        });
        const form = result.container.getElementsByTagName("form")[0];
        fireEvent.keyDown(form, { key: 'Enter', keyCode: 13 })
        expect(onEnter).not.toBeCalled();
    });
});