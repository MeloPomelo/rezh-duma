/* eslint-disable @typescript-eslint/naming-convention */
export interface IApplicationsRequestModel {
    offset: number;
    limit: number;
    title?: string;
    id?: string;
    from_created_date?: string;
    to_created_date?: string;
    author?: string;
}

