import { NavigationEnd, Router, Event, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs';

export interface IPage {
  'name': string;
}

@Component({
    templateUrl: './not-found.component.html',
    styleUrls: ['./styles/not-found.component.css']
})

export class NotFoundComponent  {
}

