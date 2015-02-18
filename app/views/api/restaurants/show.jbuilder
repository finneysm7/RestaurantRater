json.extract! @restaurant, :id, :name, :description, :location

json.ratings(@restaurant.ratings)