import React, {ReactElement} from 'react'
import style from './style.module.scss'

export interface RadioProps {
    value: string;
    label: string;
    disabled?: boolean;
    options: string[];
    onChange: (value: any) => void;
}

function Radio({label, value, disabled, options, onChange}: RadioProps): ReactElement<RadioProps> {
    return <label className={style.Radio}>
        <span>{label}</span>
        <section>
            {options.map(option => <label key={option}>
                <input disabled={disabled} readOnly type="radio" value={option} checked={option === value}
                       onChange={e => onChange(e.target.value)}/>
                <span>{option}</span>
            </label>)}
        </section>
    </label>
}

export default Radio
