class RecipesController < ApplicationController
	def index
	end

	def get_recipes
		@recipes = Recipe.first(10)
		render json: { recipes: @recipes}
	end
end
