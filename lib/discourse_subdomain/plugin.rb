# lib/discourse_pervasive_banner/plugin.rb
require 'discourse_plugin'
 
module DiscourseSubdomain
 
  class Plugin < DiscoursePlugin
     
    def setup
      # Add our Assets
      register_js('discourse_subdomain')
      register_css('discourse_subdomain')
      #Discourse::Application.routes.prepend do
    	#get 'subdomain' => 'subdomain#current'
  	  #end
      DiscoursePluginRegistry.serialized_current_user_fields << "subdomain_replace"

      after_initialize do
        User.register_custom_field_type('subdomain', :string)
      end
    end
  end
end