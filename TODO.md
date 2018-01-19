* index.pug
	* navbar -> player (what, play/pause, stop, vol-, vol+)

* templates
	* start
	* new-card
		* form
		* buttons
			* cancel
			* save
	* write-card
		* on call send to io server > prep for write
			* text preparing...
		* on ok show instructions
			* text place card
		* listen for io > card detected
			* text card OK, writing
		* listen for io > card written
			* text now remove card
			* activate close button

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
		* sort
		* filter
	* write-card
	* new-card
		* cancel
		* return item