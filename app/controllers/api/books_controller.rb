class Api::BooksController < ApplicationController

    def index
        @books = Book.joins(:shelves).where('shelf.id' => params[:id])
        render :index
    end

    def show
        @book = Book.find_by(params[:id])
        render :show
    end

end