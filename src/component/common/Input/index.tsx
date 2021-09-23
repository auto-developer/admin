import React from 'react'
import style from './style.module.scss'

export interface InputProps {
    type: string;
    name: boolean;
}

function Input(props: InputProps) {
    return <input className={style.Input} />
}

export default Input
