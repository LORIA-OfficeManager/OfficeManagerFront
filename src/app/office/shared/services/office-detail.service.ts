import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {OfficeDetail, OFFICESDETAIL} from '../interfaces/officeDetail';
// import {filter, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class OfficeDetailService {
  private readonly _backendURL: any;
  // liste des bureaux
  private _office: OfficeDetail[];

  constructor(private _http: HttpClient) {
    this._office = OFFICESDETAIL;
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(
        k => this._backendURL[ k ] = `${baseUrl}${environment.backend.endpoints[ k ]}`);

  }

  /**
   * renvoit la liste des bureaux
   */
  fetch(): Observable<OfficeDetail[]> {
    return of(this._office);
  }
  fetchOne(id: number): Observable<OfficeDetail> {
    return this._http.get<OfficeDetail>(this._backendURL.oneOffice.replace(':id', id));
  }

}
