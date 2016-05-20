# jQuery Image Reader
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/ipanardian/jquery-image-reader/issues) 
[![Join the chat at https://gitter.im/ipanardian/jquery-image-reader](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ipanardian/jquery-image-reader)
[![Release](https://img.shields.io/badge/release-v1.0.0-orange.svg)](https://github.com/ipanardian/jquery-image-reader/releases)
[![Dependencies](https://img.shields.io/badge/dependencies-jQuery%202.x-blue.svg)](https://jquery.com/)
[![GitHub license](https://img.shields.io/badge/license-MIT-red.svg)](https://raw.githubusercontent.com/ipanardian/jquery-image-reader/master/LICENSE)
[![HitCount](https://hitt.herokuapp.com/ipanardian/jquery-image-reader.svg)](https://github.com/ipanardian/jquery-image-reader)

A jQuery plugin that previews image very fast without needing to upload to your server.

This plugin implement FileReader API so you can asynchronously read the contents and avoid server uploads of raw user files.  You can also pre-treat content like fill text or pixel manipulation before you manually upload user content to your servers.

## Demo
[http://indosystem.github.io/jquery-image-reader](http://indosystem.github.io/jquery-image-reader)

## Usage
```html
<!-- HTML -->
<input type="file" id="upload-file" multiple /><br/>
<div id="image-preview"></div>
```

```js
// Simple call
$('#upload-file').imageReader();

// With config and callback
$('#upload-file').imageReader({
  destination: '#image-preview',
  onload: function(img) {
		// your callback code
		console.log({
			width: img.width,
			height: img.height
		});
		$(img).css('margin-top', '20px');
	}
});

// Canvas
$('#upload-file').imageReader({
  renderType: 'canvas',
  onload: function(img) {
		// do some cool things with canvas
		// fill text or pixel manipulation
		var ctx = img.getContext('2d');
	    ctx.font = "20px Verdana";
	    ctx.fillStyle = "blue";
	    ctx.fillText("jQuery Image Reader", 10, 30);
	}
});
```

## Install
```
bower install jquery-image-reader  

npm i jquery-image-reader
```

## Browser compatibility
The Uncompressed file implement new features from the JavaScript ECMA-262 specification (ES6) while the compressed file has transpiled using Babel.js into equivalent code.
 
Tested on Chrome 49, Safari 9.1, Firefox 43. Chrome and Firefox for Android. iPhone 5 & 6s

[https://developer.mozilla.org/en-US/docs/Web/API/FileReader#Browser_compatibility] (https://developer.mozilla.org/en-US/docs/Web/API/FileReader#Browser_compatibility)

## License
The MIT License (MIT)
