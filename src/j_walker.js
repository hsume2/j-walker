var jWalker = (function($) {
  var _routes = {};
  var _default_action = "/jWalker.defaultAction/"; // An impossible name for a Rails action to have... right?

  return {
    route: function(controller_name, action_name, function_or_function_name) {
      var action_name_object = {};

      if (action_name == null)
        action_name = _default_action;

      action_name_object[action_name] = function_or_function_name;

      var controller_name_object = _routes[controller_name];

      if (controller_name_object == null) {
        _routes[controller_name] = action_name_object;
      } else {
        jQuery.extend(_routes[controller_name], action_name_object);
      }
    },
    cross: function(controller_name, action_name, direct_injection) {
      var controller = _routes[controller_name];
      if (controller != null) {
        var action = controller[action_name];

        if (action == null)
          action = controller[_default_action];

        if (action != null) {
          action.call(direct_injection);
        }
      }
    },
    routes: function() {
      return _routes;
    },
    clear: function() {
      _routes = {};
    },
    isRouted: function(controller_name, action_name) {
      var controller = _routes[controller_name];
      if (controller == null)
        return false;
      var action = controller[action_name];
      if (action == null)
        return false;
      return true;
    }
  }
})(jQuery);
