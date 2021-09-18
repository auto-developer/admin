import React from 'react'
import style from './style.module.scss'

export interface ButtonProps {
    label: string;
    disabled: boolean;
}

function Button(props: ButtonProps) {
    return <button className={style.Button}>{props.label}</button>
}

export default Button
