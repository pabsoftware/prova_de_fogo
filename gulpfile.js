const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    resultado = gulp.src('./src/styles/*.scss')
                .pipe(sass({ outputStyle: 'compressed'}))
                .pipe(gulp.dest('./dist/css'));
    return resultado
}


exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}
