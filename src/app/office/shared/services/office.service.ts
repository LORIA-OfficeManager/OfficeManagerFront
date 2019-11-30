import { Injectable } from '@angular/core';
import {Office, OFFICES} from '../interfaces/office';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OfficeService {
  // liste des bureaux
  private _office: Office[];

  constructor() {
    this._office = OFFICES;
  }

  /**
   * renvoit la liste des bureaux
   */
  fecth(): Observable<Office[]> {
    return of(this._office);
  }
}
