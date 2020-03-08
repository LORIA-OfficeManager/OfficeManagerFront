import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {defaultIfEmpty, filter, map} from 'rxjs/operators';
import {Department, Team} from '../interfaces/department';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
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
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[ k ] = `${baseUrl}${environment.backend.endpoints[ k ]}`);
  }

  /**
   * retourne tous les departements
   */
  fetch(): Observable<Department[]> {
    return this._http.get<Department[]>(this._backendURL.allDepartment)
        .pipe(
            filter(_ => !!_),
            defaultIfEmpty([]),
        );
  }

  /**
   * modifier le departement
   * @param d departement
   */
  update(d: Department): Observable<any> {
    return this._http.put<Department>(
        this._backendURL.oneDepartment.replace(':id', '' + d.id),
        {name: d.name},
        this._options(),
    );
  }

  /**
   * delete le departement
   * @param id
   */
  delete(id: number): Observable<number> {
    return this._http.delete(this._backendURL.oneDepartment.replace(':id', '' + id))
        .pipe(
            map( _ => id),
        );
  }

  /**
   * creer le departement
   * @param name
   */
  create(name: String): Observable<any> {
    return this._http.post(
        this._backendURL.allDepartment,
        {name: name},
        this._options(),
    );
  }

  /**
   * creer une equipe
   * @param name
   * @param id
   */
  createTeams(name: String, id: number): Observable<any> {
    return this._http.post(
        this._backendURL.createTeam.replace(':id', '' + id),
        {name: name},
        this._options(),
    );
  }

  /**
   * delete une teams
   * @param id
   * @param idT
   */
  deleteTeams(id: number, idT: number): Observable<number> {
    return this._http.delete(this._backendURL.deleteTeam.replace(':id', '' + id)
        .replace(':idT', '' + idT))
        .pipe(
            map( _ => id),
        );
  }

  /**
   * modifie une team
   * @param id
   * @param idT
   * @param data
   */
  updateTeam(id: number, idT: number, data: string): Observable<any> {
    return this._http.put<Team>(
        this._backendURL.updateTeam.replace(':id', '' + id)
            .replace(':idT', '' + idT),
        {name: data},
        this._options(),
    );
  }

  /**
   * header
   * @param headerList
   * @private
   */
  private _options(headerList: object = {}): any {
    return { headers: new HttpHeaders(Object.assign({ 'Content-Type': 'application/json' }, headerList)) };
  }


}
