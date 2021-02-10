class Shelter < ApplicationRecord
    has_many :user_opps
    has_many :opps
    has_many :users, through: :user_opps
end
