import { Component, Input } from '@angular/core';
import { ApplicationPlateViewModel } from '../../../../../../models';

@Component({
    selector: 'app-application-plate',
    templateUrl: './application-plate.component.html',
    styleUrls: ['./styles/application-plate.component.css']
})
export class ApplicationPlateComponent {

    @Input()
    public model!: ApplicationPlateViewModel;

}
