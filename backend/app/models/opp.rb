class Opp < ApplicationRecord
    has_many :user_opps
    has_many :users, through: :user_opps
    belongs_to :shelter
end
