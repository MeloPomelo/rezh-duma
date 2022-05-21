import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IPage } from '../app.component';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
    selector: 'app-registry',
    templateUrl: './registry.component.html',
    styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
    public isLinear: true = true;
    public nameFormGroup: FormGroup = new FormGroup({});
    public emailFormGroup: FormGroup = new FormGroup({});
    public passFormGroup: FormGroup = new FormGroup({});


    @Output()
    public onNamePage: EventEmitter<string> = new EventEmitter<string>();
    public namePage: IPage = { name: 'signup' };

    constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    public authService: AuthService
    ) {
    }

    public ngOnInit(): void {
        this.nameFormGroup = this._formBuilder.group({
            nameCtrl: ['', Validators.required],
        });

        this.emailFormGroup = this._formBuilder.group({
            emailCtrl: ['', [Validators.required, Validators.email]],
        });

        this.passFormGroup = this._formBuilder.group({
            passCtrl: ['', [Validators.required, Validators.minLength(6)]],
        });
    }


    // gotoAuth() {
    //   this.router.navigate(['/signin']);
    // }
}
