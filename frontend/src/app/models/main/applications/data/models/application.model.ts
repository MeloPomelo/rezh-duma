import { Title } from '@angular/platform-browser';
import { IApplicationsResponseModel } from '../response-models';
import { BaseDomainModel } from '../../../base-domains';

export class ApplicationModel extends BaseDomainModel {
    public author: string;
    public location: string;
    public locationName: string;
    public files: string[];
    public isPublic: boolean;
    public status: string;
    public feedback: string;
    public recipient: string;

    constructor(model: IApplicationsResponseModel) {
        super(model);
        this.author = model.author;
        this.location = model.location;
        this.locationName = model.location_name;
        this.files = model.files;
        this.isPublic = model.is_public;
        this.createdAt = new Date(model.created_at);
        this.status = model.status;
        this.feedback = model.feedback;
        this.recipient = model.recipient;
    }

}
