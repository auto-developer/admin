import React from 'react'
import style from './style.module.scss'

export interface AvatarProps {
    avatar: string;
}

function Avatar(props: AvatarProps) {
    return <div className={style.Avatar}>
        <img src={props.avatar} alt=""/>
    </div>
}

export default Avatar
