import { BehaviorSubject, from, map, Observable, of } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
// import { IPage } from '../app.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SearchModel, SearchRequestsService, SearchViewModel } from '../../../../models';
import { FormControl } from '@angular/forms';
import { delay, switchMap } from 'rxjs/operators';

@Component({
    templateUrl: './main.page.html',
    styleUrls: ['./styles/main.page.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPage implements OnInit {
    // public namePage: IPage = { name: 'home' };
    public applicationsPath: string = 'home/applications';
    public votingsPath: string = 'home/votings';
    public search: string | null = '';

    public readonly control: FormControl = new FormControl();

    public modelSubj$: BehaviorSubject<SearchViewModel | null> = new BehaviorSubject<SearchViewModel | null>(null);

    private _search: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _searchServise: SearchRequestsService) {
    }

    public gotoPage(namePage: string): void {
        this._router.navigate([`/applications`], { relativeTo: this._activatedRoute });
    }

    public nextSearch(): void {
        this._search.next(this.search);
    }

    public ngOnInit(): void {
        this._search.
            pipe(
                delay(1000),
                switchMap(() => this._searchServise.search(this.search ?? '')),
                map((model: SearchModel | null ) => {
                    return model ? new SearchViewModel(model) : null;

                }),
            ).subscribe((model: SearchViewModel | null ) => this.modelSubj$.next(model));
    }
}
