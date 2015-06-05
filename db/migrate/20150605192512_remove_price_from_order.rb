class RemovePriceFromOrder < ActiveRecord::Migration
  def change
    remove_column :orders, :price, :float
  end
end
