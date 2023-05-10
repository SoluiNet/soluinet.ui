import * as React from "react";
import { RxTextAlignLeft } from "react-icons/rx";

/**
 * The interface for the arguments of the LabeledInput.
 * 
 * @interface
 */
interface LabeledInputArguments {
    /**
     * The ID.
     * 
     * @property {string} id The ID.
     */
    id?: string;

    /**
     * The value.
     * 
     * @property {string} value The value.
     */
    value?: string;

    /**
     * The icon.
     * 
     * @property {JSX.Element} icon The icon.
     */
    icon?: JSX.Element;
}

/**
 * The interface for the state of the LabeledInput.
 * 
 * @interface
 */
interface LabeledInputState {
    /**
     * The value.
     * 
     * @property {string} value The value.
     */
    value?: string;
}

class LabeledInput extends React.Component<LabeledInputArguments, LabeledInputState> {
    id: string;
    icon: JSX.Element;

    /**
     * Create an instance of LabeledInput.
     * 
     * @class
     * @param {LabeledInputArguments} props The properties.
     * @returns {LabeledInput} A LabeledInput component instance.
     */
    constructor(props: LabeledInputArguments) {
        super(props);

        this.id = props.id ? props.id : Math.floor(Date.now() * Math.random()).toString();
        this.icon = props.icon ? props.icon : (<RxTextAlignLeft />);

        this.state = {
            value: props.value,
        };
    }

    /**
     * Render the component.
     * 
     * @returns {JSX.Element} The rendered labeled input.
     */
    render() {
        return (
            <div className="sn-labeled-input">
                <input
                    id={this.id}
                    type="text"
                    className={this.state.value ? "has-value" : ""}
                    value={
                        this.state.value ? this.state.value : ""
                    }
                    onInput={(event: React.FormEvent<HTMLInputElement>) =>
                        (event.target as HTMLInputElement).classList.toggle(
                            "has-value",
                            (event.target as HTMLInputElement).value ? true : false,
                        )
                    }
                    onChange={(event) => {
                        this.setState({ value: event.target.value });
                    }}
                />
                <span className={`${this.id}-icon`}>
                    {this.icon}
                </span>
                <label htmlFor={this.id}>Number</label>
            </div>
        );
    }
}

export default LabeledInput;