class BooksController < ApplicationController

    def index 
        render json: Book.all, status: :ok
    end


    private 
    def book_params
        params.permit(:title, :author, :publisher, :genre, :thumbnail_url)
    end
end
# title author publisher genre thumbnail_url