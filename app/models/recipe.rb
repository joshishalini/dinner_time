class Recipe < ApplicationRecord
	validates :title, presence: true
  validates :ingredients, presence: true
end
