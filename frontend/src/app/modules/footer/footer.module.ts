import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavBarModule } from '../navbar/navbar.module';
import { FooterComponent } from './components/footer/footer.component';

const components: any = [
    FooterComponent
];

@NgModule({
    imports: [
        CommonModule,
        NavBarModule
    ],
    declarations: components,
    exports: components
})
export class FooterModule {

}
