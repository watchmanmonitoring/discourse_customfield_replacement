# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'discourse_subdomain/version'

Gem::Specification.new do |spec|
  spec.name          = "discourse_subdomain"
  spec.version       = DiscourseSubdomain::VERSION
  spec.authors       = ["Christian Woodward"]
  spec.email         = ["chrsitian.woodward@watchmanmonitoring.com.com"]
  spec.summary       = ["Replaces a given word with the subscriber subdomain using custom_field"]
  spec.description   = ["Replaces a given word with the subscriber subdomain using custom_field"]
  spec.homepage      = ""
  spec.license       = "NONE"

  spec.files         = `git ls-files -z`.split("\x0")
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.6"
  spec.add_development_dependency "rake"
end
