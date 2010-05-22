require 'sprockets'

Sprockets::Environment.class_eval do
  def initialize_with_j_walker(root, load_path = [])
    load_path.unshift File.join(File.dirname(__FILE__), %w[.. src])
    initialize_without_j_walker(root, load_path)
  end
  
  alias_method :initialize_without_j_walker, :initialize unless method_defined?(:initialize_without_j_walker)
  alias_method :initialize, :initialize_with_j_walker
end