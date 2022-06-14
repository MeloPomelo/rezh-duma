import { FaqModel } from '../../faqs';
import { SearchModel } from '../models';

export interface ISearchViewModel {
    title: string;
    group: string;
    url: string;
}

export class SearchViewModel {

    public list: ISearchViewModel[];

    constructor(model: SearchModel) {
        const faqs: ISearchViewModel[] = model.faqs.map((item: FaqModel) => ({ title: item.title, group: 'Частые вопросы', url: `/faq/${item.id}` }));
        const applications: ISearchViewModel[] = model.applications.map((item: FaqModel) => ({ title: item.title, group: 'Заявки', url: `/applications/${item.id}` }));
        const votings: ISearchViewModel[] = model.votings.map((item: FaqModel) => ({ title: item.title, group: 'Голосования', url: `/voting/${item.id}` }));

        this.list = [...faqs, ...applications, ...votings];
    }
}
