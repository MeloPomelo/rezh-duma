import { UserProfilePage } from './pages/user-profile/user-profile.page';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { UserProfileModule } from '../../modules/user-profile/user-profile.module';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components: any[] = [UserProfilePage];

const routes: Routes = [
    {
        path: '',
        component: UserProfilePage,
        data: {
            title: 'Личные данные',
            breadcrumb: { label: 'Личные данные', title: 'Личные данные' },
        },
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [
        CommonModule,
        BreadcrumbModule,
        RouterModule.forChild(routes),
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        UserProfileModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: components,
    exports: [RouterModule],
})
export class UserProfileRoutingModule {}
