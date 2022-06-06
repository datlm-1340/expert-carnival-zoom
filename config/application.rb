require_relative "boot"

require "rails/all"

Bundler.require(*Rails.groups)

module Zoom
  class Application < Rails::Application
    config.load_defaults 7.0
    config.api_only = true
    config.hosts << "eb3e-8-39-127-37.ap.ngrok.io"
  end
end
