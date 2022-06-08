import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { ApplicationModel } from '../../../../../models';
import { ApplicationsRequestModel } from '../../../../../models';
import { IApplicationsResponseModel } from '../../../../../models';


@Injectable()
export class ApplicationsRequestsService {

    public readonly url: string;
    private _item: ApplicationModel;

    constructor(
        protected http: HttpClient
    ) {
        this.url = '';
        this._item = { title: 'Дороги', text: new Array(50).join('Hello '), createdAt: new Date(), id: '1' };

    }

    public getItems(data: ApplicationsRequestModel, unsubscriber: Subject<void>): Observable<ApplicationModel[]>{
        const models: ApplicationModel[] = Array.from({ length: 6 }).map((s: any) => Object.assign({}, this._item));

        return of(models);
    }

    public getItemById(id: string, unsubscriber: Subject<void>): Observable<ApplicationModel>{
        return of(Object.assign({}, this._item));
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
