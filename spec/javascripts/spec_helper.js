Screw.Matchers["respond_to"] = (function($) {
  var is_defined = false;
  var is_func = false;
  var func;

  return {
    match: function(method, object) {
      eval("func = object." + method + ";");
      is_defined = func != undefined;
      is_func = typeof(func) == "function";
      return is_defined && is_func;
    },
    failure_message: function(expected, actual, not) {
      if (!is_defined) {
        return 'expected ' + $.print(actual) + (not ? ' not' : '') + ' to respond to: ' + expected;
      } else if (!is_func) {
        return 'expected ' + $.print(expected) + (not ? ' not' : '') + ' to be a function, got: ' + typeof(func);
      }
    }
  }
})(jQuery);
