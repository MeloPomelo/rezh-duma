import { IApplicationsResponseModel } from '../response-models';
import { BaseDomainModel } from '../../../base-domains';

export class ApplicationModel extends BaseDomainModel {

    constructor(model: IApplicationsResponseModel) {
        super(model);
    }

}
