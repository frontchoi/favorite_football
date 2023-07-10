export type TInfo = {
    category: string;
    active: string;
}

export type TPlayerList = {
    name: string;
    team: string;
    position: string;
    number: number;
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