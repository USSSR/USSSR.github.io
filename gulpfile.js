var gulp = require('gulp');
var fs = require('fs');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var rimraf = require('rimraf');
var source = require('vinyl-source-stream');
var _ = require('lodash');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var reload = browserSync.reload;

var config = {
	entryFile: './src/app.js',
	outputDir: './assets/js/',
	outputFile: 'app.js'
};

var bundler;
function getBundler() {
	if (!bundler) {
		bundler = watchify(browserify(config.entryFile, _.extend({ debug: true }, watchify.args)));
	}
	return bundler;
};

function bundle() {
	return getBundler()
		.transform(babelify)
		.bundle()
		.on('error', function(err) { console.log('Error: ' + err.message); })
		.pipe(source(config.outputFile))
		.pipe(gulp.dest(config.outputDir))
		.pipe(reload({ stream: true }));
}

gulp.task('build-persistent', ['clean'], function() {
	return bundle();
});

gulp.task('build', ['build-persistent'], function() {
	process.exit(0);
});

gulp.task('watch', ['build-persistent'], function() {
	getBundler().on('update', function() {
		gulp.start('build-persistent')
	});
});

// clean the output directory
gulp.task('clean', function(cb){
	rimraf(config.outputDir, cb);
});

gulp.task('browser-sync', ['sass'], function() {
	browserSync({
		server: {
			baseDir: './'
		},
		proxy: {
			target: "localhost:8080" // can be [virtual host, sub-directory, localhost with port]
		}
	});
});

gulp.task('sass', function () {
	return gulp.src('./sass/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('watch:all', ['browser-sync', 'watch'], function () {
	gulp.watch("sass/**/*.scss", ['sass']);
	gulp.watch("*.html").on('change', browserSync.reload);
});

// WEB SERVER
gulp.task('serve', function () {
	browserSync({
		server: {
			baseDir: './'
		}
	});
});
