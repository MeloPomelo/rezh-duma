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


    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute
    ) {}

    public gotoPage(id: number): void {
        this._router.navigate([`/applications/${id}`], {
            relativeTo: this._activatedRoute,
        });
    }
}
