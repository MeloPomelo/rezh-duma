import { IBaseDomainResponseModel } from '../response-models';

export class BaseDomainModel {
    public id: string;
    public title: string;
    public text: string;
    public createdAt: Date;

    constructor(model: IBaseDomainResponseModel){
        this.id = model.id;
        this.title = model.title;
        this.text = model.text;
        this.createdAt = new Date(model.createdAt);
    }

}
