import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    templateUrl: './application-detail.page.html',
    styleUrls: ['./styles/application-detail.page.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationDetailPage {
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
}
