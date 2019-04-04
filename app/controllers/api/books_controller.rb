class Api::BooksController < ApplicationController

    def index
        if params[:id]
            shelf = Shelf.find(params[:id])
            @books = shelf.books
            render :index
        else
            @books = Book.all
            render :index
        end
    end

    def create
        @shelf_book = ShelfBook.new(shelf_book_params)
        default_shelves = Shelf.select('id').where(:user_id => current_user.id).where(:default_shelf => true).to_a
        default_shelf_ids = default_shelves.map {|shelf| shelf.id}
        all_shelf = Shelf.select('id').where(:user_id => current_user.id).where(:title => "All")
        if default_shelf_ids.include?(@shelf_book.shelf_id)
            old_shelvings = []
            @shelf_book.book.shelf_books.select do |shelving|
                old_shelvings.push(shelving) if shelving.shelf.user_id = current_user.id
            end 
            old_shelvings.each {|shelving| shelving.destroy}
        end
        if @shelf_book.save!
            all_book = ShelfBook.create(shelf_id: all_shelf.first.id, book_id: @shelf_book.book_id)
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