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

var _map$wrapper = function _map$wrapper(_i) {
  elementOpen("map");

  _renderArbitrary(_i);

  return elementClose("map");
},
    _div$wrapper = function _div$wrapper(_first, _child) {
  elementOpen("div", null, null, "first", _first);

  _renderArbitrary(_child);

  return elementClose("div");
};

function render() {
  elementOpen("root");
  elementOpen("div", null, null, "attr", i++);

  _renderArbitrary([1, 2, 3].map(function (i) {
    return _jsxWrapper(_map$wrapper, [i]);
  }));

  _renderArbitrary(function () {
    _jsxWrapper(_div$wrapper, [i++, i++]);
  }());

  _renderArbitrary(i++);

  elementOpen("div", null, null, "second", i++);

  _renderArbitrary(i++);

  elementClose("div");
  elementClose("div");
  return elementClose("root");
}