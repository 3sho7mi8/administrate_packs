require 'administrate/field/paperclip'
require 'administrate/field/nested_has_many'
require 'administrate/field/pell'
require "administrate/engine"
require 'rails'

module Pakupaku
  class Engine < ::Rails::Engine
    Administrate::Engine.add_javascript "pakupaku/application"
    Administrate::Engine.add_stylesheet "pakupaku/application"
  end
end
