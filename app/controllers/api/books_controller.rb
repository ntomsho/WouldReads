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

    def search
        # @books = Book.where(:title => )
    end

    def create
        @shelf_book = ShelfBook.new(shelf_book_params)
        all_shelf = Shelf.select('id').where(:user_id => current_user.id).where(:title => "All")
        manage_default_shelves(@shelf_book)
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

    def manage_default_shelves(new_shelving)
        default_shelves = Shelf.select('id').where(:user_id => current_user.id).where(:default_shelf => true).to_a
        default_shelf_ids = default_shelves.map {|shelf| shelf.id}
        if default_shelf_ids.include?(new_shelving.shelf_id)
            old_shelvings = []
            new_shelving.book.shelf_books.select do |shelving|
                old_shelvings.push(shelving) if shelving.shelf.user_id = current_user.id && default_shelf_ids.include?(shelving.shelf_id)
            end 
            old_shelvings.each {|shelving| shelving.destroy}
        end
    end

end