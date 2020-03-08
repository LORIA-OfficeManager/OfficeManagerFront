import {Person} from './person';
import {Office} from './office';

export interface OfficeDetail {
    office: Office; // bureau
    description: string; // description du bureau
    persons: Person[]; // les personnes assigné au bureau
}

