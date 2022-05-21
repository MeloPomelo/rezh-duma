import { Component, OnInit } from '@angular/core';
import { IPage } from '../app.component';
import { BreadcrumbModule, BreadcrumbService } from 'xng-breadcrumb';

@Component({
    selector: 'app-voting-list',
    templateUrl: './voting-list.component.html',
    styleUrls: ['./voting-list.component.css'],
})
export class VotingListComponent implements OnInit {
    public namePage: IPage = { name: 'home' };
    constructor(private _breadcrumbService: BreadcrumbService) {}

    public ngOnInit(): void {}
}
