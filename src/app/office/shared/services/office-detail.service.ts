import { Injectable } from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {OfficeDetail, OFFICESDETAIL} from '../interfaces/officeDetail';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OfficeDetailService {
  // liste des bureaux
  private _office: OfficeDetail[];

  constructor() {
    this._office = OFFICESDETAIL;
  }

  /**
   * renvoit la liste des bureaux
   */
  fecth(): Observable<OfficeDetail[]> {
    return of(this._office);
  }
  fectOne(id: number): Observable<OfficeDetail> {
    return from(this._office).pipe(
        filter( (_: OfficeDetail) => _._id === id ),
        map((__: OfficeDetail) => __),
    );
  }

}
