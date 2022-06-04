import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TagsComponent } from './components/tags/tags.component';

const components: any = [
    TagsComponent
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
export class TagsModule {

}
