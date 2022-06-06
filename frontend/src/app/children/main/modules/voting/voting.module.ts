import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { VotingPlateListComponent } from './components/voting-plate-list/voting-plate-list.component';
import { VotingPlateComponent } from './components/voting-plate/voting-plate.component';
import { VotingRequestsService } from './services/voting.request-service';
import { TagsModule } from '../../../../modules/tags/tags.module';
import { MatInputModule } from '@angular/material/input';
const components: any = [VotingPlateListComponent, VotingPlateComponent];

@NgModule({
    imports: [CommonModule, HttpClientModule, TagsModule, MatInputModule],
    declarations: components,
    exports: components,
    providers: [VotingRequestsService],
})
export class VotingModule {}
