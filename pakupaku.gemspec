$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "pakupaku/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "pakupaku"
  s.version     = Pakupaku::VERSION
  s.authors     = ["3sho7mi8"]
  s.email       = ["hiro.pinot@gmail.com"]
  s.homepage    = "https://github.com/3sho7mi8"
  s.summary     = "Administrate Field Packs"
  s.description = "Integrate Administrate Field Packs"
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]

  s.add_dependency "jquery-rails"
  s.add_dependency "paperclip"
  s.add_dependency "cocoon"
  s.add_dependency "administrate"
  s.add_dependency "rails"

  s.add_development_dependency "sqlite3"
end
