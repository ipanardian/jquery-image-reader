/**
*  jQuery Image Reader v1.0-beta
*  (c) 2016 Ipan Ardian
*
*  A jQuery plugin that previews image very fast without needing to upload to your server
*  For details, see the web site: https://github.com/ipanardian/jquery-image-reader
*  The MIT License
*/

(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} 
	else if (typeof module === 'object' && module.exports) {
		module.exports = (root, jQuery) => {
			if ( jQuery === undefined ) {
				if ( typeof window !== 'undefined' ) {
					jQuery = require('jquery');
				}
				else {
					jQuery = require('jquery')(root);
				}
			}
			factory(jQuery);
			return jQuery;
		};
	} 
	else {
		factory(jQuery);
	}
}($ => {
	$.fn.imageReader = function (options) {
		var defaults = {
			destination: '#image-preview',
			onload: () => {}
		};
		var settings = Object.assign(defaults, options);

		if ('FileReader' in window) {

			return this.each(function () {
				$(this).on('change', () => {
					var file;
					var destination = $(settings.destination);
					destination.html('');

					for(var x = 0, xlen = this.files.length; x < xlen; x++) {
						file = this.files[x];
						
						if(file.type.indexOf('image') != -1) { 
							
							var reader = new FileReader();
							reader.onload = e => {
								var img = new Image();
								img.src = e.target.result;
								destination.append(img);
								settings.onload.call(img);
							};
							reader.readAsDataURL(file);
						}
					}
				});
			});
		}
		else {
			console.log('Your browser does not support FileReader API');
		}
	}
}));