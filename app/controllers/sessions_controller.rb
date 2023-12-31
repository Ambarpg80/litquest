class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create #login Route
        user = UserProfile.find_by(username: params[:username]) 
         if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user.profileable, status: :created
         else
          render json: {error:  "Invalid Username or Password"}, status: :unauthorized
        end 
    end

    def destroy #logout
        session.delete :user_id
        head :no_content
    end

    
end
