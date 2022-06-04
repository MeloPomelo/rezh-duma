import { VotingPage } from './pages/voting/voting.page';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { VotingModule } from '../../modules/voting/voting.module';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

const components: any[] = [
    VotingPage
];

const routes: Routes = [
    {
        path: '',
        component: VotingPage,
        data: { title: 'Голосования', breadcrumb: { label: 'Голосования', title: 'Голосования' } },
        pathMatch: 'full'
    }
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
    ],
    declarations: components,
    exports: [RouterModule],
})
export class VotingRoutingModule {}
