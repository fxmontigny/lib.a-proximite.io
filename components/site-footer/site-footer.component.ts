import { Component, OnInit } from '@angular/core';
import { MainClass } from 'lib/libs/main-class';

@Component({
	selector: 'site-footer',
	templateUrl: './site-footer.component.html',
	styleUrls: [ './site-footer.component.scss' ]
})
export class SiteFooterComponent extends MainClass implements OnInit {
	constructor() {
		super();
	}

	ngOnInit() {}
}
