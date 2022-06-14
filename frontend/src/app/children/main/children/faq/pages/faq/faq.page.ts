import { IListOfModels } from './../../../../../../models/main/base-domains/data/response-models/list-of-domains.response-model';
import { FaqModel } from './../../../../../../models/main/faqs/models/faq.model';
import { FaqsRequestsService } from './../../../../modules/faq/services/faq.request-service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    templateUrl: './faq.page.html',
    styleUrls: ['./styles/faq.page.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService]
})
export class FaqPage implements OnInit {

    public faqSubj$: BehaviorSubject<FaqModel[] | null> = new BehaviorSubject<FaqModel[] | null>(null);

    public selectedFaqSubj$: BehaviorSubject<number> = new BehaviorSubject<number>(-1);

    constructor(
        private _faqsRequestsService: FaqsRequestsService,
        private _destroyService: TuiDestroyService,
        private _route: ActivatedRoute)
    {

    }
    public ngOnInit(): void {
        this._route.queryParams
            .pipe(
                map((p: Params) => Number.parseInt(p['id']) || -1)
            ).subscribe((id: number) => {
                this.selectedFaqSubj$.next(id);
            });
        this.search('');
    }



    public search(value: string): void {
        this._faqsRequestsService.getItems({
            title: value,
            offset: 0,
            limit: 100
        }, this._destroyService).subscribe((model: IListOfModels<FaqModel>) => {
            this.faqSubj$.next(model.list);
        });
    }
}
