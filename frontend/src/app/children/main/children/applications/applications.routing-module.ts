import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbModule } from 'xng-breadcrumb';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

import { ApplicationModule } from './../../modules/application/application.module';
import { ApplicationsPage } from './pages/applications/applications.page';
import { CreateApplicationPage } from './pages/create-application/create-application.page';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components: any[] = [
    ApplicationsPage,
    CreateApplicationPage
];

const routes: Routes = [
    {
        path: '',
        component: ApplicationsPage,
        data: { title: 'Заявки', breadcrumb: { label: 'Заявки', title: 'Заявки' } },
        pathMatch: 'full'
    },
    {
        path: 'create',
        component: CreateApplicationPage,
        data: { title: 'Создание заявки', breadcrumb: { label: 'Создание заявки', title: 'Создание заявки' } },
        pathMatch: 'full'
    }
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
    ],
    declarations: components,
    exports: [RouterModule],
})
export class ApplicationsRoutingModule {}
