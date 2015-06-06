class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :name
      t.float :price
      t.boolean :finalized, default: false
      t.boolean :ordered, default: false
      t.boolean :delivered, default: false

      t.timestamps null: false
    end
  end
end
