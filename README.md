# jQuery Image Reader
A jQuery plugin that previews image very fast without needing to upload to your server.

This plugin implement FileReader API so you can asynchronously read the contents and avoid server uploads of raw user files.  You can also pre-treat content before you manually upload user content to your servers.

## Demo
[http://indosystem.github.io/jquery-image-reader](http://indosystem.github.io/jquery-image-reader)

## Usage
```html
<!-- HTML -->
<input type="file" id="upload-file" multiple /><br/>
<div id="image-preview"></div>
```

```js
// JS
$('#upload-file').imageReader();

// or
$('#upload-file').imageReader({
  destination: '#image-preview'
});

// callback
$('#upload-file').imageReader({
	onload: function() {
		// your callback code
		console.log({
			width: this.width,
			height: this.height
		});
	}
});
```

## Install
```
bower install jquery-image-reader
```

## Browser compatibility
The Source file is 100% impelemented EcmaScript 2015 (ES6) while the minified version has transpiled using Babel.js into equivalent code.
 
Tested on Chrome 49, Safari 9.1, Firefox 43. 

[https://developer.mozilla.org/en-US/docs/Web/API/FileReader#Browser_compatibility] (https://developer.mozilla.org/en-US/docs/Web/API/FileReader#Browser_compatibility)

## License
The MIT License (MIT)
