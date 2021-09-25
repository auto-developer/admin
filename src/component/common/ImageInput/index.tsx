import React, {ReactElement} from 'react'
import style from './style.module.scss'

export interface ImageInputProps {
    value: string;
    label: string;
    disabled?: boolean;
    onChange: (value: string) => void
}

function ImageInput({label, value, disabled, onChange}: ImageInputProps): ReactElement<ImageInputProps> {
    return <label className={style.Input}>
        <span>{label}</span>
        <input className={style.Input}
               disabled={disabled}
               type="file"
               value={value}
               onChange={event => onChange(event.target.value)}
        />
    </label>
}

export default ImageInput
