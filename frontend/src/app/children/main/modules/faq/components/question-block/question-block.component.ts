import { Component, Input } from '@angular/core';
// import { VotingPlateViewModel } from '../../../../../../models';
@Component({
    selector: 'app-question-block',
    templateUrl: './question-block.component.html',
    styleUrls: ['./styles/question-block.component.css'],
})
export class QuestionBlockComponent {
    public faqList: Array<{ question: string; answer: string }> = [
        { question: 'Какой-то вопрос 1', answer: 'Какой-то ответ 1' },
        { question: 'Какой-то вопрос 2', answer: 'Какой-то ответ 2' },
        { question: 'Какой-то вопрос 3', answer: 'Какой-то ответ 3' },
        { question: 'Какой-то вопрос 4', answer: 'Какой-то ответ 4' },
        { question: 'Какой-то вопрос 5', answer: 'Какой-то ответ 5' },
    ];
}
