import { Injectable, Injector} from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {NbAuthService, NbAuthToken} from '@nebular/auth';

@Injectable({providedIn: 'root'})
export class JWTInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // do not intercept request whose urls are filtered by the injected filter
        if (!this.filter(req)) {
            return this.authService.isAuthenticatedOrRefresh()
                .pipe(
                    switchMap(authenticated => {
                        if (authenticated) {
                            return this.authService.getToken().pipe(
                                switchMap((token: NbAuthToken) => {
                                    const JWT = `Bearer ${token.getValue()}`;
                                    req = req.clone({
                                        setHeaders: {
                                            Authorization: JWT,
                                            // 'Access-Control-Allow-Origin': 'http://localhost:4200',
                                            // 'Access-Control-Allow-Credentials': 'true',
                                            // // 'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
                                            // // 'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept',
                                        },
                                    });
                                    return next.handle(req);
                                }),
                            );
                        } else {
                            return next.handle(req);
                        }
                    }),
                );
        } else {
            return next.handle(req);
        }
    }

    protected get authService(): NbAuthService {
        return this.injector.get(NbAuthService);
    }


    private filter(req: HttpRequest<any>): boolean {
        return false;
    }
}
