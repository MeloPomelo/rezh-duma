import { Component, Input } from '@angular/core';
// import { IPage } from '../app.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./styles/sidebar.component.css'],
})
export class SidebarComponent {
    // public authService: AuthService;
    @Input()
    public location: 'header' | 'footer' = 'header';

    public isLogged: boolean = false;

    public noBackground: boolean = false;

    public homePage: any = {
        main: 'home',
        signIn: 'signin',
        signUp: 'signup',
    };
    public applicationPage: string = 'applications';
    public votingPage: string = 'voting';
    public createPage: string = 'applications/create';
    public faqPage: string = 'applications/faq';
    constructor(
        private _route: ActivatedRoute,
        private _router: Router // public authS: AuthService
    ) {
        // this.authService = authS;
    }

    public gotoPage(namePage: string): void {
        this._router.navigate([`/${namePage}`]);
    }

    // public isLogged(): boolean {
    //     return this.authService.isLoggedIn;
    // }
}
