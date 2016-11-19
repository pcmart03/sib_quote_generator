const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

gulp.task('build', () => {
    return gulp.src([
        "_js/quote_list.js",
        "_js/quote_gen.js"])
    .pipe(concat("quote_gen_dest.js"))
    .pipe(babel({
        presets: ['es2015']
        }))
    .pipe(gulp.dest('js'));
    });