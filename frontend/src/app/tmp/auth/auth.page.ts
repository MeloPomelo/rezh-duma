import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
// import { IPage } from '../app.component';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

interface IPage {
    name: string;
}

@Component({
    selector: 'app-auth',
    templateUrl: './auth.page.html',
    styleUrls: ['./auth.page.css'],
})
export class AuthPage implements OnInit {
    @Output()
    public onNamePage: EventEmitter<string> = new EventEmitter<string>();

    public loginFormControl: FormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);
    public passFormControl: FormControl = new FormControl('', [
        Validators.required,
    ]);
    public namePage: IPage = { name: 'signin' };

    constructor(
        public authService: AuthService,
        private _router: Router,
    ) {}

    public ngOnInit(): void {}

    public gotoRegistry(): void {
        this._router.navigate(['/registry']);
    }
}
