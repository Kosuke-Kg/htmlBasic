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
volta pin npm@8.19.2 
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
