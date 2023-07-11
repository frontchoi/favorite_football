import React, { FC } from 'react'
import { TNations } from './model/playerData'
interface IPlayerList extends Omit<TNations, 'name'> { }

export const SelectPlayer: FC<IPlayerList> = ({ list }) => {
    return <ul className="player_list">
        {list.map((item: any, idx: number) => {
            const { name, team, position, number, thume, legend } = item;
            return <li key={`p_${idx}`}>
                <div className={legend ? 'thume legend' : 'thume'}>{legend ? <img src={`./assets/images/thume/${thume}.png`} /> : <img src={`./assets/images/thume/${thume}.webp`} />}</div>
                <dl>
                    <dt>{name}</dt>
                    <dd>소속팀 : {team}</dd>
                    <dd>포지션 : {position}</dd>
                    <dd>등번호 : {number}</dd>
                </dl>
            </li>
        })}
    </ul>
}