'use strict';
//Configure require.js
require.config({
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		}
	},
	paths: {
	    jquery: 'libs/jquery-2.0.3.min',
	    underscore: 'libs/underscore-min',
	    backbone: 'libs/backbone-min',
		text: 'libs/text'
	}
});

//Start up our App
require([
	'app/view',
], function (AppView) {
	// Initialize the application view
	new AppView();
});