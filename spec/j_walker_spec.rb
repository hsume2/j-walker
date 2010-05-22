require File.expand_path(File.dirname(__FILE__) + '/spec_helper')

describe "JWalker" do
  before do
    @sec = Sprockets::Secretary.new
    @j_walker_path = File.expand_path(File.join(File.dirname(__FILE__), %w[.. src]))
    @env = @sec.environment
  end

  it "should be added to sprockets load path" do
    j_walker_pathname = Sprockets::Pathname.new(@env, @j_walker_path)

    @env.load_path.should include(j_walker_pathname)
  end
end
