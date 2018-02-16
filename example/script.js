$(document).ready(function () {
    $('#upload-file').imageReader({
        onload: function (img) {
            console.log({
                width: img.width,
                height: img.height
            });
        }
    });
});