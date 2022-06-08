import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './voting-detail.page.html',
    styleUrls: ['./styles/voting-detail.page.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VotingDetailPage {
    public labelPosition: 'before' | 'after' = 'after';
}
