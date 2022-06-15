import { ApplicationsRequestsService } from './../../../../modules/application/services/applications.request-service';
import { ApplicationModel } from './../../../../../../models/main/applications/data/models/application.model';
import { TuiDestroyService } from '@taiga-ui/cdk';
import {
    Component,
    OnInit,
    Inject,
    ChangeDetectorRef,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { BreadcrumbService } from 'xng-breadcrumb';
import {
    MatDialog,
    MatDialogRef,
    MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ResponseApplicationPage } from './response-application.page';

@Component({
    templateUrl: './application-detail.page.html',
    styleUrls: ['./styles/application-detail.page.css'],
    providers: [TuiDestroyService],
})
export class ApplicationDetailPage implements OnInit {
    public modelSubj$: BehaviorSubject<ApplicationModel | null> =
        new BehaviorSubject<ApplicationModel | null>(null);

    public feedback!: string;
    public contacts!: string;
    public deputys: string[] = [
        'Генадий Петрович Хазанов',
        'Артём Максимович Лещенко',
    ];

    public socialStatusList: string[] = ['Безработный', 'Студент'];
    public preferentialList: string[] = ['Беженец', 'Ветеран труда'];
    public topicList: string[] = ['ЖКХ', 'Дороги'];

    // public testForm: FormGroup = new FormGroup({
    //     testValue: new FormControl('Content'),
    // });

    public testForm: FormGroup = new FormGroup({
        testValue: new FormControl(),
    });

    constructor(
        private _route: ActivatedRoute,
        private _destroy$: TuiDestroyService,
        private _applicationsRequestsService: ApplicationsRequestsService,
        private _titleService: Title,
        private _breadcrumbService: BreadcrumbService,
        public dialog: MatDialog,
        private _ref: ChangeDetectorRef
    ) {}

    public ngOnInit(): void {
        const id: string | null = this._route.snapshot.paramMap.get('id');
        if (id) {
            this._applicationsRequestsService
                .getItemById(id, this._destroy$)
                .subscribe((model: ApplicationModel | null) => {
                    this.modelSubj$.next(model);
                    if (model) {
                        this._titleService.setTitle(model.title);
                        this._breadcrumbService.set(
                            '@application',
                            model.title
                        );
                    }
                });
        }
    }

    public openDialog(): void {
        const dialogRef: any = this.dialog.open(ResponseApplicationPage, {
            width: '600px',
            height: '400px',
            data: { contacts: this.contacts, feedback: this.feedback },
        });

        dialogRef.afterClosed().subscribe((result: any) => {
            console.log('The dialog was closed', result);
            this.feedback = result;
            this._ref.markForCheck();
        });
    }

    public download(name: string): void {
        this._applicationsRequestsService.dowloadFile(name);
    }
}
