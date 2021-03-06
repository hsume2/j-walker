# Generated by jeweler
# DO NOT EDIT THIS FILE DIRECTLY
# Instead, edit Jeweler::Tasks in Rakefile, and run the gemspec command
# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = %q{j-walker}
  s.version = "0.1.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Henry Hsu"]
  s.date = %q{2010-05-21}
  s.description = %q{A way to run JavaScript based on Rails controller actions. This gives you the freedom to DRY up your JavaScript, or modularize code around REST resources, whatever you can think of!}
  s.email = %q{henry@qlane.com}
  s.extra_rdoc_files = [
    "LICENSE",
     "README.markdown"
  ]
  s.files = [
    ".document",
     ".gitignore",
     ".gitmodules",
     "LICENSE",
     "README.markdown",
     "Rakefile",
     "VERSION",
     "app/views/shared/_j_walker.html.erb",
     "j-walker.gemspec",
     "lib/j_walker.rb",
     "rails/init.rb",
     "spec/j_walker_spec.rb",
     "spec/javascripts/fixtures/j_walker.html",
     "spec/javascripts/j_walker_spec.js",
     "spec/javascripts/spec_helper.js",
     "spec/spec.opts",
     "spec/spec_helper.rb",
     "src/j_walker.js"
  ]
  s.homepage = %q{http://github.com/hsume2/j-walker}
  s.rdoc_options = ["--charset=UTF-8"]
  s.require_paths = ["lib"]
  s.rubygems_version = %q{1.3.6}
  s.summary = %q{Modularize your *.js, the Rails way. Jaywalk your Rails routes.}
  s.test_files = [
    "spec/j_walker_spec.rb",
     "spec/spec_helper.rb"
  ]

  if s.respond_to? :specification_version then
    current_version = Gem::Specification::CURRENT_SPECIFICATION_VERSION
    s.specification_version = 3

    if Gem::Version.new(Gem::RubyGemsVersion) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<rspec>, [">= 1.2.9"])
      s.add_development_dependency(%q<yard>, [">= 0"])
    else
      s.add_dependency(%q<rspec>, [">= 1.2.9"])
      s.add_dependency(%q<yard>, [">= 0"])
    end
  else
    s.add_dependency(%q<rspec>, [">= 1.2.9"])
    s.add_dependency(%q<yard>, [">= 0"])
  end
end

