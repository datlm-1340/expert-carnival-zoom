require_relative "boot"

require "rails/all"

Bundler.require(*Rails.groups)

module Zoom
  class Application < Rails::Application
    config.load_defaults 7.0
    config.api_only = true
    config.hosts << "stark-forest-80611.herokuapp.com"
  end
end
