import { BaseDomainModel } from '../data';

export class BaseDomainPlateViewModel {
    public title: string;
    public text: string;
    public createdAt: Date;

    constructor(model: BaseDomainModel) {
        this.title = model.title;
        this.text = model.text;
        this.createdAt = model.createdAt;
    }
}
