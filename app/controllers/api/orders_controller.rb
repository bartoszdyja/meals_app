class Api::OrdersController < ApplicationController

  before_filter  :set_current_user, :authenticate_user!, except: [:index, :show]
  before_action  :set_order, only: [:show, :update]
  
  def create
  	@order = Order.new
  	if @order.save
  		render json: @order
  	else
  		render json: @order.errors, status: :unprocessable_entity
  	end
  end

  def index
  	@orders = Order.all.order('created_at DESC')
  	render json: @orders

  end

  def show
    
    render json: @order
  end

  def update
    
    if !@order.items.blank?
      if @order.update(order_params)
        render json: @order
      else
        render json: @order.errors, status: :unprocessable_entity
      end
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  private

  def set_order
    @order=Order.find(params[:id])
  end

  def order_params
  	params.require(:order).permit(:id, :finalized, :ordered, :delivered)
  end
end
