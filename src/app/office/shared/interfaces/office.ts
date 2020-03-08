export interface Office {
    id: number; // id du bureau
    size: number; // nb de place du bureau
    floor: number; // l'etage ou se situe le bureau
    num: number; // le numero du bureau
    building: string; // le batiment ou se situe le bureau
    occupation: number; // nombre de personne dans le bureau
    hasStranger: boolean; // indique s'il y a un intru
}
