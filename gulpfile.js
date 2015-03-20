var gulp        = require('gulp');
var browserify  = require('browserify');
var run         = require('gulp-run');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var clean       = require('gulp-clean');
var nodemon     = require('gulp-nodemon');
var watchify    = require('watchify');
var source      = require('vinyl-source-stream');
var watchify    = require('watchify');
var reactify    = require('reactify');
var buffer      = require('vinyl-buffer');
var minifyCss   = require('gulp-minify-css');
var runSequence = require('run-sequence');

var path = {};

path.source = {
	entry_point: __dirname + '/client/src/main.jsx',
	assets: __dirname + '/client/assets/**/*',
	html: __dirname + '/client/*.html',
	css: __dirname + '/client/css/*.css',
	js: __dirname + '/client/**/*.js',
};

path.dist = {
	out: 'moodMap.js',
	minified_out: 'moodMap.min.js',
	dest: 'client/dist',
	js: 'client/dist/src',
	css: 'client/dist/css'
};

var handleError = function(err){
	console.log(err.toString());
	// [Question] Not sure what this does
	this.emit('end');
};

// clean our the dist folder
gulp.task('clean', function() {
  return gulp.src(path.dist.dest)
    .pipe(clean({
      force: true
    }))
    .on('error', handleError);   
});

gulp.task('browserify', function(){
	var bundler = browserify({
		entries: [path.source.entry_point],
		transform: [reactify],
		debug: true,
		cache: {}, packageCache: {}, fullPaths: true
	});

	var watcher = watchify(bundler);

	return watcher
		.on('update', function(){
			var updateStart = Date.now();
			console.log('updating on change...');
			watcher.bundle()
				.pipe(source(path.dist.out))
				.pipe(bugger())
				// TODO: Add uglify
				.pipe(gulp.dest(path.dist.js));
			console.log('update took ' + Date.now() - updateStart + 'ms');
		});
});

// browserifies js/jsx files
gulp.task('js', function(callback){
	runSequence('browserify', callback);
});

// copies files into dist folder
gulp.task('copy', function(){
	// copy html 
	gulp.src(path.source.html, {base: 'client/'})
		.pipe(gulp.dest(path.dist.dest));
	// copy assets
	gulp.src(path.source.assets).pipe(gulp.dest(path.dist.dest + '/assets'));
});

// restarts server if change to any js, jsx, html file
gulp.task('nodemon', function(){
	nodemon({
		script: 'server/app.js',
		ext: 'js jsx html',
		env: {
			'NODE_ENV': 'development'
		}
	})
	.on('restart');
});

// runs the nodemon task when the server task is run
gulp.task('server', function(){
	gulp.start('nodemon');
});

// watch files with handlers
gulp.task('watch', function(){
	gulp.watch(path.source.html, ['copy']);
});

// default task, clean dist before any other tasks
gulp.task('default', ['clean'], function(){
	runSequence('copy', 'js', 'server');
});



