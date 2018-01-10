# TIMO - Website

The Timo-Website to control and administer the Machine.

Simple Angular-Page that listens to Sockets and calls to data / settings / player(Socket)

## Installation

TODO: how to copy

## Pages

TODO Better writing 

* Start -> What is running (big), status,
* Karten -> Tabelle ID, Source, Link (+), (Write Card), (Play)
* Einstellungen -> Settings

* Navbar top-right: Controls (Pause, Play, running info)

## Design

### Framework

* [Bootstrap 4](http://getbootstrap.com/)
* [Bootstrap-Material](https://fezvrasta.github.io/bootstrap-material-design/)

### Logo

![The Logo](https://github.com/TeamTIMO/timo-website/raw/master/assets/images/logo.png "The Logo")

Sublogos created with [https://realfavicongenerator.net/](https://realfavicongenerator.net/)

### Color-Palette

* darkPrimaryColor:   #689F38
* primaryColor:       #8BC34A
* lightPrimaryColor:  #DCEDC8
* textPrimaryColor:   #212121
* accentColor:        #FFC107
* primaryTextColor:   #212121
* secondaryTextColor: #757575
* dividerColor:       #BDBDBD

![The Color Palette](https://github.com/TeamTIMO/timo-website/raw/master/docs/palette.png "The Color Palette")

Link: [https://www.materialpalette.com/light-green/amber](https://www.materialpalette.com/light-green/amber)

Navbar-Styling by [https://work.smarchal.com/twbscolor/](https://work.smarchal.com/twbscolor/)

## Developer Information

To rebuild the Website under ./dist, simply call build.sh or perform the steps in the file manually.

### Framework

* [Angular](https://angular.io/)


---

## TODO

* yarn
* code
	* start
	* karten tabelle
	* einstellungen (inputs, save)
* ang basics
* bootstrap
* navbar + colorscheme
* header -> Demo
* README better, als deps
* build script (css/js/pug -> compile, minify)

HEAD
link(rel="apple-touch-icon", sizes="180x180", href="images/apple-touch-icon.png")
link(rel="icon", type="image/png", sizes="32x32", href="images/favicon-32x32.png")
link(rel="icon", type="image/png", sizes="16x16", href="images/favicon-16x16.png")
link(rel="manifest", href="images/manifest.json")
link(rel="mask-icon", href="images/safari-pinned-tab.svg", color="#8bc34a")
link(rel="shortcut icon", href="images/favicon.ico")
meta(name="msapplication-config", content="images/browserconfig.xml")
meta(name="theme-color", content="#8bc34a")