let gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    concat = require("gulp-concat"), 
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    pug = require('gulp-pug'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel');
    


gulp.task('sass', function () {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
         }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(browserSync.stream())
        .pipe(gulp.dest('./src/css/'));

});


gulp.task('watch', function(){
    browserSync.init({
        proxy: "http://localhost/Posokhins/public/"
    });
    gulp.watch("./src/sass/*scss", gulp.series('sass','concat'));
    gulp.watch("./src/pug/*.pug", gulp.series('pug'));
    gulp.watch("./src/js/*.js", gulp.series('js'));
});

gulp.task('concat', function() {
    return gulp.src('./src/css/main.css')
      .pipe(concat('style.css'))
      .pipe(gulp.dest('./public/'))
      .pipe(browserSync.stream())
});


gulp.task('pug', function() {
    return gulp.src('./src/pug/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('public/'))						
    .pipe(browserSync.reload({
        stream: true							
    }));
});

gulp.task('js', function () {
    return gulp.src(['./node_modules/jquery/dist/jquery.min.js', './node_modules/wow.js/dist/wow.min.js','./src/js/*.js'])
        /* .pipe(babel({
            presets: ['@babel/env']
        })) */
        .pipe(concat('main.js'))
        /* .pipe(uglify()) */
        .pipe(gulp.dest('./public/js/'))
        .pipe(browserSync.reload({
            stream: true							
        }));
});

gulp.task('fonts', function(){
    return gulp.src('./src/fonts/**/*')
        .pipe(gulp.dest('./public/fonts/'))
        .pipe(browserSync.reload({
            stream: true							
        }));
});


    
