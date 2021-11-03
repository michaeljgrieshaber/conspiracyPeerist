Rails.application.routes.draw do
  resources :users
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
