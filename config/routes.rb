Rails.application.routes.draw do
  root 'users#index'

  get '/gallery' => 'users#gallery'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
