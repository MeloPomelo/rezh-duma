import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AfterViewInit, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
interface IDeputy {
    id: string;
    name: string;
}

@Component({
    templateUrl: './create-application.page.html',
    styleUrls: ['./styles/create-application.page.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateApplicationPage {
    // public deputys: string[] = [
    //     'Генадий Петрович Хазанов',
    //     'Артём Максимович Лещенко',
    // ];

    public socialStatusList: string[] = ['Безработный', 'Студент'];
    public preferentialList: string[] = ['Беженец', 'Ветеран труда'];
    public topicList: string[] = ['ЖКХ', 'Дороги'];

    // public testForm: FormGroup = new FormGroup({
    //     testValue: new FormControl('Content'),
    // });

    public testForm: FormGroup = new FormGroup({
        testValue: new FormControl(),
    });

    public websiteCtrl: FormControl = new FormControl();
    public websiteFilterCtrl: FormControl = new FormControl();
    public filteredDeputys: ReplaySubject<any> = new ReplaySubject(1);
    
    @ViewChild('singleSelect', { static: true })
    singleSelect!: MatSelect;

    public deputys: IDeputy[] = [
        { id: '1', name: 'Игорь Иванович Петров' },
        { id: '2', name: 'Игорь Иванович Сидоров' },
        { id: '3', name: 'Игорь Иванович Иванов' },
        { id: '4', name: 'Игорь Иванович Воробьев' },
        { id: '5', name: 'Игорь Иванович Смирнов' },
        { id: '6', name: 'Игорь Иванович Куйвашев' },
    ];

    protected _onDestroy = new Subject();

    constructor() {}

    ngOnInit() {
        // document.querySelector()
        this.websiteCtrl.setValue(this.deputys[1]);
        this.filteredDeputys.next(this.deputys.slice());

        this.websiteFilterCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterBanks();
            });
    }

    ngAfterViewInit() {
        this.setInitialValue();
    }

    ngOnDestroy() {
        this._onDestroy.next(1);
        this._onDestroy.complete();
    }

    protected setInitialValue() {
        this.filteredDeputys
            .pipe(take(1), takeUntil(this._onDestroy))
            .subscribe(() => {
                this.singleSelect.compareWith = (a: IDeputy, b: IDeputy) =>
                    a && b && a.id === b.id;
            });
    }

    protected filterBanks() {
        if (!this.deputys) {
            return;
        }

        let search = this.websiteFilterCtrl.value;
        if (!search) {
            this.filteredDeputys.next(this.deputys.slice());
            return;
        } else {
            search = search.toLowerCase();
        }

        this.filteredDeputys.next(
            this.deputys.filter(
                (bank: { name: string }) =>
                    bank.name.toLowerCase().indexOf(search) > -1
            )
        );
    }
}
