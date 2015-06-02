class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :name
      t.float :price
      t.boolean :finalized
      t.boolean :ordered
      t.boolean :delivered

      t.timestamps null: false
    end
  end
end
