class BooksController < ApplicationController
    skip_before_action :authorize , only: [:index, :create ]

    def index
        books = Book.all
        render json: books, status: :ok
    end


    def show
        book = Book.find(params[:id])
        render json: book, status: :ok
    end

    def create 
        child= current_user.profileable
        new_book = Book.create!(book_params)
        new_book.reviews.create!(book_id: new_book.id, child_id: child.id, summary: params[:summary], rating: params[:rating] )
        new_book.valid?
        render json: new_book, status: :created
    end

    def update 
        user = @user.profileable
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

    def current_user
        UserProfile.find_by(id: session[:user_id])
    end
end
