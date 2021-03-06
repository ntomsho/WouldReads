Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, except: [:new, :edit, :destroy]
    resource :session, only: [:create, :destroy, :show]
    resources :shelves, except: [:new, :edit]
    resources :books, only: [:index, :create, :show, :destroy]
    resources :reviews, only: [:index, :create, :show, :update]
    get '/search', to: 'books#search'
  end
  
  root "static_pages#root"
end