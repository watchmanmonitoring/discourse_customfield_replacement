DiscoursePluginRegistry.serialized_current_user_fields << "subdomain_replace"

after_initialize do
  User.register_custom_field_type('subdomain', :string)
end