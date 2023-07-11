import React, { useState, useEffect, FC, createContext } from 'react';
import { ViewList } from './ViewList';
import { TPlayerData, IPlayer } from './Type/playerData';
import { DataPlayer } from './data/playerData'
import SetPosition from './Component/PlayerComponent'

type TSetPoistion = (num: number) => void;
type TAppState = { player: IPlayer[]; positionNum: number; setPoistion: TSetPoistion; }

// 전역에 해당 객체가 들어올 것이라고 등록
export const AppContext = createContext<TAppState>({
    player: [],
    positionNum: 0,
    setPoistion: () => { }
});
const App: FC = () => {
    // <...> = 제네릭 타입 = useState 의 타입을 정해준다.
    const [listData, setPlayerData] = useState<TPlayerData>();
    const [player, setPlayer] = useState<IPlayer[]>();
    const [positionNum, setPositionNum] = useState<number>(0);
    const [selView, setSelView] = useState<string>('');

    useEffect(() => {
        const player: IPlayer = { name: '', number: 0, thume: 0, idx: 0, select: false };
        const arr: IPlayer[] = new Array(11).fill(player);
        setPlayer(arr);
    }, []);

    useEffect(() => {
        if (!DataPlayer) return;
        setPlayerData(DataPlayer);
    }, [DataPlayer]);

    useEffect(() => {
        let text = '전체';
        if (positionNum < 3) text = '공격수만'
        else if (positionNum >= 3 && positionNum < 6) text = '미드필더만'
        else if (positionNum >= 6 && positionNum < 10) text = '수비수만'
        else if (positionNum === 10) text = '골키퍼만'

        setSelView(text);
    }, [positionNum])

    const setPoistion: TSetPoistion = (num: number) => {
        setPositionNum(num);
    }
    return (
        <div className="App">
            {listData && player ?
                <>
                    <ul className={`txt_view view${positionNum}`}>
                        <li onClick={() => {
                            setPositionNum(() => positionNum + 15);
                        }}>전체보기</li>
                        <li>현재는 {selView} 보기</li>
                    </ul>
                    <AppContext.Provider value={{ player, positionNum, setPoistion }}>
                        <div className={`formation ${'fm_433'}`}>
                            <SetPosition />
                            <div className='field'></div>
                        </div>
                        <ViewList listData={listData} />
                    </AppContext.Provider>
                </> : undefined}
        </div>
    );
}

export default App;
