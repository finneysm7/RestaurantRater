window.Getable.Collections.Restaurants = Backbone.Collection.extend({
	url: "/api/restaurants",
	model: Getable.Models.Restaurant,
	
	getOrFetch: function(id) {
	  	var restaurant = this.get(id)
	  	var restaurants = this
	  	if(!restaurant){
	  		restaurant = new Getable.Models.Restaurant({ id: id })
	  		restaurant.fetch({
	  			success: function(){
	  				restaurants.add(restaurant)
	  			}
	  		})
	  	} else {
	  		restaurant.fetch()
	  	}

	  	return restaurant
	  }
});

Getable.Collections.restaurants = new Getable.Collections.Restaurants();
Getable.Collections.restaurants.fetch();