Rails.application.routes.draw do
  root :to => "site#root"
  
  namespace :api do
    resources :restaurants do
      resources :ratings, only: [:create, :index]
    end
    resources :ratings
  end
end
