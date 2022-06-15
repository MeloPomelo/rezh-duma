import { VotingPage } from './pages/voting/voting.page';
import { VotingDetailPage } from './pages/voting-detail/voting-detail.page';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { VotingModule } from '../../modules/voting/voting.module';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AuthGuard } from '../../../../shared/guard/auth.guard';
import { CreateVotingPage } from './pages/create-voting/create-voting.page';
const components: any[] = [VotingPage, VotingDetailPage, CreateVotingPage];

const routes: Routes = [
    {
        path: '',
        component: VotingPage,
        data: {
            title: 'Голосования',
            breadcrumb: { label: 'Голосования', title: 'Голосования' },
        },
        pathMatch: 'full',
    },
    {
        path: 'detail',
        component: VotingDetailPage,
        data: {
            title: 'Опрос о благоустройстве общественных территорий города Реж',
            breadcrumb: {
                label: 'Опрос о благоустройстве общественных территорий города Реж',
                title: 'Опрос о благоустройстве общественных территорий города Реж',
            },
        },
        pathMatch: 'full',
        canActivate: [AuthGuard],
    },
    {
        path: 'create',
        component: CreateVotingPage,
        data: {
            title: 'Создание опроса',
            breadcrumb: {
                label: 'Создание опроса',
                title: 'Создание опроса',
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
        RouterModule.forChild(routes),
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        VotingModule,
        MatCheckboxModule,
        MatRadioModule,
        FormsModule,
        MatButtonModule,
    ],
    declarations: components,
    exports: [RouterModule],
})
export class VotingRoutingModule {}
