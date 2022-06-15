import { map, takeUntil } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { ApplicationModel, IListOfModels } from '../../../../../models';
import { IApplicationsRequestModel } from '../../../../../models';
import { IApplicationsResponseModel } from '../../../../../models';


@Injectable()
export class ApplicationsRequestsService {

    public readonly url: string;

    constructor(
        protected http: HttpClient
    ) {
        this.url = 'api/applications';
    }

    public getItems(data: IApplicationsRequestModel, unsubscriber: Subject<void>): Observable<IListOfModels<ApplicationModel>>{
        const params: {[key: string]: string } = Object.fromEntries(Object.entries(data).map(([key, value]: [string, any]) => [key, value.toString()]));

        return this.http.get<IListOfModels<IApplicationsResponseModel>>(this.url, { params })
            .pipe(
                map((model: IListOfModels<IApplicationsResponseModel>) => {
                    return {
                        total: model.total,
                        count: model.count,
                        list: model.list.map((item: IApplicationsResponseModel) => new ApplicationModel(item))
                    };
                }),
                takeUntil(unsubscriber)
            );
    }

    public getItemById(id: string, unsubscriber: Subject<void>): Observable<ApplicationModel | null>{
        return this.http.get<IListOfModels<IApplicationsResponseModel>>(this.url, { params: { id } })
            .pipe(
                map((model: IListOfModels<IApplicationsResponseModel>) => {
                    if (model.list.length === 0) {
                        return null;
                    }

                    return new ApplicationModel(model.list[0]);
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

    public dowloadFile(name: string): void {
        const url: string = 'https://avatars.mds.yandex.net/get-ynews/1980447/6f48a870d2cb7ca80f674efd3e433970/992x496';
        this.http.get(url, { responseType: 'blob' as 'json' }
        ).subscribe(
            (response: any) =>{
                let dataType = response.type;
                let binaryData = [];
                binaryData.push(response);
                let downloadLink = document.createElement('a');
                downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
                if (name)
                    downloadLink.setAttribute('download', name);
                document.body.appendChild(downloadLink);
                downloadLink.click();
            }
        );
    }
}
