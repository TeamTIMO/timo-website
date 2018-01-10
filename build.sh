#!/bin/bash
echo "Building Timo-Website ..."
echo "--------------------"
echo "=> Getting Yarn Components"
yarn install
echo "=> Getting Yarn Components OK"
echo "--------------------"
echo '=> Linting Files'
echo -n '==> Linting PUG ...' && pug-lint assets/html/*.pug && echo 'OK'
echo -n '==> Linting LESS ...' && lessc --lint assets/css/*.less && echo 'OK'
echo -n '==> Linting JS ...' && standard "assets/js/*.js" && echo 'OK'
echo '=> Linting Files OK'
echo "--------------------"
echo "--------------------"
echo "=> Creating html"
pug assets/html/ -o dist/
echo "=> Creating html OK"
echo "--------------------"
echo "=> Creating CSS"
touch dist/css/main.css
lessc assets/css/main.less dist/css/main.css
cp node_modules/bootstrap/dist/css/bootstrap.min.css dist/css/bootstrap.min.css
cp node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css dist/css/bootstrap-material-design.min.css
echo "=> Creating CSS OK"
echo "--------------------"
echo "=> Minify CSS"
uglifycss public/css/*.css > public/css/css.min.css
echo "=> Minify CSS OK"
echo "--------------------"
echo "=> Copy Fonts"
cp -a node_modules/bootstrap/fonts/. dist/fonts/
echo "=> Copy Fonts OK"
echo "--------------------"
echo "=> Creating Client-JS"
cp -a assets/js/. dist/js
cp node_modules/angular/angular.min.js dist/js/angular.min.js
cp node_modules/bootstrap/dist/js/bootstrap.min.js dist/js/bootstrap.min.js
cp node_modules/bootstrap-material-design/dist/js/bootstrap-material-design.min.js dist/js/bootstrap-material-design.min.js
echo "=> Creating Client-JS OK"
echo "--------------------"
echo "=> Minify JS"
uglifyjs public/js/* -o public/js/js.min.js
echo "=> Minify JS OK"
echo "--------------------"
echo "=> Copy Images"
cp -a assets/images/. dist/images/
cp assets/images/favicon.ico dist/favicon.ico
echo "=> Copy Images OK"
echo "--------------------"
imagemin public/images/* --out-dir=public/images
echo "--------------------"
echo "Build Complete. You may now copy the Folder 'dist' to your server"


