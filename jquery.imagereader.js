/**
*  jQuery Image Reader v1.0-beta
*  (c) 2016 Ipan Ardian
*
*  A jQuery plugin that previews image very fast without needing to upload to your server
*  For details, see the web site: https://github.com/ipanardian/jquery-image-reader
*  MIT License
*/

(function (factory) {
	// Start UMD
	if (typeof define === 'function' && define.amd) {
		// AMD (Register as an anonymous module)
		define(['jquery'], factory);
	} 
	else if (typeof module === 'object' && module.exports) {
		// Node/CommonJS
		module.exports = function( root, jQuery ) {
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
		// Browser globals
		factory(jQuery);
	}
}(function ($) {
	$.fn.imageReader = function (options) {
		// Default options
		var defaults = {
			destination: '#image-preview',
			onload: function() {}
		};
		var settings = $.extend({}, defaults, options);
		// Loop each object
		return this.each(function() {
			// Register onChange jQuery Event
			$(this).on('change', function() {
				var file;
				var destination = $(settings.destination);
				destination.html('');
				// Loop for multple files
				for(var x = 0, xlen = this.files.length; x < xlen; x++) {
					file = this.files[x];
					// Primitive Validate image
					if(file.type.indexOf('image') != -1) { 
						// Create instance FileReader API
						var reader = new FileReader();
						// Triggered when reading operation is successfully completed
						reader.onload = function(e) {
							// Insert content into Image object
							var img = new Image();
							img.src = e.target.result;
							destination.append(img);
							// Call onload for callback
							settings.onload.call(img);
						};
						// Starts reading the contents
						reader.readAsDataURL(file);
					}
				}
			});
		});
	}
}));