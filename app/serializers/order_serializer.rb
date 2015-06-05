class OrderSerializer < ActiveModel::Serializer
  attributes :name, :price, :id, :created_at
end
