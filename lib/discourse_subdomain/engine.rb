# lib/discourse_subdomain/engine.rb
require 'discourse_subdomain/plugin'
 
module DiscourseSubdomain
  class Engine < Rails::Engine
 
    engine_name 'discourse_subdomain'
 
    initializer "discourse_subdomain.configure_rails_initialization" do |app|
 
      app.config.after_initialize do
        DiscoursePluginRegistry.setup(DiscourseSubdomain::Plugin)
      end
    end
 
  end
end