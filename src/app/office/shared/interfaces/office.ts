export interface Office {
    id: number; // id du bureau
    size: number; // nb de place du bureau
    floor: number; // l'etage ou se situe le bureau
    num: number; // le numero du bureau
    building: string; // le batiment ou se situe le bureau
    occupation: number; // nombre de personne dans le bureau
    hasStrangers: boolean; // indique s'il y a un intru
}

export const OFFICES = [
    {  id : 1, size: 2, floor: 1, num: 2, building: 'A', occupation: 0, hasStrangers: false},
    {  id : 2, size: 3, floor: 1, num: 25, building: 'A', occupation: 2, hasStrangers: false},
    {  id : 3, size: 4, floor: 2, num: 12, building: 'A', occupation: 4, hasStrangers: false},
    {  id : 4, size: 3, floor: 2, num: 2, building: 'A', occupation: 2, hasStrangers: true},
    { id : 5, size: 2, floor: 2, num: 13, building: 'A', occupation: 3, hasStrangers: false},
    {  id : 6, size: 2, floor: 3, num: 11, building: 'A', occupation: 1, hasStrangers: false},
    {  id : 7, size: 3, floor: 1, num: 12, building: 'B', occupation: 1, hasStrangers: false},
    {  id : 8, size: 2, floor: 1, num: 2, building: 'B', occupation: 2, hasStrangers: false},
    {  id : 9, size: 4, floor: 2, num: 6, building: 'B', occupation: 2, hasStrangers: true},
    {  id : 10, size: 3, floor: 2, num: 8, building: 'B', occupation: 3, hasStrangers: false},
    {  id : 11, size: 3, floor: 2, num: 12, building: 'B', occupation: 1, hasStrangers: false},
    {  id : 12, size: 2, floor: 3, num: 2, building: 'B', occupation: 2, hasStrangers: false},
    {  id : 13, size: 4, floor: 3, num: 6, building: 'B', occupation: 3, hasStrangers: false},
    {  id : 14, size: 3, floor: 3, num: 8, building: 'B', occupation: 2, hasStrangers: false},
    {  id : 15, size: 2, floor: 1, num: 2, building: 'C', occupation: 2, hasStrangers: false},
    {  id : 16, size: 4, floor: 2, num: 6, building: 'C', occupation: 4, hasStrangers: false},
    {  id : 17, size: 3, floor: 2, num: 8, building: 'C', occupation: 5, hasStrangers: true},
    {  id : 18, size: 3, floor: 2, num: 12, building: 'C', occupation: 3, hasStrangers: false},
    {  id : 19, size: 2, floor: 3, num: 2, building: 'C', occupation: 4, hasStrangers: false},
    {  id : 20, size: 4, floor: 3, num: 6, building: 'C', occupation: 3, hasStrangers: false},
    {  id : 21, size: 3, floor: 3, num: 8, building: 'C', occupation: 2, hasStrangers: false},
    {  id : 22, size: 2, floor: 1, num: 3, building: 'A', occupation: 0, hasStrangers: false},
    {  id : 23, size: 3, floor: 1, num: 34, building: 'A', occupation: 1, hasStrangers: false},
    {  id : 24, size: 5, floor: 2, num: 70, building: 'A', occupation: 2, hasStrangers: false},
    {  id : 25, size: 1, floor: 2, num: 3, building: 'A', occupation: 0, hasStrangers: false},
    {  id : 26, size: 2, floor: 2, num: 14, building: 'A', occupation: 2, hasStrangers: false},
    {  id : 27, size: 2, floor: 3, num: 45, building: 'A', occupation: 0, hasStrangers: false},
    {  id : 28, size: 3, floor: 1, num: 52, building: 'B', occupation: 2, hasStrangers: false},
    {  id : 29, size: 2, floor: 1, num: 8, building: 'B', occupation: 4, hasStrangers: false},
    {  id : 30, size: 4, floor: 2, num: 4, building: 'B', occupation: 3, hasStrangers: false},
    {  id : 31, size: 3, floor: 2, num: 44, building: 'B', occupation: 0, hasStrangers: false},
    {  id : 32, size: 3, floor: 2, num: 42, building: 'B', occupation: 5, hasStrangers: false},
    {  id : 33, size: 2, floor: 3, num: 24, building: 'B', occupation: 0, hasStrangers: false},
    {  id : 34, size: 4, floor: 3, num: 64, building: 'B', occupation: 4, hasStrangers: false},
    {  id : 35, size: 3, floor: 3, num: 84, building: 'B', occupation: 0, hasStrangers: true},
    {  id : 36, size: 2, floor: 1, num: 26, building: 'C', occupation: 3, hasStrangers: false},
    {  id : 37, size: 4, floor: 2, num: 36, building: 'C', occupation: 0, hasStrangers: false},
    {  id : 38, size: 3, floor: 2, num: 33, building: 'C', occupation: 2, hasStrangers: false},
    {  id : 39, size: 3, floor: 2, num: 13, building: 'C', occupation: 2, hasStrangers: false},
    {  id : 40, size: 2, floor: 3, num: 25, building: 'C', occupation: 0, hasStrangers: false},
    {  id : 41, size: 4, floor: 3, num: 27, building: 'C', occupation: 2, hasStrangers: true},
    {  id : 42, size: 3, floor: 3, num: 38, building: 'C', occupation: 0, hasStrangers: false},
];
