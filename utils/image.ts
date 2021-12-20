export const toBase64 = (file) =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});

/**
  * Conserve aspect ratio of the original region. Useful when shrinking/enlarging
  * images to fit into a certain area.
  *
  * @param {Number} srcWidth width of source image
  * @param {Number} srcHeight height of source image
  * @param {Number} maxWidth maximum available width
  * @param {Number} maxHeight maximum available height
  * @return {Object} { width, height }
  */
export function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
	var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

	return { width: srcWidth * ratio, height: srcHeight * ratio };
}

export function resizeBase64AutoFit(base64String, maxWidth, maxHeight): Promise<string> {
	return new Promise((resolve, reject) => {
		// Create and initialize two canvas
		let canvas = document.createElement('canvas');
		let ctx = canvas.getContext('2d');
		let canvasCopy = document.createElement('canvas');
		let copyContext = canvasCopy.getContext('2d');

		// Create original image
		let img = new Image();
		img.src = base64String;

		img.onload = function() {
			let width = img.width;
			let height = img.height;

			if (width > maxWidth || height > maxHeight) {
				const calcul = calculateAspectRatioFit(width, height, maxWidth, maxHeight);
				width = calcul.width;
				height = calcul.height;
			}

			// Draw original image in second canvas
			canvasCopy.width = img.width;
			canvasCopy.height = img.height;
			copyContext.drawImage(img, 0, 0);

			// Copy and resize second canvas to first canvas
			canvas.width = width;
			canvas.height = height;
			ctx.drawImage(canvasCopy, 0, 0, canvasCopy.width, canvasCopy.height, 0, 0, canvas.width, canvas.height);

			const dataUrl = canvas.toDataURL();
			var head = 'data:image/png;base64,';
			var imgFileSize = Math.round((dataUrl.length - head.length) * 3 / 4);
			console.log('image size', imgFileSize);
			resolve(dataUrl);
		};

		img.onerror = function() {
			reject('Error while loading image.');
		};
	});
}
