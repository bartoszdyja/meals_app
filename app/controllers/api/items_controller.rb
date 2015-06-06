class Api::ItemsController < ApplicationController
	def create
		@item = Item.new(item_params)
		if Order.find(@item.order_id).finalized?
  		if @item.save
  			render json: @item
  		else
  			render json: @item.errors, status: :unprocessable_entity
  		end
  	end
	end

private
	def item_params
		params.require(:item).permit(:name, :price, :order_id)
	end

end