class Api::RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
    render :json => @restaurants
  end
  
  def show
    @restaurant = Restaurant.find(params[:id])
    render "api/restaurants/show"
  end
  
  def new
    @restaurant = Restaurant.new
  end
  
  def create
    @restaurant = Restaurant.new(rest_params)
    if @restaurant.save
      render :json => @restaurant
    else
      render :json => @restaurant.errors, :status => :unprocessable_entity
    end
  end
  
  def edit
    @restaurant = Restaurant.find(params[:id])
  end
  
  def update
    @restaurant = Restaurant.find(params[:id])
    if @restaurant.update_attributes(rest_params)
      render :json => @restaurant
    else
      render :json => @restaurant.errors, :status => :unprocessable_entity
    end
  end
  
  def destroy
    @restaurant = Restaurant.find(params[:id])
    @restaurant.destroy
    render :json => @restaurant
  end
  
  private
  def rest_params
    params.require(:restaurant).permit(:name, :description, :location)
  end
end