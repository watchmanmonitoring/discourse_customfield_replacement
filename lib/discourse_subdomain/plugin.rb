# lib/discourse_pervasive_banner/plugin.rb
require 'discourse_plugin'
 
module DiscourseSubdomain
 
  class Plugin < DiscoursePlugin
     
    def setup
      # Add our Assets
      register_js('discourse_subdomain')
      register_css('discourse_subdomain')
      Discourse::Application.routes.prepend do
    	get 'subdomain' => 'subdomain#current'
  	  end
    end
  end
end