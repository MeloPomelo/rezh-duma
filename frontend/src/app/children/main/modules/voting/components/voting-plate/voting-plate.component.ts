import { Component, Input } from '@angular/core';
import { VotingPlateViewModel } from '../../../../../../models';
@Component({
    selector: 'app-voting-plate',
    templateUrl: './voting-plate.component.html',
    styleUrls: ['./styles/voting-plate.component.css'],
})
export class VotingPlateComponent {

    @Input()
    public model!: VotingPlateViewModel;

}
