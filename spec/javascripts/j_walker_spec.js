require('spec_helper.js');
require('../../src/j_walker.js');

Screw.Unit(function() {
  describe("jWalker", function(){
    before(function(){
      jWalker.clear();
    });

    it("exists", function(){ expect(jWalker).to_not(equal, null); });

    describe("#routes", function(){
      it("should respond", function(){ expect(jWalker).to(respond_to, "routes"); });
      it("should be object", function(){
        expect(jWalker.routes()).to(equal, {});
      });
    });

    describe("#clear", function(){
      it("should clear", function(){
        jWalker.route("taxons", "index");
        expect(jWalker.routes()).to_not(equal, {});

        jWalker.clear();

        expect(jWalker.routes()).to(equal, {});
      });
      it("should respond", function(){ expect(jWalker).to(respond_to, "clear"); });
    });

    describe("#route", function(){
      it("should route controller and action to function", function(){
        var my_func = function() {}
        jWalker.route("taxons", "index", my_func);

        var routes = jWalker.routes();

        expect(routes).to(equal, {
          "taxons": {
            "index": my_func
          }
        });
      });

      it("should route multiple actions for controller", function(){
        var my_func = function() {}
        jWalker.route("taxons", "index", my_func);
        jWalker.route("taxons", "show", my_func);

        var routes = jWalker.routes();

        expect(routes).to(equal, {
          "taxons": {
            "index": my_func,
            "show": my_func
          }
        });
      });

      it("should route default action for controller", function(){
        var my_func = function() {}
        jWalker.route("taxons", null, my_func);

        var routes = jWalker.routes();

        expect(routes).to(equal, {
          "taxons": {
            "/jWalker.defaultAction/": my_func
          }
        });
      });
      it("should respond", function(){ expect(jWalker).to(respond_to, "route"); });
    });

    describe("#cross", function(){
      it("should invoke controller and action", function(){
        var received_action;
        jWalker.route("taxons", "index", function() {
          received_action = this;
        });

        jWalker.cross("taxons", "index", jQuery);

        expect(received_action).to(equal, jQuery);
      });

      it("should invoke default action for controller", function(){
        var received_action_count = 0;
        jWalker.route("taxons", null, function() {
          received_action_count += 1;
        });

        jWalker.cross("taxons", "index", jQuery);
        jWalker.cross("taxons", "show", jQuery);
        jWalker.cross("taxons", null, jQuery);
        jWalker.cross("other", null, jQuery);

        expect(received_action_count).to(equal, 3);
      });

      it("should quietly invoke bad params", function(){ // TODO: decide on this
        jWalker.cross(null, "index", jQuery);
        jWalker.cross("index", null, jQuery);
      });
      it("should respond", function(){ expect(jWalker).to(respond_to, "cross"); });
    });

    describe("#isRouted", function(){
      it("should check if not routed", function(){
        expect(jWalker.isRouted("taxons", "show")).to(equal, false);
      });

      it("should check if routed", function(){
        expect(jWalker.isRouted("taxons", "show")).to(equal, false);

        var my_func = function() {}
        jWalker.route("taxons", "index", my_func);

        expect(jWalker.isRouted("taxons", "index")).to(equal, true);
      });
      it("should respond", function(){ expect(jWalker).to(respond_to, "isRouted"); });
    });
  });
});
