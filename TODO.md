* index.pug
	* navbar -> player (what, play/pause, stop, vol-, vol+)

* templates
	* start
	* new-card
	* write-card

* controllers
	* main
		* connect to socket https://www.html5rocks.com/en/tutorials/frameworks/angular-websockets/
		* get now playing from player into rootscope
		* set provider URLS
		* set PlayerVars in rootScope
		* onSocket Update NowPlaying
	* start
		* Darstellung Player
		* Status
	* karten tabelle
		* load table
		* edit
		* delete
		* sort
		* filter
		* add
	* einstellungen (inputs, save)
		* load settings
		* edit
	* write-card
	* new-card
		* cancel
		* return item