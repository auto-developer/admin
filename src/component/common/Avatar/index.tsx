import React from 'react'
import style from './style.module.scss'

export interface AvatarProps {
    img: string;
    href: string;
}

function Avatar(props: AvatarProps) {
    return <a className={style.Avatar} href={props.href}>
        <img src={props.img} alt=""/>
    </a>
}

export default Avatar
