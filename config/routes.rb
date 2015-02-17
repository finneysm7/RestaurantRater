Rails.application.routes.draw do
  root to: "restaurants#index"
  
  resources :restaurants do
    resources :ratings, only: [:create]
  end 
  resources :ratings, except: [:create]
end
