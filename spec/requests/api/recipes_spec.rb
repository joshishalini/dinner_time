require "rails_helper"

RSpec.describe "Api::Recipes", type: :request do
  describe "GET /index" do
    subject(:get_recipes) { get api_recipes_path, params: params }

    context "No Recipe present" do
      let(:params) { nil }

      it "return settings" do 
        get_recipes
        expect(response.body).to eq({"recipes"=> []}.to_json)
      end
    end

    context "Recipes present" do
      let!(:recipe1) { Recipe.create!(title: "Golden Sweet Cornbread", ingredients: "1 cup all-purpose flour|1 cup yellow cornmeal|⅔ cup white sugar", author: "bluegirl") }
      let!(:recipe2) { Recipe.create!(title: "Monkey Bread I", ingredients: "1 cup white sugar|½ cup chopped walnuts|½ cup raisins|1 cup all-purpose flour", author: "deleteduser") }
      let!(:recipe3) { Recipe.create!(title: "Whole Wheat Beer Bread", ingredients: "1 ½ cups all-purpose flour|4 ½ teaspoons baking powder", author: "Betty Latvala") }

      context "No params present" do
        let(:params) { nil }

        it "return settings" do 
          get_recipes
          expect(response.body).to eq({"recipes"=> [recipe1, recipe2, recipe3]}.to_json)
        end
      end

      context "When params present and recipe present" do
        let(:params) do
          {"ingredients"=>"sugar,walnuts"}
        end

        it "return settings" do 
          get_recipes
          expect(response.body).to eq({"recipes"=> [recipe2]}.to_json)
        end
      end

      context "When as params flour" do
        let(:params) do
          {"ingredients"=>"flour"}
        end

        it "return all settings as flour is present in all recipes" do 
          get_recipes
          expect(response.body).to eq({"recipes"=> [recipe1, recipe2, recipe3]}.to_json)
        end
      end

      context "When params present and recipe not present" do
        let(:params) do
          {"ingredients"=>"sugar,not present"}
        end

        it "return settings" do 
          get_recipes
          expect(response.body).to eq({"recipes"=> []}.to_json)
        end
      end
    end
  end
end
# select(:id, :title, :ingredients, :author, :image)
# select(:id, :title, :ingredients, :author, :image)