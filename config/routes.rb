Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  namespace :api do
  # Defines the root path route ("/")
   root "books#index"
  # resources :books, only: [:index]
  # resources :users
  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


end
