class UserProfilesController < ApplicationController
    

    def index 
        profiles = UserProfile.all
        render json: profiles, status: :ok
    end

    def show
        profile = UserProfile.find(params[:id])
        render json: profile, status: :ok
    end

    def create
            profile = UserProfile.create(user_profile_params)
            render json: new_profile, status: :created
    #     else
    #         render json: {error: "UserProfile can't be created"}, status: :unprocessable_entity
        
    #   end
    end

    def update             
        profile = UserProfile.find(params[:id])
        profile.update(user_profile_params)
        render json: profile, status: :accepted
    end

    def destroy
        profile = UserProfile.find_by(id: params[:id])
        profile.destroy
        head :no_content
    end


    private

    def user_profile_params
        params.permit(:name, :age, :username, :email, :password, :password_confirmation, :profileable_type, :profileable_id )
    end

end
