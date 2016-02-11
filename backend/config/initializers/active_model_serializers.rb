# From https://github.com/mefeghhi/poll-api
ActiveSupport.on_load(:active_model_serializers) do
    # This prevents generating root nodes in json responses
    ActiveModel::Serializer.root = false 
    ActiveModel::ArraySerializer.root = false 
end
