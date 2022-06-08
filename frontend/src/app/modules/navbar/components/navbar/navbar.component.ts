import { Component, Input } from '@angular/core';
// import { IPage } from '../app.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../../../shared/services/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./styles/navbar.component.css'],
})
export class NavbarComponent {
    public authService: AuthService;
    @Input()
    public location: 'header' | 'footer' = 'header';

    // public isLogged: boolean = false;

    public noBackground: boolean = false;

    public homePage: any = {
        main: 'home',
        signIn: 'signin',
        signUp: 'signup',
    };

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        public authS: AuthService
    ) {
        this.authService = authS;
    }

    public gotoPage(namePage: string): void {
        this._router.navigate([`/${namePage}`]);
    }

    public isLogged(): boolean {
        return this.authService.isLoggedIn;
    }
}
