import {Person} from './person';
import {Office} from './office';

export interface OfficeDetail {
    office: Office;
    description: string; // description du bureau
    persons: Person[]; // les personnes assigné au bureau
}
export const OFFICESDETAIL = [];
