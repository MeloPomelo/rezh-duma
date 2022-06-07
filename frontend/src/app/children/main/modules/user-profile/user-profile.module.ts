import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
// import { UserProfilePage } from './pages/user-profile/user-profile.page';
// import { VotingPlateListComponent } from './components/voting-plate-list/voting-plate-list.component';
// import { VotingPlateComponent } from './components/voting-plate/voting-plate.component';
// import { VotingRequestsService } from './services/voting.request-service';
import { TagsModule } from '../../../../modules/tags/tags.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
const components: any = [];

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        TagsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
    ],
    declarations: components,
    exports: components,
    providers: [],
})
export class UserProfileModule {}
