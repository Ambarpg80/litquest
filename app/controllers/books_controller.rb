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
        child= current_user.profileable
        new_book = child.books.new(book_params) #new book instance
        new_book.reviews.new(book_id: new_book.id, child_id: child.id, summary: params[:summary]) #new review instance
        new_book.save #save new book 
        new_book.reviews.create #save new book review
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