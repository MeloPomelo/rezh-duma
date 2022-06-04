import { Component, Input } from '@angular/core';
// import { IPage } from '../app.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-tags',
    templateUrl: './tags.component.html',
    styleUrls: ['./styles/tags.component.css'],
})
export class TagsComponent {
    public tagsList: string[] = [
        'ЖКХ',
        'Дороги',
        'Транспорт',
        'Экология',
        'Спорт',
        'Наука',
        'Образование',
        'Культура',
        'Здравоохранение',
        'Экономика',
        'Еще',
    ];
    constructor() {}
}
