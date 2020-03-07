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
  // regroupe tous les url
  private readonly _backendURL: any;

  /**
   * constructor
   * @param _http
   */
  constructor(private _http: HttpClient) {
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
   * retounr le detail d'un bureau
   * @param id
   */
  fetchOne(id: number): Observable<OfficeDetail> {
    return this._http.get<OfficeDetail>(this._backendURL.oneOffice.replace(':id', id));
  }

}
