# Serializer for supervisions.
class Api::SupervisionSerializer < ActiveModel::Serializer
  attributes :id, :approved
end
