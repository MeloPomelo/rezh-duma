import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './user-profile.page.html',
    styleUrls: ['./styles/user-profile.page.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfilePage {}
