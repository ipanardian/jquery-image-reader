/**
 * Minify and uglify
 * Ipan Ardian
 */

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var paths = {
	scripts : 'jquery.imagereader.js',
	suffix : '.min'
};

gulp.task('default', function(){
	return gulp.src(paths.scripts)
			.pipe(uglify({
				preserveComments: function (node, comment) {
					return /\/\//.test(comment.value);
				}
			}))
			.pipe(rename({
				suffix: paths.suffix
			}))
		.pipe(gulp.dest('./'));
});