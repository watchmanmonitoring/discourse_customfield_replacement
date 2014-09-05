# name: Subdomain Replacement
# about: Replaces the subdomain from the custom field
# version: 0.1
# authors: Watchman Monitoring

DiscoursePluginRegistry.serialized_current_user_fields << "subdomain"

after_initialize do
  User.register_custom_field_type('subdomain', :boolean)
end

#register_asset "javascripts/connectors/user_custom_preferences/subdomain_replacement.js.handlebars"
#register_asset "javascripts/initializers/subdomain_replacement.js.es6"