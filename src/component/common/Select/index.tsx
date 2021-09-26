import React, {ReactElement} from 'react'
import style from './style.module.scss'

export interface SelectProps {
    value: string;
    label: string;
    disabled?: boolean;
    options: string[];
    onChange: (value: any) => void;
}

function Select({label, value, disabled, options, onChange}: SelectProps): ReactElement<SelectProps> {
    return <label className={style.Select}>
        <span>{label}</span>
        <select value={value} disabled={disabled} onChange={e => onChange(e.target.value)}>
            {options.map(option => <option key={option}>{option}</option>)}
        </select>
    </label>
}

export default Select
