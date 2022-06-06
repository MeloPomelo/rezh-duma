import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const components: any = [
    SidebarComponent
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
export class SideBarModule {

}
