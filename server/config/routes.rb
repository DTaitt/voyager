Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'api/restaurants', to: 'restaurants#index'
  # resources :restaurants # resources will make the path go to restaurants/index
  get 'api/bars', to: 'bars#index'
  get 'api/menscloth', to: 'menscloth#index'
  get 'api/womenscloth', to: 'womenscloth#index'
end
