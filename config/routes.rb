Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # namespace :api do
  # Defines the root path route ("/")
  #  root "books#index"
  resources :books, only: [:index, :show,:create, :update, :destroy]
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  resources :children, only: [:index, :create, :update, :destroy]
  resources :parents, only: [:index, :show, :create, :update, :destroy] 
  resources :user_profiles, only: [:index, :update, :destroy]

  # delete "me/reviews", to: "review#destroy_all"

  get "/me/children", to: "children#show_children"
  post "/me/children", to: "children#create"
  get "me/children/:id", to: "children#show"
  
  get "/me", to: "user_profiles#show"  #sign user in automatically on re-render
  post "/signup", to: "user_profiles#create" #create user account

  post "/login", to: "sessions#create"   #creates a session- logs user in
  delete "/logout", to: "sessions#destroy" #deletes session_id - logs user out
  # end
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
