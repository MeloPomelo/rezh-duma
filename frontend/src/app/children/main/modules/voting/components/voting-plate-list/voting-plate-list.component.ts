import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { VotingPlateViewModel } from '../../../../../../models';
import { VotingRequestsService } from '../../services/voting.request-service';

@Component({
    selector: 'app-voting-plate-list',
    templateUrl: './voting-plate-list.component.html',
    styleUrls: ['./styles/voting-plate-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService]
})

export class VotingPlateListComponent {

    public modelSubject$: BehaviorSubject<VotingPlateViewModel[] | null> = new BehaviorSubject<VotingPlateViewModel[] | null>(null);

    constructor(
        private _votingRequestsService: VotingRequestsService,
        private _destroyService: TuiDestroyService
    ){
        this.initModel();
    }

    public initModel(): void {
        this._votingRequestsService
            .getItems({}, this._destroyService)
            .subscribe((model: VotingPlateViewModel[]): void => {
                this.modelSubject$.next(model);
            });
    }

}
