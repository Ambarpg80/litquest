class Child < ApplicationRecord
  include Profileable
  
  has_one :user_profile, as: :profileable, dependent: :destroy
  
  belongs_to :parent, optional: true
  has_many :reviews, dependent: :destroy
  has_many :books, through: :reviews


  validates :name, presence: true

  # def find_book
  #   # byebug
  #  books= self.books
  #  book_n_reviews= books.map do |book| 
  #  found_reviews= Review.all.filter{|rev| rev.book_id == book.id}
  #  book.reviews << found_reviews
  #  end
  #  book_n_reviews
  # end

end
