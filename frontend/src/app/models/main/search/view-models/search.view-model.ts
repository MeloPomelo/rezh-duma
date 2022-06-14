import { Params } from '@angular/router';
import { FaqModel } from '../../faqs';
import { SearchModel } from '../models';



export interface ISearchViewModel {
    title: string;
    group: string;
    url: string;
    params: Params;
}

export class SearchViewModel {

    public list: ISearchViewModel[];

    constructor(model: SearchModel) {
        const faqs: ISearchViewModel[] = model.faqs.map((item: FaqModel) => ({ title: item.title, group: 'Частые вопросы', url: '/faq', params: { id: item.id } }));
        const applications: ISearchViewModel[] = model.applications.map((item: FaqModel) => ({ title: item.title, group: 'Заявки', url: `/applications/${item.id}`, params: { } }));
        const votings: ISearchViewModel[] = model.votings.map((item: FaqModel) => ({ title: item.title, group: 'Голосования', url: `/voting/${item.id}`, params: { } }));

        this.list = [...faqs, ...applications, ...votings];
    }
}
