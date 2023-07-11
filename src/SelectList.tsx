import React, { useEffect, useState, FC } from 'react'
import { TPlayerData, TNations, TPlayerDetail } from './model/playerData'
import { SelectPlayer } from './SelectPlayer';

interface IPlayerDataProps {
    playerData: TPlayerData;
}

// 해당 function 컴포넌트에 들어오는 값은 <any> 타입이다.
export const ViewList: FC<IPlayerDataProps> = ({ playerData }) => {
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

    return <SelectPlayer list={playerList} />
}