import { Pipe, PipeTransform } from '@angular/core';
import {Office} from '../interfaces/office';

@Pipe({
  name: 'officePipe',
})
export class OfficePipePipe implements PipeTransform {
  /**
   * definie la class a retourner au bureau pour representer son etat
   * @param office le bureau
   * @return la class qui definie l'etat du bureau
   */
  transform(office: Office): string {
    if (office.size === office.personAssign.length) {
      return 'fullOffice';
    } else {
      if (office.size <= office.personAssign.length) {
        return 'moreThanFullOffice';
      } else {
        if ( 0 === office.personAssign.length) {
          return 'emptyOffice';
        } else {
          return 'notFullOffice';
        }
      }
    }
  }

}
