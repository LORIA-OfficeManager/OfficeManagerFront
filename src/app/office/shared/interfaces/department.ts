export interface Department {
    id: number; // id
    name: string; // nom
    teams: Team[]; // equipes
}

export interface Team {
    id: number; // id
    name: string; // nom
}
