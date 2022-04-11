Rails.application.routes.draw do
  root 'recipes#index'

  namespace :api, defaults: { format: 'json' } do
    resources :recipes, only: [:index, :show]
  end

  match '*path', to: 'recipes#index', via: :all
end
