class ApplicationController < ActionController::API
    include ActionController::Cookies

    before_action :authorize
    
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    private
    def current_user
      user = UserProfile.find_by(id: session[:user_id])
    end
    
    def parent_or_child(params)
        if params[:age] >= 18
           Parent.create!(name: params[:name])
        else
           Child.create!(parent_id: params[:parent_id], name: params[:name])
        end
    end

    def authorize
        user = current_user
        return render json: {error: "Not Authorized. Please Login or Sign up"}, status: :unauthorized unless user
    end
    
    def render_unprocessable_entity(exception)
        # user = current_user
        render json: {errors: [exception.record.errors.full_messages]}, status: :unprocessable_entity
    end

   def render_not_found(exception)
    render json: {errors: [exception.record.errors.full_messages]}, status: :not_found
   end

end
