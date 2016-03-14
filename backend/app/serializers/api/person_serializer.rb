class Api::PersonSerializer < ActiveModel::Serializer
  attributes :id, :name, :position, :approved, :institution_id
  # institution_id can be get from the person table

end
