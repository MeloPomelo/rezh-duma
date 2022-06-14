import { map, takeUntil } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';


@Injectable()
export class FaqRequestsService {

    public readonly url: string;

    constructor(
        protected http: HttpClient
    ) {
        this.url = 'api/search';
    }

    public search(text: string): Observable<void>{
        const params: {[key: string]: string } = { title: text };

        return of();
        // return this.http.get<IListOfModels<IApplicationsResponseModel>>(this.url, { params })
        //     .pipe(
        //         map((model: IListOfModels<IApplicationsResponseModel>) => {
        //             return {
        //                 total: model.total,
        //                 count: model.count,
        //                 list: model.list.map((item: IApplicationsResponseModel) => new ApplicationModel(item))
        //             };
        //         })
        //     );
    }
}
