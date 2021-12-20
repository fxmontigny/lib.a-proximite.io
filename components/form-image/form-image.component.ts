import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgxImageCompressService } from 'ngx-image-compress';
import { resizeBase64AutoFit } from 'lib/utils/image';

@Component({
	selector: 'form-image',
	templateUrl: './form-image.component.html',
	styleUrls: [ './form-image.component.scss' ],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => FormImageComponent),
			multi: true
		}
	]
})
export class FormImageComponent implements OnInit, ControlValueAccessor {
	@Input() maxWidth: number = 300;
	@Input() maxHeight: number = 300;
	@Input() preview: boolean = true;
	@Input() previewBt: boolean = false;
	@Input() photoFromParent = null;
	disabled = false;
	showForce = false;
	value = '';
	onChange: any = () => {};
	onTouched: any = () => {};
	constructor(private imageCompress: NgxImageCompressService) {}

	ngOnInit() {}

	onChangeRestaurantPhoto() {
		const callback = (image, orientation) => {
			this.imageCompress
				.compressFile(image, orientation, 100, 90)
				.then((result) => {
					return resizeBase64AutoFit(result, this.maxWidth, this.maxHeight);
				})
				.then((image) => {
					this.value = image;
					this.onChange(this.value);
				})
				.catch(alert);
		};

		if (this.photoFromParent) {
			this.photoFromParent().then((image) => {
				callback(image, null);
			});
		} else {
			this.imageCompress.uploadFile().then(({ image, orientation }) => {
				callback(image, orientation);
			});
		}
	}

	writeValue(value: string): void {
		this.value = value;
	}

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	setDisabledState?(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}

	onRemove() {
		this.value = null;
		this.onChange(this.value);
	}
}
