class Api::ShelvesController < ApplicationController

  before_action :ensure_logged_in, only: [:create, :update, :destroy]

  def index
    @shelves = Shelf.where(:user_id => params[:id])
    render :index
  end

  # def index_by_book
  #   book = Book.find(params[:id])
  #   @shelves = book.shelves
  #   render :index
  # end

  def show
    @shelf = Shelf.find(params[:id])
    render :show
  end

  def create
    @shelf = Shelf.new(shelf_params)
    @shelf.user_id = current_user.id
    if @shelf.save!
      render "api/shelves/show"
    else
      render json: @shelf.errors.full_messages, status: 422
    end
  end

  def update
    @shelf = Shelf.find_by(params[:id])
    if @shelf.update(shelf_params)
      render "api/shelves/show"
    else
      render json: @shelf.errors.full_messages, status: 422
    end
  end

  def destroy
    @shelf = Shelf.find(params[:id])
    shelf_id = @shelf.id
    @shelf.destroy
    render json: {id: shelf_id}
  end

  private

  def shelf_params
    params.require(:shelf).permit(:title, :default_shelf)
  end

end