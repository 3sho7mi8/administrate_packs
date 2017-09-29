require "administrate/field/text"
require "administrate/engine"
require 'rails'

module Administrate
  module Field
    class Pell < Administrate::Field::Text
      class Engine < ::Rails::Engine
        Administrate::Engine.add_javascript "administrate-field-pell/application"
        Administrate::Engine.add_stylesheet "administrate-field-pell/application"
      end
    end
  end
end
