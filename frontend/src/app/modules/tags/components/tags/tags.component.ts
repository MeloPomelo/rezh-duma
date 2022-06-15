import { Component, Input, EventEmitter, Output } from '@angular/core';
// import { IPage } from '../app.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-tags',
    templateUrl: './tags.component.html',
    styleUrls: ['./styles/tags.component.css'],
})
export class TagsComponent {

    @Output()
    public tags: EventEmitter<string[]> = new EventEmitter<string[]>();


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

    private _selecterTags: Set<string> = new Set<string>();

    constructor() {}

    public selectTags(value: string): void {
        if (this._selecterTags.has(value)) {
            this._selecterTags.delete(value);
        } else {
            this._selecterTags.add(value);
        }

        this.tags.emit([...this._selecterTags]);
    }
}
