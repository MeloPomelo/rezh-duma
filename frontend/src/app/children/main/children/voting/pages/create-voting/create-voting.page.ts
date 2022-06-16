import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TUI_LAST_DAY, TuiDay } from '@taiga-ui/cdk';
import { TuiNamedDay } from '@taiga-ui/kit';


@Component({
    templateUrl: './create-voting.page.html',
    styleUrls: ['./styles/create-voting.page.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
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

    constructor() {
        this.countSurveys.length = 1;
        this.countAnswers.length = 1;
    }

    public addAnswer(): void {
        this.countAnswers.length += 1;
    }

    public addSurvey(): void {
        this.countSurveys.length += 1;
    }
}
