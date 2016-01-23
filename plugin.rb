# name: Custom Field Replacement
# about: Replaces the subdomain from the custom field
# version: 0.1
# authors: Watchman Monitoring
# url: https://github.com/watchmanmonitoring/discourse_customfield_replacement

DiscoursePluginRegistry.serialized_current_user_fields << "subdomain"

after_initialize do
  User.register_custom_field_type('subdomain', :string)
end

#register_asset "javascripts/connectors/user_custom_preferences/subdomain_replacement.js.handlebars"
register_asset("javascripts/connectors/user_custom_preferences/replace.js", :client_side)
#register_asset "javascripts/initializers/subdomain_replacement.js.es6"
