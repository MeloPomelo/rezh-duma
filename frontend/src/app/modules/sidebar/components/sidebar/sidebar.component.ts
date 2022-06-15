import { BehaviorSubject } from 'rxjs';
import {
    Component,
    Input,
    OnInit,
    ChangeDetectionStrategy,
    AfterViewInit,
} from '@angular/core';
// import { IPage } from '../app.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../../../shared/services/auth.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./styles/sidebar.component.css'],
})
export class SidebarComponent implements AfterViewInit {
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
    public createApplicationPage: string = 'applications/create';
    public faqPage: string = 'faq';
    public userProfile: string = 'user-profile';
    public analyticsPage: string = 'analytics';
    public createVoting: string ='voting/create';

    public userTypeSubj$: BehaviorSubject<string> = new BehaviorSubject<string>('Guest');

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        public authService: AuthService
    ) {
        // this.authService = authS;
    }

    public gotoPage(namePage: string): void {
        this._router.navigate([`/${namePage}`]);
    }

    public userSignOut(): Promise<void> {
        return this.authService.signOut();
    }

    // public get typeUser(): any {

    //     return this.authService.getUserType();
    // }

    public ngAfterViewInit(): void {

        this.authService.getUserType().subscribe((snap: any) => {
            this.userTypeSubj$.next(snap.type);
            console.log(this.userTypeSubj$.next(snap.type));
        });

    }

    // public ngDoCheck(): void {
    //     this.authService.getUserType().subscribe((snap: any) => {
    //         const data: any = snap.data();
    //         this.typeUser = data.type;
    //     });
    // }
}
