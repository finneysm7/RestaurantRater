class RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
  end
  
  def show
    @restaurant = Restaurant.find(params[:id])
  end
  
  def new
    @restaurant = Restaurant.new
  end
  
  def create
    @restaurant = Restaurant.new(rest_params)
    if @restaurant.save
      redirect_to restaurant_url(@restaurant)
    else
      flash.now[:errors] = @restaurant.errors.fullmessages
      render :new
    end
  end
  
  def edit
    @restaurant = Restaurant.find(params[:id])
  end
  
  def update
    @restaurant = Restaurant.find(params[:id])
    if @restaurant.update_attributes(rest_params)
      redirect_to restaurant_url(@restaurant)
    else
      flash.now[:errors] = @restaurant.errors.full_messages
      render :edit
    end
  end
  
  def destroy
    @restaurant = Restaurant.find(params[:id])
    @restaurant.destroy
    redirect_to restaurants_url
  end
  
  private
  def rest_params
    params.require(:restaurant).permit(:name, :description, :location)
  end
end