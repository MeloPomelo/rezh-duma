export interface IListOfModels<Model> {
    readonly count: number;
    readonly total: number;
    readonly list: Model[];
}
