class ParentsController < ApplicationController
    
    
    def index 
        adults = Parent.all
        render json: adults, status: :ok
    end
     

    def show
        parent = Parent.find(params[:id])
        render json: parent, status: :ok
    end

    def create 
        new_parent = Parent.create(parent_params) 
        # new_adult.create_profile(profile_params)
        render json: new_adult, status: :created
    end

    def update 
        parent = Parent.find(params[:id])
        Parent.update(adult_params)
        render json: Parent, status: :accepted
    end

    def destroy
        parent = Parent.find_by(id: params[:id])
        parent.destroy
        head :no_content
    end


    private

    def parent_params
        params.permit(:email, :image_url)
    end
end
