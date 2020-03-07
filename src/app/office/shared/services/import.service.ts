import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment.prod';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ImportService {
    // regroupe tous les url
    private readonly _backendURL: any;

    /**
     * constructor
     * @param _http
     */
    constructor(private _http: HttpClient) {
        // this._office = OFFICES;
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
     * import les donnees
     * @param importData
     */
    import(importData: any): Observable<any> {
        const formData = new FormData();
        formData.append('file', importData.file[0]);
        formData.append('wipe', importData.wipe);
        return 'affectation' === importData.import ? this._http.post( this._backendURL.importPerson, formData) :
            this._http.post( this._backendURL.importOffice, formData);
    }
}
