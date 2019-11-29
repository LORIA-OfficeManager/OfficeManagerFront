export interface Office {
    _id: number; // id du bureau
    size: number; // nb de place du bureau
    floor: number; // l'etage ou se situe le bureau
    num: number; // le numero du bureau
    building: string; // le batiment ou se situe le bureau
    description: string; // description du bureau
    personAssign: any[]; // les personnes assigné au bureau
}

export const OFFICES = [
    {  _id : 1, size: 2, floor: 1, num: 2, building: 'A', description: 'Retro', personAssign: [{
        name: 'Bernard',
        },
        {
          name: 'Pierre',
        },
        ]},
    {  _id : 2, size: 3, floor: 1, num: 25, building: 'A', description: '', personAssign: [{
            name: 'Frederic',
        },
        ]},
    {  _id : 3, size: 5, floor: 2, num: 12, building: 'A', description: '', personAssign: [{
            name: 'Fleur',
        },
        ]},
    {  _id : 4, size: 3, floor: 2, num: 2, building: 'A', description: 'Retro', personAssign: [
            {
                name: 'Arthur',
            },
            {
                name: 'Gauthier',
            },
            {
                name: 'Lucas',
            },
        ]},
    {  _id : 5, size: 2, floor: 2, num: 13, building: 'A', description: 'Retro', personAssign: [
            {
                name: 'Quentin',
            },
            {
                name: 'Pierre',
            },
            {
                name: 'Noah',
            },
        ]},
    {  _id : 6, size: 2, floor: 3, num: 11, building: 'A', description: 'Retro', personAssign: [
            {
                name: 'Arthur',
            },
            {
                name: 'Lucas',
            },
        ]},
    {  _id : 7, size: 3, floor: 1, num: 12, building: 'B', description: 'Retro', personAssign: [
            {
                name: 'Arthur',
            },
            {
                name: 'Gauthier',
            },
            {
                name: 'Lucas',
            },
            {
                name: 'Clément',
            },
            {
                name: 'Flavie',
            },
        ]},
    {  _id : 8, size: 2, floor: 1, num: 2, building: 'B', description: 'Retro', personAssign: []},
    {  _id : 9, size: 4, floor: 2, num: 6, building: 'B', description: 'Retro', personAssign: []},
    {  _id : 10, size: 3, floor: 2, num: 8, building: 'B', description: 'Retro', personAssign: []},
    {  _id : 11, size: 3, floor: 2, num: 12, building: 'B', description: 'Retro', personAssign: []},
    {  _id : 12, size: 2, floor: 3, num: 2, building: 'B', description: 'Retro', personAssign: []},
    {  _id : 13, size: 4, floor: 3, num: 6, building: 'B', description: 'Retro', personAssign: []},
    {  _id : 14, size: 3, floor: 3, num: 8, building: 'B', description: 'Retro', personAssign: []},
    {  _id : 15, size: 2, floor: 1, num: 2, building: 'C', description: 'Retro', personAssign: []},
    {  _id : 16, size: 4, floor: 2, num: 6, building: 'C', description: 'Retro', personAssign: []},
    {  _id : 17, size: 3, floor: 2, num: 8, building: 'C', description: 'Retro', personAssign: []},
    {  _id : 18, size: 3, floor: 2, num: 12, building: 'C', description: 'Retro', personAssign: []},
    {  _id : 19, size: 2, floor: 3, num: 2, building: 'C', description: 'Retro', personAssign: []},
    {  _id : 20, size: 4, floor: 3, num: 6, building: 'C', description: 'Retro', personAssign: []},
    {  _id : 21, size: 3, floor: 3, num: 8, building: 'C', description: 'Retro', personAssign: []},
    {  _id : 22, size: 2, floor: 1, num: 3, building: 'A', description: 'Retro', personAssign: [
            {
                name: 'Arthur',
            },
            {
                name: 'Gauthier',
            },
            {
                name: 'Lucas',
            },
        ]},
    {  _id : 23, size: 3, floor: 1, num: 34, building: 'A', description: 'Retro', personAssign: []},
    {  _id : 24, size: 5, floor: 2, num: 70, building: 'A', description: 'Retro', personAssign: []},
    {  _id : 25, size: 1, floor: 2, num: 3, building: 'A', description: 'Retro', personAssign: []},
    {  _id : 26, size: 2, floor: 2, num: 14, building: 'A', description: 'Retro', personAssign: []},
    {  _id : 27, size: 2, floor: 3, num: 45, building: 'A', description: 'Retro', personAssign: []},
    {  _id : 28, size: 3, floor: 1, num: 52, building: 'B', description: 'Retro', personAssign: []},
    {  _id : 29, size: 2, floor: 1, num: 8, building: 'B', description: 'Retro', personAssign: []},
    {  _id : 30, size: 4, floor: 2, num: 4, building: 'B', description: 'Retro', personAssign: []},
    {  _id : 31, size: 3, floor: 2, num: 44, building: 'B', description: 'Retro', personAssign: []},
    {  _id : 32, size: 3, floor: 2, num: 42, building: 'B', description: 'Retro', personAssign: []},
    {  _id : 33, size: 2, floor: 3, num: 24, building: 'B', description: 'Retro', personAssign: []},
    {  _id : 34, size: 4, floor: 3, num: 64, building: 'B', description: 'Retro', personAssign: []},
    {  _id : 35, size: 3, floor: 3, num: 84, building: 'B', description: 'Retro', personAssign: []},
    {  _id : 36, size: 2, floor: 1, num: 26, building: 'C', description: 'Retro', personAssign: []},
    {  _id : 37, size: 4, floor: 2, num: 36, building: 'C', description: 'Retro', personAssign: []},
    {  _id : 38, size: 3, floor: 2, num: 33, building: 'C', description: 'Retro', personAssign: []},
    {  _id : 39, size: 3, floor: 2, num: 13, building: 'C', description: 'Retro', personAssign: []},
    {  _id : 40, size: 2, floor: 3, num: 25, building: 'C', description: 'Retro', personAssign: []},
    {  _id : 41, size: 4, floor: 3, num: 27, building: 'C', description: 'Retro', personAssign: []},
    {  _id : 42, size: 3, floor: 3, num: 38, building: 'C', description: 'Retro', personAssign: []},
];
