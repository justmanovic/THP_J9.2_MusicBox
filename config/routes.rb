Rails.application.routes.draw do
  resources :static_pages
  get "/", to:'staticpages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
