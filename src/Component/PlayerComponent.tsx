import React, { useContext, FC } from 'react'
import { TNations } from '../type/playerData'
import { AppContext } from "../App";
interface IPlayerList extends Omit<TNations, 'name'> { }

export const ViewPlayer: FC<IPlayerList> = ({ list }) => {
    const { positionNum } = useContext(AppContext);
    const nationCheck = (nation: string): number => {
        let num = 0;
        switch (nation) {
            case '독일': num = 0
                break
            case '프랑스': num = 1
                break
            case '잉글랜드': num = 2
                break
            case '포르투갈': num = 3
                break
            case '이탈리아': num = 4
                break
            case '스페인': num = 5
                break
            case '네덜란드': num = 6
                break
            case '벨기에': num = 7
                break
            case '노르웨이': num = 8
                break
            case '스웨덴': num = 9
                break
            case '크로아티아': num = 10
                break
            case '브라질': num = 11
                break
            case '아르헨티나': num = 12
                break
            case '우루과이': num = 13
                break
            case '대한민국': num = 14
                break
        }
        return num;
    }
    const positionCheck = (position: string): string => {
        if (positionNum < 3 && position !== "FW") return 'hidden';
        else if (positionNum >= 3 && positionNum < 6 && position !== "MF") return 'hidden';
        else if (positionNum >= 6 && positionNum < 10 && position !== "DF") return 'hidden';
        else if (positionNum === 10 && position !== "GK") return 'hidden'
        else return ''
    }
    return <ul className="player_list">
        {list.map((item: any, idx: number) => {
            const { name, team, position, number, thume, legend, nation } = item;
            return <li key={`p_${idx}`} className={`nation${nationCheck(nation)} ${positionCheck(position)}`}>
                <div className={legend ? 'thume legend' : 'thume'}>{legend ? <img src={`./assets/images/thume/${thume}.png`} /> : <img src={`./assets/images/thume/${thume}.webp`} />}</div>
                <dl>
                    <dt>{name}</dt>
                    {nation ? <dd>국적 : {nation}</dd> : undefined}
                    {legend ? <dd className='legend'>레전드</dd> : undefined}
                    <dd>소속팀 : {team}</dd>
                    <dd>포지션 : {position}</dd>
                    <dd>등번호 : {number}</dd>
                </dl>
            </li>
        })}
    </ul>
}

export const SetPosition: FC = () => {
    // const { name, number, thume, legend, idx, select } = player;
    const { player, setPoistion } = useContext(AppContext);

    return (
        <ul className='position'>
            {player.map((item, idx) => {
                return <li className={`player${idx}`} key={idx} onClick={() => {
                    setPoistion(idx);
                }}>
                    {item.select ?
                        <>
                            <div className='thume'>
                                {item.legend ? <img src={`./assets/images/thume/${item.thume}.png`} /> : <img src={`./assets/images/thume/${item.thume}.webp`} />}
                            </div>
                            <p className='name'>토마스 뮐러 {idx}</p>
                        </> : undefined}
                </li>
            })}
        </ul>
    )
}

export default SetPosition