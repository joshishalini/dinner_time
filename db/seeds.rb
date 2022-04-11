# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
recipes = JSON.parse(File.read('public/recipes-en.json'))
recipes.each do |recipe|
  Recipe.find_or_create_by!(title: recipe.dig("title"), author: recipe.dig("author")).update!(cook_time: recipe.dig("cook_time"), prep_time: recipe.dig("prep_time"), ratings: recipe.dig("ratings"), category: recipe.dig("category"), image: recipe.dig("image"), ingredients: recipe.dig("ingredients").join("|"))
end