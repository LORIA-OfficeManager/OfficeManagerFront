export interface Person {
    _id: number; // id de la personne
    firstname: string; // nom de la personne
    lastname: string; // nom de famille de la personne
    dateStart?: string; // date d'arrivé
    dateEnd?: string; // date de depart
    startDateAffectation?: string;
    endDateAffectation?: string;
    startDateContract?: string;
    endDateContract?: string;
    statusName: string;
    teamName: string;
    officeName: string;
    departmentName: string;
}
