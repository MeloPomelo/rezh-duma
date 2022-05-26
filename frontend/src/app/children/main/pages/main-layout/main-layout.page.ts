import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
// import { IPage } from '../app.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    templateUrl: './main-layout.page.html',
    styleUrls: ['./styles/main-layout.page.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutPage {
    // public namePage: IPage = { name: 'home' };
    public value: string = '';
    public applicationsPath: string = 'home/applications';
    public votingsPath: string = 'home/votings';
    constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {
    }

    public gotoPage(namePage: string): void {
        this._router.navigate([`/applications`], { relativeTo: this._activatedRoute });
    }
}
