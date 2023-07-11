import React, { useEffect, useState, FC } from 'react'
import { IPlayer } from './model/playerData'

interface IPlayerProps {
    player: IPlayer;
}

export const Position: FC<IPlayerProps> = ({ player }) => {
    return (
        <li>
            <div className='thume'><img src={`./assets/images/thume/2.webp`} /></div>
            <p className='name'>토마스 뮐러</p>
        </li>
    )
}

export default Position