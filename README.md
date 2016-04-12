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
```

## Install
```
bower install jquery-image-reader
```

## Browser compatibility
[https://developer.mozilla.org/en-US/docs/Web/API/FileReader#Browser_compatibility] (https://developer.mozilla.org/en-US/docs/Web/API/FileReader#Browser_compatibility)
