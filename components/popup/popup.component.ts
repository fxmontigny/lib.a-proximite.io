import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { MainClass } from 'lib/libs/main-class';

interface OptionsInterface {
	value: number;
	label: string;
	selected: boolean;
}

@Component({
	selector: 'del-popup',
	templateUrl: './popup.component.html',
	styleUrls: [ './popup.component.scss' ]
})
export class PopupComponent extends MainClass implements OnInit, OnDestroy {
	@HostBinding('class.is-mobile') isMobile = false;
	@Input()
	set visible(d) {
		this._visible = d;
	}
	get visible() {
		return this._visible;
	}
	@Input() title;
	@Input() actions = [];
	@Input()
	set options(o: OptionsInterface[]) {
		this._options = o;
		const findSelected = o.findIndex((o) => o.selected);
		if (findSelected !== -1) {
			this.selectedOptions = findSelected;
		}
	}
	get options() {
		return this._options;
	}
	@Input() closeIcon = false;
	@Input() minHeight: string = null;
	@Output() selectedAction = new EventEmitter();
	@Output() onClose = new EventEmitter();
	_options;
	_visible = true;
	selectedOptions = 0;

	constructor() {
		super();
	}

	ngOnInit() {
		const element = document.getElementById('hubspot-messages-iframe-container');
		if (element) {
			element.style.visibility = 'hidden';
		}
	}

	ngOnDestroy() {
		const element = document.getElementById('hubspot-messages-iframe-container');
		if (element) {
			element.style.visibility = 'visible';
		}
	}

	onSelectAction(action) {
		this.selectedAction.emit({ ...action, optionValue: this.selectedOptions });
	}

	onChangeOption(val) {
		this.selectedOptions = val;
	}

	getInternetExplorerVersion() {
		var rv = -1;
		if (navigator.appName == 'Microsoft Internet Explorer') {
			var ua = navigator.userAgent;
			var re = new RegExp('MSIE ([0-9]{1,}[\\.0-9]{0,})');
			if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
		} else if (navigator.appName == 'Netscape') {
			var ua = navigator.userAgent;
			var re = new RegExp('Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})');
			if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
		}
		return rv;
	}
}
