class Api::ReviewsController < ApplicationController

  def index
    book = Book.find(params[:id])
    @reviews = book.reviews
    render :index
  end

  def show
    @review = Review.find(params[:id])
    render :show
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    if @review.save!
      render "api/review/show"
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

private

  def review_params
    params.require(:review).permit(:rating, :body, :book_id)
  end

end