window.Getable.Models.Restaurant = Backbone.Model.extend({
	urlRoot: "/api/restaurants",
	
	ratings: function () {
		this._ratings = this._ratings ||
		new Getable.Collections.Ratings([], { restaurant: this});
		return this._ratings
	},
	
	parse: function (payload) {
		if (payload.ratings) {
			this.ratings().add(payload.ratings, {parse : true});
			delete payload.ratings
		}
		
		return payload;
	}
});
