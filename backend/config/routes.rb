Rails.application.routes.draw do
  resources :user_opps
  resources :shelters
  resources :opps
  resources :users
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
end
