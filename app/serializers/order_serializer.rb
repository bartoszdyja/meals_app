class OrderSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :finalized, :ordered, :delivered
end
