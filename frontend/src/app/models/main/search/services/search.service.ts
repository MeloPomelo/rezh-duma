import { map, switchMap, distinctUntilChanged, shareReplay, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { ISearchResponseModel } from '../response-models/search.response-model';
import { SearchModel } from '../models/search.model';
import { FaqModel, IFaqResponseModel } from '../../faqs';
import { ApplicationModel, IApplicationsResponseModel } from '../../applications';
import { IVotingResponseModel, VotingModel } from '../../voting';

@Injectable()
export class SearchRequestsService {

    public readonly url: string;
    private _query$: BehaviorSubject<string> = new BehaviorSubject<string>('');

    constructor(
        protected http: HttpClient
    ) {
        this.url = 'api/search';
    }

    public search(text: string): Observable<SearchModel | null>{
        const str: string = text.trim();

        return this.http.get<ISearchResponseModel>(this.url, { params: { title: str ?? '', timit: 3 } })
            .pipe(
                map((model: ISearchResponseModel | null) => {
                    if(!model){
                        return null;
                    }

                    const faqs: FaqModel[] = model.faqs.map((item: IFaqResponseModel) => new FaqModel(item));
                    const applications: ApplicationModel[] = model.applications.map((item: IApplicationsResponseModel) => new ApplicationModel(item));
                    const votings: VotingModel[] = model.votings.map((item: IVotingResponseModel) => new VotingModel(item));

                    return new SearchModel(faqs, applications, votings);
                }),

            );
    }
}
