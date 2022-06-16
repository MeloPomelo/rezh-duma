import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { tuiPure } from '@taiga-ui/cdk';
import { TuiAlertService, TuiDurationOptions, tuiHeightCollapse, TuiNotification } from '@taiga-ui/core';

@Component({
    templateUrl: './voting-detail.page.html',
    styleUrls: ['./styles/voting-detail.page.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiHeightCollapse],
})
export class VotingDetailPage {
    public isOpen: boolean = true;

    public animationTime: number = 700;

    public labelPosition: 'before' | 'after' = 'after';

    constructor(
        @Inject(TuiAlertService)
        private _alertService: TuiAlertService
    ) {

    }

    @tuiPure
    public getAnimation(): TuiDurationOptions {
        return { value: '', params: { duration: this.animationTime } };
    }

    public vote(): void {
        setTimeout(() => {
            this._alertService.open('Ваш голос учтен и важен для нас!', { label: 'Операция выполнена', status: TuiNotification.Success }).subscribe();
        }, this.animationTime * 1.02);
        this.isOpen = false;
    }
}
