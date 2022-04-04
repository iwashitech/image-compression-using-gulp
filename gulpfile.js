const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminJpegoptim = require('imagemin-jpegoptim');
const changed = require('gulp-changed');
const newer = require('gulp-newer');

gulp.task("imagemin", function () {
    return gulp
        .src('./img_src/**/*')
        .pipe(changed('./img'))
        .pipe(newer('./img'))
        .pipe(
            imagemin([
                imagemin.optipng({
                    optimizationLevel: 7,
                }),
                imageminJpegoptim({
                    stripAll: false,
                    stripIptc: false,
                }),
                imagemin.svgo({
                    plugins: [
                        {removeDoctype: true},
                        {removeXMLProcInst: true},
                        {removeComments: true},
                        {removeMetadata: false},
                        {removeEditorsNSData: false},
                        {cleanupAttrs: true},
                        {mergeStyles: false},
                        {inlineStyles: false},
                        {minifyStyles: false},
                        {cleanupIDs: false},
                        {removeUselessDefs: false},
                        {cleanupNumericValues: false},
                        {convertColors: false},
                        {removeUnknownsAndDefaults: false},
                        {removeNonInheritableGroupAttrs: false},
                        {removeUselessStrokeAndFill: false},
                        {removeViewBox: false},
                        {cleanupEnableBackground: false},
                        {removeHiddenElems: false},
                        {removeEmptyText: false},
                        {convertShapeToPath: false},
                        {convertEllipseToCircle: false},
                        {moveElemsAttrsToGroup: false},
                        {moveGroupAttrsToElems: false},
                        {collapseGroups: false},
                        {convertPathData: false},
                        {convertTransform: false},
                        {removeEmptyAttrs: false},
                        {removeEmptyContainers: false},
                        {mergePaths: false},
                        {removeUnusedNS: false},
                        {sortDefsChildren: false},
                        {removeTitle: false},
                        {removeDesc: false},
                    ]
                }),
            ])
        )
        .pipe(gulp.dest('./img'));
});

gulp.task('watch-imagemin', function() {
    gulp.watch('./img_src/**/*', gulp.task('imagemin'));
});

gulp.task('default', gulp.parallel('watch-imagemin'));