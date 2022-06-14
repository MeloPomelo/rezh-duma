import { FaqModel } from './../../../../../../models/main/faqs/models/faq.model';
import { Component, Input } from '@angular/core';
// import { VotingPlateViewModel } from '../../../../../../models';
@Component({
    selector: 'app-question-block',
    templateUrl: './question-block.component.html',
    styleUrls: ['./styles/question-block.component.css'],
})
export class QuestionBlockComponent {
    @Input()
    public faqList!: FaqModel[];

    @Input()
    public openedId!: number;
}
