import { FaqModel } from './../../../../../models/main/faqs/models/faq.model';
import { IFaqResponseModel } from './../../../../../models/main/faqs/response-models/faqs.response-model';
import { map, takeUntil } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { ApplicationModel, IListOfModels } from '../../../../../models';
import { IApplicationsRequestModel } from '../../../../../models';
import { IApplicationsResponseModel } from '../../../../../models';


@Injectable()
export class FaqsRequestsService {

    public readonly url: string;

    constructor(
        protected http: HttpClient
    ) {
        this.url = 'api/faqs';
    }

    public getItems(data: IApplicationsRequestModel, unsubscriber: Subject<void>): Observable<IListOfModels<FaqModel>>{
        const params: {[key: string]: string } = Object.fromEntries(Object.entries(data).map(([key, value]: [string, any]) => [key, value.toString()]));

        return this.http.get<IListOfModels<IFaqResponseModel>>(this.url, { params })
            .pipe(
                map((model: IListOfModels<IFaqResponseModel>) => {
                    return {
                        total: model.total,
                        count: model.count,
                        list: model.list.map((item: IFaqResponseModel) => new FaqModel(item))
                    };
                }),
                takeUntil(unsubscriber)
            );
    }

    public createItem(unsubscriber: Subject<void>): Observable<ApplicationModel>{
        return of();
    }

    public deleteItem(id: string, unsubscriber: Subject<void>): Observable<void>{
        return of();
    }

    public changeItem(item: IApplicationsResponseModel, unsubscriber: Subject<void>): Observable<ApplicationModel>{
        return of();
    }

}
