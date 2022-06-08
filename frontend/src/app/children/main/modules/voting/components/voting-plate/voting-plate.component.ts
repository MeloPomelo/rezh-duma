import { Component, Input } from '@angular/core';
import { VotingPlateViewModel } from '../../../../../../models';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
    selector: 'app-voting-plate',
    templateUrl: './voting-plate.component.html',
    styleUrls: ['./styles/voting-plate.component.css'],
})
export class VotingPlateComponent {
    @Input()
    public model!: VotingPlateViewModel;
    public detailPage: string = 'detail';
    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute
    ) {}

    public gotoPage(namePage: string): void {
        this._router.navigate([`/voting/${namePage}`], {
            relativeTo: this._activatedRoute,
        });
    }
}
