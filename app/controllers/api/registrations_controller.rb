class Api::RegistrationsController < Devise::RegistrationsController
  respond_to :json

  def create
    @user = User.new(user_params)
    if @user.save
      render json: {
        status: true
      }
    else
      render json: {
        status: false,
        data: @user.error
      }
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :role)
  end
end