import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { VotingPlateListComponent } from './components/voting-plate-list/voting-plate-list.component';
import { VotingPlateComponent } from './components/voting-plate/voting-plate.component';
import { VotingRequestsService } from './services/voting.request-service';
import { TagsModule } from '../../../../modules/tags/tags.module';
import { MatInputModule } from '@angular/material/input';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
const components: any = [
    VotingPlateListComponent,
    VotingPlateComponent,
];

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        TagsModule,
        MatInputModule,
        BreadcrumbModule,
        MatCheckboxModule,
        MatRadioModule,
    ],
    declarations: components,
    exports: components,
    providers: [VotingRequestsService],
})
export class VotingModule {
}
