import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'officePipe',
})
export class OfficePipePipe implements PipeTransform {
  /**
   * definie la class a retourner au bureau pour representer son etat
   * @param office le bureau
   * @return la class qui definie l'etat du bureau
   */
  transform(size: number, nbP: number): string {
    if (size === nbP) {
      return 'fullOffice';
    } else {
      if (size <= nbP) {
        return 'moreThanFullOffice';
      } else {
        if ( 0 === nbP) {
          return 'emptyOffice';
        } else {
          return 'notFullOffice';
        }
      }
    }
  }
}
@Pipe({
  name: 'strangerPipe',
})
export class StrangerPipe implements PipeTransform {
  /**
   * definie la class a retourner au bureau pour representer son etat
   * @param office le bureau
   * @return la class qui definie l'etat du bureau
   */
  transform(hasStranger: boolean): string {
    return hasStranger ? 'StrangerOffice' : '';
  }
}
