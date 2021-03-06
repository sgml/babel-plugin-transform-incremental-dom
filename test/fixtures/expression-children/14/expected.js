var _jsxWrapper = function _jsxWrapper(func, args) {
  return {
    __jsxDOMWrapper: true,
    func: func,
    args: args
  };
};

var _hasOwn = Object.prototype.hasOwnProperty;

var _forOwn = function _forOwn(object, iterator) {
  for (var prop in object) {
    if (_hasOwn.call(object, prop)) iterator(object[prop], prop);
  }
};

var _renderArbitrary = function _renderArbitrary(child) {
  var type = typeof child;

  if (type === "number" || type === "string" || type === "object" && child instanceof String) {
    text(child);
  } else if (Array.isArray(child)) {
    child.forEach(_renderArbitrary);
  } else if (type === "object") {
    if (child.__jsxDOMWrapper) {
      var func = child.func,
          args = child.args;

      if (args) {
        func.apply(this, args);
      } else {
        func();
      }
    } else if (String(child) === "[object Object]") {
      _forOwn(child, _renderArbitrary);
    }
  }
};

var _span$wrapper = function _span$wrapper(_i, _child, _i2) {
  elementOpen("span", null, null, "attr", _i);

  _renderArbitrary(_child);

  _renderArbitrary(_i2);

  return elementClose("span");
};

function render() {
  var mapNested5 = [1, 2, 3].map(function (i) {
    elementOpen("outer5");
    elementOpen("inner5", null, null, "attr", _jsxWrapper(_span$wrapper, [i, i++, i]));
    elementClose("inner5");
    return elementClose("outer5");
  });
}