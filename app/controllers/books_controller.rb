class BooksController < ApplicationController

    def index 
        render json: Book.all, except: [:created_at, :updated_at], status: :ok
    end


    private 
    # def book_params
    #     params.permit(:title, :author, :publisher, :genre)
    # end
end
