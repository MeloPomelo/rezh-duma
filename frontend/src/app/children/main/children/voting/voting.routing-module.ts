import { VotingPage } from './pages/voting/voting.page';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbModule } from 'xng-breadcrumb';


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
    ],
    declarations: components,
    exports: [
        RouterModule
    ]
})
export class VotingRoutingModule {}
