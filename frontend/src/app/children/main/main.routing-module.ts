import { NavBarModule } from './../../modules/navbar/navbar.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterModule } from '../../modules/footer/footer.module';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { MainPage } from './pages/main/main.page';
import { VotingRoutingModule } from './children/voting/voting.routing-module';
import { ApplicationsRoutingModule } from './children/applications/applications.routing-module';
import { MainLayoutPage } from './pages/main-layout/main-layout.page';



const components: any[] = [
    MainLayoutPage,
    MainPage
];

const routes: Routes = [
    {
        path: '',
        component: MainLayoutPage,
        data: { title : 'Главная' , breadcrumb: { label: 'Главная', title: 'Главная' } },
        children: [
            {
                path: '',
                data: { title: 'Главная', breadcrumb: { label: 'Главная', title: 'Главная' } },
                component: MainPage
            },
            {
                path: 'applications',
                data: { title: 'Заявки', breadcrumb: { label: 'Заявки', title: 'Заявки' } },
                loadChildren: (): Promise<ApplicationsRoutingModule> => import('./children/applications/applications.routing-module')
                    .then((m: any) => m.ApplicationsRoutingModule),
            },
            {
                path: 'voting',
                data: { title: 'Голосования', breadcrumb: { label: 'Голосования', title: 'Голосования' } },
                loadChildren: (): Promise<VotingRoutingModule> => import('./children/voting/voting.routing-module')
                    .then((m: any) => m.VotingRoutingModule),

            },
        ]
    }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        BreadcrumbModule,
        FooterModule,
        NavBarModule

    ],
    declarations: components,
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule {}
