class Item < ActiveRecord::Base
	belongs_to :order
	belongs_to :user

	validates_presence_of :name, :price, :user_id, :order_id

	validates :price, :format => { :with => /\A\d+(?:\.\d{0,2})?\z/ }
end
