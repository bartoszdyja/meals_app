	class Api::ItemsController < ApplicationController
	before_filter :set_current_user, :authenticate_user!
	
	def create
		@item = Item.new(item_params)
		@order = Order.find(@item.order_id)
		unless @order.users.include?(current_user) || @order.finalized?
			@item.user = current_user	
	  		if @item.save
	  			render json: @item
	  		else
	  			render json: @item.errors, status: :unprocessable_entity
	  		end
	  	else
	  		render nothing: true, status: 403
	  	end
	end

private
	def item_params
		params.require(:item).permit(:name, :price, :order_id)
	end

end
