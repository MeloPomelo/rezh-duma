import { BaseDomainPlateViewModel } from '../../base-domains';
import { ApplicationModel } from '../data';

export class ApplicationPlateViewModel extends BaseDomainPlateViewModel {

    constructor(model: ApplicationModel) {
        super(model);
    }
}
