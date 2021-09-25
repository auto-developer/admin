import React, {ReactElement} from 'react'
import SVG from './Wedges-3s-200px.svg'
import style from './style.module.scss'

export interface LoadingProps {
    show: boolean
}

function Loading(props: LoadingProps): ReactElement<LoadingProps> {
    return <div className={style.Loading} style={{display: props.show ? '' : 'none'}}>
        <img src={SVG} alt=""/>
    </div>
}

export default Loading
