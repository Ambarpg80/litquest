class BooksController < ApplicationController

    def index 
        render json: Book.all, status: :ok
    end

    def show
        book = Book.find(params[:id])
        render json: book, status: :ok
    end

    def create 
        new_book = Book.create(book_params)
        render json: new_book, status: :created
    end

    def update 
        book = Book.find(params[:id])
        book.update(book_params)
        render json: book, status: :accepted
    end

    def destroy
        book = Book.find_by(id: params[:id])
        book.destroy
        head :no_content
    end


    private

    def book_params
        params.permit(:title, :author, :publisher, :genre, :thumbnail_url, :preview)
    end
end
# title author publisher genre thumbnail_url preview
# title: author: publisher: genre: thumbnail_url: preview: