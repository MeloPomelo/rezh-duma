import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TagsComponent } from './components/tags/tags.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

const components: any = [
    TagsComponent
];

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatMenuModule,
        MatButtonToggleModule,
    ],
    declarations: components,
    exports: components,
})
export class TagsModule {}
