import React, { useState } from 'react';
import './App.css';
import { Players } from './Players';
import { TPlayerData } from './model/playerData';

let playerData: TPlayerData;

const App: React.FC = () => {

    const [player, setPlayer] = useState<TPlayerData>(playerData);
    // <...> = 제네릭 타입
    const changeTeam = () => {

    }

    return (
        <div className="App">
            <Players playerData={playerData} />
        </div>
    );
}

export default App;
