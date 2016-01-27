class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :displayName, :price
  def displayName
    object.user.display_name
  end
end
