import { IApplicationsResponseModel } from '../../applications';
import { IFaqResponseModel } from '../../faqs';
import { IVotingResponseModel } from '../../voting';

export interface ISearchResponseModel {
    readonly faqs: IFaqResponseModel[],
    readonly applications: IApplicationsResponseModel[],
    readonly votings: IVotingResponseModel[],
}
