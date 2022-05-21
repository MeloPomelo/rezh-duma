import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NavbarComponent } from './components/navbar/navbar.component';

const components: any = [
    NavbarComponent
];

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatMenuModule
    ],
    declarations: components,
    exports: components
})
export class NavBarModule {

}
