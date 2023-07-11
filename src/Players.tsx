import React, { useEffect, useState, FC } from 'react'
import { TPlayerData, TNations, TPlayerDetail } from './model/playerData'

interface IPlayerDataProps {
    playerData: TPlayerData;
}

interface IPlayerList extends Omit<TNations, 'name'> { }

// 해당 function 컴포넌트에 들어오는 값은 <any> 타입이다.
export const PlayerList: FC<IPlayerDataProps> = ({ playerData }) => {
    console.log('playerData.players', playerData);

    // 렌더 영역의 map 때문에 데이터가 할당되기 전에 오류를 발생하여 미리 하나 셋팅
    const [playerList, setPlayerList] = useState<TPlayerDetail[]>([{
        name: '',
        team: '',
        position: '',
        number: 0,
        thume: 0
    }]);
    useEffect(() => {
        const pList: TPlayerDetail[] = [];
        playerData.nations.map((nation: TNations) => {
            nation.list.map((item) => {
                pList.push(item);
            })
        });
        setPlayerList(pList);
    }, [playerData])

    return <Player list={playerList} />
}

export const Player: FC<IPlayerList> = ({ list }) => {
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