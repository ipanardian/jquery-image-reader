/**
*  jQuery Image Reader. Beta Version
*  (c) 2016 Ipan Ardian
*
*  A jQuery plugin that reading image fastly without need uploading to server
*  For details, see the web site: https://github.com/ipanardian/jquery-image-reader
*/

(function ($) {
	$.fn.imageReader = function (options) {
		var defaults = {
			destination: '#image-preview',
			onload: function() {}
		};
		var settings = $.extend({}, defaults, options);

		return this.each(function() {
			$(this).on('change', function() {
				var file;
				var destination = $(settings.destination);
				destination.html('');

				for(var x = 0, xlen = this.files.length; x < xlen; x++) {
					file = this.files[x];

					if(file.type.indexOf('image') != -1) { 
						var reader = new FileReader();

						reader.onload = function(e) {
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
})(jQuery)