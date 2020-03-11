import { Component, OnInit } from '@angular/core';
import {NbAuthService, NbAuthSimpleToken} from '@nebular/auth';
import {Router} from '@angular/router';

@Component({
    selector: 'ngx-test',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    // user
    private _puser;

    /**
     * constructor
     * @param _authService
     * @param _router
     */
    constructor(private _authService: NbAuthService, private _router: Router) {
        this._authService.onTokenChange()
            .subscribe((token: NbAuthSimpleToken) => {

                if (token.isValid()) {
                    this._puser = token.getValue();
                    this._router.navigateByUrl('/officeManager/Office');
                }

            });
    }

    ngOnInit(): void {
    }

    /**
     * log l'utilisateur
     */
    login() {
        this._router.navigateByUrl('/officeManager/auth');
    }

    /*******************************************************GET&SETTER*************************************************/
    /////// user
    get user() {
        return this._puser;
    }
}
