import './Form.css';
import { useCallback, useState } from 'react';
import { ENTITY_NBSP } from '../../utils/constants';

export function CustomCheck({ checked, onChange }) {
    const [isChecked, setIsChecked] = useState(checked || false);
    const handleChange = useCallback(() => {
        setIsChecked(!isChecked);
        onChange(!isChecked);
    }, [isChecked, onChange]);

    return (
        <label className='custom-checkbox'>
            <input
                type='checkbox'
                checked={isChecked}
                onChange={handleChange}
            />
            <span className='checkmark'></span>
        </label>
    );
}

export function FormInput({
    title,
    type,
    inputId,
    inputName,
    placeholder,
    inputDisabled,
    inputValue,
    validator,
    onChange,
    onKeyUp,
    initialMessage,//TODO: need to find a better way to do this
}) {
    const [message, setMessage] = useState(initialMessage || ENTITY_NBSP);
    const [warning, setWarning] = useState(false);

    const inputClass = useCallback(() => {
        let className = 'input-container';
        if (inputDisabled) {
            className += ` disabled`;
        }
        if (warning) {
            className += ` warning`;
        }
        return className;
    }, [inputDisabled, warning]);

    const messageClass = useCallback(() => {
        let className = 'samplead-caption input-message';
        if (warning) {
            className += ` warning`;
        }
        return className;
    }, [warning]);

    const handleChange = useCallback(
        (event) => {
            const value = event.target.value;
            let isValid = true;
            if (value && validator) {
                isValid = validator.validatorFn(value);
                if (isValid) {
                    setMessage(ENTITY_NBSP);
                    setWarning(false);
                } else {
                    setMessage(validator.errorMessage);
                    setWarning(true);
                }
            }
            if (onChange) {
                onChange(value, isValid);
            }
        },
        [onChange, validator]
    );

    return (
        <div className='input-form-group'>
            {title && (
                <label
                    className='samplead-caption'
                    htmlFor={inputId || inputName}
                >
                    {title}
                </label>
            )}
            <div className={inputClass()}>
                <input
                    type={type}
                    className='samplead-body'
                    name={inputName}
                    id={inputId} //passing undefined for a prop is the same as not including it at all
                    placeholder={placeholder}
                    disabled={inputDisabled}
                    onChange={handleChange}
                    value={inputValue}
                    onKeyUp={onKeyUp}
                />
            </div>
            <div className={messageClass()}>{message}</div>
        </div>
    );
}

function Form({ children }) {
    return <form>{children}</form>;
}

export default Form;
