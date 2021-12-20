import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
	selector: 'close-icon',
	templateUrl: './close-icon.component.html',
	styleUrls: [ './close-icon.component.scss' ]
})
export class CloseIconComponent implements OnInit {
	@Input() backUrl: string;
	constructor(private location: Location) {}

	ngOnInit() {}

	onBack() {
		this.location.back();
	}
}
