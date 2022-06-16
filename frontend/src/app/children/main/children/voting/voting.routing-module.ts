import { VotingPage } from './pages/voting/voting.page';
import { VotingDetailPage } from './pages/voting-detail/voting-detail.page';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { VotingModule } from '../../modules/voting/voting.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { AuthGuard } from '../../../../shared/guard/auth.guard';
import { CreateVotingPage } from './pages/create-voting/create-voting.page';

import { TuiInputModule } from '@taiga-ui/kit';
import { TuiInputDateModule } from '@taiga-ui/kit';
import { TuiTextAreaModule } from '@taiga-ui/kit';
import { TuiLabelModule } from '@taiga-ui/core';
import { TuiDataListModule } from '@taiga-ui/core';
import { TuiDataListWrapperModule, TuiSelectModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';

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
        path: 'create',
        component: CreateVotingPage,
        data: {
            title: 'Создание опроса',
            breadcrumb: { label: 'Создание опроса', title: 'Создание опроса' },
        },
        pathMatch: 'full',
        canActivate: [AuthGuard],
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
        ReactiveFormsModule,
        TuiInputModule,
        TuiInputDateModule,
        TuiTextAreaModule,
        TuiLabelModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiSelectModule,
        TuiButtonModule,
    ],
    declarations: components,
    exports: [RouterModule],
})
export class VotingRoutingModule {}
