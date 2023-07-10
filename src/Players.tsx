import React from 'react'
import { TPlayerData } from './model/playerData'

interface OwnProps {
    playerData: TPlayerData
}

export const Players: React.FC<OwnProps> = ({ playerData }) => {
    return (
        <div>
            <img src="./assets/images/thume/1.webp" style={{ width: '100px', height: '100px' }} />
        </div>
    )
}
