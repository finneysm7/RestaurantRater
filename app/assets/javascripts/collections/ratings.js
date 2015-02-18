window.Getable.Collections.Ratings = Backbone.Collection.extend({
	url: function () {
		return this.restaurant.url() + "/ratings";
	},
	model: Getable.Models.Rating,
	
	initialize: function (models, options){
		this.restaurant = options.restaurant;
	}
});
