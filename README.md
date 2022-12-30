# Web制作

## やりたいこと
- DartSassのコンパイル
- メディアクエリの最適化
- CSSのminify
- Jsのトランスコンパイル
- 画像の画像圧縮

## 1. npmのセットアップ
```commandline
npm init
```
## 2. Voltaでnodeとnpmバージョン設定
```commandline
volta pin node@versions
volta pin npm@versions
```
## 3.gulpのインストール
```commandline
npm i gulp
```
## 4.gulpfile.jsファイルの作成
```commandline
touch gulpfile.js
```
## 4.Sassのコンパイルタスクの作成
### 1.モジュールのインストール
```commandline
npm i gulp-dart-sass
npm i gulp-plumber
npm i gulp-cached
npm i gulp-notify
npm i gulp-sourcemaps
npm i gulp-autoprefixer
npm i gulp-group-css-media-queries
npm i gulp-minify-css
```
### 2.sassのタスクを記述する
gulpfile.js内にコメント付きで記載
### 3.watchの起動
```commandline
npx gulp watch
```
## 5.画像の自動圧縮
### 1.モジュールのインストール
```commandline
npm i gulp-imagemin@7.1
npm i imagemin-pngquant
npm i imagemin-mozjpeg@9
npm i gulp-changed
```

## 6.Javascriptのトランスコンパイラ
```commandline
npm i gulp-babel 
npm i @babel/core
npm i @babel/preset-env
npm i gulp-uglify
```
## 7.ESLintの導入
## 8.Prettierの導入

参考
DartSass
https://webstudioleaf.com/blog/gulp/gulp-dart-sass2/
https://parashuto.com/rriver/development/media-queries-workflow-using-sass-and-gulp
画像圧縮
https://dezanari.com/gulp-imagemin/
https://www.asobou.co.jp/blog/web/gulp-imagemin