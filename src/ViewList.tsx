import React, { useEffect, useState, useContext, FC } from 'react'
import { TPlayerData, TNations, TPlayerDetail } from './type/playerData'
import { ViewPlayer } from './Component/PlayerComponent';
import { AppContext } from "./App";

interface IPlayerDataProps {
    listData: TPlayerData;
}

// 해당 function 컴포넌트에 들어오는 값은 <...> 타입이다.
export const ViewList: FC<IPlayerDataProps> = ({ listData }) => {
    const [playerList, setPlayerList] = useState<TPlayerDetail[] | null>(null);
    const { positionNum } = useContext(AppContext);

    const suffle = (list: TPlayerDetail[]) => {
        setPlayerList(list.sort(() => Math.random() - 0.5)); // 배열 셔플
    }

    useEffect(() => {
        const pList: TPlayerDetail[] = [];
        listData.nations.map((nation: TNations) => {
            nation.list.map((item, idx) => {
                item.nation = nation.name;
                item.nationCode = idx;
                pList.push(item);
            })
        });
        suffle(pList);
    }, [listData])
    useEffect(() => {
        if (playerList) suffle(playerList);
    }, [positionNum])
    return playerList ? <>
        <p className='total_list'>총 인원: {playerList.length} 명</p>
        <ViewPlayer list={playerList} /></> : <></>;
}