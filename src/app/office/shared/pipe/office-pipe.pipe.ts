import { Pipe, PipeTransform } from '@angular/core';
import {Office} from '../interfaces/office';
import {Person} from '../interfaces/person';

@Pipe({
  name: 'officePipe',
})
export class OfficePipePipe implements PipeTransform {
  /**
   * definie la class a retourner au bureau pour representer son etat
   * @return la class qui definie l'etat du bureau
   * @param size
   * @param nbP
   */
  transform(size: number, nbP: number): string {
    if (size.toFixed(2) === nbP.toFixed(2)) {
      return 'fullOffice';
    } else {
      if (size.toFixed(2) <= nbP.toFixed(2)) {
        return 'moreThanFullOffice';
      } else {
        if ( (0).toFixed(2) === nbP.toFixed(2)) {
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
   * @return la class qui definie l'etat du bureau
   * @param hasStranger
   */
  transform(hasStranger: boolean): string {
    return hasStranger ? 'StrangerOffice' : '';
  }
}
@Pipe({
  name: 'zombiePipe',
})
export class ZombiePipe implements PipeTransform {
  /**
   * definie la class a retourner au bureau pour representer son etat
   * @return la class qui definie l'etat du bureau
   * @param person
   */
  transform(person: any): string {
    const now = Date.now();
    return ( person.endDateContract < now || person.startDateContract > now ) ? 'Stranger' : '';
  }
}
@Pipe({
  name: 'BuildingFloorPipe',
})
export class BuildingFloorPipe implements PipeTransform {
  /**
   * definie la class a retourner au bureau pour representer son etat
   * @return la class qui definie l'etat du bureau
   * @param o
   * @param floor
   * @param building
   */
  transform(o: Office[], floor: number, building: string): Office[] {
    const res = o.filter( (_: Office) =>
        ((_.floor === +floor) && ( _.building === building)) ||
        ((+floor === -1) && ( _.building === building)) ||
        ((+floor === -1) && ( 'none' === building)) ||
        ((_.floor === +floor) && ( 'none' === building)));
    return res;
  }
}

@Pipe({
  name: 'StateOfficePipe',
})
export class StateOfficePipe implements PipeTransform {
  /**
   * @param _officePipe
   * @param _strangerPipe
   */
  constructor (private _officePipe: OfficePipePipe,
               private _strangerPipe: StrangerPipe ) {}
  /**
   * definie la class a retourner au bureau pour representer son etat
   * @return la class qui definie l'etat du bureau
   * @param o
   * @param state
   */
  transform(o: Office[], state: string): Office[] {
    return o.filter( (_: Office) =>
        this._officePipe.transform(_.size , _.occupation) === state
        || this._strangerPipe.transform(_.hasStranger) === state || state === 'none');
  }
}

@Pipe({
  name: 'AutoCompletePipe',
})
export class AutoCompletePipe implements PipeTransform {
  /**
   * @param o
   */
  constructor ()  {}
  /**
   * definie la class a retourner au bureau pour representer son etat
   * @return la class qui definie l'etat du bureau
   * @param o
   * @param search
   */
  transform(o: Office[], search: string): Office[] {
    return o.filter( (_: Office) =>
        this.name(_).toLowerCase().indexOf(search) === 0 );
  }
  /**
   * retourne le nom du bureau
   * @param office
   */
  name(office: Office): string {
    return  office.building + '' + office.floor + '' + office.num ;
  }
}
@Pipe({
  name: 'SearchByNPipe',
})
export class SearchByNPipe implements PipeTransform {
  /**
   * @param o
   */
  constructor() {
  }

  /**
   * definie la class a retourner au bureau pour representer son etat
   * @return la class qui definie l'etat du bureau
   * @param oName
   * @param search
   */
  transform(oName: string, search: string): string {
    return oName.toLowerCase().indexOf(search) === 0 ? 'officeHover' : 'hide';
  }

  /**
   * retourne le nom du bureau
   * @param office
   */
}
@Pipe({
  name: 'StatusPipe',
})
export class StatusPipe implements PipeTransform {
  /**
   * @param _zombieP
   */
  constructor(private _zombieP: ZombiePipe) {
  }

  /**
   * definie la class a retourner au bureau pour representer son etat
   * @return la class qui definie l'etat du bureau
   * @param p
   */
  transform(p: Person): string {
    const res = p.statusName;
      if (res === 'Défaut') {
        return 'fa-chalkboard-teacher';
      } else {
        if (res ===  'Doctorant') {
          return 'fa-book-reader';
        } else {
          return '';
        }
      }
  }

  /**
   * retourne le nom du bureau
   * @param office
   */
}


@Pipe({
  name: 'AutoCompletePipeP',
})
export class AutoCompletePipeP implements PipeTransform {
  constructor() {
  }

  /**
   * definie la class a retourner au bureau pour representer son etat
   * @return la class qui definie l'etat du bureau
   * @param obj
   * @param search
   */
  transform(obj: any[], search: string): Person[] {
    return obj.filter((_: any) =>
        _.lastname.toLowerCase().indexOf(search) === 0);
  }
}
