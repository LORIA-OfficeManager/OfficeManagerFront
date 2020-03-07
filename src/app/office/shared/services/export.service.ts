import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment.prod';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';


@Injectable({
    providedIn: 'root',
})
export class ExportService {
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
        Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);

    }

    /**
     * export les donnees
     */
    export(): Observable<any> {
       return this._http.get(this._backendURL.exportAssignment);
    }
}
