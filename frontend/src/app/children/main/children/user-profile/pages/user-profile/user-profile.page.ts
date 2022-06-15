import { switchMap } from 'rxjs/operators';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IUser } from '../../../../../../shared/services/user';
import { AuthService } from '../../../../../../shared/services/auth.service';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';

import { FloatLabelType } from '@angular/material/form-field';

import {
    AngularFirestore,
    AngularFirestoreDocument,
    AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { filter } from 'rxjs';

@Component({
    templateUrl: './user-profile.page.html',
    styleUrls: ['./styles/user-profile.page.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfilePage implements OnInit {
    public userFormData!: FormGroup;
    public newUserData!: any;
    public typeUser!: any;

    public currUserData: any = {
        name: '',
        lastName: '',
        patronName: '',
        phone: '',
        email: '',
        city: '',
        street: '',
        numberHouse: '',
    };

    public hideRequiredControl: FormControl = new FormControl(false);

    public floatLabelControl: FormControl = new FormControl(
        'auto' as FloatLabelType
    );

    public codeTelegram!: string;

    constructor(
        public authService: AuthService,
        public afs: AngularFirestore,
        private _ref: ChangeDetectorRef
    ) {}

    // public userData!: IUser;

    public async updateUserData(): Promise<any> {
        const formData: any = { ...this.userFormData.value };

        let currType: string = '';

        this.afs
            .doc(`users/${JSON.parse(localStorage['user']).uid}`)
            .get()
            .forEach((snap: any) => {
                const uData: any = snap.data();
                currType = uData.type;
            });

        this.newUserData = {
            uid: JSON.parse(localStorage['user']).uid,
            email: JSON.parse(localStorage['user']).email,
            displayName: formData['userName'] + ' ' + formData['userLastName'],
            name: formData['userName'],
            lastName: formData['userLastName'],
            patronName: formData['userPatron'],
            phoneNumber: formData['userPhone'],
            address: formData['userCity'],
            city: formData['userCity'],
            street: formData['userStreet'],
            numberHouse: formData['userNumberHouse'],
        };

        Object.keys(this.newUserData).forEach(
            (key: any) => !this.newUserData[key] && delete this.newUserData[key]
        );

        console.log(this.newUserData);
        this.authService.updateUserData(this.newUserData);
    }

    public getFloatLabelValue(): FloatLabelType {
        return this.floatLabelControl.value || 'auto';
    }

    // public get typeUser(): any {
    //     return this.authService.getUserType();
    // }

    public ngOnInit(): void {
        this.userFormData = new FormGroup({
            userName: new FormControl(),
            userLastName: new FormControl(),
            userPatron: new FormControl(),
            userEmail: new FormControl(),
            userPhone: new FormControl(),
            userPassword: new FormControl(),
            userCity: new FormControl(),
            userNumberHouse: new FormControl(),
            userStreet: new FormControl(),
            hideRequired: this.hideRequiredControl,
            floatLabel: this.floatLabelControl,
        });
        this.typeUser = 'Guest';
        this.authService.isLogged$
            .pipe(
                filter((value: boolean) => value),
                switchMap(() => {
                    return this.authService.getUserType();
                })
            ).subscribe((snap: any) => {
                const data: any = snap.data();
                this.typeUser = data.type;
                this.afs
                    .doc(`users/${JSON.parse(localStorage['user']).uid}`)
                    .get()
                    .forEach((snap: any) => {
                        const uData: any = snap.data();
                        this.currUserData.name = uData.name;
                        this.currUserData.lastName = uData.lastName;
                        this.currUserData.patronName = uData.patronName;
                        this.currUserData.phone = uData.phoneNumber;
                        this.currUserData.email = uData.email;
                        this.currUserData.city = uData.city;
                        this.currUserData.street = uData.street;
                        this.currUserData.numberHouse = uData.numberHouse;

                        // this.codeTelegram = window.btoa(uData.name);
                        this.codeTelegram = window.btoa(
                            unescape(encodeURIComponent(uData.name))
                        );
                        this._ref.markForCheck();

                    });
            });
    }
}
