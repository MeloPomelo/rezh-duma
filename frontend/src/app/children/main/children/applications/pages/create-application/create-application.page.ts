import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AfterViewInit, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
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

    constructor(public dialog: MatDialog) {}

    public dialogListDeputiesPage: any = DialogListDeputiesPage;
    public dialogListCommissionPage: any = DialogListCommissionPage;

    openDialog(nameDialogPage: any) {
        this.dialog.open(nameDialogPage);
    }

    ngOnInit() {
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

@Component({
    selector: 'dialog-list-deputies.page',
    styleUrls: ['./styles/dialog-list-deputies.page.css'],
    templateUrl: 'dialog-list-deputies.page.html',
})
export class DialogListDeputiesPage {
    public selectedCounty: string = 'county1';

    public countyList1: string[] = [
        'Шарова Марина Султановна',
        'Бачинин Николай Аркадьевич',
        'Горохова Александра Александровна',
        'Николаева Светлана Леонидовна',
    ];

    public countyList2: string[] = [
        'Белоусов Дмитрий Леонидович',
        'Кузьмин Алексей Михайлович',
        'Киселева Марина Николаевна',
        'Копалов Александр Евгеньевич',
        'Першин Алекснадр Петрович',
    ];

    public countyList3: string[] = [
        'Боярских Иван Витальевич',
        'Гуляева Татьяна Леонидовна',
        'Ермаков Игорь Александрович',
        'Тетерина Екатерина Александровна',
    ];

    public countyList4: string[] = [
        'Алферьев Александр Владимирович',
        'Каунов Петр Викторович',
        'Латников Александр Михайлович',
        'Нешатаев Геннадий Леонидович',
    ];

    public countyList5: string[] = [
        'Кайгородова Наиля Миначевна',
        'Кузьмин Алексей Михайлович',
        'Саган Елена Николаевна',
        'Сурнин Евгений Витальевич',
    ];

    public countiesList: any = {
        county1: this.countyList1,
        county2: this.countyList2,
        county3: this.countyList3,
        county4: this.countyList4,
        county5: this.countyList5,
    };
}

@Component({
    selector: 'dialog-list-commission.page',
    styleUrls: ['./styles/dialog-list-commission.page.css'],
    templateUrl: 'dialog-list-commission.page.html',
})
export class DialogListCommissionPage {
    public selectedCommission: string = 'commission1';

    public commissionList1: string[] = [
        'Саган Елена Николаевна',
        'Белоусов Дмитрий Леонидович',
        'Копалов Александр Евгеньевич',
        'Кузьмин Алексей Михайлович',
    ];

    public commissionList2: string[] = [
        'Киселева Марина Николаевна',
        'Белоусов Дмитрий Леонидович',
        'Копалов Александр Евгеньевич',
        'Шарова Марина Султановна',
    ];

    public commissionList3: string[] = [
        'Киселева Марина Николаевна',
        'Латников Александр Михайлович',
        'Кузьмин Алексей Михайлович',
        'Шарова Марина Султановна',
    ];

    public commissionList4: string[] = [
        'Киселева Марина Николаевна',
        'Копалов Александр Евгеньевич',
        'Кузьмин Алексей Михайлович',
        'Белоусов Дмитрий Леонидович',
    ];

    public commissionList5: string[] = [
        'Белоусов Дмитрий Леонидович',
        'Копалов Александр Евгеньевич',
        'Киселева Марина Николаевна',
        'Латников Александр Михайлович',
    ];

    public commissions: any = {
        commission1: this.commissionList1,
        commission2: this.commissionList2,
        commission3: this.commissionList3,
        commission4: this.commissionList4,
        commission5: this.commissionList5,
    };
}