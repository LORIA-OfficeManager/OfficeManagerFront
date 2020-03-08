export interface Person {
    id: number; // id de la personne
    firstname: string; // nom de la personne
    lastname: string; // nom de famille de la personne
    dateStart?: string; // date d'arrivé
    dateEnd?: string; // date de depart
    startDateAffectation?: string; // date de debut d'affectation
    endDateAffectation?: string; // date de fin d'affectation
    startDateContract?: string; // date de debut contrat
    endDateContract?: string; // date de fin contrat
    statusName: string; // status
    teamName: string; // equipe
    officeId: number; // id bureau
    officeName: string; // nom bureau
    departmentName: string; // nom departement
}
