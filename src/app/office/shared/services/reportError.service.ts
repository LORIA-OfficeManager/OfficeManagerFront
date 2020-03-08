import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ReportErrorService {
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
     * envoi un mail au admin pour signaler une erreur dans les donnees ou la vue
     * @param message
     */
    reportError(message: String): Observable<any> {
        return this._http.post(
            this._backendURL.reportError,
            {message: message},
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
