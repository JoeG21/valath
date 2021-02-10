class OppsController < ApplicationController
    before_action :find_opp, only: [:show,:update,:destroy]

    def index 
        @opps = Opp.all
        render json: @opps
    end

    def create
        @opps = Opp.new(opp_params)
        render json: opp, status: 201
    end

    def update
        @opp.update(opp_params)
        render json: @opp, status: 200
    end

    def destroy
        oppId = @opp.id
        @opp.destroy
        render json: {message: 'Delete', oppId:oppId}
    end

    def show
        @opp = find_opp
        render json: @opp, status: 200
    end


    private

    def opp_params
        params.permit(:title, :des, :date, :howlong, :shelter_id)
    end

    def find_opp
        @opp = Opp.find(params[:id])
    end
end
