import React, {ReactElement} from 'react'
import style from './style.module.scss'

export interface InputProps {
    type?: string;
    value: string;
    label: string;
    disabled?: boolean;
}

function Input({label, value, disabled, type = 'text'}: InputProps): ReactElement<InputProps> {
    return <label className={style.Input}>
        <span>{label}</span>
        <input className={style.Input} disabled={disabled} type={type} value={value}/>
    </label>
}

export default Input
