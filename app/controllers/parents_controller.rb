class ParentsController < ApplicationController
    
    
    def index 
        adults = Parent.all
        render json: adults, status: :ok
    end

    def show
        Parent = Parent.find(params[:id])
        render json: Parent,  status: :ok
    end

    def create 
        new_parent = Parent.create(parent_params) 
        # new_adult.create_profile(profile_params)
        render json: new_adult, status: :created
    end

    def update 
        Parent = Parent.find(params[:id])
        Parent.update(adult_params)
        render json: Parent, status: :accepted
    end

    def destroy
        Parent = Parent.find_by(id: params[:id])
        Parent.destroy
        head :no_content
    end


    private

    def parent_params
        params.permit(:email, :image_url)
    end
end
