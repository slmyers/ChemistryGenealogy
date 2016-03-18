# Serializer for mentorships.
class Api::MentorshipSerializer < ActiveModel::Serializer
  attributes :id, :approved
end
