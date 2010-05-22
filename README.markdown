# j-walker

A way to run JavaScript based on Rails controller actions. This gives you the freedom to DRY up your JavaScript, or modularize code around REST resources, whatever you can think of!

For example, with `jWalker` you can route a JS function to `WelcomeController#index`. When a user visits that page, jWalker will automatically cross to the correct route via `controller_name`/`action_name` and execute your JS.

With a few quick lines of code, you can get Rails and jWalker working in unison. Read on!

*****

# Installation

First:

    gem install j-walker

## Rails

    config.gem 'j-walker', :lib => 'j_walker

In the body of your layout (preferably the end):

    <%= render 'shared/j_walker' %>

This is the glue that bonds Rails and jWalker together.

*****

## Javascript

Requires `jQuery`.

### Sprockets

This project was structured with [Sprockets](http://getsprockets.org) in mind. I'm assuming you have [`sprocket-rails`](http://github.com/sstephenson/sprockets-rails/tree/master) set up.

Just like any sprocketized dependency:

    //= require <j_walker>

in `application.js` (or any other source file preprocessed by Sprockets)

### Non-sprockets

I can't offer any suggestions other than cloning `src/j_walker.js` into wherever your javascript files are stored and
adding a `<%= javascript_include_tag 'j_walker' %>` into your `application` layout.

*****

# Usage

To set up routes (i.e., in `application.js` or any file that's loaded in every single Rails page):

    jWalker.route("welcome", "index", function() {
      say_hello();
    })

    jWalker.route("door", "show", function() {
      say_goodbye();
    })

Routes should be invoked using:

    jWalker.cross("welcome", "index");

This is exactly what the `j_walker` partial does, except it plugs in the `controller_name` and `action_name`

*****

# Testing

This thing was developed test-first using [blue-ridge](http://github.com/relevance/blue-ridge). If you want to verify that everything works as expected, make sure the `blue-ridge` submodule is updated and open `spec/javascripts/fixtures/j_walker.html` in Firefox.

*****

# Future

* Params-based routing (instead of just controller and action)
* Route aliasing
* Full-stack testing

*****

# Copyright

Copyright (c) 2010 Henry Hsu. See LICENSE for details.
