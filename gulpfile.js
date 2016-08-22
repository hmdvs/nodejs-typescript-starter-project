'use strict'
var del = require('del');
var gulp = require('gulp');
var concat = require('gulp-concat');
var nodemon = require("gulp-nodemon");
var rename = require('gulp-rename');
var tslint = require('gulp-tslint');
var typescript = require('gulp-typescript');
var uglify = require('gulp-uglify');
var path = require("path");
var tsProject = typescript.createProject('tsconfig.json');

// Validate typescript
gulp.task('tslint', () =>
    gulp.src('./src/**/**.ts')
        .pipe(tslint({
            formatter: 'verbose'
        }))
        .pipe(tslint.report())
);

// delete every thing in the destination folder
gulp.task('clean', function () {
    return del([
        'dist/**/*'
    ]);
});

// build the app for dev
gulp.task('build', ['tslint', 'clean'], function () {
    var tsResult = tsProject.src()
        .pipe(typescript(tsProject));

    return tsResult.js
        .pipe(gulp.dest('./dist'));
});

// build the app for prod: same as dev + concat + uglify
gulp.task('build-prod', ['tslint', 'clean'], function () {
    var tsResult = tsProject.src()
        .pipe(typescript(tsProject));

    return tsResult.js
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

// watching changes in src ts files
gulp.task('watch', function () {
    gulp.watch('./src/**/*.ts', ['build']);
});

// run the app with nodemon
gulp.task("run", ["watch"], function (cb) {
    let started = false;

    let nodeServerOptions = {
        script: './dist/server.js',
        delayTime: 5,
        env: {
            'PORT': 5000
        },
        watch: ["./dist/server.js"]
    }

    return nodemon(nodeServerOptions)
        .on("restart", function () {
            console.log("restarting server");
        })
        .on("start", function () {
            console.log("starting UP server");
            if (!started) {
                started = true;
                cb();
            }
        })
        .on("crash", function () {
            console.log("Server crashed");

        })
        .on("exit", function () {
            console.log("clean exit");
        })
});

gulp.task('default', ['run']);