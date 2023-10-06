class ReviewsController < ApplicationController
    def index 
        reviews = Review.all
        render json: reviews,include: [:reviewren], status: :ok
    end

    def show
        review = Review.find(params[:id])
        render json: review, include: [:reviewren], status: :ok
    end

    def create 
        new_review = Review.create(review_params)
        render json: new_review, status: :created
    end

    def update 
        review = Review.find(params[:id])
        review.update(review_params)
        render json: review, status: :accepted
    end

    def destroy
        review = Review.find_by(id: params[:id])
        review.destroy
        head :no_content
    end


    private

    def review_params
        params.permit(:child_id, :book_id, :summary, :rating)
    end
end
