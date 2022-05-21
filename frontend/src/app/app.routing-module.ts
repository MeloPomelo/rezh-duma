import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { AppComponent } from './components/app/app.component';
import { TuiRootModule } from '@taiga-ui/core';
import { MainRoutingModule } from './children/main/main.routing-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const components: any[] = [
    AppComponent,
];

const routes: Routes = [
    {
        path: '',
        data: { title : 'Главная' , breadcrumb: { label: 'Главная', title: 'Главная' } },
        loadChildren: (): Promise<MainRoutingModule> => import('./children/main/main.routing-module')
            .then((m: any) => m.MainRoutingModule),
    },
];


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        TuiRootModule,
        BreadcrumbModule,
    ],
    declarations: components,
    bootstrap: components,
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
