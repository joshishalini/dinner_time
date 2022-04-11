Rails.application.routes.draw do
  root 'recipes#index'

  resources :recipes do
    collection do 
      get :get_recipes
    end
  end
end
