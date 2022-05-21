import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { MatIconModule } from '@angular/material/icon';
import { ApplicationModule } from './../../modules/application/application.module';
import { ApplicationsPage } from './pages/applications/applications.page';
import { CreateApplicationPage } from './pages/create-application/create-application.page';


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
        ApplicationModule
    ],
    declarations: components,
    exports: [
        RouterModule
    ]
})
export class ApplicationsRoutingModule {}
