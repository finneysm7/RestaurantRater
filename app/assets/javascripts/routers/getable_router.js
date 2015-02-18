window.Getable.Routers.GetRouter = Backbone.Router.extend({
	routes: {
		"": "restsIndex",
		"restaurants/new": "restsNew",
		"restaurants/:id": "restsShow"
	},
	
	restsIndex: function() {
		var indexView = new Getable.Views.RestIndex({
			collection: Getable.Collections.restaurants
		});
		this._swapView(indexView);
	},
	
	restsNew: function () {
		var newView = new Getable.Views.RestsNew();
		this._swapView(newView);
	},
	
	restsShow: function (id){
		var restaurant = Getable.Collections.restaurants.getOrFetch(id);
		var showView = new Getable.Views.RestsShow({
			model: restaurant
		});
		
		this._swapView(showView)
	},
	
	_swapView: function (newView) {
		if (this.currentView){
			this.currentView.remove();
		}
		
		$("body").html(newView.render().$el);
		
		this.currentView = newView;
	}
})