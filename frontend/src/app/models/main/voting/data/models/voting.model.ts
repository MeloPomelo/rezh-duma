import { IVotingResponseModel } from '../response-models';
import { BaseDomainModel } from '../../../base-domains';

export class VotingModel extends BaseDomainModel {
    constructor(model: IVotingResponseModel) {
        super(model);
    }
}
