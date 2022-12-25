const gulp = require('gulp')
const dartSass = require('gulp-sass')(require('sass'))
const notify = require('gulp-notify')
const plumber = require('gulp-plumber')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const mediaQueries = require('gulp-group-css-media-queries')
const minifyCss = require("gulp-minify-css")
const rename = require("gulp-rename")
const changed = require('gulp-changed')
const imagemin = require('gulp-imagemin')
const mozJpeg = require('imagemin-mozjpeg')
const pngquant = require('imagemin-pngquant')

const path = {
    css: {
        dir: "./release/src/css",
    },
    scss: {
        src: "./src/sass/**/*.scss",
        main: "./src/sass/style.scss",
        dest: "./src/css"
    },
    img: {
        release: "./release/src/img",
        src: "./src/img"
    }
}

const watchFiles = () => {
    gulp.watch(path.scss.src, sass)
    gulp.watch("./src/img/**", imageTask)
}

const sass = () => {
    return gulp
        // watchするsassファイル
        .src(path.scss.main)
        // 強制停止防止
        .pipe(
            plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        }))
        // Sassファイルのキャッシュ
        .pipe(
            changed(path.css.dir)
        )
        // ソースマップを初期化
        .pipe(
            sourcemaps.init("")
        )
        // Sassをコンパイルする
        .pipe(
            dartSass(
                {outputStyle: 'expanded'},
                {outputStyle: 'expanded'}
            )
        )
        // プレフィックスを付与
        .pipe(
            autoprefixer({
              cascade: true
            })
        )
        // メディアクエリの最適化
        .pipe(
            mediaQueries()
        )
        // コンパイルしたcss出力
        .pipe(
            gulp.dest(path.css.dir)
        )
        // cssの軽量化
        .pipe(minifyCss({
            advanced: false
        }))
        .pipe(
            rename({
                extname: '.min.css'
            })
        )
        // ソースマップ生成
        .pipe(
            sourcemaps.write(
                './',
                ""
            )
        )
        // コンパイルしたcss出力
        .pipe(
            gulp.dest(path.css.dir)
        )
}

const imageTask = () => {
    return (
        // 監視ディレクトリ
        gulp.src("./src/img/**")
            .pipe(
                changed(path.img.release)
            )
            .pipe(
                imagemin([
                    pngquant({
                        quality: [.60, .70],
                        speed: 1
                    }),
                    mozJpeg({
                        quality: 0.75
                    }),
                    imagemin.svgo(),
                    imagemin.optipng(),
                    imagemin.gifsicle({
                        optimizationLevel: 3
                    })
                ])
            )
            .pipe(
                gulp.dest(path.img.release)
            )
    )
}

exports.sass = sass
exports.imageTask = imageTask
exports.watch = watchFiles
