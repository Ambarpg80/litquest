class BooksController < ApplicationController
    skip_before_action :authorize , only: [:index, :create ]

    def index 
        child = current_user.profileable
        childs_books = child.books
        render json: childs_books, status: :ok
    end

    def show
        book = Book.find(params[:id])
        render json: book, status: :ok
    end

    def create 
        
        new_book = Book.create!(book_params)
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

    def find_child
        Child.find_by(id: user[:profileable_id])
    end

end
# title author publisher genre thumbnail_url preview
# title: author: publisher: genre: thumbnail_url: preview: