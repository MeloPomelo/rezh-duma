import { NavigationEnd, Router, Event, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs';

export interface IPage {
  'name': string;
}

@Component({
    selector: 'app-root-page',
    templateUrl: './app.component.html',
    styleUrls: ['./styles/app.component.css']
})

export class AppComponent implements OnInit {
    public title: string = 'duma-app';
    public background: ThemePalette = 'primary';

    public namePage: string = 'home';

    constructor(
        private _titleService: Title,
        private _router: Router,
        private _route: ActivatedRoute
    ) {

    }

    public ngOnInit(): void {
        const appTitle: string = this._titleService.getTitle();
        this._router
            .events.pipe(
                filter((event: Event) => event instanceof NavigationEnd),
                map(() => {
                    const child: ActivatedRoute | null = this._route.firstChild;
                    if (child?.snapshot?.data['title']) {
                        return child?.snapshot?.data['title'];
                    }

                    return appTitle;
                })
            ).subscribe((ttl: string) => {
                this._titleService.setTitle(ttl);
            });
    }
}

