class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :displayName
  def displayName
    object.user.display_name
  end
end
