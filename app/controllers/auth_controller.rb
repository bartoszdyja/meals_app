class AuthController < ApplicationController

  def facebook
    @oauth = OAuth.const_get(action_name.capitalize).new params
    
    @user = User.for_oauth @oauth

    render json: { token: Token.encode(@user.id) }
  end

  
end