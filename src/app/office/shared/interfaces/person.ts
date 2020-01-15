export interface Person {
    _id: number; // id de la personne
    firstname: string; // nom de la personne
    lastname: string; // nom de famille de la personne
    dateStart: string; // date d'arrivé
    dateEnd: string; // date de depart
    startDateAffectation?: string;
    endDateAffectatio?: string;
    startDateContract?: string;
    endDateContract?: string;
    status?: string;
    team?: string;
    department?: string;
}

export const OFFICESDETAIL = [
    {
        _id: 1,
        firstname: 'James',
        lastname: 'Harden',
        dateStart: '',
        dateEnd: '',
        status: 'PhD',
        team: 'ELC',
        department: 'DEV',
    },
    {
        _id: 2,
        firstname: 'Stephen',
        lastname: 'Curry',
        dateStart: '',
        dateEnd: '',
        status: 'Unk',
        team: 'ELC',
        department: 'DEV',
    },
    {
        _id: 3,
        firstname: 'Derrick',
        lastname: 'Rose',
        dateStart: '',
        dateEnd: '',
      status: 'PhD',
      team: 'ELC',
      department: 'DEV',
    },
    {
        _id: 4,
        firstname: 'Joel',
        lastname: 'Embid',
        dateStart: '',
        dateEnd: '',
        status: 'Pf',
        team: 'ELC',
        department: 'DEV',
    },
    {
        _id: 5,
        firstname: 'gauthier',
        lastname: 'Brin',
        dateStart: '',
        dateEnd: '',
        status: 'Magus',
        team: 'LD',
        department: 'EXC',
    },
    {
        _id: 6,
        firstname: 'Javale',
        lastname: 'McGee',
        dateStart: '',
        dateEnd: '',
        status: 'PhD',
        team: 'MNG',
        department: 'EXC',
    },
    {
        _id: 7,
        firstname: 'Chris',
        lastname: 'Paul',
        dateStart: '',
        dateEnd: '',
        status: 'PhD',
        team: 'MNG',
        department: 'EXC',
    },
    {
        _id: 8,
        firstname: 'Tony',
        lastname: 'Parker',
        dateStart: '',
        dateEnd: '',
        status: 'PhD',
        team: 'CSS',
        department: 'DEV',
    },
    {
        _id: 9,
        firstname: 'Brandon',
        lastname: 'Ingram',
        dateStart: '',
        dateEnd: '',
        status: 'Doyen',
        team: 'ELC',
        department: 'DEV',
    },
    {
        _id: 10,
        firstname: 'Lebron',
        lastname: 'James',
        dateStart: '',
        dateEnd: '',
        status: 'PhD',
        team: 'CSS',
        department: 'DEV',
    },
];
