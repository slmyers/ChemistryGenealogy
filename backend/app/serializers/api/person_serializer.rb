# Serializer for people.
class Api::PersonSerializer < ActiveModel::Serializer
  attributes :id, :name, :approved
end
