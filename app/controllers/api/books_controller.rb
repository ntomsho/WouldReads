class Api::BooksController < ApplicationController

    def index
        shelf = Shelf.find(params[:id])
        @books = shelf.books
        render :index
    end

    def show
        @book = Book.find(params[:id])
        render :show
    end

end