class Api::PersonSerializer < ActiveModel::Serializer
  attributes :id, :name, :approved
  # institution_id can be get from the person table

end
