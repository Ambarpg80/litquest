Rails.application.routes.draw do
  
  
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # namespace :api do
  
  # Defines the root path route ("/")
  #  root "books#index"
  resources :books, only: [:index, :show, :create, :update, :destroy]
  resources :reviews
  resources :children
  resources :parents
  resources :user_profiles, only: [:index, :show, :create, :update, :destroy]
  get "/me", to: "userprofiles#show"        #sign user in automatically on re-render
  post "/signup", to: "userprofiles#create" #create user account

  post "/login", to: "sessions#create"   #creates a session- logs user in
  delete "/logout", to: "sessions#destroy" #deletes session_id - logs user out
  # end

  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


end
