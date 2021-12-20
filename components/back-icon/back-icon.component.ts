import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
	selector: 'back-icon',
	templateUrl: './back-icon.component.html',
	styleUrls: [ './back-icon.component.scss' ]
})
export class BackIconComponent implements OnInit {
	@Input() backUrl: string;
	constructor(private location: Location) {}

	ngOnInit() {}

	onBack() {
		this.location.back();
	}
}
