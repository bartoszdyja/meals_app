class OrderSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :finalized, :ordered, :delivered
  has_many :items	
end
