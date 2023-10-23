class ChildrenController < ApplicationController
    skip_before_action :authorize , only: :create

    def index 
        kids = Child.all
        render json: kids, status: :ok
    end

    def show
        child = Child.find(params[:id])
        render json: child, status: :ok
    end

    def create 
        new_profile = UserProfile.new(email: params[:email], 
                                      age: params[:age], 
                                      username: params[:username], 
                                      password: params[:password], 
                                      password_confirmation: params[:password_confirmation],
                                      )
        new_profile.profileable = Child.create!(child_params)
        new_profile.save
        render json: new_profile.profileable, status: :created
    end

    def update 
        child = Child.find(params[:id])
        child.update(child_params)
        render json: child, status: :accepted
    end

    def destroy
        child = Child.find_by(id: params[:id])
        child.destroy
        head :no_content
    end


    private

    def child_params
        params.permit(:parent_id, :name, :image_url, :rewards)
    end
    

end
