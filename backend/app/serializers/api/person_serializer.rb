class Api::PersonSerializer < ActiveModel::Serializer
  attributes :id, :name, :position, :approved
end
