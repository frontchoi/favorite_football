// 1. 플레이어 데이터 객체
export type TPlayerData = {
    name: string;
    info: TInfo;
    nations: TNations[];
}

// 2. 플레이어 데이터 객체의 info
export type TInfo = {
    category: string;
    active: string;
}

// 2. 플레이어 데이터 객체의 players
export type TNations = {
    name: string;
    list: TPlayerDetail[]
}

// 3. 플레이어 데이터 객체의 players 의 list
export type TPlayerDetail = {
    name: string;
    team: string;
    position: string;
    number: number;
    thume: number;
    legend?: boolean;
}