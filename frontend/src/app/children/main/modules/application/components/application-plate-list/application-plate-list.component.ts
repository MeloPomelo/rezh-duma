import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { ApplicationModel, ApplicationPlateViewModel, IListOfModels } from '../../../../../../models';
import { ApplicationsRequestsService } from '../../services/applications.request-service';

@Component({
    selector: 'app-application-plate-list',
    templateUrl: './application-plate-list.component.html',
    styleUrls: ['./styles/application-plate-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService]
})
export class ApplicationPlateListComponent {

    public readonly count: number = 1;
    public modelSubject$: BehaviorSubject<ApplicationPlateViewModel[] | null> = new BehaviorSubject<ApplicationPlateViewModel[] | null>(null);
    public hasMore: boolean = false;

    constructor(
        private _applicationsRequestsService: ApplicationsRequestsService,
        private _destroyService: TuiDestroyService
    ){
        this.initModel();
    }

    public initModel(): void {
        this.loadData(0, this.count)
            .subscribe((models: ApplicationPlateViewModel[]) => {
                this.modelSubject$.next(models);
            });
    }

    public loadMore(): void {
        const items: ApplicationPlateViewModel[] = this.modelSubject$.getValue() ?? [];
        this.loadData(items.length, this.count)
            .subscribe((models: ApplicationPlateViewModel[]) => {
                this.modelSubject$.next(items.concat(models));
            });
    }

    private loadData(offset: number, limit: number): Observable<ApplicationPlateViewModel[]> {
        return this._applicationsRequestsService.getItems({
            offset,
            limit
        }, this._destroyService)
            .pipe(
                map((model: IListOfModels<ApplicationModel>) => {
                    this.hasMore = model.count + (this.modelSubject$.getValue() ?? []).length < model.total;

                    return model.list.map((item: ApplicationModel) => new ApplicationPlateViewModel(item));
                })
            );
    }

}
