import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found.component';
import { RouterModule, Routes } from '@angular/router';

const components: any = [
    NotFoundComponent
];

const routes: Routes = [
    {
        path: '',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: components,
    exports: components,
})
export class NotFoundModule {}
