	class Api::ItemsController < ApplicationController
	before_filter :set_current_user
	
	def create
		@item = Item.new(item_params)
		@item.user = current_user	
		unless Order.find(@item.order_id).finalized?
	  		if @item.save
	  			render json: @item
	  		else
	  			render json: @item.errors, status: :unprocessable_entity
	  		end
	  	else
	  		render status: 403
	  	end
	end

private
	def item_params
		params.require(:item).permit(:name, :price, :order_id)
	end

end