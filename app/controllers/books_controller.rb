class BooksController < ApplicationController

    def index 
        render json: Book.all, status: :ok
    end


    private 
    # def book_params
    #     params.permit(:title, :author, :publisher, :genre)
    # end
end
