import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {defaultIfEmpty, filter, map} from 'rxjs/operators';
import {Department} from '../interfaces/department';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {

  private readonly _backendURL: any;

  constructor(
      private _http: HttpClient,
  ) {
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[ k ] = `${baseUrl}${environment.backend.endpoints[ k ]}`);
  }

  fetch(): Observable<Department[]> {
    return this._http.get<Department[]>(this._backendURL.allDepartment)
        .pipe(
            filter(_ => !!_),
            defaultIfEmpty([]),
        );
  }

  update(d: Department): Observable<any> {
    return this._http.put<Department>(
        this._backendURL.oneDepartment.replace(':id', '' + d.id),
        {name: d.name},
        this._options(),
    );
  }

  delete(id: number): Observable<number> {
    return this._http.delete(this._backendURL.oneDepartment.replace(':id', '' + id))
        .pipe(
            map( _ => id),
        );
  }

  create(name: String): Observable<any> {
    return this._http.post(
        this._backendURL.allDepartment,
        {name: name},
        this._options(),
    );
  }

  private _options(headerList: object = {}): any {
    return { headers: new HttpHeaders(Object.assign({ 'Content-Type': 'application/json' }, headerList)) };
  }


}
