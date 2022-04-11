module Api
  class RecipesController < ApplicationController
    def index
      if params[:ingredients].present?
        @recipes = Recipe.where("ingredients like ?", "%#{params[:ingredients].split(",").join("%")}%")
      else
        @recipes = Recipe.first(10)
      end
      render json: { recipes: @recipes}
    end

    def show
      @recipe = Recipe.find(params[:id])
      if @recipe.present?
        render json: { recipe: params }
      else
        render json: {status: 404, message: "Not found"}
      end
    end
  end
end