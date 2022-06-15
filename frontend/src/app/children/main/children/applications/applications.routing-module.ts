import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbModule } from 'xng-breadcrumb';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

import { ApplicationModule } from './../../modules/application/application.module';

import { ApplicationsPage } from './pages/applications/applications.page';
import { ApplicationDetailPage } from './pages/application-detail/application-detail.page';
import { CreateApplicationPage } from './pages/create-application/create-application.page';
import { DialogListDeputiesPage } from './pages/create-application/create-application.page';
import { DialogListCommissionPage } from './pages/create-application/create-application.page';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { AuthGuard } from '../../../../shared/guard/auth.guard';
import { ResponseApplicationPage } from './pages/application-detail/response-application.page';


const components: any[] = [
    ApplicationsPage,
    CreateApplicationPage,
    ApplicationDetailPage,
    DialogListDeputiesPage,
    DialogListCommissionPage,
    ResponseApplicationPage,
];

const routes: Routes = [
    {
        path: '',
        component: ApplicationsPage,
        data: {
            title: 'Заявки',
            breadcrumb: { label: 'Заявки', title: 'Заявки' },
        },
        pathMatch: 'full',
    },
    {
        path: 'create',
        component: CreateApplicationPage,
        data: {
            title: 'Создание заявки',
            breadcrumb: { label: 'Создание заявки', title: 'Создание заявки' },
        },
        pathMatch: 'full',
        canActivate: [AuthGuard]
    },
    {
        path: ':id',
        component: ApplicationDetailPage,
        data: {
            title: 'Заявка',
            breadcrumb: {
                label: 'Заявка',
                title: 'Заявка',
                alias: 'application',
            },
        },
        pathMatch: 'full',
        canActivate: [AuthGuard],
    },
];


@NgModule({
    imports: [
        CommonModule,
        BreadcrumbModule,
        MatIconModule,
        RouterModule.forChild(routes),
        ApplicationModule,
        MatMenuModule,
        MatSelectModule,
        MatButtonModule,
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        NgxMatSelectSearchModule,
        MatDialogModule,
    ],
    declarations: components,
    exports: [RouterModule],
})
export class ApplicationsRoutingModule {}
