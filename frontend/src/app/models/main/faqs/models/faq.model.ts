import { IFaqResponseModel } from '../response-models';

export class FaqModel {
    public title!: string;
    public text!: string;
    public createdAt!: Date;
    public id!: number;

    constructor(model: IFaqResponseModel) {
        this.title = model.title;
        this.text = model.text;
        this.createdAt = new Date(model.createdAt);
        this.id = model.id;
    }
}
