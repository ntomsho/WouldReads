class Api::UsersController < ApplicationController

  def show
    @user = User.find_by(params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)
    if @user.save!
      create_default_shelves(@user)
      signin(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
  
  def update
    @user = User.find_by(params[:id])
    if @user.update(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
  
  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

  def create_default_shelves(user)
    Shelf.create!(
      title: "All",
      user_id: user.id,
      default_shelf: true
    )
    
    Shelf.create!(
      title: "Read",
      user_id: user.id,
      default_shelf: true
    )
    
    Shelf.create!(
      title: "Currently Reading",
      user_id: user.id,
      default_shelf: true
    )

    Shelf.create!(
      title: "Want to Read",
      user_id: user.id,
      default_shelf: true
    )
  end

end