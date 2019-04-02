class Api::BooksController < ApplicationController

    def index
        shelf = Shelf.find(params[:id])
        @books = shelf.books
        render :index
    end

    def show
        @book = Book.find_by(params[:id])
        render :show
    end

end