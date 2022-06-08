import { NavBarModule } from './../../modules/navbar/navbar.module';
import { SideBarModule } from './../../modules/sidebar/sidebar.module';
import { TagsModule } from '../../modules/tags/tags.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterModule } from '../../modules/footer/footer.module';
import { BreadcrumbModule } from 'xng-breadcrumb';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { MainPage } from './pages/main/main.page';


// import { MainDomainsModule } from './modules/main-domains/main-domains.module';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { AuthPage } from './auth.page';
import { ReactiveFormsModule } from '@angular/forms';
// import { MainLayoutPage } from './pages/main-layout/main-layout.page';
// import { MatInputModule } from '@angular/material/input';
// import { MatIconModule } from '@angular/material/icon';

const components: any[] = [AuthPage];

const routes: Routes = [
    {
        path: '',
        component: AuthPage,
        data: {
            title: 'Вход',
            breadcrumb: { label: 'Вход', title: 'Вход' },
        },
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
        FormsModule,
        MatButtonModule,
        TagsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
    ],
    declarations: components,
    exports: [RouterModule],
})
export class AuthRoutingModule {}
