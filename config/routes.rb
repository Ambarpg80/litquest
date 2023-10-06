Rails.application.routes.draw do
  resources :reviews
  resources :children
  resources :parents
  resources :user_profiles
  
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # namespace :api do
  
  # Defines the root path route ("/")
  #  root "books#index"
  resources :books, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show, :create, :update, :destroy]
  # end

  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


end
