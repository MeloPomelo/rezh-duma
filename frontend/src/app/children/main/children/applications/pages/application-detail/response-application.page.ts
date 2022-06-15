import { ApplicationsRequestsService } from './../../../../modules/application/services/applications.request-service';
import { ApplicationModel } from './../../../../../../models/main/applications/data/models/application.model';
import { TuiDestroyService } from '@taiga-ui/cdk';
import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    Inject,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {
    MatDialog,
    MatDialogRef,
    MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface IDialogData {
    feedback: string;
    contacts: string;
}

@Component({
    templateUrl: './response-application.page.html',
    styleUrls: ['./styles/response-application.page.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class ResponseApplicationPage {
    constructor(
        public dialogRef: MatDialogRef<ResponseApplicationPage>,
        @Inject(MAT_DIALOG_DATA) public data: IDialogData
    ) {}

    public onNoClick(): void {
        this.dialogRef.close();
    }
}
