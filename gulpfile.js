/**
 * Babel and uglify
 * 2016 Ipan Ardian
 */

const VERSION = '1.1.0'

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	babel = require("gulp-babel");

var paths = {
	scripts : 'jquery.imagereader-'+VERSION+'.js',
	suffix : '.min',
	dest : './'
};

gulp.task('default', function(){
	return gulp.src(paths.scripts)
		.pipe(babel())
		.pipe(uglify({
			preserveComments: function (node, comment) {
				return /\/\//.test(comment.value);
			}
		}))
		.pipe(rename({
			suffix: paths.suffix
		}))
		.pipe(gulp.dest(paths.dest));
});