import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { AppComponent } from './components/app/app.component';
import { TuiRootModule, TuiDialogModule, TUI_SANITIZER } from '@taiga-ui/core';
import { MainRoutingModule } from './children/main/main.routing-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthRoutingModule } from './tmp/auth/auth.routing-module';
import { RegistryRoutingModule } from './tmp/registry/registry.routing-module';
import { AuthGuard } from './shared/guard/auth.guard';
import { AuthService } from './shared/services/auth.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { NotFoundModule } from './components/not-found/not-found.module';

const components: any[] = [
    AppComponent
];

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Главная',
            breadcrumb: { label: 'Главная', title: 'Главная' },
        },
        loadChildren: (): Promise<MainRoutingModule> =>
            import('./children/main/main.routing-module').then(
                (m: any) => m.MainRoutingModule
            ),
    },
    {
        path: 'auth',
        data: {
            title: 'Вход',
            breadcrumb: { label: 'Вход', title: 'Вход' },
        },
        loadChildren: (): Promise<AuthRoutingModule> =>
            import('./tmp/auth/auth.routing-module').then(
                (m: any) => m.AuthRoutingModule
            ),
    },
    {
        path: 'registry',
        data: {
            title: 'Регистрация',
            breadcrumb: { label: 'Регистрация', title: 'Регистрация' },
        },
        loadChildren: (): Promise<RegistryRoutingModule> =>
            import('./tmp/registry/registry.routing-module').then(
                (m: any) => m.RegistryRoutingModule
            ),
    },
    {
        path: '**',
        loadChildren: (): Promise<NotFoundModule> =>
            import('./components/not-found/not-found.module').then(
                (m: any) => m.NotFoundModule
            ),
    }
];


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        TuiRootModule,
        BreadcrumbModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        TuiDialogModule
    ],
    declarations: components,
    bootstrap: components,
    providers: [AuthService, {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
    exports: [RouterModule],
})
export class AppRoutingModule {}
