class Api::RatingsController < ApplicationController
  def index
    @ratings = Rating.all
    render :json => @ratings
  end
  
  def show
    @rating = Rating.find(params[:id])
  end
  
  def new
    @rating = Rating.new
  end
  
  def create
    rating = Rating.new(rating_params)
    rating.restaurant_id = params[:restaurant_id]
    rating.save
    flash[:errors] = rating.errors
    render :json => rating
  end
  
  def edit
    @rating = Rating.find(params[:id])
  end
  
  def update
    @rating = Rating.find(params[:id])
    if @rating.update_attributes(rating_params)
      redirect_to restaurant_url(@rating.restaurant_id)
    else
      flash.now[:errors] = @rating.errors.full_messages
      render :edit
    end
  end
  
  def destroy
    @rating = Rating.find(params[:id])
    @rating.destroy
    redirect_to restaurant_url(@rating.restaurant_id)
  end
  
  private
  def rating_params
    params.require(:rating).permit(:value, :description)
  end
end