var gulp = require('gulp'),
	browserSync = require('browser-sync').create();

var config = {
	browsersync: {
		watch: [
		'index.html',
		'slides/*.md'
		]
	}
}

gulp.task('serve', function(){
	browsersync.init({
		server: './'
	});
	gulp.watch(config.browsersync.watch).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);