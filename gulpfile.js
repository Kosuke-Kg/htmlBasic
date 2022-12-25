const gulp = require('gulp')
const dartSass = require('gulp-sass')(require('sass'))
const cached  = require('gulp-cached')
const notify = require('gulp-notify')
const plumber = require('gulp-plumber')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const mediaQueries = require('gulp-group-css-media-queries')
const minifyCss = require("gulp-minify-css")
const rename = require("gulp-rename")

const path = {
    css: {
        dir: "./src/css",
        src: "./src/css/style.css"
    },
    scss: {
        src: "./src/sass/**/*.scss",
        main: "./src/sass/style.scss",
        dest: "./src/css"
    }
}

const watchFiles = () => {
    gulp.watch(path.scss.src, sass)
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
            cached(cached('scss'))
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
        // ソースマップ生成
        .pipe(
            sourcemaps.write(
                path.css.dir,
                ""
            )
        )
        .pipe(
            rename({
                extname: '.min.css'
            })
        )
        // コンパイルしたcss出力
        .pipe(
            gulp.dest(path.css.dir)
        )
}

exports.sass = sass
exports.watch = watchFiles
