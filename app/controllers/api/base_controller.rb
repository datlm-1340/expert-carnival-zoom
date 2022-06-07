class Api::BaseController < ApplicationController
  before_action :authenticate_user!

  def render_json data, status
    render json: data, status: status
  end
end
