class Item < ApplicationRecord
  has_many :lists_items
  has_many :lists, through: :list_items
end
