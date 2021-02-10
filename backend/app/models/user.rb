class User < ApplicationRecord
    has_secure_password
    has_many :user_opps
    has_many :opps, through: :user_opps

    validates :first_name, :last_name, :email, :username, :password, :age, presence: true
    validates :email, :username, uniqueness: { case_sensititve: false }
end
