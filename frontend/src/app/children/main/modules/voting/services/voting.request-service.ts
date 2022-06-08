import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { VotingModel } from '../../../../../models';
import { VotingRequestModel } from '../../../../../models';
import { IVotingResponseModel } from '../../../../../models';


@Injectable()
export class VotingRequestsService {

    public readonly url: string;
    private _item: VotingModel;

    constructor(
        protected http: HttpClient
    ) {
        this.url = '';
        this._item = { title: 'Дороги', text: new Array(50).join('Hello '), createdAt: new Date(), id: '1' };

    }

    public getItems(data: VotingRequestModel, unsubscriber: Subject<void>): Observable<VotingModel[]>{
        const models: VotingModel[] = Array.from({ length: 6 }).map((s: any) => Object.assign({}, this._item));

        return of(models);
    }

    public getItemById(id: string, unsubscriber: Subject<void>): Observable<VotingModel>{
        return of(Object.assign({}, this._item));
    }

    public createItem(unsubscriber: Subject<void>): Observable<VotingModel>{
        return of();
    }

    public deleteItem(id: string, unsubscriber: Subject<void>): Observable<void>{
        return of();
    }

    public changeItem(item: IVotingResponseModel, unsubscriber: Subject<void>): Observable<VotingModel>{
        return of();
    }

}
