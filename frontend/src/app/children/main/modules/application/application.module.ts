import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApplicationPlateListComponent } from './components/application-plate-list/application-plate-list.component';
import { ApplicationPlateComponent } from './components/application-plate/application-plate.component';
import { ApplicationsRequestsService } from './services/applications.request-service';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { TuiTextAreaModule } from '@taiga-ui/kit';
import { TagsModule } from '../../../../modules/tags/tags.module';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

const components: any = [
    ApplicationPlateComponent,
    ApplicationPlateListComponent,
];

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        MatFormFieldModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        TagsModule,
    ],
    declarations: components,
    exports: components,
    providers: [ApplicationsRequestsService],
})
export class ApplicationModule {}
