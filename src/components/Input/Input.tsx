import React, { ChangeEvent, useEffect } from 'react';
import "./style.css";
import { emailRegex } from '@/constants/regex';

interface InputProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ value, onChange }) => {
    const [error, setError] = React.useState(false);
    const validationOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
        const containerInput = document.querySelector('.input-container');
        if (e.target.value.length > 0 && !emailRegex.test(e.target.value)) {
            e.target.classList.add('error');
            containerInput?.classList.add('error');
            setError(true);
        } 

        if (e.target.value.length > 0 && emailRegex.test(e.target.value)) {
            e.target.classList.add('success');
            containerInput?.classList.add('success');
            setError(false);
        }
    };

    useEffect(() => {
        const input = document.querySelector('.input');
        const containerInput = document.querySelector('.input-container');
        input?.addEventListener('focus', () => {
            input.classList.remove('error');
            input.classList.remove('success');
            containerInput?.classList.remove('error');
            containerInput?.classList.remove('success');
            setError(false);
        });
    }, []);

    return (
        <div className='relative w-full input-container flex flex-col justify-start items-start gap-2'>
            <input className='input body1' type="text" placeholder='Email address' value={value} onChange={onChange} onBlur={(e) => validationOnBlur(e)}/>
            {error ? <p className='caption2 error-desc'>Your email has an incorrect format. The '@' is missing.</p> : null}
        </div>
    );
};

export default Input;