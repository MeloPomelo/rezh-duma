import { BaseDomainPlateViewModel } from '../../base-domains';
import { VotingModel } from '../data';

export class VotingPlateViewModel extends BaseDomainPlateViewModel {
    constructor(model: VotingModel) {
        super(model);
    }
}
