/* eslint-disable @typescript-eslint/naming-convention */
import { IBaseDomainResponseModel } from '../../../base-domains';

export interface IApplicationsResponseModel extends IBaseDomainResponseModel {
    readonly author: string;
    readonly location: string;
    readonly location_name: string;
    readonly files: string[];
    readonly is_public: boolean;
    readonly created_at: string;
    readonly status: string;
    readonly feedback: string;
    readonly recipient: string;
}

