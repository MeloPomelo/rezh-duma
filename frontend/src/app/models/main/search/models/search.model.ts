import { ApplicationModel } from '../../applications';
import { FaqModel } from '../../faqs';
import { VotingModel } from '../../voting';

export class SearchModel {
    public faqs!: FaqModel[];
    public applications!: ApplicationModel[];
    public votings!: VotingModel[];

    constructor(faqs: FaqModel[], applications: ApplicationModel[], votings: VotingModel[]) {
        this.faqs = faqs;
        this.applications = applications;
        this.votings = votings;
    }
}
