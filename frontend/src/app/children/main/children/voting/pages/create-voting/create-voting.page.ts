import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TUI_LAST_DAY, TuiDay, tuiPure } from '@taiga-ui/cdk';
import { TuiDurationOptions, tuiFadeIn, tuiHeightCollapse, TuiAlertService, TuiNotification } from '@taiga-ui/core';
import { TuiNamedDay } from '@taiga-ui/kit';


@Component({
    templateUrl: './create-voting.page.html',
    styleUrls: ['./styles/create-voting.page.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiHeightCollapse],
})
export class CreateVotingPage {
    public createVotingGroup: FormGroup = new FormGroup({
        testValue: new FormControl(''),
        textVoting: new FormControl('', Validators.required),
        typeQ: new FormControl(),
    });




    public from: TuiDay | null = null;
    public to: TuiDay | null = null;
    public min: TuiDay = TuiDay.currentLocal();
    public max: TuiDay = new TuiDay(2023, 12, 31);

    public items: TuiNamedDay[] = [
        new TuiNamedDay(
            TUI_LAST_DAY.append({ year: -1 }),
            'Until today',
            TuiDay.currentLocal()
        ),
    ];

    public typeQuestion: string[] = ['Один из списка', 'Несколько из списка'];

    public countAnswers: any[] = new Array();
    public countSurveys: any[] = new Array();

    public duration: number = 300;

    public show: boolean = true;
    public showSuc: boolean = false;

    constructor(
        private _alertService: TuiAlertService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _router: Router,
    ) {
        this.countSurveys.length = 1;
        this.countAnswers.length = 1;
    }

    public addAnswer(): void {
        this.countAnswers.length += 1;
    }

    public addSurvey(): void {
        this.countSurveys.length += 1;
    }

    @tuiPure
    public getAnimation(): TuiDurationOptions {
        return { value: '', params: { duration: this.duration } };
    }


    public create(): void {
        this.show = false;
        setTimeout(() => {
            // this.showSuc = true;
            // this._changeDetectorRef.markForCheck();
            this._alertService.open('Голосование создано, Вы перенаправлены на него', { label: 'Операция выполнена', status: TuiNotification.Success }).subscribe();
            this._router.navigate(['/voting/detail']);
        }, this.duration);

    }

}
