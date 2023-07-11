import React, { useState, useEffect, FC, createContext } from 'react';
import { ViewList } from './SelectList';
import { TPlayerData, IPlayer } from './model/playerData';
import { DataPlayer } from './data/playerData'
import Position from './Position';

const App: FC = () => {
    // <...> = 제네릭 타입 = useState 의 타입을 정해준다.0
    const [playerData, setPlayerData] = useState<TPlayerData>();
    const [player, setPlayer] = useState<IPlayer[]>();

    useEffect(() => {
        const player: IPlayer = { name: '', number: 0, thume: 0 };
        const arr: IPlayer[] = new Array(11).fill(player);
        setPlayer(arr);
    }, []);

    useEffect(() => {
        if (!DataPlayer) return;
        setPlayerData(DataPlayer);
    }, [DataPlayer]);

    const changeTeam = () => {

    }
    return (
        <div className="App">
            {playerData && player ?
                <>
                    <div className='formation'>
                        <ul className='position'>
                            {
                                player.map((item, idx) => {
                                    return <Position key={`p${idx}`} player={item} />
                                })
                            }
                        </ul>
                        <div className='field'></div>
                    </div>
                    <ViewList playerData={playerData} />
                </> : undefined}
        </div>
    );
}

export default App;
