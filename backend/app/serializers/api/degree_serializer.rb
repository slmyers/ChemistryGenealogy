# Serializer for degrees.
class Api::DegreeSerializer < ActiveModel::Serializer
  attributes :id, :year, :approved
end
