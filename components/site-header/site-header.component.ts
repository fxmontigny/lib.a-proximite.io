import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MainClass } from 'lib/libs/main-class';

@Component({
	selector: 'site-header',
	templateUrl: './site-header.component.html',
	styleUrls: [ './site-header.component.scss' ]
})
export class SiteHeaderComponent extends MainClass implements OnInit {
	showPopupMenu: boolean = false;
	constructor(@Inject(DOCUMENT) private document: any) {
		super();
	}

	ngOnInit() {}

	isActive(path) {
		return this.document.location.href === path;
	}
}
