import { Component, Input } from '@angular/core';
import { ApplicationPlateViewModel } from '../../../../../../models';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-application-plate',
    templateUrl: './application-plate.component.html',
    styleUrls: ['./styles/application-plate.component.css'],
})
export class ApplicationPlateComponent {
    @Input()
    public model!: ApplicationPlateViewModel;

    public applicationDetailPage: string = 'detail';

    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute
    ) {}

    public gotoPage(namePage: string): void {
        this._router.navigate([`/applications/${namePage}`], {
            relativeTo: this._activatedRoute,
        });
    }
}
