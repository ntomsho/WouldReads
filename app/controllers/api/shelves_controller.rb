class Api::ShelvesController < ApplicationController

  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @shelves = Shelf.all
    render :index
  end

  def show
    @shelf = Shelf.find_by(params[:id])
    render :show
  end

  def create
    @shelf = Shelf.new(user_params)
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
    @shelf = Shelf.find_by(params[:id])
    @shelf.delete
    render "api/shelves/index"
  end

  private

  def user_params
    params.require(:shelf).permit(:title, :default_shelf)
  end

end