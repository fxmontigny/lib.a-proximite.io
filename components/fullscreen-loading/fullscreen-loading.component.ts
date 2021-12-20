import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'fullscreen-loading',
	templateUrl: './fullscreen-loading.component.html',
	styleUrls: [ './fullscreen-loading.component.scss' ]
})
export class FullscreenLoadingComponent implements OnInit {
	list = [
		'/lib-assets/asian-food.svg',
		'/lib-assets/cupcake-cherry.svg',
		'/lib-assets/drink.svg',
		'/lib-assets/french-fries.svg',
		'/lib-assets/hot-dog.svg',
		'/lib-assets/meat-steak.svg',
		'/lib-assets/seafood-fish.svg'
	];
	index: number = 0;
	constructor() {
		setInterval(() => {
			this.nextUpdate();
		}, 750);
	}

	ngOnInit() {}

	nextUpdate() {
		if (this.list.length <= this.index + 1) {
			this.index = 0;
		} else {
			this.index++;
		}
	}
}
