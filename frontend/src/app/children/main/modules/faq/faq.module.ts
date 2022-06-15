import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// import { VotingPlateListComponent } from './components/voting-plate-list/voting-plate-list.component';
import { QuestionBlockComponent } from './components/question-block/question-block.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
// import { VotingRequestsService } from './services/voting.request-service';

// import { TagsModule } from '../../../../modules/tags/tags.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FaqsRequestsService } from './services/faq.request-service';
const components: any = [QuestionBlockComponent];

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        MatInputModule,
        CdkAccordionModule,
        MatFormFieldModule,
    ],
    declarations: components,
    exports: components,
    providers: [
        FaqsRequestsService
    ],
})
export class FaqModule {}
