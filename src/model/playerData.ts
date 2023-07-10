export type TInfo = {
    category: string;
    active: string;
}

export type TPlayerList = {
    name: string;
    team: string;
    position: string;
    number: number;
    thume: number;
    legend?: boolean;
}

export type TPlayers = {
    nation: string;
    list: TPlayerList[]
}

export type TPlayerData = {
    name: string;
    info: TInfo;
    players: TPlayers[];
}