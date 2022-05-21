import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { ApplicationPlateViewModel } from '../../../../../../models';
import { ApplicationsRequestsService } from '../../services/applications.request-service';

@Component({
    selector: 'app-application-plate-list',
    templateUrl: './application-plate-list.component.html',
    styleUrls: ['./styles/application-plate-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService]
})
export class ApplicationPlateListComponent {

    public modelSubject$: BehaviorSubject<ApplicationPlateViewModel[] | null> = new BehaviorSubject<ApplicationPlateViewModel[] | null>(null);

    constructor(
        private _applicationsRequestsService: ApplicationsRequestsService,
        private _destroyService: TuiDestroyService
    ){
        this.initModel();
    }

    public initModel(): void {
        this._applicationsRequestsService.getItems({}, this._destroyService)
            .subscribe((model: ApplicationPlateViewModel[]): void => {
                this.modelSubject$.next(model);
            });
    }

}
