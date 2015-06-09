class UsersController < ApplicationController
	before_filter :set_current_user
	
	def new
	end

end
