Rails.application.routes.draw do
  get 'pages/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'pages#index'

  get '/data', to: "motorcycles#get_data"
  post '/add', to: "motorcycles#post_item"
  delete '/delete', to: "motorcycles#delete_item"
  put '/edit', to: "motorcycles#edit_item"
  resources :motorcycles

end

