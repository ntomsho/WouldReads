class Api::BooksController < ApplicationController

    def index
        shelf = Shelf.find(params[:id])
        @books = shelf.books
        render :index
    end

    def create
        debugger
        @shelf_book = ShelfBook.new(shelf_book_params)
        default_shelves = Shelf.select('id').where(:user_id => current_user.id).where(:default_shelf => true).to_a
        all_shelf = Shelf.select('id').where(:user_id => current_user.id).where(:title => "All")
        if default_shelves.include?(@shelf_book.shelf_id)
            debugger
            old_book = ShelfBook.find_by(shelf_id: @shelf_book.shelf_id, book_id: @shelf_book.book_id)
            old_book.destroy
        end
        if @shelf_book.save!
            all_book = ShelfBook.new(shelf_id: all_shelf, book_id: @shelf_book.book_id)
            @book = Book.find(@shelf_book.book_id)
            render "api/books/show"
        else
            render json: @shelf_book.errors.full_messages, status: 422
        end
    end

    def show
        @book = Book.find(params[:id])
        render :show
    end

    def destroy
        @shelf_book = ShelfBook.find(params[:id])
        shelf_book = @shelf_book
        @shelf_book.destroy
        render json: shelf_book
    end

private

    def shelf_book_params
        params.require(:shelf_book).permit(:book_id, :shelf_id)
    end

end