class BooksController < ApplicationController
    
    def index 
        user = current_user.profileable
        # byebug
        users_books = user.books
        render json: users_books, status: :ok
    end

    def show
        book = Book.find(params[:id])
        render json: book, status: :ok
    end

    def create 
        child = current_user.profileable
        # byebug
        new_book = child.books.create!(book_params)
        new_book.valid?
        render json: new_book, status: :created
    end

    def update 
        user = current_user.profileable
        book = user.books.find_by(id: params[:id])
        book.update!(book_params)
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