import React, { useState, useEffect, FC } from 'react';
import { PlayerList } from './Players';
import { TPlayerData } from './model/playerData';
import { DPlayerData } from './data/playerData'

let playerData: TPlayerData;

const App: FC = () => {
    // <...> = 제네릭 타입 = useState 의 타입을 정해준다.
    const [playerData, setPlayerData] = useState<TPlayerData>();

    useEffect(() => {
        if (!DPlayerData) return;
        setPlayerData(DPlayerData);
    }, [DPlayerData]);

    const changeTeam = () => {

    }

    return (
        <div className="App">
            {playerData ? <PlayerList playerData={playerData} /> : undefined}
        </div>
    );
}

export default App;
