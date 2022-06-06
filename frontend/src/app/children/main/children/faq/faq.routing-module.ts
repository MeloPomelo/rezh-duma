import { FaqPage } from './pages/faq/faq.page';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbModule } from 'xng-breadcrumb';
// import { FaqModule } from '../../modules/faq/faq.module';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

const components: any[] = [
    FaqPage
];

const routes: Routes = [
    {
        path: '',
        component: FaqPage,
        data: { title: 'Часто задаваемые вопросы', breadcrumb: { label: 'Часто задаваемые вопросы', title: 'Часто задаваемые вопросы' } },
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
    ],
    declarations: components,
    exports: [RouterModule],
})
export class FaqRoutingModule {}
