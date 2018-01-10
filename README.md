# TIMO - Website

The Timo-Website to control and administer the Machine.

Simple Angular-Page that listens to Sockets and calls to data / settings / player(Socket)

## Installation

Copy everything under ./dist to the webserver / webspace of your choice

## Pages

### Navbar

Our Navbar is static on Top and contains:

* The Logo
* Headline "Timo" -> Links to Start
* Link Cards
* Link Settings
* Player
* * What is Running
* * Play / Pause
* * Stop
* * Volume Controls

### Start

This is the Homepage. Here we see what is running, have big controls and see the Status of timo

### Cards

A Table with all Entries, pulled from the Data-Service, filterable and sortable from every Column.

Every Entry has the ID, the Source, the Comment and the Link.

For every Entry we can edit and delete, also we can trigger a Card-Write.

A Big +-Button is floating to add a new entry via a modal overlay.

This Overlay has a Dropdown for the Source and two Input-Fielsd for the Link and the Comment.

We have 3 Buttons: Cancel, Save and Save & Write Card

### Settings

Here we have a List of Settings from the settings-Service and its values.

Every Listentry is the Name and an input-Field. 

We can edit and save (button appears after change) every setting selectively.

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

You need the Following CLI-Tools:

* yarn
* imagemin
* pug
* pug-lint
* lessc
* standard
* imagemin
* uglifycss
* uglifyjs

TODO: Add LINKS

### Framework

* [Angular](https://angular.io/)


---

## TODO

* index.pug
	* bootstrap
	* navbar + colorscheme
	* header -> Demo
* templates
	* start
	* cards
	* settings
* controllers
	* main
	* start
	* karten tabelle
	* einstellungen (inputs, save)
* dataprovider
		* Add urls
		* Add Settings


HEAD
link(rel="apple-touch-icon", sizes="180x180", href="images/apple-touch-icon.png")
link(rel="icon", type="image/png", sizes="32x32", href="images/favicon-32x32.png")
link(rel="icon", type="image/png", sizes="16x16", href="images/favicon-16x16.png")
link(rel="manifest", href="images/manifest.json")
link(rel="mask-icon", href="images/safari-pinned-tab.svg", color="#8bc34a")
link(rel="shortcut icon", href="images/favicon.ico")
meta(name="msapplication-config", content="images/browserconfig.xml")
meta(name="theme-color", content="#8bc34a")