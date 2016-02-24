class Api::PostdocSerializer < ActiveModel::Serializer
  attributes :id, :start, :end, :approved
end
