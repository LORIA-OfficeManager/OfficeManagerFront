import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment.prod';
import {Observable} from 'rxjs';
import {defaultIfEmpty, filter} from 'rxjs/operators';
import {Person} from '../interfaces/person';

@Injectable({
    providedIn: 'root',
})
export class PersonService {
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
     * renvoit la liste des personnes
     */
    fecth(): Observable<Person[]> {
        return this._http.get(this._backendURL.allPeople)
            .pipe(
                filter(_ => !!_),
                defaultIfEmpty([]),
            );
    }

    /**
     * renvoit la liste des personnes
     */
    assignement(idO: number, idP: number): Observable<any> {
        return this._http.post<Person>
        (this._backendURL.assignement.replace(':idO', idO).replace(':idP', idP), this._options());
    }


    /**
     * renvoit la liste des personnes
     */
    unassignement(idP: number): Observable<any> {
        return this._http.put
        (this._backendURL.unassignement.replace(':id', idP), '', this._options());
    }

    /**
     * Function to return request options
     */
    private _options(headerList: object = {}): any {
        return { headers: new HttpHeaders(Object.assign({ 'Content-Type': 'application/json' }, headerList)) };
    }
}
