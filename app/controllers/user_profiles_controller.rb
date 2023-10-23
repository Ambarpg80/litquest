class UserProfilesController < ApplicationController
    skip_before_action :authorize , only: [:index, :create]

    def index 
        profiles = UserProfile.all
        render json: profiles, status: :ok
    end

    def show
        user_profile = current_user.profileable
        render json: user_profile, status: :ok
    end

    def create
        new_profile = UserProfile.new(user_params)
        new_profile.profileable = parent_or_child(params)
        new_profile.save
        if new_profile.valid?
            session[:user_id] = new_profile.id
            render json: new_profile.profileable, status: :created 
        else
            render json: {errors: new_profile.errors.full_messages}, status: :unprocessable_entity
        end
    end


    def update      
        profile = current_user
        profile.update(user_params)
        if profile
        render json: profile, status: :accepted
        end
    end

    def destroy
        profile = UserProfile.find_by(id: params[:id])
        profile.destroy
        head :no_content
    end

    private

    def user_params #new user parameters accpeted from client form
        params.permit( :email, :age, :username, :password, :password_confirmation, :profileable_type, :profileable_id)
    end
    
    def parent_params
        params.permit(:name, image_url: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png")
    end
end
