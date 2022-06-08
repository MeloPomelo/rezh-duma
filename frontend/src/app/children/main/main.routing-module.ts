import { NavBarModule } from './../../modules/navbar/navbar.module';
import { SideBarModule } from './../../modules/sidebar/sidebar.module';
import { TagsModule } from '../../modules/tags/tags.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterModule } from '../../modules/footer/footer.module';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { MainPage } from './pages/main/main.page';
import { VotingRoutingModule } from './children/voting/voting.routing-module';
import { UserProfileRoutingModule } from './children/user-profile/user-profile.routing-module';
import { ApplicationsRoutingModule } from './children/applications/applications.routing-module';

import { FaqRoutingModule } from './children/faq/faq.routing-module';

import { MainDomainsModule } from './modules/main-domains/main-domains.module';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MainLayoutPage } from './pages/main-layout/main-layout.page';
// import { MatInputModule } from '@angular/material/input';
// import { MatIconModule } from '@angular/material/icon';

const components: any[] = [MainPage, MainLayoutPage];

const routes: Routes = [
    {
        path: '',
        component: MainLayoutPage,
        data: {
            title: 'Главная',
            breadcrumb: { label: 'Главная', title: 'Главная' },
        },
        children: [
            {
                path: '',
                data: {
                    title: 'Главная',
                    breadcrumb: { label: 'Главная', title: 'Главная' },
                },
                component: MainPage,
            },
            {
                path: 'applications',
                data: {
                    title: 'Заявки',
                    breadcrumb: { label: 'Заявки', title: 'Заявки' },
                },
                loadChildren: (): Promise<ApplicationsRoutingModule> =>
                    import('./children/applications/applications.routing-module'
                    ).then((m: any) => m.ApplicationsRoutingModule),
            },
            {
                path: 'voting',
                data: {
                    title: 'Голосования',
                    breadcrumb: { label: 'Голосования', title: 'Голосования' },
                },
                loadChildren: (): Promise<VotingRoutingModule> =>
                    import('./children/voting/voting.routing-module').then(
                        (m: any) => m.VotingRoutingModule
                    ),
            },
            {
                path: 'faq',
                data: {
                    title: 'FAQ',
                    breadcrumb: { label: 'FAQ', title: 'FAQ' },
                },
                loadChildren: (): Promise<FaqRoutingModule> =>
                    import('./children/faq/faq.routing-module').then(
                        (m: any) => m.FaqRoutingModule
                    ),
            },
            {
                path: 'user-profile',
                data: {
                    title: 'Личные данные',
                    breadcrumb: {
                        label: 'Личные данные',
                        title: 'Личные данные',
                    },
                },
                loadChildren: (): Promise<UserProfileRoutingModule> =>
                    import('./children/user-profile/user-profile.routing-module').then((m: any) => m.UserProfileRoutingModule),
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        BreadcrumbModule,
        FooterModule,
        NavBarModule,
        SideBarModule,
        MainDomainsModule,
        FormsModule,
        MatButtonModule,
        TagsModule,
    ],
    declarations: components,
    exports: [RouterModule],
})
export class MainRoutingModule {}
