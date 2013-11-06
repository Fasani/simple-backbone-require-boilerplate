'use strict';

define([
	'jquery',
    'underscore',
    'backbone',
    //App Files
    'app/model',
    'app/collection',
    //Templates
    'text!app/tmpl/template.html'
], function($, _, Backbone, model, collection, templateHTML){

	var view = Backbone.View.extend({

		el: $('#container'),

		initialize: function() {
			this.render();
		},

		render: function(){

			var data = {
				'name': 'Michael',
				'role': 'Developer'
			};

			var compiledTemplate = _.template( templateHTML, data );

			this.$el.append( compiledTemplate );

		}

	});

  return view;

});