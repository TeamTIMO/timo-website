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

You may also want to change the URLs of the Data and Settings Service. You can do this in this File:

_assets/js/timowebsite.js_

After the Changes you have to build the new file

You need the Following CLI-Tools:

* [yarn](https://www.npmjs.com/package/yarn)
* [pug](https://github.com/pugjs/pug-cli)
* [pug-lint](https://www.npmjs.com/package/pug-lint)
* [lessc](http://lesscss.org/)
* [standard](https://github.com/standard/standard)
* [imagemin](https://github.com/imagemin/imagemin-cli)
* [uglifycss](https://github.com/fmarcia/UglifyCSS)
* [uglifyjs](https://github.com/mishoo/UglifyJS)

### JS-Framework

* [Angular](https://angular.io/)

## Authors

* Dominik Sigmund <dominik.sigmund@webdad.eu>

## License

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>