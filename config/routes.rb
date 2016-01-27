Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :orders
    resources :items
  end

  root to: 'application#index'

  post 'auth/facebook', to: 'auth#facebook'
  get '*path', to: 'application#index'
end
