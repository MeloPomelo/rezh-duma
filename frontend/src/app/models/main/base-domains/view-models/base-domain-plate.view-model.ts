import { BaseDomainModel } from '../data';

export class BaseDomainPlateViewModel {
    public id: number;
    public title: string;
    public text: string;
    public createdAt: Date;

    constructor(model: BaseDomainModel) {
        this.id = model.id;
        this.title = model.title;
        this.text = model.text;
        this.createdAt = model.createdAt;
    }
}
