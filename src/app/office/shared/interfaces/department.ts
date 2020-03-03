export interface Department {
    id: number;
    name: string;
    teams: Team[];
}

export interface Team {
    id: number;
    name: string;
}
