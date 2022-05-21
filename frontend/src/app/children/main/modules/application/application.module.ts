import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApplicationPlateListComponent } from './components/application-plate-list/application-plate-list.component';
import { ApplicationPlateComponent } from './components/application-plate/application-plate.component';
import { ApplicationsRequestsService } from './services/applications.request-service';


const components: any = [
    ApplicationPlateComponent,
    ApplicationPlateListComponent
];

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: components,
    exports: components,
    providers: [
        ApplicationsRequestsService
    ]
})
export class ApplicationModule {

}
