import { BaseDomainPlateViewModel } from '../../base-domains';
import { ApplicationModel } from '../data';

export class ApplicationPlateViewModel extends BaseDomainPlateViewModel {
    public author: string;
    public location: string;
    public locationName: string;
    public files: string[];
    public isPublic: boolean;
    public status: string;
    public feedback: string;
    public rec: string;

    constructor(model: ApplicationModel) {
        super(model);
        this.author = model.author;
        this.location = model.location;
        this.locationName = model.locationName;
        this.files = model.files;
        this.isPublic = model.isPublic;
        this.status = model.status;
        this.feedback = model.feedback;
        this.rec = model.recipient;
    }
}
