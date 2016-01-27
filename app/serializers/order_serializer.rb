class OrderSerializer < ActiveModel::Serializer
  attributes :id, :finalized, :ordered, :delivered
  has_many :items
end
