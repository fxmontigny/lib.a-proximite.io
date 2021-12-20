import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'lib/services/app/app.service';

@Component({
	selector: 'need-account',
	templateUrl: './need-account.component.html',
	styleUrls: [ './need-account.component.scss' ]
})
export class NeedAccountComponent implements OnInit {
	@Input() message: string;
	constructor(private appService: AppService) {}

	ngOnInit() {
	}

	onClose(cleanUrl = true) {
		this.appService.needAccount(null, cleanUrl);
	}
}
