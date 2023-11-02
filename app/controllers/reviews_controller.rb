class ReviewsController < ApplicationController
    skip_before_action :authorize , only: [:index, :create]
    
    def index 
        reviews = Review.all
        render json: reviews, status: :ok
    end

    def show
        review = Review.find(params[:id])
        render json: review, status: :ok
    end

    def create 
        new_review = Review.create!(review_params)
        if new_review.valid?
        render json: new_review, status: :created
        end
    end

    def update 
        user = current_user.profileable
        review = Review.find_by(id: params[:id]) 
        if user&.id == review.child_id
        review.update!(review_params)
        render json: review, status: :accepted
        end
    end

    def destroy
        user = current_user.profileable
        review = Review.find_by(id: params[:id]) 
        if user&.id == review.child_id
        review.destroy
        head :no_content
        end
    end
  


    private

    def review_params
        params.permit(:child_id, :book_id, :summary, :rating)
    end
end
