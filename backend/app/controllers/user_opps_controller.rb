class UserOppsController < ApplicationController

   def index
      user_opp = UserOpp.all
      render json: user_opp 
   end

   def create
      user_opp = UserOpp.create(user_id:params[:user_id], opp_id:params[:opp_id])
      render json: user_opp
   #  redirect '/opps' 
   end

end
