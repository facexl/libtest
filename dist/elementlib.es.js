"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _excluded = ["trigger"];

var _inputEmits;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf3(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct2(); return function _createSuperInternal() { var Super = _getPrototypeOf3(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf3(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper3(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper3 = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction2(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct3(Class, arguments, _getPrototypeOf3(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf3(Wrapper, Class); }; return _wrapNativeSuper3(Class); }

function _construct3(Parent, args, Class) { if (_isNativeReflectConstruct2()) { _construct3 = Reflect.construct.bind(); } else { _construct3 = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf3(instance, Class.prototype); return instance; }; } return _construct3.apply(null, arguments); }

function _isNativeReflectConstruct2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction2(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf3(o, p) { _setPrototypeOf3 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf3(o, p); }

function _getPrototypeOf3(o) { _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf3(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global && global.Object === Object && global;
var freeGlobal$1 = freeGlobal;
var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
var root$1 = root;
var Symbol$1 = root$1.Symbol;
var Symbol$2 = Symbol$1;
var objectProto$e = Object.prototype;
var hasOwnProperty$c = objectProto$e.hasOwnProperty;
var nativeObjectToString$1 = objectProto$e.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;

function getRawTag(value) {
  var isOwn = hasOwnProperty$c.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }

  return result;
}

var objectProto$d = Object.prototype;
var nativeObjectToString = objectProto$d.toString;

function objectToString$1(value) {
  return nativeObjectToString.call(value);
}

var nullTag = "[object Null]",
    undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;

function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString$1(value);
}

function isObjectLike(value) {
  return value != null && _typeof(value) == "object";
}

var symbolTag$3 = "[object Symbol]";

function isSymbol(value) {
  return _typeof(value) == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$3;
}

function arrayMap(array4, iteratee) {
  var index = -1,
      length = array4 == null ? 0 : array4.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array4[index], index, array4);
  }

  return result;
}

var isArray$1 = Array.isArray;
var isArray$2 = isArray$1;
var INFINITY$1 = 1 / 0;
var symbolProto$2 = Symbol$2 ? Symbol$2.prototype : void 0,
    symbolToString = symbolProto$2 ? symbolProto$2.toString : void 0;

function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }

  if (isArray$2(value)) {
    return arrayMap(value, baseToString) + "";
  }

  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }

  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}

var reWhitespace = /\s/;

function trimmedEndIndex(string3) {
  var index = string3.length;

  while (index-- && reWhitespace.test(string3.charAt(index))) {}

  return index;
}

var reTrimStart = /^\s+/;

function baseTrim(string3) {
  return string3 ? string3.slice(0, trimmedEndIndex(string3) + 1).replace(reTrimStart, "") : string3;
}

function isObject$1(value) {
  var type4 = _typeof(value);

  return value != null && (type4 == "object" || type4 == "function");
}

var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;

function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }

  if (isSymbol(value)) {
    return NAN;
  }

  if (isObject$1(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$1(other) ? other + "" : other;
  }

  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }

  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

var asyncTag = "[object AsyncFunction]",
    funcTag$2 = "[object Function]",
    genTag$1 = "[object GeneratorFunction]",
    proxyTag = "[object Proxy]";

function isFunction$1(value) {
  if (!isObject$1(value)) {
    return false;
  }

  var tag = baseGetTag(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}

var coreJsData = root$1["__core-js_shared__"];
var coreJsData$1 = coreJsData;

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();

function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;

function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}

    try {
      return func + "";
    } catch (e) {}
  }

  return "";
}

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype,
    objectProto$c = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$b = objectProto$c.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$b).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function baseIsNative(value) {
  if (!isObject$1(value) || isMasked(value)) {
    return false;
  }

  var pattern4 = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern4.test(toSource(value));
}

function getValue$1(object4, key) {
  return object4 == null ? void 0 : object4[key];
}

function getNative(object4, key) {
  var value = getValue$1(object4, key);
  return baseIsNative(value) ? value : void 0;
}

var WeakMap = getNative(root$1, "WeakMap");
var WeakMap$1 = WeakMap;
var objectCreate = Object.create;

var baseCreate = function () {
  function object4() {}

  return function (proto) {
    if (!isObject$1(proto)) {
      return {};
    }

    if (objectCreate) {
      return objectCreate(proto);
    }

    object4.prototype = proto;
    var result = new object4();
    object4.prototype = void 0;
    return result;
  };
}();

var baseCreate$1 = baseCreate;

function copyArray(source, array4) {
  var index = -1,
      length = source.length;
  array4 || (array4 = Array(length));

  while (++index < length) {
    array4[index] = source[index];
  }

  return array4;
}

var defineProperty = function () {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {}
}();

var defineProperty$1 = defineProperty;

function arrayEach(array4, iteratee) {
  var index = -1,
      length = array4 == null ? 0 : array4.length;

  while (++index < length) {
    if (iteratee(array4[index], index, array4) === false) {
      break;
    }
  }

  return array4;
}

var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;

function isIndex(value, length) {
  var type4 = _typeof(value);

  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type4 == "number" || type4 != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

function baseAssignValue(object4, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object4, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object4[key] = value;
  }
}

function eq(value, other) {
  return value === other || value !== value && other !== other;
}

var objectProto$b = Object.prototype;
var hasOwnProperty$a = objectProto$b.hasOwnProperty;

function assignValue(object4, key, value) {
  var objValue = object4[key];

  if (!(hasOwnProperty$a.call(object4, key) && eq(objValue, value)) || value === void 0 && !(key in object4)) {
    baseAssignValue(object4, key, value);
  }
}

function copyObject(source, props, object4, customizer) {
  var isNew = !object4;
  object4 || (object4 = {});
  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object4[key], source[key], key, object4, source) : void 0;

    if (newValue === void 0) {
      newValue = source[key];
    }

    if (isNew) {
      baseAssignValue(object4, key, newValue);
    } else {
      assignValue(object4, key, newValue);
    }
  }

  return object4;
}

var MAX_SAFE_INTEGER = 9007199254740991;

function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction$1(value);
}

var objectProto$a = Object.prototype;

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == "function" && Ctor.prototype || objectProto$a;
  return value === proto;
}

function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

var argsTag$3 = "[object Arguments]";

function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$3;
}

var objectProto$9 = Object.prototype;
var hasOwnProperty$9 = objectProto$9.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$9.propertyIsEnumerable;
var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty$9.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments$1 = isArguments;

function stubFalse() {
  return false;
}

var freeExports$2 = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && (typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$1 = moduleExports$2 ? root$1.Buffer : void 0;
var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
var isBuffer$1 = isBuffer;
var argsTag$2 = "[object Arguments]",
    arrayTag$2 = "[object Array]",
    boolTag$3 = "[object Boolean]",
    dateTag$3 = "[object Date]",
    errorTag$2 = "[object Error]",
    funcTag$1 = "[object Function]",
    mapTag$5 = "[object Map]",
    numberTag$3 = "[object Number]",
    objectTag$3 = "[object Object]",
    regexpTag$3 = "[object RegExp]",
    setTag$5 = "[object Set]",
    stringTag$3 = "[object String]",
    weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$3 = "[object ArrayBuffer]",
    dataViewTag$4 = "[object DataView]",
    float32Tag$2 = "[object Float32Array]",
    float64Tag$2 = "[object Float64Array]",
    int8Tag$2 = "[object Int8Array]",
    int16Tag$2 = "[object Int16Array]",
    int32Tag$2 = "[object Int32Array]",
    uint8Tag$2 = "[object Uint8Array]",
    uint8ClampedTag$2 = "[object Uint8ClampedArray]",
    uint16Tag$2 = "[object Uint16Array]",
    uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] = typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$5] = typedArrayTags[numberTag$3] = typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$3] = typedArrayTags[setTag$5] = typedArrayTags[stringTag$3] = typedArrayTags[weakMapTag$2] = false;

function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

var freeExports$1 = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && (typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var freeProcess = moduleExports$1 && freeGlobal$1.process;

var nodeUtil = function () {
  try {
    var types2 = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;

    if (types2) {
      return types2;
    }

    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {}
}();

var nodeUtil$1 = nodeUtil;
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray$1 = isTypedArray;
var objectProto$8 = Object.prototype;
var hasOwnProperty$8 = objectProto$8.hasOwnProperty;

function arrayLikeKeys(value, inherited) {
  var isArr = isArray$2(value),
      isArg = !isArr && isArguments$1(value),
      isBuff = !isArr && !isArg && isBuffer$1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray$1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$8.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

var nativeKeys = overArg(Object.keys, Object);
var nativeKeys$1 = nativeKeys;
var objectProto$7 = Object.prototype;
var hasOwnProperty$7 = objectProto$7.hasOwnProperty;

function baseKeys(object4) {
  if (!isPrototype(object4)) {
    return nativeKeys$1(object4);
  }

  var result = [];

  for (var key in Object(object4)) {
    if (hasOwnProperty$7.call(object4, key) && key != "constructor") {
      result.push(key);
    }
  }

  return result;
}

function keys(object4) {
  return isArrayLike(object4) ? arrayLikeKeys(object4) : baseKeys(object4);
}

function nativeKeysIn(object4) {
  var result = [];

  if (object4 != null) {
    for (var key in Object(object4)) {
      result.push(key);
    }
  }

  return result;
}

var objectProto$6 = Object.prototype;
var hasOwnProperty$6 = objectProto$6.hasOwnProperty;

function baseKeysIn(object4) {
  if (!isObject$1(object4)) {
    return nativeKeysIn(object4);
  }

  var isProto = isPrototype(object4),
      result = [];

  for (var key in object4) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$6.call(object4, key)))) {
      result.push(key);
    }
  }

  return result;
}

function keysIn(object4) {
  return isArrayLike(object4) ? arrayLikeKeys(object4, true) : baseKeysIn(object4);
}

var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

function isKey(value, object4) {
  if (isArray$2(value)) {
    return false;
  }

  var type4 = _typeof(value);

  if (type4 == "number" || type4 == "symbol" || type4 == "boolean" || value == null || isSymbol(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object4 != null && value in Object(object4);
}

var nativeCreate = getNative(Object, "create");
var nativeCreate$1 = nativeCreate;

function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}

function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$5 = Object.prototype;
var hasOwnProperty$5 = objectProto$5.hasOwnProperty;

function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate$1) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }

  return hasOwnProperty$5.call(data, key) ? data[key] : void 0;
}

var objectProto$4 = Object.prototype;
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;

function hashHas(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$4.call(data, key);
}

var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate$1 && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}

function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

function assocIndexOf(array4, key) {
  var length = array4.length;

  while (length--) {
    if (eq(array4[length][0], key)) {
      return length;
    }
  }

  return -1;
}

var arrayProto = Array.prototype;
var splice = arrayProto.splice;

function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}

function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? void 0 : data[index][1];
}

function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map$1 = getNative(root$1, "Map");
var Map$2 = Map$1;

function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$2 || ListCache)(),
    "string": new Hash()
  };
}

function isKeyable(value) {
  var type4 = _typeof(value);

  return type4 == "string" || type4 == "number" || type4 == "symbol" || type4 == "boolean" ? value !== "__proto__" : value === null;
}

function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}

function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}

function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var FUNC_ERROR_TEXT$1 = "Expected a function";

function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }

  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };

  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;

function memoizeCapped(func) {
  var result = memoize(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }

    return key;
  });
  var cache = result.cache;
  return result;
}

var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function (string3) {
  var result = [];

  if (string3.charCodeAt(0) === 46) {
    result.push("");
  }

  string3.replace(rePropName, function (match, number4, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number4 || match);
  });
  return result;
});
var stringToPath$1 = stringToPath;

function toString(value) {
  return value == null ? "" : baseToString(value);
}

function castPath(value, object4) {
  if (isArray$2(value)) {
    return value;
  }

  return isKey(value, object4) ? [value] : stringToPath$1(toString(value));
}

var INFINITY = 1 / 0;

function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }

  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}

function baseGet(object4, path) {
  path = castPath(path, object4);
  var index = 0,
      length = path.length;

  while (object4 != null && index < length) {
    object4 = object4[toKey(path[index++])];
  }

  return index && index == length ? object4 : void 0;
}

function get(object4, path, defaultValue) {
  var result = object4 == null ? void 0 : baseGet(object4, path);
  return result === void 0 ? defaultValue : result;
}

function arrayPush(array4, values) {
  var index = -1,
      length = values.length,
      offset = array4.length;

  while (++index < length) {
    array4[offset + index] = values[index];
  }

  return array4;
}

var getPrototype = overArg(Object.getPrototypeOf, Object);
var getPrototype$1 = getPrototype;

function castArray() {
  if (!arguments.length) {
    return [];
  }

  var value = arguments[0];
  return isArray$2(value) ? value : [value];
}

function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

function stackDelete(key) {
  var data = this.__data__,
      result = data["delete"](key);
  this.size = data.size;
  return result;
}

function stackGet(key) {
  return this.__data__.get(key);
}

function stackHas(key) {
  return this.__data__.has(key);
}

var LARGE_ARRAY_SIZE = 200;

function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof ListCache) {
    var pairs = data.__data__;

    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
}

function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

function baseAssign(object4, source) {
  return object4 && copyObject(source, keys(source), object4);
}

function baseAssignIn(object4, source) {
  return object4 && copyObject(source, keysIn(source), object4);
}

var freeExports = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && (typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root$1.Buffer : void 0,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;

function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }

  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}

function arrayFilter(array4, predicate) {
  var index = -1,
      length = array4 == null ? 0 : array4.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array4[index];

    if (predicate(value, index, array4)) {
      result[resIndex++] = value;
    }
  }

  return result;
}

function stubArray() {
  return [];
}

var objectProto$3 = Object.prototype;
var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols$1 ? stubArray : function (object4) {
  if (object4 == null) {
    return [];
  }

  object4 = Object(object4);
  return arrayFilter(nativeGetSymbols$1(object4), function (symbol) {
    return propertyIsEnumerable.call(object4, symbol);
  });
};
var getSymbols$1 = getSymbols;

function copySymbols(source, object4) {
  return copyObject(source, getSymbols$1(source), object4);
}

var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols ? stubArray : function (object4) {
  var result = [];

  while (object4) {
    arrayPush(result, getSymbols$1(object4));
    object4 = getPrototype$1(object4);
  }

  return result;
};
var getSymbolsIn$1 = getSymbolsIn;

function copySymbolsIn(source, object4) {
  return copyObject(source, getSymbolsIn$1(source), object4);
}

function baseGetAllKeys(object4, keysFunc, symbolsFunc) {
  var result = keysFunc(object4);
  return isArray$2(object4) ? result : arrayPush(result, symbolsFunc(object4));
}

function getAllKeys(object4) {
  return baseGetAllKeys(object4, keys, getSymbols$1);
}

function getAllKeysIn(object4) {
  return baseGetAllKeys(object4, keysIn, getSymbolsIn$1);
}

var DataView = getNative(root$1, "DataView");
var DataView$1 = DataView;
var Promise$1 = getNative(root$1, "Promise");
var Promise$2 = Promise$1;
var Set$1 = getNative(root$1, "Set");
var Set$2 = Set$1;
var mapTag$4 = "[object Map]",
    objectTag$2 = "[object Object]",
    promiseTag = "[object Promise]",
    setTag$4 = "[object Set]",
    weakMapTag$1 = "[object WeakMap]";
var dataViewTag$3 = "[object DataView]";
var dataViewCtorString = toSource(DataView$1),
    mapCtorString = toSource(Map$2),
    promiseCtorString = toSource(Promise$2),
    setCtorString = toSource(Set$2),
    weakMapCtorString = toSource(WeakMap$1);
var getTag = baseGetTag;

if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$3 || Map$2 && getTag(new Map$2()) != mapTag$4 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$2 && getTag(new Set$2()) != setTag$4 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag$1) {
  getTag = function getTag(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag$2 ? value.constructor : void 0,
        ctorString = Ctor ? toSource(Ctor) : "";

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$3;

        case mapCtorString:
          return mapTag$4;

        case promiseCtorString:
          return promiseTag;

        case setCtorString:
          return setTag$4;

        case weakMapCtorString:
          return weakMapTag$1;
      }
    }

    return result;
  };
}

var getTag$1 = getTag;
var objectProto$2 = Object.prototype;
var hasOwnProperty$3 = objectProto$2.hasOwnProperty;

function initCloneArray(array4) {
  var length = array4.length,
      result = new array4.constructor(length);

  if (length && typeof array4[0] == "string" && hasOwnProperty$3.call(array4, "index")) {
    result.index = array4.index;
    result.input = array4.input;
  }

  return result;
}

var Uint8Array = root$1.Uint8Array;
var Uint8Array$1 = Uint8Array;

function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}

function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

var reFlags = /\w*$/;

function cloneRegExp(regexp4) {
  var result = new regexp4.constructor(regexp4.source, reFlags.exec(regexp4));
  result.lastIndex = regexp4.lastIndex;
  return result;
}

var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0,
    symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : void 0;

function cloneSymbol(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}

function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var boolTag$2 = "[object Boolean]",
    dateTag$2 = "[object Date]",
    mapTag$3 = "[object Map]",
    numberTag$2 = "[object Number]",
    regexpTag$2 = "[object RegExp]",
    setTag$3 = "[object Set]",
    stringTag$2 = "[object String]",
    symbolTag$2 = "[object Symbol]";
var arrayBufferTag$2 = "[object ArrayBuffer]",
    dataViewTag$2 = "[object DataView]",
    float32Tag$1 = "[object Float32Array]",
    float64Tag$1 = "[object Float64Array]",
    int8Tag$1 = "[object Int8Array]",
    int16Tag$1 = "[object Int16Array]",
    int32Tag$1 = "[object Int32Array]",
    uint8Tag$1 = "[object Uint8Array]",
    uint8ClampedTag$1 = "[object Uint8ClampedArray]",
    uint16Tag$1 = "[object Uint16Array]",
    uint32Tag$1 = "[object Uint32Array]";

function initCloneByTag(object4, tag, isDeep) {
  var Ctor = object4.constructor;

  switch (tag) {
    case arrayBufferTag$2:
      return cloneArrayBuffer(object4);

    case boolTag$2:
    case dateTag$2:
      return new Ctor(+object4);

    case dataViewTag$2:
      return cloneDataView(object4, isDeep);

    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object4, isDeep);

    case mapTag$3:
      return new Ctor();

    case numberTag$2:
    case stringTag$2:
      return new Ctor(object4);

    case regexpTag$2:
      return cloneRegExp(object4);

    case setTag$3:
      return new Ctor();

    case symbolTag$2:
      return cloneSymbol(object4);
  }
}

function initCloneObject(object4) {
  return typeof object4.constructor == "function" && !isPrototype(object4) ? baseCreate$1(getPrototype$1(object4)) : {};
}

var mapTag$2 = "[object Map]";

function baseIsMap(value) {
  return isObjectLike(value) && getTag$1(value) == mapTag$2;
}

var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
var isMap$1 = isMap;
var setTag$2 = "[object Set]";

function baseIsSet(value) {
  return isObjectLike(value) && getTag$1(value) == setTag$2;
}

var nodeIsSet = nodeUtil$1 && nodeUtil$1.isSet;
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet$1 = isSet;
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag$1 = "[object Arguments]",
    arrayTag$1 = "[object Array]",
    boolTag$1 = "[object Boolean]",
    dateTag$1 = "[object Date]",
    errorTag$1 = "[object Error]",
    funcTag = "[object Function]",
    genTag = "[object GeneratorFunction]",
    mapTag$1 = "[object Map]",
    numberTag$1 = "[object Number]",
    objectTag$1 = "[object Object]",
    regexpTag$1 = "[object RegExp]",
    setTag$1 = "[object Set]",
    stringTag$1 = "[object String]",
    symbolTag$1 = "[object Symbol]",
    weakMapTag = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]",
    dataViewTag$1 = "[object DataView]",
    float32Tag = "[object Float32Array]",
    float64Tag = "[object Float64Array]",
    int8Tag = "[object Int8Array]",
    int16Tag = "[object Int16Array]",
    int32Tag = "[object Int32Array]",
    uint8Tag = "[object Uint8Array]",
    uint8ClampedTag = "[object Uint8ClampedArray]",
    uint16Tag = "[object Uint16Array]",
    uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] = cloneableTags[boolTag$1] = cloneableTags[dateTag$1] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$1] = cloneableTags[numberTag$1] = cloneableTags[objectTag$1] = cloneableTags[regexpTag$1] = cloneableTags[setTag$1] = cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag$1] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;

function baseClone(value, bitmask, customizer, key, object4, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG$1;

  if (customizer) {
    result = object4 ? customizer(value, key, object4, stack) : customizer(value);
  }

  if (result !== void 0) {
    return result;
  }

  if (!isObject$1(value)) {
    return value;
  }

  var isArr = isArray$2(value);

  if (isArr) {
    result = initCloneArray(value);

    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag$1(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer$1(value)) {
      return cloneBuffer(value, isDeep);
    }

    if (tag == objectTag$1 || tag == argsTag$1 || isFunc && !object4) {
      result = isFlat || isFunc ? {} : initCloneObject(value);

      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object4 ? value : {};
      }

      result = initCloneByTag(value, tag, isDeep);
    }
  }

  stack || (stack = new Stack());
  var stacked = stack.get(value);

  if (stacked) {
    return stacked;
  }

  stack.set(value, result);

  if (isSet$1(value)) {
    value.forEach(function (subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap$1(value)) {
    value.forEach(function (subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }

  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function (subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }

    assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}

var CLONE_SYMBOLS_FLAG = 4;

function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

var HASH_UNDEFINED = "__lodash_hash_undefined__";

function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);

  return this;
}

function setCacheHas(value) {
  return this.__data__.has(value);
}

function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();

  while (++index < length) {
    this.add(values[index]);
  }
}

SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

function arraySome(array4, predicate) {
  var index = -1,
      length = array4 == null ? 0 : array4.length;

  while (++index < length) {
    if (predicate(array4[index], index, array4)) {
      return true;
    }
  }

  return false;
}

function cacheHas(cache, key) {
  return cache.has(key);
}

var COMPARE_PARTIAL_FLAG$3 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

function equalArrays(array4, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
      arrLength = array4.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }

  var arrStacked = stack.get(array4);
  var othStacked = stack.get(other);

  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array4;
  }

  var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : void 0;
  stack.set(array4, other);
  stack.set(other, array4);

  while (++index < arrLength) {
    var arrValue = array4[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array4, stack) : customizer(arrValue, othValue, index, array4, other, stack);
    }

    if (compared !== void 0) {
      if (compared) {
        continue;
      }

      result = false;
      break;
    }

    if (seen) {
      if (!arraySome(other, function (othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }

  stack["delete"](array4);
  stack["delete"](other);
  return result;
}

function mapToArray(map) {
  var index = -1,
      result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

function setToArray(set2) {
  var index = -1,
      result = Array(set2.size);
  set2.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

var COMPARE_PARTIAL_FLAG$2 = 1,
    COMPARE_UNORDERED_FLAG = 2;
var boolTag = "[object Boolean]",
    dateTag = "[object Date]",
    errorTag = "[object Error]",
    mapTag = "[object Map]",
    numberTag = "[object Number]",
    regexpTag = "[object RegExp]",
    setTag = "[object Set]",
    stringTag = "[object String]",
    symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]",
    dataViewTag = "[object DataView]";
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0,
    symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;

function equalByTag(object4, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object4.byteLength != other.byteLength || object4.byteOffset != other.byteOffset) {
        return false;
      }

      object4 = object4.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object4.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object4), new Uint8Array$1(other))) {
        return false;
      }

      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object4, +other);

    case errorTag:
      return object4.name == other.name && object4.message == other.message;

    case regexpTag:
    case stringTag:
      return object4 == other + "";

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = setToArray);

      if (object4.size != other.size && !isPartial) {
        return false;
      }

      var stacked = stack.get(object4);

      if (stacked) {
        return stacked == other;
      }

      bitmask |= COMPARE_UNORDERED_FLAG;
      stack.set(object4, other);
      var result = equalArrays(convert(object4), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object4);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object4) == symbolValueOf.call(other);
      }

  }

  return false;
}

var COMPARE_PARTIAL_FLAG$1 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$2 = objectProto$1.hasOwnProperty;

function equalObjects(object4, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1,
      objProps = getAllKeys(object4),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }

  var index = objLength;

  while (index--) {
    var key = objProps[index];

    if (!(isPartial ? key in other : hasOwnProperty$2.call(other, key))) {
      return false;
    }
  }

  var objStacked = stack.get(object4);
  var othStacked = stack.get(other);

  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object4;
  }

  var result = true;
  stack.set(object4, other);
  stack.set(other, object4);
  var skipCtor = isPartial;

  while (++index < objLength) {
    key = objProps[index];
    var objValue = object4[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object4, stack) : customizer(objValue, othValue, key, object4, other, stack);
    }

    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }

    skipCtor || (skipCtor = key == "constructor");
  }

  if (result && !skipCtor) {
    var objCtor = object4.constructor,
        othCtor = other.constructor;

    if (objCtor != othCtor && "constructor" in object4 && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }

  stack["delete"](object4);
  stack["delete"](other);
  return result;
}

var COMPARE_PARTIAL_FLAG = 1;
var argsTag = "[object Arguments]",
    arrayTag = "[object Array]",
    objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty$1 = objectProto.hasOwnProperty;

function baseIsEqualDeep(object4, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$2(object4),
      othIsArr = isArray$2(other),
      objTag = objIsArr ? arrayTag : getTag$1(object4),
      othTag = othIsArr ? arrayTag : getTag$1(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer$1(object4)) {
    if (!isBuffer$1(other)) {
      return false;
    }

    objIsArr = true;
    objIsObj = false;
  }

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray$1(object4) ? equalArrays(object4, other, bitmask, customizer, equalFunc, stack) : equalByTag(object4, other, objTag, bitmask, customizer, equalFunc, stack);
  }

  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty$1.call(object4, "__wrapped__"),
        othIsWrapped = othIsObj && hasOwnProperty$1.call(other, "__wrapped__");

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object4.value() : object4,
          othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }

  if (!isSameTag) {
    return false;
  }

  stack || (stack = new Stack());
  return equalObjects(object4, other, bitmask, customizer, equalFunc, stack);
}

function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }

  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }

  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

var now = function now() {
  return root$1.Date.now();
};

var now$1 = now;
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax = Math.max,
    nativeMin = Math.min;

function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  wait = toNumber(wait) || 0;

  if (isObject$1(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now$1();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }

    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = void 0;

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }

    lastArgs = lastThis = void 0;
    return result;
  }

  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }

    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }

  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$1());
  }

  function debounced() {
    var time = now$1(),
        isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }

      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

function fromPairs(pairs) {
  var index = -1,
      length = pairs == null ? 0 : pairs.length,
      result = {};

  while (++index < length) {
    var pair = pairs[index];
    result[pair[0]] = pair[1];
  }

  return result;
}

function isEqual(value, other) {
  return baseIsEqual(value, other);
}

function isNil(value) {
  return value == null;
}

function baseSet(object4, path, value, customizer) {
  if (!isObject$1(object4)) {
    return object4;
  }

  path = castPath(path, object4);
  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object4;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object4;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;

      if (newValue === void 0) {
        newValue = isObject$1(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }

    assignValue(nested, key, newValue);
    nested = nested[key];
  }

  return object4;
}

function set(object4, path, value) {
  return object4 == null ? object4 : baseSet(object4, path, value);
}

var composeEventHandlers = function composeEventHandlers(theirsHandler, oursHandler) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$checkForDefault = _ref2.checkForDefaultPrevented,
      checkForDefaultPrevented = _ref2$checkForDefault === void 0 ? true : _ref2$checkForDefault;

  var handleEvent = function handleEvent(event) {
    var shouldPrevent = theirsHandler == null ? void 0 : theirsHandler(event);

    if (checkForDefaultPrevented === false || !shouldPrevent) {
      return oursHandler == null ? void 0 : oursHandler(event);
    }
  };

  return handleEvent;
};

var _a;

var isClient = typeof window !== "undefined";

var isBoolean = function isBoolean(val) {
  return typeof val === "boolean";
};

var isNumber = function isNumber(val) {
  return typeof val === "number";
};

var isString$1 = function isString$1(val) {
  return typeof val === "string";
};

var noop = function noop() {};

isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);

function createFilterWrapper(filter, fn2) {
  function wrapper() {
    var _this3 = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    filter(function () {
      return fn2.apply(_this3, args);
    }, {
      fn: fn2,
      thisArg: this,
      args: args
    });
  }

  return wrapper;
}

function debounceFilter(ms) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var timer;
  var maxTimer;

  var filter = function filter(invoke) {
    var duration = (0, _vue.unref)(ms);
    var maxDuration = (0, _vue.unref)(options.maxWait);
    if (timer) clearTimeout(timer);

    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        clearTimeout(maxTimer);
        maxTimer = null;
      }

      return invoke();
    }

    if (maxDuration && !maxTimer) {
      maxTimer = setTimeout(function () {
        if (timer) clearTimeout(timer);
        maxTimer = null;
        invoke();
      }, maxDuration);
    }

    timer = setTimeout(function () {
      if (maxTimer) clearTimeout(maxTimer);
      maxTimer = null;
      invoke();
    }, duration);
  };

  return filter;
}

function tryOnScopeDispose(fn2) {
  if ((0, _vue.getCurrentScope)()) {
    (0, _vue.onScopeDispose)(fn2);
    return true;
  }

  return false;
}

function useDebounceFn(fn2) {
  var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return createFilterWrapper(debounceFilter(ms, options), fn2);
}

function refDebounced(value) {
  var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (ms <= 0) return value;
  var debounced = (0, _vue.ref)(value.value);
  var updater = useDebounceFn(function () {
    debounced.value = value.value;
  }, ms, options);
  (0, _vue.watch)(value, function () {
    return updater();
  });
  return debounced;
}

function unrefElement(elRef) {
  var _a2;

  var plain = (0, _vue.unref)(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}

var defaultWindow = isClient ? window : void 0;

function useEventListener() {
  var target;
  var event;
  var listener;
  var options;

  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  if (isString$1(args[0])) {
    event = args[0];
    listener = args[1];
    options = args[2];
    target = defaultWindow;
  } else {
    target = args[0];
    event = args[1];
    listener = args[2];
    options = args[3];
  }

  if (!target) return noop;
  var _cleanup = noop;
  var stopWatch = (0, _vue.watch)(function () {
    return unrefElement(target);
  }, function (el) {
    _cleanup();

    if (!el) return;
    el.addEventListener(event, listener, options);

    _cleanup = function cleanup() {
      el.removeEventListener(event, listener, options);
      _cleanup = noop;
    };
  }, {
    immediate: true,
    flush: "post"
  });

  var stop = function stop() {
    stopWatch();

    _cleanup();
  };

  tryOnScopeDispose(stop);
  return stop;
}

function onClickOutside(target, handler) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _options$window = options.window,
      window2 = _options$window === void 0 ? defaultWindow : _options$window,
      ignore = options.ignore,
      _options$capture = options.capture,
      capture = _options$capture === void 0 ? true : _options$capture,
      _options$detectIframe = options.detectIframe,
      detectIframe = _options$detectIframe === void 0 ? false : _options$detectIframe;
  if (!window2) return;
  var shouldListen = (0, _vue.ref)(true);
  var fallback;

  var listener = function listener(event) {
    window2.clearTimeout(fallback);
    var el = unrefElement(target);
    var composedPath = event.composedPath();
    if (!el || el === event.target || composedPath.includes(el) || !shouldListen.value) return;

    if (ignore && ignore.length > 0) {
      if (ignore.some(function (target2) {
        var el2 = unrefElement(target2);
        return el2 && (event.target === el2 || composedPath.includes(el2));
      })) return;
    }

    handler(event);
  };

  var cleanup = [useEventListener(window2, "click", listener, {
    passive: true,
    capture: capture
  }), useEventListener(window2, "pointerdown", function (e) {
    var el = unrefElement(target);
    shouldListen.value = !!el && !e.composedPath().includes(el);
  }, {
    passive: true
  }), useEventListener(window2, "pointerup", function (e) {
    if (e.button === 0) {
      var path = e.composedPath();

      e.composedPath = function () {
        return path;
      };

      fallback = window2.setTimeout(function () {
        return listener(e);
      }, 50);
    }
  }, {
    passive: true
  }), detectIframe && useEventListener(window2, "blur", function (event) {
    var _a2;

    var el = unrefElement(target);
    if (((_a2 = document.activeElement) == null ? void 0 : _a2.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(document.activeElement))) handler(event);
  })].filter(Boolean);

  var stop = function stop() {
    return cleanup.forEach(function (fn2) {
      return fn2();
    });
  };

  return stop;
}

var _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};

var globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];
var __getOwnPropSymbols$e = Object.getOwnPropertySymbols;
var __hasOwnProp$e = Object.prototype.hasOwnProperty;
var __propIsEnum$e = Object.prototype.propertyIsEnumerable;

var __objRest$2 = function __objRest$2(source, exclude) {
  var target = {};

  for (var prop in source) {
    if (__hasOwnProp$e.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
  }

  if (source != null && __getOwnPropSymbols$e) {
    var _iterator = _createForOfIteratorHelper(__getOwnPropSymbols$e(source)),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var prop = _step.value;
        if (exclude.indexOf(prop) < 0 && __propIsEnum$e.call(source, prop)) target[prop] = source[prop];
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return target;
};

function useResizeObserver(target, callback) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var _a2 = options,
      _a2$window = _a2.window,
      window2 = _a2$window === void 0 ? defaultWindow : _a2$window,
      observerOptions = __objRest$2(_a2, ["window"]);

  var observer;
  var isSupported = window2 && "ResizeObserver" in window2;

  var cleanup = function cleanup() {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };

  var stopWatch = (0, _vue.watch)(function () {
    return unrefElement(target);
  }, function (el) {
    cleanup();

    if (isSupported && window2 && el) {
      observer = new ResizeObserver(callback);
      observer.observe(el, observerOptions);
    }
  }, {
    immediate: true,
    flush: "post"
  });

  var stop = function stop() {
    cleanup();
    stopWatch();
  };

  tryOnScopeDispose(stop);
  return {
    isSupported: isSupported,
    stop: stop
  };
}

var SwipeDirection;

(function (SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));

var NOOP = function NOOP() {};

var hasOwnProperty = Object.prototype.hasOwnProperty;

var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};

var isArray = Array.isArray;

var isFunction = function isFunction(val) {
  return typeof val === "function";
};

var isString = function isString(val) {
  return typeof val === "string";
};

var isObject = function isObject(val) {
  return val !== null && _typeof(val) === "object";
};

var objectToString = Object.prototype.toString;

var toTypeString = function toTypeString(value) {
  return objectToString.call(value);
};

var toRawType = function toRawType(value) {
  return toTypeString(value).slice(8, -1);
};

var isUndefined = function isUndefined(val) {
  return val === void 0;
};

var isElement = function isElement(e) {
  if (typeof Element === "undefined") return false;
  return e instanceof Element;
};

var escapeStringRegexp = function escapeStringRegexp() {
  var string3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return string3.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};

var getProp = function getProp(obj, path, defaultValue) {
  return {
    get value() {
      return get(obj, path, defaultValue);
    },

    set value(val) {
      set(obj, path, val);
    }

  };
};

var ElementPlusError = /*#__PURE__*/function (_Error2) {
  _inherits(ElementPlusError, _Error2);

  var _super = _createSuper(ElementPlusError);

  function ElementPlusError(m) {
    var _this4;

    _classCallCheck(this, ElementPlusError);

    _this4 = _super.call(this, m);
    _this4.name = "ElementPlusError";
    return _this4;
  }

  return _createClass(ElementPlusError);
}( /*#__PURE__*/_wrapNativeSuper3(Error));

function throwError(scope, m) {
  throw new ElementPlusError("[".concat(scope, "] ").concat(m));
}

function debugWarn(scope, message) {}

function addUnit(value) {
  var defaultUnit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "px";
  if (!value) return "";

  if (isString(value)) {
    return value;
  } else if (isNumber(value)) {
    return "".concat(value).concat(defaultUnit);
  }
}

function scrollIntoView(container, selected) {
  if (!isClient) return;

  if (!selected) {
    container.scrollTop = 0;
    return;
  }

  var offsetParents = [];
  var pointer = selected.offsetParent;

  while (pointer !== null && container !== pointer && container.contains(pointer)) {
    offsetParents.push(pointer);
    pointer = pointer.offsetParent;
  }

  var top = selected.offsetTop + offsetParents.reduce(function (prev, curr) {
    return prev + curr.offsetTop;
  }, 0);
  var bottom = top + selected.offsetHeight;
  var viewRectTop = container.scrollTop;
  var viewRectBottom = viewRectTop + container.clientHeight;

  if (top < viewRectTop) {
    container.scrollTop = top;
  } else if (bottom > viewRectBottom) {
    container.scrollTop = bottom - container.clientHeight;
  }
}
/*! Element Plus Icons Vue v2.0.6 */


var export_helper_default = function export_helper_default(sfc, props) {
  var target = sfc.__vccOpts || sfc;

  var _iterator2 = _createForOfIteratorHelper(props),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = _slicedToArray(_step2.value, 2),
          key = _step2$value[0],
          val = _step2$value[1];

      target[key] = val;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return target;
};

var _sfc_main12 = {
  name: "ArrowUp"
},
    _hoisted_112 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
},
    _hoisted_212 = /* @__PURE__ */(0, _vue.createElementVNode)("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1),
    _hoisted_312 = [_hoisted_212];

function _sfc_render12(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("svg", _hoisted_112, _hoisted_312);
}

var arrow_up_default = /* @__PURE__ */export_helper_default(_sfc_main12, [["render", _sfc_render12], ["__file", "arrow-up.vue"]]);

var _sfc_main48 = {
  name: "CircleCheck"
},
    _hoisted_148 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
},
    _hoisted_248 = /* @__PURE__ */(0, _vue.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1),
    _hoisted_347 = /* @__PURE__ */(0, _vue.createElementVNode)("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1),
    _hoisted_414 = [_hoisted_248, _hoisted_347];

function _sfc_render48(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("svg", _hoisted_148, _hoisted_414);
}

var circle_check_default = /* @__PURE__ */export_helper_default(_sfc_main48, [["render", _sfc_render48], ["__file", "circle-check.vue"]]);

var _sfc_main50 = {
  name: "CircleClose"
},
    _hoisted_150 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
},
    _hoisted_250 = /* @__PURE__ */(0, _vue.createElementVNode)("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1),
    _hoisted_349 = /* @__PURE__ */(0, _vue.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1),
    _hoisted_415 = [_hoisted_250, _hoisted_349];

function _sfc_render50(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("svg", _hoisted_150, _hoisted_415);
}

var circle_close_default = /* @__PURE__ */export_helper_default(_sfc_main50, [["render", _sfc_render50], ["__file", "circle-close.vue"]]);

var _sfc_main55 = {
  name: "Close"
},
    _hoisted_155 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
},
    _hoisted_255 = /* @__PURE__ */(0, _vue.createElementVNode)("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1),
    _hoisted_354 = [_hoisted_255];

function _sfc_render55(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("svg", _hoisted_155, _hoisted_354);
}

var close_default = /* @__PURE__ */export_helper_default(_sfc_main55, [["render", _sfc_render55], ["__file", "close.vue"]]);

var _sfc_main130 = {
  name: "Hide"
},
    _hoisted_1130 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
},
    _hoisted_2130 = /* @__PURE__ */(0, _vue.createElementVNode)("path", {
  d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",
  fill: "currentColor"
}, null, -1),
    _hoisted_3129 = /* @__PURE__ */(0, _vue.createElementVNode)("path", {
  d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",
  fill: "currentColor"
}, null, -1),
    _hoisted_436 = [_hoisted_2130, _hoisted_3129];

function _sfc_render130(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("svg", _hoisted_1130, _hoisted_436);
}

var hide_default = /* @__PURE__ */export_helper_default(_sfc_main130, [["render", _sfc_render130], ["__file", "hide.vue"]]);

var _sfc_main147 = {
  name: "Loading"
},
    _hoisted_1147 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
},
    _hoisted_2147 = /* @__PURE__ */(0, _vue.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1),
    _hoisted_3146 = [_hoisted_2147];

function _sfc_render147(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("svg", _hoisted_1147, _hoisted_3146);
}

var loading_default = /* @__PURE__ */export_helper_default(_sfc_main147, [["render", _sfc_render147], ["__file", "loading.vue"]]);

var _sfc_main274 = {
  name: "View"
},
    _hoisted_1274 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
},
    _hoisted_2274 = /* @__PURE__ */(0, _vue.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1),
    _hoisted_3273 = [_hoisted_2274];

function _sfc_render274(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("svg", _hoisted_1274, _hoisted_3273);
}

var view_default = /* @__PURE__ */export_helper_default(_sfc_main274, [["render", _sfc_render274], ["__file", "view.vue"]]);
var epPropKey = "__epPropKey";

var definePropType = function definePropType(val) {
  return val;
};

var isEpProp = function isEpProp(val) {
  return isObject(val) && !!val[epPropKey];
};

var buildProp = function buildProp(prop, key) {
  if (!isObject(prop) || isEpProp(prop)) return prop;
  var values = prop.values,
      required4 = prop.required,
      defaultValue = prop["default"],
      type4 = prop.type,
      validator = prop.validator;

  var _validator = values || validator ? function (val) {
    var valid = false;
    var allowedValues = [];

    if (values) {
      allowedValues = Array.from(values);

      if (hasOwn(prop, "default")) {
        allowedValues.push(defaultValue);
      }

      valid || (valid = allowedValues.includes(val));
    }

    if (validator) valid || (valid = validator(val));

    if (!valid && allowedValues.length > 0) {
      var allowValuesText = _toConsumableArray(new Set(allowedValues)).map(function (value) {
        return JSON.stringify(value);
      }).join(", ");

      (0, _vue.warn)("Invalid prop: validation failed".concat(key ? " for prop \"".concat(key, "\"") : "", ". Expected one of [").concat(allowValuesText, "], got value ").concat(JSON.stringify(val), "."));
    }

    return valid;
  } : void 0;

  var epProp = _defineProperty({
    type: type4,
    required: !!required4,
    validator: _validator
  }, epPropKey, true);

  if (hasOwn(prop, "default")) epProp["default"] = defaultValue;
  return epProp;
};

var buildProps = function buildProps(props) {
  return fromPairs(Object.entries(props).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        option = _ref4[1];

    return [key, buildProp(option, key)];
  }));
};

var iconPropType = definePropType([String, Object, Function]);
var ValidateComponentsMap = {
  validating: loading_default,
  success: circle_check_default,
  error: circle_close_default
};

var withInstall = function withInstall(main, extra) {
  main.install = function (app) {
    for (var _i2 = 0, _arr2 = [main].concat(_toConsumableArray(Object.values(extra != null ? extra : {}))); _i2 < _arr2.length; _i2++) {
      var comp = _arr2[_i2];
      app.component(comp.name, comp);
    }
  };

  if (extra) {
    for (var _i3 = 0, _Object$entries = Object.entries(extra); _i3 < _Object$entries.length; _i3++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),
          key = _Object$entries$_i[0],
          comp = _Object$entries$_i[1];

      main[key] = comp;
    }
  }

  return main;
};

var withNoopInstall = function withNoopInstall(component) {
  component.install = NOOP;
  return component;
};

var EVENT_CODE = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  "delete": "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
};
var UPDATE_MODEL_EVENT = "update:modelValue";
var CHANGE_EVENT = "change";
var componentSizes = ["", "default", "small", "large"];
var componentSizeMap = {
  large: 40,
  "default": 32,
  small: 24
};

var getComponentSize = function getComponentSize(size) {
  return componentSizeMap[size || "default"];
};

var isValidComponentSize = function isValidComponentSize(val) {
  return [""].concat(componentSizes).includes(val);
};

var isKorean = function isKorean(text) {
  return /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(text);
};

var generateId = function generateId() {
  return Math.floor(Math.random() * 1e4);
};

var mutable = function mutable(val) {
  return val;
};

var DEFAULT_EXCLUDE_KEYS = ["class", "style"];
var LISTENER_PREFIX = /^on[A-Z]/;

var useAttrs = function useAttrs() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$excludeListen = params.excludeListeners,
      excludeListeners = _params$excludeListen === void 0 ? false : _params$excludeListen,
      excludeKeys = params.excludeKeys;
  var allExcludeKeys = (0, _vue.computed)(function () {
    return ((excludeKeys == null ? void 0 : excludeKeys.value) || []).concat(DEFAULT_EXCLUDE_KEYS);
  });
  var instance = (0, _vue.getCurrentInstance)();

  if (!instance) {
    return (0, _vue.computed)(function () {
      return {};
    });
  }

  return (0, _vue.computed)(function () {
    var _a2;

    return fromPairs(Object.entries((_a2 = instance.proxy) == null ? void 0 : _a2.$attrs).filter(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 1),
          key = _ref6[0];

      return !allExcludeKeys.value.includes(key) && !(excludeListeners && LISTENER_PREFIX.test(key));
    }));
  });
};

var buttonGroupContextKey = Symbol("buttonGroupContextKey");
var configProviderContextKey = Symbol();
var formContextKey = Symbol("formContextKey");
var formItemContextKey = Symbol("formItemContextKey");
var rowContextKey = Symbol("rowContextKey");
var scrollbarContextKey = Symbol("scrollbarContextKey");
var POPPER_INJECTION_KEY = Symbol("popper");
var POPPER_CONTENT_INJECTION_KEY = Symbol("popperContent");

var useProp = function useProp(name) {
  var vm = (0, _vue.getCurrentInstance)();
  return (0, _vue.computed)(function () {
    var _a2, _b;

    return (_b = ((_a2 = vm.proxy) == null ? void 0 : _a2.$props)[name]) != null ? _b : void 0;
  });
};

var globalConfig = (0, _vue.ref)();

function useGlobalConfig(key) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : void 0;
  var config = (0, _vue.getCurrentInstance)() ? (0, _vue.inject)(configProviderContextKey, globalConfig) : globalConfig;

  if (key) {
    return (0, _vue.computed)(function () {
      var _a2, _b;

      return (_b = (_a2 = config.value) == null ? void 0 : _a2[key]) != null ? _b : defaultValue;
    });
  } else {
    return config;
  }
}

var useSizeProp = buildProp({
  type: String,
  values: componentSizes,
  required: false
});

var useSize = function useSize(fallback) {
  var ignore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var emptyRef = (0, _vue.ref)(void 0);
  var size = ignore.prop ? emptyRef : useProp("size");
  var globalConfig2 = ignore.global ? emptyRef : useGlobalConfig("size");
  var form = ignore.form ? {
    size: void 0
  } : (0, _vue.inject)(formContextKey, void 0);
  var formItem = ignore.formItem ? {
    size: void 0
  } : (0, _vue.inject)(formItemContextKey, void 0);
  return (0, _vue.computed)(function () {
    return size.value || (0, _vue.unref)(fallback) || (formItem == null ? void 0 : formItem.size) || (form == null ? void 0 : form.size) || globalConfig2.value || "";
  });
};

var useDisabled = function useDisabled(fallback) {
  var disabled = useProp("disabled");
  var form = (0, _vue.inject)(formContextKey, void 0);
  return (0, _vue.computed)(function () {
    return disabled.value || (0, _vue.unref)(fallback) || (form == null ? void 0 : form.disabled) || false;
  });
};

var useDeprecated = function useDeprecated(_ref7, condition) {
  var from = _ref7.from,
      replacement = _ref7.replacement,
      scope = _ref7.scope,
      version = _ref7.version,
      ref2 = _ref7.ref,
      _ref7$type = _ref7.type,
      type4 = _ref7$type === void 0 ? "API" : _ref7$type;
  (0, _vue.watch)(function () {
    return (0, _vue.unref)(condition);
  }, function (val) {}, {
    immediate: true
  });
};

var useFocus = function useFocus(el) {
  return {
    focus: function focus() {
      var _a2, _b;

      (_b = (_a2 = el.value) == null ? void 0 : _a2.focus) == null ? void 0 : _b.call(_a2);
    }
  };
};

var defaultIdInjection = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
};
var ID_INJECTION_KEY = Symbol("elIdInjection");

var useId = function useId(deterministicId) {
  var idInjection = (0, _vue.inject)(ID_INJECTION_KEY, defaultIdInjection);
  var idRef = (0, _vue.computed)(function () {
    return (0, _vue.unref)(deterministicId) || "el-id-".concat(idInjection.prefix, "-").concat(idInjection.current++);
  });
  return idRef;
};

var useFormItem = function useFormItem() {
  var form = (0, _vue.inject)(formContextKey, void 0);
  var formItem = (0, _vue.inject)(formItemContextKey, void 0);
  return {
    form: form,
    formItem: formItem
  };
};

var useFormItemInputId = function useFormItemInputId(props, _ref8) {
  var formItemContext = _ref8.formItemContext,
      disableIdGeneration = _ref8.disableIdGeneration,
      disableIdManagement = _ref8.disableIdManagement;

  if (!disableIdGeneration) {
    disableIdGeneration = (0, _vue.ref)(false);
  }

  if (!disableIdManagement) {
    disableIdManagement = (0, _vue.ref)(false);
  }

  var inputId = (0, _vue.ref)();
  var idUnwatch = void 0;
  var isLabeledByFormItem = (0, _vue.computed)(function () {
    var _a2;

    return !!(!props.label && formItemContext && formItemContext.inputIds && ((_a2 = formItemContext.inputIds) == null ? void 0 : _a2.length) <= 1);
  });
  (0, _vue.onMounted)(function () {
    idUnwatch = (0, _vue.watch)([(0, _vue.toRef)(props, "id"), disableIdGeneration], function (_ref9) {
      var _ref10 = _slicedToArray(_ref9, 2),
          id = _ref10[0],
          disableIdGeneration2 = _ref10[1];

      var newId = id != null ? id : !disableIdGeneration2 ? useId().value : void 0;

      if (newId !== inputId.value) {
        if (formItemContext == null ? void 0 : formItemContext.removeInputId) {
          inputId.value && formItemContext.removeInputId(inputId.value);

          if (!(disableIdManagement == null ? void 0 : disableIdManagement.value) && !disableIdGeneration2 && newId) {
            formItemContext.addInputId(newId);
          }
        }

        inputId.value = newId;
      }
    }, {
      immediate: true
    });
  });
  (0, _vue.onUnmounted)(function () {
    idUnwatch && idUnwatch();

    if (formItemContext == null ? void 0 : formItemContext.removeInputId) {
      inputId.value && formItemContext.removeInputId(inputId.value);
    }
  });
  return {
    isLabeledByFormItem: isLabeledByFormItem,
    inputId: inputId
  };
};

var English = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      "goto": "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      "delete": "Delete",
      preview: "Preview",
      "continue": "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};

var buildTranslator = function buildTranslator(locale) {
  return function (path, option) {
    return translate(path, option, (0, _vue.unref)(locale));
  };
};

var translate = function translate(path, option, locale) {
  return get(locale, path, path).replace(/\{(\w+)\}/g, function (_, key) {
    var _a2;

    return "".concat((_a2 = option == null ? void 0 : option[key]) != null ? _a2 : "{".concat(key, "}"));
  });
};

var buildLocaleContext = function buildLocaleContext(locale) {
  var lang = (0, _vue.computed)(function () {
    return (0, _vue.unref)(locale).name;
  });
  var localeRef = (0, _vue.isRef)(locale) ? locale : (0, _vue.ref)(locale);
  return {
    lang: lang,
    locale: localeRef,
    t: buildTranslator(locale)
  };
};

var useLocale = function useLocale() {
  var locale = useGlobalConfig("locale");
  return buildLocaleContext((0, _vue.computed)(function () {
    return locale.value || English;
  }));
};

var _prop = buildProp({
  type: definePropType(Boolean),
  "default": null
});

var _event = buildProp({
  type: definePropType(Function)
});

var createModelToggleComposable = function createModelToggleComposable(name) {
  var _useModelToggleProps;

  var updateEventKey = "update:".concat(name);
  var updateEventKeyRaw = "onUpdate:".concat(name);
  var useModelToggleEmits2 = [updateEventKey];
  var useModelToggleProps2 = (_useModelToggleProps = {}, _defineProperty(_useModelToggleProps, name, _prop), _defineProperty(_useModelToggleProps, updateEventKeyRaw, _event), _useModelToggleProps);

  var useModelToggle2 = function useModelToggle2(_ref11) {
    var indicator = _ref11.indicator,
        toggleReason = _ref11.toggleReason,
        shouldHideWhenRouteChanges = _ref11.shouldHideWhenRouteChanges,
        shouldProceed = _ref11.shouldProceed,
        onShow = _ref11.onShow,
        onHide = _ref11.onHide;
    var instance = (0, _vue.getCurrentInstance)();
    var emit = instance.emit;
    var props = instance.props;
    var hasUpdateHandler = (0, _vue.computed)(function () {
      return isFunction(props[updateEventKeyRaw]);
    });
    var isModelBindingAbsent = (0, _vue.computed)(function () {
      return props[name] === null;
    });

    var doShow = function doShow(event) {
      if (indicator.value === true) {
        return;
      }

      indicator.value = true;

      if (toggleReason) {
        toggleReason.value = event;
      }

      if (isFunction(onShow)) {
        onShow(event);
      }
    };

    var doHide = function doHide(event) {
      if (indicator.value === false) {
        return;
      }

      indicator.value = false;

      if (toggleReason) {
        toggleReason.value = event;
      }

      if (isFunction(onHide)) {
        onHide(event);
      }
    };

    var show = function show(event) {
      if (props.disabled === true || isFunction(shouldProceed) && !shouldProceed()) return;
      var shouldEmit = hasUpdateHandler.value && isClient;

      if (shouldEmit) {
        emit(updateEventKey, true);
      }

      if (isModelBindingAbsent.value || !shouldEmit) {
        doShow(event);
      }
    };

    var hide = function hide(event) {
      if (props.disabled === true || !isClient) return;
      var shouldEmit = hasUpdateHandler.value && isClient;

      if (shouldEmit) {
        emit(updateEventKey, false);
      }

      if (isModelBindingAbsent.value || !shouldEmit) {
        doHide(event);
      }
    };

    var onChange = function onChange(val) {
      if (!isBoolean(val)) return;

      if (props.disabled && val) {
        if (hasUpdateHandler.value) {
          emit(updateEventKey, false);
        }
      } else if (indicator.value !== val) {
        if (val) {
          doShow();
        } else {
          doHide();
        }
      }
    };

    var toggle = function toggle() {
      if (indicator.value) {
        hide();
      } else {
        show();
      }
    };

    (0, _vue.watch)(function () {
      return props[name];
    }, onChange);

    if (shouldHideWhenRouteChanges && instance.appContext.config.globalProperties.$route !== void 0) {
      (0, _vue.watch)(function () {
        return _objectSpread({}, instance.proxy.$route);
      }, function () {
        if (shouldHideWhenRouteChanges.value && indicator.value) {
          hide();
        }
      });
    }

    (0, _vue.onMounted)(function () {
      onChange(props[name]);
    });
    return {
      hide: hide,
      show: show,
      toggle: toggle
    };
  };

  return {
    useModelToggle: useModelToggle2,
    useModelToggleProps: useModelToggleProps2,
    useModelToggleEmits: useModelToggleEmits2
  };
};

function useTimeout() {
  var timeoutHandle;

  var registerTimeout = function registerTimeout(fn2, delay) {
    cancelTimeout();
    timeoutHandle = window.setTimeout(fn2, delay);
  };

  var cancelTimeout = function cancelTimeout() {
    return window.clearTimeout(timeoutHandle);
  };

  tryOnScopeDispose(function () {
    return cancelTimeout();
  });
  return {
    registerTimeout: registerTimeout,
    cancelTimeout: cancelTimeout
  };
}

var registeredEscapeHandlers = [];

var useEscapeKeydown = function useEscapeKeydown(handler) {
  var cachedHandler = function cachedHandler(e) {
    var event = e;

    if (event.key === EVENT_CODE.esc) {
      registeredEscapeHandlers.forEach(function (registeredHandler) {
        return registeredHandler(event);
      });
    }
  };

  (0, _vue.onMounted)(function () {
    if (registeredEscapeHandlers.length === 0) {
      document.addEventListener("keydown", cachedHandler);
    }

    if (isClient) registeredEscapeHandlers.push(handler);
  });
  (0, _vue.onBeforeUnmount)(function () {
    registeredEscapeHandlers = registeredEscapeHandlers.filter(function (registeredHandler) {
      return registeredHandler !== handler;
    });

    if (registeredEscapeHandlers.length === 0) {
      if (isClient) document.removeEventListener("keydown", cachedHandler);
    }
  });
};

var cachedContainer;
var POPPER_CONTAINER_ID = "el-popper-container-".concat(generateId());
var POPPER_CONTAINER_SELECTOR = "#".concat(POPPER_CONTAINER_ID);

var createContainer = function createContainer() {
  var container = document.createElement("div");
  container.id = POPPER_CONTAINER_ID;
  document.body.appendChild(container);
  return container;
};

var usePopperContainer = function usePopperContainer() {
  (0, _vue.onBeforeMount)(function () {
    if (!isClient) return;

    if (!cachedContainer || !document.body.querySelector(POPPER_CONTAINER_SELECTOR)) {
      cachedContainer = createContainer();
    }
  });
};

var useDelayedToggleProps = buildProps({
  showAfter: {
    type: Number,
    "default": 0
  },
  hideAfter: {
    type: Number,
    "default": 200
  }
});

var useDelayedToggle = function useDelayedToggle(_ref12) {
  var showAfter = _ref12.showAfter,
      hideAfter = _ref12.hideAfter,
      open = _ref12.open,
      close = _ref12.close;

  var _useTimeout = useTimeout(),
      registerTimeout = _useTimeout.registerTimeout;

  var onOpen = function onOpen(event) {
    registerTimeout(function () {
      open(event);
    }, (0, _vue.unref)(showAfter));
  };

  var onClose = function onClose(event) {
    registerTimeout(function () {
      close(event);
    }, (0, _vue.unref)(hideAfter));
  };

  return {
    onOpen: onOpen,
    onClose: onClose
  };
};

var FORWARD_REF_INJECTION_KEY = Symbol("elForwardRef");

var useForwardRef = function useForwardRef(forwardRef) {
  var setForwardRef = function setForwardRef(el) {
    forwardRef.value = el;
  };

  (0, _vue.provide)(FORWARD_REF_INJECTION_KEY, {
    setForwardRef: setForwardRef
  });
};

var useForwardRefDirective = function useForwardRefDirective(setForwardRef) {
  return {
    mounted: function mounted(el) {
      setForwardRef(el);
    },
    updated: function updated(el) {
      setForwardRef(el);
    },
    unmounted: function unmounted() {
      setForwardRef(null);
    }
  };
};

var defaultNamespace = "el";
var statePrefix = "is-";

var _bem = function _bem(namespace, block, blockSuffix, element, modifier) {
  var cls = "".concat(namespace, "-").concat(block);

  if (blockSuffix) {
    cls += "-".concat(blockSuffix);
  }

  if (element) {
    cls += "__".concat(element);
  }

  if (modifier) {
    cls += "--".concat(modifier);
  }

  return cls;
};

var useNamespace = function useNamespace(block) {
  var globalConfig2 = useGlobalConfig("namespace");
  var namespace = (0, _vue.computed)(function () {
    return globalConfig2.value || defaultNamespace;
  });

  var b = function b() {
    var blockSuffix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return _bem((0, _vue.unref)(namespace), block, blockSuffix, "", "");
  };

  var e = function e(element) {
    return element ? _bem((0, _vue.unref)(namespace), block, "", element, "") : "";
  };

  var m = function m(modifier) {
    return modifier ? _bem((0, _vue.unref)(namespace), block, "", "", modifier) : "";
  };

  var be2 = function be2(blockSuffix, element) {
    return blockSuffix && element ? _bem((0, _vue.unref)(namespace), block, blockSuffix, element, "") : "";
  };

  var em = function em(element, modifier) {
    return element && modifier ? _bem((0, _vue.unref)(namespace), block, "", element, modifier) : "";
  };

  var bm = function bm(blockSuffix, modifier) {
    return blockSuffix && modifier ? _bem((0, _vue.unref)(namespace), block, blockSuffix, "", modifier) : "";
  };

  var bem = function bem(blockSuffix, element, modifier) {
    return blockSuffix && element && modifier ? _bem((0, _vue.unref)(namespace), block, blockSuffix, element, modifier) : "";
  };

  var is = function is(name) {
    var state = (arguments.length <= 1 ? 0 : arguments.length - 1) >= 1 ? arguments.length <= 1 ? undefined : arguments[1] : true;
    return name && state ? "".concat(statePrefix).concat(name) : "";
  };

  var cssVar = function cssVar(object4) {
    var styles = {};

    for (var key in object4) {
      styles["--".concat(namespace.value, "-").concat(key)] = object4[key];
    }

    return styles;
  };

  var cssVarBlock = function cssVarBlock(object4) {
    var styles = {};

    for (var key in object4) {
      styles["--".concat(namespace.value, "-").concat(block, "-").concat(key)] = object4[key];
    }

    return styles;
  };

  var cssVarName = function cssVarName(name) {
    return "--".concat(namespace.value, "-").concat(name);
  };

  var cssVarBlockName = function cssVarBlockName(name) {
    return "--".concat(namespace.value, "-").concat(block, "-").concat(name);
  };

  return {
    namespace: namespace,
    b: b,
    e: e,
    m: m,
    be: be2,
    em: em,
    bm: bm,
    bem: bem,
    is: is,
    cssVar: cssVar,
    cssVarName: cssVarName,
    cssVarBlock: cssVarBlock,
    cssVarBlockName: cssVarBlockName
  };
};

var zIndex = (0, _vue.ref)(0);

var useZIndex = function useZIndex() {
  var initialZIndex = useGlobalConfig("zIndex", 2e3);
  var currentZIndex = (0, _vue.computed)(function () {
    return initialZIndex.value + zIndex.value;
  });

  var nextZIndex = function nextZIndex() {
    zIndex.value++;
    return currentZIndex.value;
  };

  return {
    initialZIndex: initialZIndex,
    currentZIndex: currentZIndex,
    nextZIndex: nextZIndex
  };
};

function useCursor(input) {
  var selectionRef = (0, _vue.ref)();

  function recordCursor() {
    if (input.value == void 0) return;
    var _input$value = input.value,
        selectionStart = _input$value.selectionStart,
        selectionEnd = _input$value.selectionEnd,
        value = _input$value.value;
    if (selectionStart == null || selectionEnd == null) return;
    var beforeTxt = value.slice(0, Math.max(0, selectionStart));
    var afterTxt = value.slice(Math.max(0, selectionEnd));
    selectionRef.value = {
      selectionStart: selectionStart,
      selectionEnd: selectionEnd,
      value: value,
      beforeTxt: beforeTxt,
      afterTxt: afterTxt
    };
  }

  function setCursor() {
    if (input.value == void 0 || selectionRef.value == void 0) return;
    var value = input.value.value;
    var _selectionRef$value = selectionRef.value,
        beforeTxt = _selectionRef$value.beforeTxt,
        afterTxt = _selectionRef$value.afterTxt,
        selectionStart = _selectionRef$value.selectionStart;
    if (beforeTxt == void 0 || afterTxt == void 0 || selectionStart == void 0) return;
    var startPos = value.length;

    if (value.endsWith(afterTxt)) {
      startPos = value.length - afterTxt.length;
    } else if (value.startsWith(beforeTxt)) {
      startPos = beforeTxt.length;
    } else {
      var beforeLastChar = beforeTxt[selectionStart - 1];
      var newIndex = value.indexOf(beforeLastChar, selectionStart - 1);

      if (newIndex !== -1) {
        startPos = newIndex + 1;
      }
    }

    input.value.setSelectionRange(startPos, startPos);
  }

  return [recordCursor, setCursor];
}

var _export_sfc$1 = function _export_sfc$1(sfc, props) {
  var target = sfc.__vccOpts || sfc;

  var _iterator3 = _createForOfIteratorHelper(props),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _step3$value = _slicedToArray(_step3.value, 2),
          key = _step3$value[0],
          val = _step3$value[1];

      target[key] = val;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return target;
};

var iconProps = buildProps({
  size: {
    type: definePropType([Number, String])
  },
  color: {
    type: String
  }
});
var __default__$c = {
  name: "ElIcon",
  inheritAttrs: false
};

var _sfc_main$n = /* @__PURE__ */(0, _vue.defineComponent)(_objectSpread(_objectSpread({}, __default__$c), {}, {
  props: iconProps,
  setup: function setup(__props) {
    var props = __props;
    var ns2 = useNamespace("icon");
    var style = (0, _vue.computed)(function () {
      if (!props.size && !props.color) return {};
      return {
        fontSize: isUndefined(props.size) ? void 0 : addUnit(props.size),
        "--color": props.color
      };
    });
    return function (_ctx, _cache) {
      return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("i", (0, _vue.mergeProps)({
        "class": (0, _vue.unref)(ns2).b(),
        style: (0, _vue.unref)(style)
      }, _ctx.$attrs), [(0, _vue.renderSlot)(_ctx.$slots, "default")], 16);
    };
  }
}));

var Icon = /* @__PURE__ */_export_sfc$1(_sfc_main$n, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);

var ElIcon = withInstall(Icon);
var hiddenTextarea = void 0;
var HIDDEN_STYLE = "\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n";
var CONTEXT_STYLE = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing"];

function calculateNodeStyling(targetElement) {
  var style = window.getComputedStyle(targetElement);
  var boxSizing = style.getPropertyValue("box-sizing");
  var paddingSize = Number.parseFloat(style.getPropertyValue("padding-bottom")) + Number.parseFloat(style.getPropertyValue("padding-top"));
  var borderSize = Number.parseFloat(style.getPropertyValue("border-bottom-width")) + Number.parseFloat(style.getPropertyValue("border-top-width"));
  var contextStyle = CONTEXT_STYLE.map(function (name) {
    return "".concat(name, ":").concat(style.getPropertyValue(name));
  }).join(";");
  return {
    contextStyle: contextStyle,
    paddingSize: paddingSize,
    borderSize: borderSize,
    boxSizing: boxSizing
  };
}

function calcTextareaHeight(targetElement) {
  var minRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var maxRows = arguments.length > 2 ? arguments[2] : undefined;

  var _a2;

  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    document.body.appendChild(hiddenTextarea);
  }

  var _calculateNodeStyling = calculateNodeStyling(targetElement),
      paddingSize = _calculateNodeStyling.paddingSize,
      borderSize = _calculateNodeStyling.borderSize,
      boxSizing = _calculateNodeStyling.boxSizing,
      contextStyle = _calculateNodeStyling.contextStyle;

  hiddenTextarea.setAttribute("style", "".concat(contextStyle, ";").concat(HIDDEN_STYLE));
  hiddenTextarea.value = targetElement.value || targetElement.placeholder || "";
  var height = hiddenTextarea.scrollHeight;
  var result = {};

  if (boxSizing === "border-box") {
    height = height + borderSize;
  } else if (boxSizing === "content-box") {
    height = height - paddingSize;
  }

  hiddenTextarea.value = "";
  var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

  if (isNumber(minRows)) {
    var minHeight = singleRowHeight * minRows;

    if (boxSizing === "border-box") {
      minHeight = minHeight + paddingSize + borderSize;
    }

    height = Math.max(minHeight, height);
    result.minHeight = "".concat(minHeight, "px");
  }

  if (isNumber(maxRows)) {
    var maxHeight = singleRowHeight * maxRows;

    if (boxSizing === "border-box") {
      maxHeight = maxHeight + paddingSize + borderSize;
    }

    height = Math.min(maxHeight, height);
  }

  result.height = "".concat(height, "px");
  (_a2 = hiddenTextarea.parentNode) == null ? void 0 : _a2.removeChild(hiddenTextarea);
  hiddenTextarea = void 0;
  return result;
}

var inputProps = buildProps({
  id: {
    type: String,
    "default": void 0
  },
  size: useSizeProp,
  disabled: Boolean,
  modelValue: {
    type: definePropType([String, Number, Object]),
    "default": ""
  },
  type: {
    type: String,
    "default": "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: definePropType([Boolean, Object]),
    "default": false
  },
  autocomplete: {
    type: String,
    "default": "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String,
    "default": ""
  },
  readonly: {
    type: Boolean,
    "default": false
  },
  clearable: {
    type: Boolean,
    "default": false
  },
  showPassword: {
    type: Boolean,
    "default": false
  },
  showWordLimit: {
    type: Boolean,
    "default": false
  },
  suffixIcon: {
    type: iconPropType,
    "default": ""
  },
  prefixIcon: {
    type: iconPropType,
    "default": ""
  },
  containerRole: {
    type: String,
    "default": void 0
  },
  label: {
    type: String,
    "default": void 0
  },
  tabindex: {
    type: [String, Number],
    "default": 0
  },
  validateEvent: {
    type: Boolean,
    "default": true
  },
  inputStyle: {
    type: definePropType([Object, Array, String]),
    "default": function _default() {
      return mutable({});
    }
  }
});
var inputEmits = (_inputEmits = {}, _defineProperty(_inputEmits, UPDATE_MODEL_EVENT, function (value) {
  return isString(value);
}), _defineProperty(_inputEmits, "input", function input(value) {
  return isString(value);
}), _defineProperty(_inputEmits, "change", function change(value) {
  return isString(value);
}), _defineProperty(_inputEmits, "focus", function focus(evt) {
  return evt instanceof FocusEvent;
}), _defineProperty(_inputEmits, "blur", function blur(evt) {
  return evt instanceof FocusEvent;
}), _defineProperty(_inputEmits, "clear", function clear() {
  return true;
}), _defineProperty(_inputEmits, "mouseleave", function mouseleave(evt) {
  return evt instanceof MouseEvent;
}), _defineProperty(_inputEmits, "mouseenter", function mouseenter(evt) {
  return evt instanceof MouseEvent;
}), _defineProperty(_inputEmits, "keydown", function keydown(evt) {
  return evt instanceof Event;
}), _defineProperty(_inputEmits, "compositionstart", function compositionstart(evt) {
  return evt instanceof CompositionEvent;
}), _defineProperty(_inputEmits, "compositionupdate", function compositionupdate(evt) {
  return evt instanceof CompositionEvent;
}), _defineProperty(_inputEmits, "compositionend", function compositionend(evt) {
  return evt instanceof CompositionEvent;
}), _inputEmits);
var _hoisted_1$5 = ["role"];
var _hoisted_2$3 = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder"];
var _hoisted_3$2 = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder"];
var __default__$b = {
  name: "ElInput",
  inheritAttrs: false
};

var _sfc_main$m = /* @__PURE__ */(0, _vue.defineComponent)(_objectSpread(_objectSpread({}, __default__$b), {}, {
  props: inputProps,
  emits: inputEmits,
  setup: function setup(__props, _ref13) {
    var expose = _ref13.expose,
        emit = _ref13.emit;
    var props = __props;
    var PENDANT_MAP = {
      suffix: "append",
      prefix: "prepend"
    };
    var instance = (0, _vue.getCurrentInstance)();
    var rawAttrs = (0, _vue.useAttrs)();
    var slots = (0, _vue.useSlots)();
    var containerAttrs = (0, _vue.computed)(function () {
      var comboBoxAttrs = {};

      if (props.containerRole === "combobox") {
        comboBoxAttrs["aria-haspopup"] = rawAttrs["aria-haspopup"];
        comboBoxAttrs["aria-owns"] = rawAttrs["aria-owns"];
        comboBoxAttrs["aria-expanded"] = rawAttrs["aria-expanded"];
      }

      return comboBoxAttrs;
    });
    var attrs = useAttrs({
      excludeKeys: (0, _vue.computed)(function () {
        return Object.keys(containerAttrs.value);
      })
    });

    var _useFormItem = useFormItem(),
        form = _useFormItem.form,
        formItem = _useFormItem.formItem;

    var _useFormItemInputId = useFormItemInputId(props, {
      formItemContext: formItem
    }),
        inputId = _useFormItemInputId.inputId;

    var inputSize = useSize();
    var inputDisabled = useDisabled();
    var nsInput = useNamespace("input");
    var nsTextarea = useNamespace("textarea");
    var input = (0, _vue.shallowRef)();
    var textarea = (0, _vue.shallowRef)();
    var focused = (0, _vue.ref)(false);
    var hovering = (0, _vue.ref)(false);
    var isComposing = (0, _vue.ref)(false);
    var passwordVisible = (0, _vue.ref)(false);
    var countStyle = (0, _vue.ref)();
    var textareaCalcStyle = (0, _vue.shallowRef)(props.inputStyle);

    var _ref = (0, _vue.computed)(function () {
      return input.value || textarea.value;
    });

    var needStatusIcon = (0, _vue.computed)(function () {
      var _a2;

      return (_a2 = form == null ? void 0 : form.statusIcon) != null ? _a2 : false;
    });
    var validateState = (0, _vue.computed)(function () {
      return (formItem == null ? void 0 : formItem.validateState) || "";
    });
    var validateIcon = (0, _vue.computed)(function () {
      return validateState.value && ValidateComponentsMap[validateState.value];
    });
    var passwordIcon = (0, _vue.computed)(function () {
      return passwordVisible.value ? view_default : hide_default;
    });
    var containerStyle = (0, _vue.computed)(function () {
      return [rawAttrs.style, props.inputStyle];
    });
    var textareaStyle = (0, _vue.computed)(function () {
      return [props.inputStyle, textareaCalcStyle.value, {
        resize: props.resize
      }];
    });
    var nativeInputValue = (0, _vue.computed)(function () {
      return isNil(props.modelValue) ? "" : String(props.modelValue);
    });
    var showClear = (0, _vue.computed)(function () {
      return props.clearable && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && (focused.value || hovering.value);
    });
    var showPwdVisible = (0, _vue.computed)(function () {
      return props.showPassword && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && (!!nativeInputValue.value || focused.value);
    });
    var isWordLimitVisible = (0, _vue.computed)(function () {
      return props.showWordLimit && !!attrs.value.maxlength && (props.type === "text" || props.type === "textarea") && !inputDisabled.value && !props.readonly && !props.showPassword;
    });
    var textLength = (0, _vue.computed)(function () {
      return Array.from(nativeInputValue.value).length;
    });
    var inputExceed = (0, _vue.computed)(function () {
      return !!isWordLimitVisible.value && textLength.value > Number(attrs.value.maxlength);
    });
    var suffixVisible = (0, _vue.computed)(function () {
      return !!slots.suffix || !!props.suffixIcon || showClear.value || props.showPassword || isWordLimitVisible.value || !!validateState.value && needStatusIcon.value;
    });

    var _useCursor = useCursor(input),
        _useCursor2 = _slicedToArray(_useCursor, 2),
        recordCursor = _useCursor2[0],
        setCursor = _useCursor2[1];

    useResizeObserver(textarea, function (entries) {
      if (!isWordLimitVisible.value || props.resize !== "both") return;
      var entry = entries[0];
      var width = entry.contentRect.width;
      countStyle.value = {
        right: "calc(100% - ".concat(width + 15 + 6, "px)")
      };
    });

    var resizeTextarea = function resizeTextarea() {
      var type4 = props.type,
          autosize = props.autosize;
      if (!isClient || type4 !== "textarea") return;

      if (autosize) {
        var minRows = isObject(autosize) ? autosize.minRows : void 0;
        var maxRows = isObject(autosize) ? autosize.maxRows : void 0;
        textareaCalcStyle.value = _objectSpread({}, calcTextareaHeight(textarea.value, minRows, maxRows));
      } else {
        textareaCalcStyle.value = {
          minHeight: calcTextareaHeight(textarea.value).minHeight
        };
      }
    };

    var setNativeInputValue = function setNativeInputValue() {
      var input2 = _ref.value;
      if (!input2 || input2.value === nativeInputValue.value) return;
      input2.value = nativeInputValue.value;
    };

    var calcIconOffset = function calcIconOffset(place) {
      var el = instance.vnode.el;
      if (!el) return;
      var elList = Array.from(el.querySelectorAll(".".concat(nsInput.e(place))));
      var target = elList.find(function (item) {
        return item.parentNode === el;
      });
      if (!target) return;
      var pendant = PENDANT_MAP[place];

      if (slots[pendant]) {
        target.style.transform = "translateX(".concat(place === "suffix" ? "-" : "").concat(el.querySelector(".".concat(nsInput.be("group", pendant))).offsetWidth, "px)");
      } else {
        target.removeAttribute("style");
      }
    };

    var updateIconOffset = function updateIconOffset() {
      calcIconOffset("prefix");
      calcIconOffset("suffix");
    };

    var handleInput = /*#__PURE__*/function () {
      var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
        var value;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                recordCursor();
                value = event.target.value;

                if (props.formatter) {
                  value = props.parser ? props.parser(value) : value;
                  value = props.formatter(value);
                }

                if (!isComposing.value) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                if (!(value === nativeInputValue.value)) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return");

              case 7:
                emit(UPDATE_MODEL_EVENT, value);
                emit("input", value);
                _context.next = 11;
                return (0, _vue.nextTick)();

              case 11:
                setNativeInputValue();
                setCursor();

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function handleInput(_x) {
        return _ref14.apply(this, arguments);
      };
    }();

    var handleChange = function handleChange(event) {
      emit("change", event.target.value);
    };

    var handleCompositionStart = function handleCompositionStart(event) {
      emit("compositionstart", event);
      isComposing.value = true;
    };

    var handleCompositionUpdate = function handleCompositionUpdate(event) {
      var _a2;

      emit("compositionupdate", event);
      var text = (_a2 = event.target) == null ? void 0 : _a2.value;
      var lastCharacter = text[text.length - 1] || "";
      isComposing.value = !isKorean(lastCharacter);
    };

    var handleCompositionEnd = function handleCompositionEnd(event) {
      emit("compositionend", event);

      if (isComposing.value) {
        isComposing.value = false;
        handleInput(event);
      }
    };

    var handlePasswordVisible = function handlePasswordVisible() {
      passwordVisible.value = !passwordVisible.value;
      focus();
    };

    var focus = /*#__PURE__*/function () {
      var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _a2;

        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _vue.nextTick)();

              case 2:
                (_a2 = _ref.value) == null ? void 0 : _a2.focus();

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function focus() {
        return _ref15.apply(this, arguments);
      };
    }();

    var blur = function blur() {
      var _a2;

      return (_a2 = _ref.value) == null ? void 0 : _a2.blur();
    };

    var handleFocus = function handleFocus(event) {
      focused.value = true;
      emit("focus", event);
    };

    var handleBlur = function handleBlur(event) {
      var _a2;

      focused.value = false;
      emit("blur", event);

      if (props.validateEvent) {
        (_a2 = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a2.call(formItem, "blur")["catch"](function (err) {
          return debugWarn();
        });
      }
    };

    var handleMouseLeave = function handleMouseLeave(evt) {
      hovering.value = false;
      emit("mouseleave", evt);
    };

    var handleMouseEnter = function handleMouseEnter(evt) {
      hovering.value = true;
      emit("mouseenter", evt);
    };

    var handleKeydown = function handleKeydown(evt) {
      emit("keydown", evt);
    };

    var select = function select() {
      var _a2;

      (_a2 = _ref.value) == null ? void 0 : _a2.select();
    };

    var clear = function clear() {
      emit(UPDATE_MODEL_EVENT, "");
      emit("change", "");
      emit("clear");
      emit("input", "");
    };

    (0, _vue.watch)(function () {
      return props.modelValue;
    }, function () {
      var _a2;

      (0, _vue.nextTick)(function () {
        return resizeTextarea();
      });

      if (props.validateEvent) {
        (_a2 = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a2.call(formItem, "change")["catch"](function (err) {
          return debugWarn();
        });
      }
    });
    (0, _vue.watch)(nativeInputValue, function () {
      return setNativeInputValue();
    });
    (0, _vue.watch)(function () {
      return props.type;
    }, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _vue.nextTick)();

            case 2:
              setNativeInputValue();
              resizeTextarea();
              updateIconOffset();

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
    (0, _vue.onMounted)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!props.formatter && props.parser) ;
              setNativeInputValue();
              updateIconOffset();
              _context4.next = 5;
              return (0, _vue.nextTick)();

            case 5:
              resizeTextarea();

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
    (0, _vue.onUpdated)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return (0, _vue.nextTick)();

            case 2:
              updateIconOffset();

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
    expose({
      input: input,
      textarea: textarea,
      ref: _ref,
      textareaStyle: textareaStyle,
      autosize: (0, _vue.toRef)(props, "autosize"),
      focus: focus,
      blur: blur,
      select: select,
      clear: clear,
      resizeTextarea: resizeTextarea
    });
    return function (_ctx, _cache) {
      var _ref19;

      return (0, _vue.withDirectives)(((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", (0, _vue.mergeProps)((0, _vue.unref)(containerAttrs), {
        "class": [_ctx.type === "textarea" ? (0, _vue.unref)(nsTextarea).b() : (0, _vue.unref)(nsInput).b(), (0, _vue.unref)(nsInput).m((0, _vue.unref)(inputSize)), (0, _vue.unref)(nsInput).is("disabled", (0, _vue.unref)(inputDisabled)), (0, _vue.unref)(nsInput).is("exceed", (0, _vue.unref)(inputExceed)), (_ref19 = {}, _defineProperty(_ref19, (0, _vue.unref)(nsInput).b("group"), _ctx.$slots.prepend || _ctx.$slots.append), _defineProperty(_ref19, (0, _vue.unref)(nsInput).bm("group", "append"), _ctx.$slots.append), _defineProperty(_ref19, (0, _vue.unref)(nsInput).bm("group", "prepend"), _ctx.$slots.prepend), _defineProperty(_ref19, (0, _vue.unref)(nsInput).m("prefix"), _ctx.$slots.prefix || _ctx.prefixIcon), _defineProperty(_ref19, (0, _vue.unref)(nsInput).m("suffix"), _ctx.$slots.suffix || _ctx.suffixIcon || _ctx.clearable || _ctx.showPassword), _defineProperty(_ref19, (0, _vue.unref)(nsInput).bm("suffix", "password-clear"), (0, _vue.unref)(showClear) && (0, _vue.unref)(showPwdVisible)), _ref19), _ctx.$attrs["class"]],
        style: (0, _vue.unref)(containerStyle),
        role: _ctx.containerRole,
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave
      }), [(0, _vue.createCommentVNode)(" input "), _ctx.type !== "textarea" ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)(_vue.Fragment, {
        key: 0
      }, [(0, _vue.createCommentVNode)(" prepend slot "), _ctx.$slots.prepend ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
        key: 0,
        "class": (0, _vue.normalizeClass)((0, _vue.unref)(nsInput).be("group", "prepend"))
      }, [(0, _vue.renderSlot)(_ctx.$slots, "prepend")], 2)) : (0, _vue.createCommentVNode)("v-if", true), (0, _vue.createElementVNode)("div", {
        "class": (0, _vue.normalizeClass)([(0, _vue.unref)(nsInput).e("wrapper"), (0, _vue.unref)(nsInput).is("focus", focused.value)])
      }, [(0, _vue.createCommentVNode)(" prefix slot "), _ctx.$slots.prefix || _ctx.prefixIcon ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", {
        key: 0,
        "class": (0, _vue.normalizeClass)((0, _vue.unref)(nsInput).e("prefix"))
      }, [(0, _vue.createElementVNode)("span", {
        "class": (0, _vue.normalizeClass)((0, _vue.unref)(nsInput).e("prefix-inner"))
      }, [(0, _vue.renderSlot)(_ctx.$slots, "prefix"), _ctx.prefixIcon ? ((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.unref)(ElIcon), {
        key: 0,
        "class": (0, _vue.normalizeClass)((0, _vue.unref)(nsInput).e("icon"))
      }, {
        "default": (0, _vue.withCtx)(function () {
          return [((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.prefixIcon)))];
        }),
        _: 1
      }, 8, ["class"])) : (0, _vue.createCommentVNode)("v-if", true)], 2)], 2)) : (0, _vue.createCommentVNode)("v-if", true), (0, _vue.createElementVNode)("input", (0, _vue.mergeProps)({
        id: (0, _vue.unref)(inputId),
        ref_key: "input",
        ref: input,
        "class": (0, _vue.unref)(nsInput).e("inner")
      }, (0, _vue.unref)(attrs), {
        type: _ctx.showPassword ? passwordVisible.value ? "text" : "password" : _ctx.type,
        disabled: (0, _vue.unref)(inputDisabled),
        formatter: _ctx.formatter,
        parser: _ctx.parser,
        readonly: _ctx.readonly,
        autocomplete: _ctx.autocomplete,
        tabindex: _ctx.tabindex,
        "aria-label": _ctx.label,
        placeholder: _ctx.placeholder,
        style: _ctx.inputStyle,
        onCompositionstart: handleCompositionStart,
        onCompositionupdate: handleCompositionUpdate,
        onCompositionend: handleCompositionEnd,
        onInput: handleInput,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onChange: handleChange,
        onKeydown: handleKeydown
      }), null, 16, _hoisted_2$3), (0, _vue.createCommentVNode)(" suffix slot "), (0, _vue.unref)(suffixVisible) ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", {
        key: 1,
        "class": (0, _vue.normalizeClass)((0, _vue.unref)(nsInput).e("suffix"))
      }, [(0, _vue.createElementVNode)("span", {
        "class": (0, _vue.normalizeClass)((0, _vue.unref)(nsInput).e("suffix-inner"))
      }, [!(0, _vue.unref)(showClear) || !(0, _vue.unref)(showPwdVisible) || !(0, _vue.unref)(isWordLimitVisible) ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)(_vue.Fragment, {
        key: 0
      }, [(0, _vue.renderSlot)(_ctx.$slots, "suffix"), _ctx.suffixIcon ? ((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.unref)(ElIcon), {
        key: 0,
        "class": (0, _vue.normalizeClass)((0, _vue.unref)(nsInput).e("icon"))
      }, {
        "default": (0, _vue.withCtx)(function () {
          return [((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.suffixIcon)))];
        }),
        _: 1
      }, 8, ["class"])) : (0, _vue.createCommentVNode)("v-if", true)], 64)) : (0, _vue.createCommentVNode)("v-if", true), (0, _vue.unref)(showClear) ? ((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.unref)(ElIcon), {
        key: 1,
        "class": (0, _vue.normalizeClass)([(0, _vue.unref)(nsInput).e("icon"), (0, _vue.unref)(nsInput).e("clear")]),
        onMousedown: (0, _vue.withModifiers)((0, _vue.unref)(NOOP), ["prevent"]),
        onClick: clear
      }, {
        "default": (0, _vue.withCtx)(function () {
          return [(0, _vue.createVNode)((0, _vue.unref)(circle_close_default))];
        }),
        _: 1
      }, 8, ["class", "onMousedown"])) : (0, _vue.createCommentVNode)("v-if", true), (0, _vue.unref)(showPwdVisible) ? ((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.unref)(ElIcon), {
        key: 2,
        "class": (0, _vue.normalizeClass)([(0, _vue.unref)(nsInput).e("icon"), (0, _vue.unref)(nsInput).e("password")]),
        onClick: handlePasswordVisible
      }, {
        "default": (0, _vue.withCtx)(function () {
          return [((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)((0, _vue.unref)(passwordIcon))))];
        }),
        _: 1
      }, 8, ["class"])) : (0, _vue.createCommentVNode)("v-if", true), (0, _vue.unref)(isWordLimitVisible) ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", {
        key: 3,
        "class": (0, _vue.normalizeClass)((0, _vue.unref)(nsInput).e("count"))
      }, [(0, _vue.createElementVNode)("span", {
        "class": (0, _vue.normalizeClass)((0, _vue.unref)(nsInput).e("count-inner"))
      }, (0, _vue.toDisplayString)((0, _vue.unref)(textLength)) + " / " + (0, _vue.toDisplayString)((0, _vue.unref)(attrs).maxlength), 3)], 2)) : (0, _vue.createCommentVNode)("v-if", true), (0, _vue.unref)(validateState) && (0, _vue.unref)(validateIcon) && (0, _vue.unref)(needStatusIcon) ? ((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.unref)(ElIcon), {
        key: 4,
        "class": (0, _vue.normalizeClass)([(0, _vue.unref)(nsInput).e("icon"), (0, _vue.unref)(nsInput).e("validateIcon"), (0, _vue.unref)(nsInput).is("loading", (0, _vue.unref)(validateState) === "validating")])
      }, {
        "default": (0, _vue.withCtx)(function () {
          return [((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)((0, _vue.unref)(validateIcon))))];
        }),
        _: 1
      }, 8, ["class"])) : (0, _vue.createCommentVNode)("v-if", true)], 2)], 2)) : (0, _vue.createCommentVNode)("v-if", true)], 2), (0, _vue.createCommentVNode)(" append slot "), _ctx.$slots.append ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
        key: 1,
        "class": (0, _vue.normalizeClass)((0, _vue.unref)(nsInput).be("group", "append"))
      }, [(0, _vue.renderSlot)(_ctx.$slots, "append")], 2)) : (0, _vue.createCommentVNode)("v-if", true)], 64)) : ((0, _vue.openBlock)(), (0, _vue.createElementBlock)(_vue.Fragment, {
        key: 1
      }, [(0, _vue.createCommentVNode)(" textarea "), (0, _vue.createElementVNode)("textarea", (0, _vue.mergeProps)({
        id: (0, _vue.unref)(inputId),
        ref_key: "textarea",
        ref: textarea,
        "class": (0, _vue.unref)(nsTextarea).e("inner")
      }, (0, _vue.unref)(attrs), {
        tabindex: _ctx.tabindex,
        disabled: (0, _vue.unref)(inputDisabled),
        readonly: _ctx.readonly,
        autocomplete: _ctx.autocomplete,
        style: (0, _vue.unref)(textareaStyle),
        "aria-label": _ctx.label,
        placeholder: _ctx.placeholder,
        onCompositionstart: handleCompositionStart,
        onCompositionupdate: handleCompositionUpdate,
        onCompositionend: handleCompositionEnd,
        onInput: handleInput,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onChange: handleChange,
        onKeydown: handleKeydown
      }), null, 16, _hoisted_3$2), (0, _vue.unref)(isWordLimitVisible) ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", {
        key: 0,
        style: (0, _vue.normalizeStyle)(countStyle.value),
        "class": (0, _vue.normalizeClass)((0, _vue.unref)(nsInput).e("count"))
      }, (0, _vue.toDisplayString)((0, _vue.unref)(textLength)) + " / " + (0, _vue.toDisplayString)((0, _vue.unref)(attrs).maxlength), 7)) : (0, _vue.createCommentVNode)("v-if", true)], 64))], 16, _hoisted_1$5)), [[_vue.vShow, _ctx.type !== "hidden"]]);
    };
  }
}));

var Input = /* @__PURE__ */_export_sfc$1(_sfc_main$m, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);

var ElInput = withInstall(Input);
var GAP = 4;
var BAR_MAP = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
};

var renderThumbStyle = function renderThumbStyle(_ref20) {
  var _ref21;

  var move = _ref20.move,
      size = _ref20.size,
      bar = _ref20.bar;
  return _ref21 = {}, _defineProperty(_ref21, bar.size, size), _defineProperty(_ref21, "transform", "translate".concat(bar.axis, "(").concat(move, "%)")), _ref21;
};

var thumbProps = buildProps({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: true
  },
  always: Boolean
});

var _sfc_main$l = /* @__PURE__ */(0, _vue.defineComponent)({
  __name: "thumb",
  props: thumbProps,
  setup: function setup(__props) {
    var props = __props;
    var COMPONENT_NAME2 = "Thumb";
    var scrollbar = (0, _vue.inject)(scrollbarContextKey);
    var ns2 = useNamespace("scrollbar");
    if (!scrollbar) throwError(COMPONENT_NAME2, "can not inject scrollbar context");
    var instance = (0, _vue.ref)();
    var thumb = (0, _vue.ref)();
    var thumbState = (0, _vue.ref)({});
    var visible = (0, _vue.ref)(false);
    var cursorDown = false;
    var cursorLeave = false;
    var originalOnSelectStart = isClient ? document.onselectstart : null;
    var bar = (0, _vue.computed)(function () {
      return BAR_MAP[props.vertical ? "vertical" : "horizontal"];
    });
    var thumbStyle = (0, _vue.computed)(function () {
      return renderThumbStyle({
        size: props.size,
        move: props.move,
        bar: bar.value
      });
    });
    var offsetRatio = (0, _vue.computed)(function () {
      return Math.pow(instance.value[bar.value.offset], 2) / scrollbar.wrapElement[bar.value.scrollSize] / props.ratio / thumb.value[bar.value.offset];
    });

    var clickThumbHandler = function clickThumbHandler(e) {
      var _a2;

      e.stopPropagation();
      if (e.ctrlKey || [1, 2].includes(e.button)) return;
      (_a2 = window.getSelection()) == null ? void 0 : _a2.removeAllRanges();
      startDrag(e);
      var el = e.currentTarget;
      if (!el) return;
      thumbState.value[bar.value.axis] = el[bar.value.offset] - (e[bar.value.client] - el.getBoundingClientRect()[bar.value.direction]);
    };

    var clickTrackHandler = function clickTrackHandler(e) {
      if (!thumb.value || !instance.value || !scrollbar.wrapElement) return;
      var offset = Math.abs(e.target.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]);
      var thumbHalf = thumb.value[bar.value.offset] / 2;
      var thumbPositionPercentage = (offset - thumbHalf) * 100 * offsetRatio.value / instance.value[bar.value.offset];
      scrollbar.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize] / 100;
    };

    var startDrag = function startDrag(e) {
      e.stopImmediatePropagation();
      cursorDown = true;
      document.addEventListener("mousemove", mouseMoveDocumentHandler);
      document.addEventListener("mouseup", mouseUpDocumentHandler);
      originalOnSelectStart = document.onselectstart;

      document.onselectstart = function () {
        return false;
      };
    };

    var mouseMoveDocumentHandler = function mouseMoveDocumentHandler(e) {
      if (!instance.value || !thumb.value) return;
      if (cursorDown === false) return;
      var prevPage = thumbState.value[bar.value.axis];
      if (!prevPage) return;
      var offset = (instance.value.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]) * -1;
      var thumbClickPosition = thumb.value[bar.value.offset] - prevPage;
      var thumbPositionPercentage = (offset - thumbClickPosition) * 100 * offsetRatio.value / instance.value[bar.value.offset];
      scrollbar.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize] / 100;
    };

    var mouseUpDocumentHandler = function mouseUpDocumentHandler() {
      cursorDown = false;
      thumbState.value[bar.value.axis] = 0;
      document.removeEventListener("mousemove", mouseMoveDocumentHandler);
      document.removeEventListener("mouseup", mouseUpDocumentHandler);
      restoreOnselectstart();
      if (cursorLeave) visible.value = false;
    };

    var mouseMoveScrollbarHandler = function mouseMoveScrollbarHandler() {
      cursorLeave = false;
      visible.value = !!props.size;
    };

    var mouseLeaveScrollbarHandler = function mouseLeaveScrollbarHandler() {
      cursorLeave = true;
      visible.value = cursorDown;
    };

    (0, _vue.onBeforeUnmount)(function () {
      restoreOnselectstart();
      document.removeEventListener("mouseup", mouseUpDocumentHandler);
    });

    var restoreOnselectstart = function restoreOnselectstart() {
      if (document.onselectstart !== originalOnSelectStart) document.onselectstart = originalOnSelectStart;
    };

    useEventListener((0, _vue.toRef)(scrollbar, "scrollbarElement"), "mousemove", mouseMoveScrollbarHandler);
    useEventListener((0, _vue.toRef)(scrollbar, "scrollbarElement"), "mouseleave", mouseLeaveScrollbarHandler);
    return function (_ctx, _cache) {
      return (0, _vue.openBlock)(), (0, _vue.createBlock)(_vue.Transition, {
        name: (0, _vue.unref)(ns2).b("fade"),
        persisted: ""
      }, {
        "default": (0, _vue.withCtx)(function () {
          return [(0, _vue.withDirectives)((0, _vue.createElementVNode)("div", {
            ref_key: "instance",
            ref: instance,
            "class": (0, _vue.normalizeClass)([(0, _vue.unref)(ns2).e("bar"), (0, _vue.unref)(ns2).is((0, _vue.unref)(bar).key)]),
            onMousedown: clickTrackHandler
          }, [(0, _vue.createElementVNode)("div", {
            ref_key: "thumb",
            ref: thumb,
            "class": (0, _vue.normalizeClass)((0, _vue.unref)(ns2).e("thumb")),
            style: (0, _vue.normalizeStyle)((0, _vue.unref)(thumbStyle)),
            onMousedown: clickThumbHandler
          }, null, 38)], 34), [[_vue.vShow, _ctx.always || visible.value]])];
        }),
        _: 1
      }, 8, ["name"]);
    };
  }
});

var Thumb = /* @__PURE__ */_export_sfc$1(_sfc_main$l, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);

var barProps = buildProps({
  always: {
    type: Boolean,
    "default": true
  },
  width: String,
  height: String,
  ratioX: {
    type: Number,
    "default": 1
  },
  ratioY: {
    type: Number,
    "default": 1
  }
});

var _sfc_main$k = /* @__PURE__ */(0, _vue.defineComponent)({
  __name: "bar",
  props: barProps,
  setup: function setup(__props, _ref22) {
    var expose = _ref22.expose;
    var props = __props;
    var moveX = (0, _vue.ref)(0);
    var moveY = (0, _vue.ref)(0);

    var handleScroll = function handleScroll(wrap) {
      if (wrap) {
        var offsetHeight = wrap.offsetHeight - GAP;
        var offsetWidth = wrap.offsetWidth - GAP;
        moveY.value = wrap.scrollTop * 100 / offsetHeight * props.ratioY;
        moveX.value = wrap.scrollLeft * 100 / offsetWidth * props.ratioX;
      }
    };

    expose({
      handleScroll: handleScroll
    });
    return function (_ctx, _cache) {
      return (0, _vue.openBlock)(), (0, _vue.createElementBlock)(_vue.Fragment, null, [(0, _vue.createVNode)(Thumb, {
        move: moveX.value,
        ratio: _ctx.ratioX,
        size: _ctx.width,
        always: _ctx.always
      }, null, 8, ["move", "ratio", "size", "always"]), (0, _vue.createVNode)(Thumb, {
        move: moveY.value,
        ratio: _ctx.ratioY,
        size: _ctx.height,
        vertical: "",
        always: _ctx.always
      }, null, 8, ["move", "ratio", "size", "always"])], 64);
    };
  }
});

var Bar = /* @__PURE__ */_export_sfc$1(_sfc_main$k, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);

var scrollbarProps = buildProps({
  height: {
    type: [String, Number],
    "default": ""
  },
  maxHeight: {
    type: [String, Number],
    "default": ""
  },
  "native": Boolean,
  wrapStyle: {
    type: definePropType([String, Object, Array]),
    "default": ""
  },
  wrapClass: {
    type: [String, Array],
    "default": ""
  },
  viewClass: {
    type: [String, Array],
    "default": ""
  },
  viewStyle: {
    type: [String, Array, Object],
    "default": ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    "default": "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    "default": 20
  }
});
var scrollbarEmits = {
  scroll: function scroll(_ref23) {
    var scrollTop = _ref23.scrollTop,
        scrollLeft = _ref23.scrollLeft;
    return [scrollTop, scrollLeft].every(isNumber);
  }
};
var __default__$a = {
  name: "ElScrollbar"
};

var _sfc_main$j = /* @__PURE__ */(0, _vue.defineComponent)(_objectSpread(_objectSpread({}, __default__$a), {}, {
  props: scrollbarProps,
  emits: scrollbarEmits,
  setup: function setup(__props, _ref24) {
    var expose = _ref24.expose,
        emit = _ref24.emit;
    var props = __props;
    var ns2 = useNamespace("scrollbar");
    var stopResizeObserver = void 0;
    var stopResizeListener = void 0;
    var scrollbar$ = (0, _vue.ref)();
    var wrap$ = (0, _vue.ref)();
    var resize$ = (0, _vue.ref)();
    var sizeWidth = (0, _vue.ref)("0");
    var sizeHeight = (0, _vue.ref)("0");
    var barRef = (0, _vue.ref)();
    var ratioY = (0, _vue.ref)(1);
    var ratioX = (0, _vue.ref)(1);
    var style = (0, _vue.computed)(function () {
      var style2 = {};
      if (props.height) style2.height = addUnit(props.height);
      if (props.maxHeight) style2.maxHeight = addUnit(props.maxHeight);
      return [props.wrapStyle, style2];
    });

    var handleScroll = function handleScroll() {
      var _a2;

      if (wrap$.value) {
        (_a2 = barRef.value) == null ? void 0 : _a2.handleScroll(wrap$.value);
        emit("scroll", {
          scrollTop: wrap$.value.scrollTop,
          scrollLeft: wrap$.value.scrollLeft
        });
      }
    };

    function scrollTo(arg1, arg2) {
      if (isObject(arg1)) {
        wrap$.value.scrollTo(arg1);
      } else if (isNumber(arg1) && isNumber(arg2)) {
        wrap$.value.scrollTo(arg1, arg2);
      }
    }

    var setScrollTop = function setScrollTop(value) {
      if (!isNumber(value)) {
        return;
      }

      wrap$.value.scrollTop = value;
    };

    var setScrollLeft = function setScrollLeft(value) {
      if (!isNumber(value)) {
        return;
      }

      wrap$.value.scrollLeft = value;
    };

    var update = function update() {
      if (!wrap$.value) return;
      var offsetHeight = wrap$.value.offsetHeight - GAP;
      var offsetWidth = wrap$.value.offsetWidth - GAP;
      var originalHeight = Math.pow(offsetHeight, 2) / wrap$.value.scrollHeight;
      var originalWidth = Math.pow(offsetWidth, 2) / wrap$.value.scrollWidth;
      var height = Math.max(originalHeight, props.minSize);
      var width = Math.max(originalWidth, props.minSize);
      ratioY.value = originalHeight / (offsetHeight - originalHeight) / (height / (offsetHeight - height));
      ratioX.value = originalWidth / (offsetWidth - originalWidth) / (width / (offsetWidth - width));
      sizeHeight.value = height + GAP < offsetHeight ? "".concat(height, "px") : "";
      sizeWidth.value = width + GAP < offsetWidth ? "".concat(width, "px") : "";
    };

    (0, _vue.watch)(function () {
      return props.noresize;
    }, function (noresize) {
      if (noresize) {
        stopResizeObserver == null ? void 0 : stopResizeObserver();
        stopResizeListener == null ? void 0 : stopResizeListener();
      } else {
        var _useResizeObserver = useResizeObserver(resize$, update);

        stopResizeObserver = _useResizeObserver.stop;
        stopResizeListener = useEventListener("resize", update);
      }
    }, {
      immediate: true
    });
    (0, _vue.watch)(function () {
      return [props.maxHeight, props.height];
    }, function () {
      if (!props["native"]) (0, _vue.nextTick)(function () {
        var _a2;

        update();

        if (wrap$.value) {
          (_a2 = barRef.value) == null ? void 0 : _a2.handleScroll(wrap$.value);
        }
      });
    });
    (0, _vue.provide)(scrollbarContextKey, (0, _vue.reactive)({
      scrollbarElement: scrollbar$,
      wrapElement: wrap$
    }));
    (0, _vue.onMounted)(function () {
      if (!props["native"]) (0, _vue.nextTick)(function () {
        return update();
      });
    });
    (0, _vue.onUpdated)(function () {
      return update();
    });
    expose({
      wrap$: wrap$,
      update: update,
      scrollTo: scrollTo,
      setScrollTop: setScrollTop,
      setScrollLeft: setScrollLeft,
      handleScroll: handleScroll
    });
    return function (_ctx, _cache) {
      return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
        ref_key: "scrollbar$",
        ref: scrollbar$,
        "class": (0, _vue.normalizeClass)((0, _vue.unref)(ns2).b())
      }, [(0, _vue.createElementVNode)("div", {
        ref_key: "wrap$",
        ref: wrap$,
        "class": (0, _vue.normalizeClass)([_ctx.wrapClass, (0, _vue.unref)(ns2).e("wrap"), _defineProperty({}, (0, _vue.unref)(ns2).em("wrap", "hidden-default"), !_ctx["native"])]),
        style: (0, _vue.normalizeStyle)((0, _vue.unref)(style)),
        onScroll: handleScroll
      }, [((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.tag), {
        ref_key: "resize$",
        ref: resize$,
        "class": (0, _vue.normalizeClass)([(0, _vue.unref)(ns2).e("view"), _ctx.viewClass]),
        style: (0, _vue.normalizeStyle)(_ctx.viewStyle)
      }, {
        "default": (0, _vue.withCtx)(function () {
          return [(0, _vue.renderSlot)(_ctx.$slots, "default")];
        }),
        _: 3
      }, 8, ["class", "style"]))], 38), !_ctx["native"] ? ((0, _vue.openBlock)(), (0, _vue.createBlock)(Bar, {
        key: 0,
        ref_key: "barRef",
        ref: barRef,
        height: sizeHeight.value,
        width: sizeWidth.value,
        always: _ctx.always,
        "ratio-x": ratioX.value,
        "ratio-y": ratioY.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"])) : (0, _vue.createCommentVNode)("v-if", true)], 2);
    };
  }
}));

var Scrollbar = /* @__PURE__ */_export_sfc$1(_sfc_main$j, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);

var ElScrollbar = withInstall(Scrollbar);
var usePopperProps = buildProps({
  role: {
    type: String,
    "default": "tooltip"
  }
});
var __default__$9 = {
  name: "ElPopperRoot",
  inheritAttrs: false
};

var _sfc_main$i = /* @__PURE__ */(0, _vue.defineComponent)(_objectSpread(_objectSpread({}, __default__$9), {}, {
  props: usePopperProps,
  setup: function setup(__props, _ref26) {
    var expose = _ref26.expose;
    var props = __props;
    var triggerRef2 = (0, _vue.ref)();
    var popperInstanceRef = (0, _vue.ref)();
    var contentRef = (0, _vue.ref)();
    var referenceRef = (0, _vue.ref)();
    var role = (0, _vue.computed)(function () {
      return props.role;
    });
    var popperProvides = {
      triggerRef: triggerRef2,
      popperInstanceRef: popperInstanceRef,
      contentRef: contentRef,
      referenceRef: referenceRef,
      role: role
    };
    expose(popperProvides);
    (0, _vue.provide)(POPPER_INJECTION_KEY, popperProvides);
    return function (_ctx, _cache) {
      return (0, _vue.renderSlot)(_ctx.$slots, "default");
    };
  }
}));

var Popper = /* @__PURE__ */_export_sfc$1(_sfc_main$i, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);

var usePopperArrowProps = buildProps({
  arrowOffset: {
    type: Number,
    "default": 5
  }
});
var __default__$8 = {
  name: "ElPopperArrow",
  inheritAttrs: false
};

var _sfc_main$h = /* @__PURE__ */(0, _vue.defineComponent)(_objectSpread(_objectSpread({}, __default__$8), {}, {
  props: usePopperArrowProps,
  setup: function setup(__props, _ref27) {
    var expose = _ref27.expose;
    var props = __props;
    var ns2 = useNamespace("popper");

    var _inject = (0, _vue.inject)(POPPER_CONTENT_INJECTION_KEY, void 0),
        arrowOffset = _inject.arrowOffset,
        arrowRef = _inject.arrowRef;

    (0, _vue.watch)(function () {
      return props.arrowOffset;
    }, function (val) {
      arrowOffset.value = val;
    });
    (0, _vue.onBeforeUnmount)(function () {
      arrowRef.value = void 0;
    });
    expose({
      arrowRef: arrowRef
    });
    return function (_ctx, _cache) {
      return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", {
        ref_key: "arrowRef",
        ref: arrowRef,
        "class": (0, _vue.normalizeClass)((0, _vue.unref)(ns2).e("arrow")),
        "data-popper-arrow": ""
      }, null, 2);
    };
  }
}));

var ElPopperArrow = /* @__PURE__ */_export_sfc$1(_sfc_main$h, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);

var NAME = "ElOnlyChild";
var OnlyChild = (0, _vue.defineComponent)({
  name: NAME,
  setup: function setup(_, _ref28) {
    var slots = _ref28.slots,
        attrs = _ref28.attrs;

    var _a2;

    var forwardRefInjection = (0, _vue.inject)(FORWARD_REF_INJECTION_KEY);
    var forwardRefDirective = useForwardRefDirective((_a2 = forwardRefInjection == null ? void 0 : forwardRefInjection.setForwardRef) != null ? _a2 : NOOP);
    return function () {
      var _a22;

      var defaultSlot = (_a22 = slots["default"]) == null ? void 0 : _a22.call(slots, attrs);
      if (!defaultSlot) return null;

      if (defaultSlot.length > 1) {
        return null;
      }

      var firstLegitNode = findFirstLegitChild(defaultSlot);

      if (!firstLegitNode) {
        return null;
      }

      return (0, _vue.withDirectives)((0, _vue.cloneVNode)(firstLegitNode, attrs), [[forwardRefDirective]]);
    };
  }
});

function findFirstLegitChild(node) {
  if (!node) return null;
  var children = node;

  var _iterator4 = _createForOfIteratorHelper(children),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var child = _step4.value;

      if (isObject(child)) {
        switch (child.type) {
          case _vue.Comment:
            continue;

          case _vue.Text:
          case "svg":
            return wrapTextContent(child);

          case _vue.Fragment:
            return findFirstLegitChild(child.children);

          default:
            return child;
        }
      }

      return wrapTextContent(child);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  return null;
}

function wrapTextContent(s) {
  return (0, _vue.createVNode)("span", {
    "class": "el-only-child__content"
  }, [s]);
}

var usePopperTriggerProps = buildProps({
  virtualRef: {
    type: definePropType(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: Function,
  onMouseleave: Function,
  onClick: Function,
  onKeydown: Function,
  onFocus: Function,
  onBlur: Function,
  onContextmenu: Function,
  id: String,
  open: Boolean
});
var __default__$7 = {
  name: "ElPopperTrigger",
  inheritAttrs: false
};

var _sfc_main$g = /* @__PURE__ */(0, _vue.defineComponent)(_objectSpread(_objectSpread({}, __default__$7), {}, {
  props: usePopperTriggerProps,
  setup: function setup(__props, _ref29) {
    var expose = _ref29.expose;
    var props = __props;

    var _inject2 = (0, _vue.inject)(POPPER_INJECTION_KEY, void 0),
        role = _inject2.role,
        triggerRef2 = _inject2.triggerRef;

    useForwardRef(triggerRef2);
    var ariaControls = (0, _vue.computed)(function () {
      return ariaHaspopup.value ? props.id : void 0;
    });
    var ariaDescribedby = (0, _vue.computed)(function () {
      if (role && role.value === "tooltip") {
        return props.open && props.id ? props.id : void 0;
      }

      return void 0;
    });
    var ariaHaspopup = (0, _vue.computed)(function () {
      if (role && role.value !== "tooltip") {
        return role.value;
      }

      return void 0;
    });
    var ariaExpanded = (0, _vue.computed)(function () {
      return ariaHaspopup.value ? "".concat(props.open) : void 0;
    });
    var virtualTriggerAriaStopWatch = void 0;
    (0, _vue.onMounted)(function () {
      (0, _vue.watch)(function () {
        return props.virtualRef;
      }, function (virtualEl) {
        if (virtualEl) {
          triggerRef2.value = unrefElement(virtualEl);
        }
      }, {
        immediate: true
      });
      (0, _vue.watch)(function () {
        return triggerRef2.value;
      }, function (el, prevEl) {
        virtualTriggerAriaStopWatch == null ? void 0 : virtualTriggerAriaStopWatch();
        virtualTriggerAriaStopWatch = void 0;

        if (isElement(el)) {
          ["onMouseenter", "onMouseleave", "onClick", "onKeydown", "onFocus", "onBlur", "onContextmenu"].forEach(function (eventName) {
            var _a2;

            var handler = props[eventName];

            if (handler) {
              el.addEventListener(eventName.slice(2).toLowerCase(), handler);
              (_a2 = prevEl == null ? void 0 : prevEl.removeEventListener) == null ? void 0 : _a2.call(prevEl, eventName.slice(2).toLowerCase(), handler);
            }
          });
          virtualTriggerAriaStopWatch = (0, _vue.watch)([ariaControls, ariaDescribedby, ariaHaspopup, ariaExpanded], function (watches) {
            ["aria-controls", "aria-describedby", "aria-haspopup", "aria-expanded"].forEach(function (key, idx) {
              isNil(watches[idx]) ? el.removeAttribute(key) : el.setAttribute(key, watches[idx]);
            });
          }, {
            immediate: true
          });
        }

        if (isElement(prevEl)) {
          ["aria-controls", "aria-describedby", "aria-haspopup", "aria-expanded"].forEach(function (key) {
            return prevEl.removeAttribute(key);
          });
        }
      }, {
        immediate: true
      });
    });
    (0, _vue.onBeforeUnmount)(function () {
      virtualTriggerAriaStopWatch == null ? void 0 : virtualTriggerAriaStopWatch();
      virtualTriggerAriaStopWatch = void 0;
    });
    expose({
      triggerRef: triggerRef2
    });
    return function (_ctx, _cache) {
      return !_ctx.virtualTriggering ? ((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.unref)(OnlyChild), (0, _vue.mergeProps)({
        key: 0
      }, _ctx.$attrs, {
        "aria-controls": (0, _vue.unref)(ariaControls),
        "aria-describedby": (0, _vue.unref)(ariaDescribedby),
        "aria-expanded": (0, _vue.unref)(ariaExpanded),
        "aria-haspopup": (0, _vue.unref)(ariaHaspopup)
      }), {
        "default": (0, _vue.withCtx)(function () {
          return [(0, _vue.renderSlot)(_ctx.$slots, "default")];
        }),
        _: 3
      }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"])) : (0, _vue.createCommentVNode)("v-if", true);
    };
  }
}));

var ElPopperTrigger = /* @__PURE__ */_export_sfc$1(_sfc_main$g, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);

var E = "top",
    R = "bottom",
    W = "right",
    P = "left",
    me = "auto",
    G = [E, R, W, P],
    U = "start",
    J = "end",
    Xe = "clippingParents",
    je = "viewport",
    K = "popper",
    Ye = "reference",
    De = G.reduce(function (t, e) {
  return t.concat([e + "-" + U, e + "-" + J]);
}, []),
    Ee = [].concat(G, [me]).reduce(function (t, e) {
  return t.concat([e, e + "-" + U, e + "-" + J]);
}, []),
    Ge = "beforeRead",
    Je = "read",
    Ke = "afterRead",
    Qe = "beforeMain",
    Ze = "main",
    et = "afterMain",
    tt = "beforeWrite",
    nt = "write",
    rt = "afterWrite",
    ot = [Ge, Je, Ke, Qe, Ze, et, tt, nt, rt];

function C(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}

function H(t) {
  if (t == null) return window;

  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }

  return t;
}

function Q(t) {
  var e = H(t).Element;
  return t instanceof e || t instanceof Element;
}

function B(t) {
  var e = H(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}

function Pe(t) {
  if (typeof ShadowRoot == "undefined") return false;
  var e = H(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}

function Mt(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function (n) {
    var r = e.styles[n] || {},
        o = e.attributes[n] || {},
        i = e.elements[n];
    !B(i) || !C(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function (a) {
      var s = o[a];
      s === false ? i.removeAttribute(a) : i.setAttribute(a, s === true ? "" : s);
    }));
  });
}

function Rt(t) {
  var e = t.state,
      n = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function () {
    Object.keys(e.elements).forEach(function (r) {
      var o = e.elements[r],
          i = e.attributes[r] || {},
          a = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : n[r]),
          s = a.reduce(function (f, c) {
        return f[c] = "", f;
      }, {});
      !B(o) || !C(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function (f) {
        o.removeAttribute(f);
      }));
    });
  };
}

var Ae = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: Mt,
  effect: Rt,
  requires: ["computeStyles"]
};

function q(t) {
  return t.split("-")[0];
}

var X = Math.max,
    ve = Math.min,
    Z = Math.round;

function ee(t, e) {
  e === void 0 && (e = false);
  var n = t.getBoundingClientRect(),
      r = 1,
      o = 1;

  if (B(t) && e) {
    var i = t.offsetHeight,
        a = t.offsetWidth;
    a > 0 && (r = Z(n.width) / a || 1), i > 0 && (o = Z(n.height) / i || 1);
  }

  return {
    width: n.width / r,
    height: n.height / o,
    top: n.top / o,
    right: n.right / r,
    bottom: n.bottom / o,
    left: n.left / r,
    x: n.left / r,
    y: n.top / o
  };
}

function ke(t) {
  var e = ee(t),
      n = t.offsetWidth,
      r = t.offsetHeight;
  return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: n,
    height: r
  };
}

function it(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e)) return true;

  if (n && Pe(n)) {
    var r = e;

    do {
      if (r && t.isSameNode(r)) return true;
      r = r.parentNode || r.host;
    } while (r);
  }

  return false;
}

function N(t) {
  return H(t).getComputedStyle(t);
}

function Wt(t) {
  return ["table", "td", "th"].indexOf(C(t)) >= 0;
}

function I(t) {
  return ((Q(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}

function ge(t) {
  return C(t) === "html" ? t : t.assignedSlot || t.parentNode || (Pe(t) ? t.host : null) || I(t);
}

function at(t) {
  return !B(t) || N(t).position === "fixed" ? null : t.offsetParent;
}

function Bt(t) {
  var e = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1,
      n = navigator.userAgent.indexOf("Trident") !== -1;

  if (n && B(t)) {
    var r = N(t);
    if (r.position === "fixed") return null;
  }

  var o = ge(t);

  for (Pe(o) && (o = o.host); B(o) && ["html", "body"].indexOf(C(o)) < 0;) {
    var i = N(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || e && i.willChange === "filter" || e && i.filter && i.filter !== "none") return o;
    o = o.parentNode;
  }

  return null;
}

function se(t) {
  for (var e = H(t), n = at(t); n && Wt(n) && N(n).position === "static";) {
    n = at(n);
  }

  return n && (C(n) === "html" || C(n) === "body" && N(n).position === "static") ? e : n || Bt(t) || e;
}

function Le(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}

function fe(t, e, n) {
  return X(t, ve(e, n));
}

function St(t, e, n) {
  var r = fe(t, e, n);
  return r > n ? n : r;
}

function st() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function ft(t) {
  return Object.assign({}, st(), t);
}

function ct(t, e) {
  return e.reduce(function (n, r) {
    return n[r] = t, n;
  }, {});
}

var Tt = function Tt(t, e) {
  return t = typeof t == "function" ? t(Object.assign({}, e.rects, {
    placement: e.placement
  })) : t, ft(typeof t != "number" ? t : ct(t, G));
};

function Ht(t) {
  var e,
      n = t.state,
      r = t.name,
      o = t.options,
      i = n.elements.arrow,
      a = n.modifiersData.popperOffsets,
      s = q(n.placement),
      f = Le(s),
      c = [P, W].indexOf(s) >= 0,
      u = c ? "height" : "width";

  if (!(!i || !a)) {
    var m = Tt(o.padding, n),
        v = ke(i),
        l = f === "y" ? E : P,
        h = f === "y" ? R : W,
        p = n.rects.reference[u] + n.rects.reference[f] - a[f] - n.rects.popper[u],
        g = a[f] - n.rects.reference[f],
        x = se(i),
        y = x ? f === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0,
        $ = p / 2 - g / 2,
        d = m[l],
        b = y - v[u] - m[h],
        w = y / 2 - v[u] / 2 + $,
        O = fe(d, w, b),
        j = f;
    n.modifiersData[r] = (e = {}, e[j] = O, e.centerOffset = O - w, e);
  }
}

function Ct(t) {
  var e = t.state,
      n = t.options,
      r = n.element,
      o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = e.elements.popper.querySelector(o), !o) || !it(e.elements.popper, o) || (e.elements.arrow = o));
}

var pt = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: Ht,
  effect: Ct,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

function te(t) {
  return t.split("-")[1];
}

var qt = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};

function Vt(t) {
  var e = t.x,
      n = t.y,
      r = window,
      o = r.devicePixelRatio || 1;
  return {
    x: Z(e * o) / o || 0,
    y: Z(n * o) / o || 0
  };
}

function ut(t) {
  var e,
      n = t.popper,
      r = t.popperRect,
      o = t.placement,
      i = t.variation,
      a = t.offsets,
      s = t.position,
      f = t.gpuAcceleration,
      c = t.adaptive,
      u = t.roundOffsets,
      m = t.isFixed,
      v = a.x,
      l = v === void 0 ? 0 : v,
      h = a.y,
      p = h === void 0 ? 0 : h,
      g = typeof u == "function" ? u({
    x: l,
    y: p
  }) : {
    x: l,
    y: p
  };
  l = g.x, p = g.y;
  var x = a.hasOwnProperty("x"),
      y = a.hasOwnProperty("y"),
      $ = P,
      d = E,
      b = window;

  if (c) {
    var w = se(n),
        O = "clientHeight",
        j = "clientWidth";

    if (w === H(n) && (w = I(n), N(w).position !== "static" && s === "absolute" && (O = "scrollHeight", j = "scrollWidth")), w = w, o === E || (o === P || o === W) && i === J) {
      d = R;
      var A = m && w === b && b.visualViewport ? b.visualViewport.height : w[O];
      p -= A - r.height, p *= f ? 1 : -1;
    }

    if (o === P || (o === E || o === R) && i === J) {
      $ = W;
      var k = m && w === b && b.visualViewport ? b.visualViewport.width : w[j];
      l -= k - r.width, l *= f ? 1 : -1;
    }
  }

  var D = Object.assign({
    position: s
  }, c && qt),
      S = u === true ? Vt({
    x: l,
    y: p
  }) : {
    x: l,
    y: p
  };

  if (l = S.x, p = S.y, f) {
    var L;
    return Object.assign({}, D, (L = {}, L[d] = y ? "0" : "", L[$] = x ? "0" : "", L.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + p + "px)" : "translate3d(" + l + "px, " + p + "px, 0)", L));
  }

  return Object.assign({}, D, (e = {}, e[d] = y ? p + "px" : "", e[$] = x ? l + "px" : "", e.transform = "", e));
}

function Nt(t) {
  var e = t.state,
      n = t.options,
      r = n.gpuAcceleration,
      o = r === void 0 ? true : r,
      i = n.adaptive,
      a = i === void 0 ? true : i,
      s = n.roundOffsets,
      f = s === void 0 ? true : s,
      c = {
    placement: q(e.placement),
    variation: te(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: o,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, ut(Object.assign({}, c, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: a,
    roundOffsets: f
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, ut(Object.assign({}, c, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: false,
    roundOffsets: f
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}

var Me = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: Nt,
  data: {}
},
    ye = {
  passive: true
};

function It(t) {
  var e = t.state,
      n = t.instance,
      r = t.options,
      o = r.scroll,
      i = o === void 0 ? true : o,
      a = r.resize,
      s = a === void 0 ? true : a,
      f = H(e.elements.popper),
      c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return i && c.forEach(function (u) {
    u.addEventListener("scroll", n.update, ye);
  }), s && f.addEventListener("resize", n.update, ye), function () {
    i && c.forEach(function (u) {
      u.removeEventListener("scroll", n.update, ye);
    }), s && f.removeEventListener("resize", n.update, ye);
  };
}

var Re = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {},
  effect: It,
  data: {}
},
    _t = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};

function be(t) {
  return t.replace(/left|right|bottom|top/g, function (e) {
    return _t[e];
  });
}

var zt = {
  start: "end",
  end: "start"
};

function lt(t) {
  return t.replace(/start|end/g, function (e) {
    return zt[e];
  });
}

function We(t) {
  var e = H(t),
      n = e.pageXOffset,
      r = e.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}

function Be(t) {
  return ee(I(t)).left + We(t).scrollLeft;
}

function Ft(t) {
  var e = H(t),
      n = I(t),
      r = e.visualViewport,
      o = n.clientWidth,
      i = n.clientHeight,
      a = 0,
      s = 0;
  return r && (o = r.width, i = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, s = r.offsetTop)), {
    width: o,
    height: i,
    x: a + Be(t),
    y: s
  };
}

function Ut(t) {
  var e,
      n = I(t),
      r = We(t),
      o = (e = t.ownerDocument) == null ? void 0 : e.body,
      i = X(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
      a = X(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
      s = -r.scrollLeft + Be(t),
      f = -r.scrollTop;
  return N(o || n).direction === "rtl" && (s += X(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: s,
    y: f
  };
}

function Se(t) {
  var e = N(t),
      n = e.overflow,
      r = e.overflowX,
      o = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}

function dt(t) {
  return ["html", "body", "#document"].indexOf(C(t)) >= 0 ? t.ownerDocument.body : B(t) && Se(t) ? t : dt(ge(t));
}

function ce(t, e) {
  var n;
  e === void 0 && (e = []);
  var r = dt(t),
      o = r === ((n = t.ownerDocument) == null ? void 0 : n.body),
      i = H(r),
      a = o ? [i].concat(i.visualViewport || [], Se(r) ? r : []) : r,
      s = e.concat(a);
  return o ? s : s.concat(ce(ge(a)));
}

function Te(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}

function Xt(t) {
  var e = ee(t);
  return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
}

function ht(t, e) {
  return e === je ? Te(Ft(t)) : Q(e) ? Xt(e) : Te(Ut(I(t)));
}

function Yt(t) {
  var e = ce(ge(t)),
      n = ["absolute", "fixed"].indexOf(N(t).position) >= 0,
      r = n && B(t) ? se(t) : t;
  return Q(r) ? e.filter(function (o) {
    return Q(o) && it(o, r) && C(o) !== "body";
  }) : [];
}

function Gt(t, e, n) {
  var r = e === "clippingParents" ? Yt(t) : [].concat(e),
      o = [].concat(r, [n]),
      i = o[0],
      a = o.reduce(function (s, f) {
    var c = ht(t, f);
    return s.top = X(c.top, s.top), s.right = ve(c.right, s.right), s.bottom = ve(c.bottom, s.bottom), s.left = X(c.left, s.left), s;
  }, ht(t, i));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}

function mt(t) {
  var e = t.reference,
      n = t.element,
      r = t.placement,
      o = r ? q(r) : null,
      i = r ? te(r) : null,
      a = e.x + e.width / 2 - n.width / 2,
      s = e.y + e.height / 2 - n.height / 2,
      f;

  switch (o) {
    case E:
      f = {
        x: a,
        y: e.y - n.height
      };
      break;

    case R:
      f = {
        x: a,
        y: e.y + e.height
      };
      break;

    case W:
      f = {
        x: e.x + e.width,
        y: s
      };
      break;

    case P:
      f = {
        x: e.x - n.width,
        y: s
      };
      break;

    default:
      f = {
        x: e.x,
        y: e.y
      };
  }

  var c = o ? Le(o) : null;

  if (c != null) {
    var u = c === "y" ? "height" : "width";

    switch (i) {
      case U:
        f[c] = f[c] - (e[u] / 2 - n[u] / 2);
        break;

      case J:
        f[c] = f[c] + (e[u] / 2 - n[u] / 2);
        break;
    }
  }

  return f;
}

function ne(t, e) {
  e === void 0 && (e = {});
  var n = e,
      r = n.placement,
      o = r === void 0 ? t.placement : r,
      i = n.boundary,
      a = i === void 0 ? Xe : i,
      s = n.rootBoundary,
      f = s === void 0 ? je : s,
      c = n.elementContext,
      u = c === void 0 ? K : c,
      m = n.altBoundary,
      v = m === void 0 ? false : m,
      l = n.padding,
      h = l === void 0 ? 0 : l,
      p = ft(typeof h != "number" ? h : ct(h, G)),
      g = u === K ? Ye : K,
      x = t.rects.popper,
      y = t.elements[v ? g : u],
      $ = Gt(Q(y) ? y : y.contextElement || I(t.elements.popper), a, f),
      d = ee(t.elements.reference),
      b = mt({
    reference: d,
    element: x,
    strategy: "absolute",
    placement: o
  }),
      w = Te(Object.assign({}, x, b)),
      O = u === K ? w : d,
      j = {
    top: $.top - O.top + p.top,
    bottom: O.bottom - $.bottom + p.bottom,
    left: $.left - O.left + p.left,
    right: O.right - $.right + p.right
  },
      A = t.modifiersData.offset;

  if (u === K && A) {
    var k = A[o];
    Object.keys(j).forEach(function (D) {
      var S = [W, R].indexOf(D) >= 0 ? 1 : -1,
          L = [E, R].indexOf(D) >= 0 ? "y" : "x";
      j[D] += k[L] * S;
    });
  }

  return j;
}

function Jt(t, e) {
  e === void 0 && (e = {});
  var n = e,
      r = n.placement,
      o = n.boundary,
      i = n.rootBoundary,
      a = n.padding,
      s = n.flipVariations,
      f = n.allowedAutoPlacements,
      c = f === void 0 ? Ee : f,
      u = te(r),
      m = u ? s ? De : De.filter(function (h) {
    return te(h) === u;
  }) : G,
      v = m.filter(function (h) {
    return c.indexOf(h) >= 0;
  });
  v.length === 0 && (v = m);
  var l = v.reduce(function (h, p) {
    return h[p] = ne(t, {
      placement: p,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[q(p)], h;
  }, {});
  return Object.keys(l).sort(function (h, p) {
    return l[h] - l[p];
  });
}

function Kt(t) {
  if (q(t) === me) return [];
  var e = be(t);
  return [lt(t), e, lt(e)];
}

function Qt(t) {
  var e = t.state,
      n = t.options,
      r = t.name;

  if (!e.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? true : o, a = n.altAxis, s = a === void 0 ? true : a, f = n.fallbackPlacements, c = n.padding, u = n.boundary, m = n.rootBoundary, v = n.altBoundary, l = n.flipVariations, h = l === void 0 ? true : l, p = n.allowedAutoPlacements, g = e.options.placement, x = q(g), y = x === g, $ = f || (y || !h ? [be(g)] : Kt(g)), d = [g].concat($).reduce(function (z, V) {
      return z.concat(q(V) === me ? Jt(e, {
        placement: V,
        boundary: u,
        rootBoundary: m,
        padding: c,
        flipVariations: h,
        allowedAutoPlacements: p
      }) : V);
    }, []), b = e.rects.reference, w = e.rects.popper, O = /* @__PURE__ */new Map(), j = true, A = d[0], k = 0; k < d.length; k++) {
      var D = d[k],
          S = q(D),
          L = te(D) === U,
          re = [E, R].indexOf(S) >= 0,
          oe = re ? "width" : "height",
          M = ne(e, {
        placement: D,
        boundary: u,
        rootBoundary: m,
        altBoundary: v,
        padding: c
      }),
          T = re ? L ? W : P : L ? R : E;
      b[oe] > w[oe] && (T = be(T));
      var pe = be(T),
          _ = [];

      if (i && _.push(M[S] <= 0), s && _.push(M[T] <= 0, M[pe] <= 0), _.every(function (z) {
        return z;
      })) {
        A = D, j = false;
        break;
      }

      O.set(D, _);
    }

    if (j) for (var ue = h ? 3 : 1, xe = function xe(z) {
      var V = d.find(function (de) {
        var ae = O.get(de);
        if (ae) return ae.slice(0, z).every(function (Y) {
          return Y;
        });
      });
      if (V) return A = V, "break";
    }, ie = ue; ie > 0; ie--) {
      var le = xe(ie);
      if (le === "break") break;
    }
    e.placement !== A && (e.modifiersData[r]._skip = true, e.placement = A, e.reset = true);
  }
}

var vt = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: Qt,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

function gt(t, e, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: t.top - e.height - n.y,
    right: t.right - e.width + n.x,
    bottom: t.bottom - e.height + n.y,
    left: t.left - e.width - n.x
  };
}

function yt(t) {
  return [E, W, R, P].some(function (e) {
    return t[e] >= 0;
  });
}

function Zt(t) {
  var e = t.state,
      n = t.name,
      r = e.rects.reference,
      o = e.rects.popper,
      i = e.modifiersData.preventOverflow,
      a = ne(e, {
    elementContext: "reference"
  }),
      s = ne(e, {
    altBoundary: true
  }),
      f = gt(a, r),
      c = gt(s, o, i),
      u = yt(f),
      m = yt(c);
  e.modifiersData[n] = {
    referenceClippingOffsets: f,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: m
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": m
  });
}

var bt = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Zt
};

function en(t, e, n) {
  var r = q(t),
      o = [P, E].indexOf(r) >= 0 ? -1 : 1,
      i = typeof n == "function" ? n(Object.assign({}, e, {
    placement: t
  })) : n,
      a = i[0],
      s = i[1];
  return a = a || 0, s = (s || 0) * o, [P, W].indexOf(r) >= 0 ? {
    x: s,
    y: a
  } : {
    x: a,
    y: s
  };
}

function tn(t) {
  var e = t.state,
      n = t.options,
      r = t.name,
      o = n.offset,
      i = o === void 0 ? [0, 0] : o,
      a = Ee.reduce(function (u, m) {
    return u[m] = en(m, e.rects, i), u;
  }, {}),
      s = a[e.placement],
      f = s.x,
      c = s.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += f, e.modifiersData.popperOffsets.y += c), e.modifiersData[r] = a;
}

var wt = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: tn
};

function nn(t) {
  var e = t.state,
      n = t.name;
  e.modifiersData[n] = mt({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}

var He = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: nn,
  data: {}
};

function rn(t) {
  return t === "x" ? "y" : "x";
}

function on(t) {
  var e = t.state,
      n = t.options,
      r = t.name,
      o = n.mainAxis,
      i = o === void 0 ? true : o,
      a = n.altAxis,
      s = a === void 0 ? false : a,
      f = n.boundary,
      c = n.rootBoundary,
      u = n.altBoundary,
      m = n.padding,
      v = n.tether,
      l = v === void 0 ? true : v,
      h = n.tetherOffset,
      p = h === void 0 ? 0 : h,
      g = ne(e, {
    boundary: f,
    rootBoundary: c,
    padding: m,
    altBoundary: u
  }),
      x = q(e.placement),
      y = te(e.placement),
      $ = !y,
      d = Le(x),
      b = rn(d),
      w = e.modifiersData.popperOffsets,
      O = e.rects.reference,
      j = e.rects.popper,
      A = typeof p == "function" ? p(Object.assign({}, e.rects, {
    placement: e.placement
  })) : p,
      k = typeof A == "number" ? {
    mainAxis: A,
    altAxis: A
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, A),
      D = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
      S = {
    x: 0,
    y: 0
  };

  if (w) {
    if (i) {
      var L,
          re = d === "y" ? E : P,
          oe = d === "y" ? R : W,
          M = d === "y" ? "height" : "width",
          T = w[d],
          pe = T + g[re],
          _ = T - g[oe],
          ue = l ? -j[M] / 2 : 0,
          xe = y === U ? O[M] : j[M],
          ie = y === U ? -j[M] : -O[M],
          le = e.elements.arrow,
          z = l && le ? ke(le) : {
        width: 0,
        height: 0
      },
          V = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : st(),
          de = V[re],
          ae = V[oe],
          Y = fe(0, O[M], z[M]),
          jt = $ ? O[M] / 2 - ue - Y - de - k.mainAxis : xe - Y - de - k.mainAxis,
          Dt = $ ? -O[M] / 2 + ue + Y + ae + k.mainAxis : ie + Y + ae + k.mainAxis,
          Oe = e.elements.arrow && se(e.elements.arrow),
          Et = Oe ? d === "y" ? Oe.clientTop || 0 : Oe.clientLeft || 0 : 0,
          Ce = (L = D == null ? void 0 : D[d]) != null ? L : 0,
          Pt = T + jt - Ce - Et,
          At = T + Dt - Ce,
          qe = fe(l ? ve(pe, Pt) : pe, T, l ? X(_, At) : _);

      w[d] = qe, S[d] = qe - T;
    }

    if (s) {
      var Ve,
          kt = d === "x" ? E : P,
          Lt = d === "x" ? R : W,
          F = w[b],
          he = b === "y" ? "height" : "width",
          Ne = F + g[kt],
          Ie = F - g[Lt],
          $e = [E, P].indexOf(x) !== -1,
          _e = (Ve = D == null ? void 0 : D[b]) != null ? Ve : 0,
          ze = $e ? Ne : F - O[he] - j[he] - _e + k.altAxis,
          Fe = $e ? F + O[he] + j[he] - _e - k.altAxis : Ie,
          Ue = l && $e ? St(ze, F, Fe) : fe(l ? ze : Ne, F, l ? Fe : Ie);

      w[b] = Ue, S[b] = Ue - F;
    }

    e.modifiersData[r] = S;
  }
}

var xt = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: on,
  requiresIfExists: ["offset"]
};

function an(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}

function sn(t) {
  return t === H(t) || !B(t) ? We(t) : an(t);
}

function fn(t) {
  var e = t.getBoundingClientRect(),
      n = Z(e.width) / t.offsetWidth || 1,
      r = Z(e.height) / t.offsetHeight || 1;
  return n !== 1 || r !== 1;
}

function cn(t, e, n) {
  n === void 0 && (n = false);
  var r = B(e),
      o = B(e) && fn(e),
      i = I(e),
      a = ee(t, o),
      s = {
    scrollLeft: 0,
    scrollTop: 0
  },
      f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((C(e) !== "body" || Se(i)) && (s = sn(e)), B(e) ? (f = ee(e, true), f.x += e.clientLeft, f.y += e.clientTop) : i && (f.x = Be(i))), {
    x: a.left + s.scrollLeft - f.x,
    y: a.top + s.scrollTop - f.y,
    width: a.width,
    height: a.height
  };
}

function pn(t) {
  var e = /* @__PURE__ */new Map(),
      n = /* @__PURE__ */new Set(),
      r = [];
  t.forEach(function (i) {
    e.set(i.name, i);
  });

  function o(i) {
    n.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function (s) {
      if (!n.has(s)) {
        var f = e.get(s);
        f && o(f);
      }
    }), r.push(i);
  }

  return t.forEach(function (i) {
    n.has(i.name) || o(i);
  }), r;
}

function un(t) {
  var e = pn(t);
  return ot.reduce(function (n, r) {
    return n.concat(e.filter(function (o) {
      return o.phase === r;
    }));
  }, []);
}

function ln(t) {
  var e;
  return function () {
    return e || (e = new Promise(function (n) {
      Promise.resolve().then(function () {
        e = void 0, n(t());
      });
    })), e;
  };
}

function dn(t) {
  var e = t.reduce(function (n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, {
      options: Object.assign({}, o.options, r.options),
      data: Object.assign({}, o.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(e).map(function (n) {
    return e[n];
  });
}

var Ot = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};

function $t() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
    e[n] = arguments[n];
  }

  return !e.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}

function we(t) {
  t === void 0 && (t = {});
  var e = t,
      n = e.defaultModifiers,
      r = n === void 0 ? [] : n,
      o = e.defaultOptions,
      i = o === void 0 ? Ot : o;
  return function (a, s, f) {
    f === void 0 && (f = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ot, i),
      modifiersData: {},
      elements: {
        reference: a,
        popper: s
      },
      attributes: {},
      styles: {}
    },
        u = [],
        m = false,
        v = {
      state: c,
      setOptions: function setOptions(p) {
        var g = typeof p == "function" ? p(c.options) : p;
        h(), c.options = Object.assign({}, i, c.options, g), c.scrollParents = {
          reference: Q(a) ? ce(a) : a.contextElement ? ce(a.contextElement) : [],
          popper: ce(s)
        };
        var x = un(dn([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = x.filter(function (y) {
          return y.enabled;
        }), l(), v.update();
      },
      forceUpdate: function forceUpdate() {
        if (!m) {
          var p = c.elements,
              g = p.reference,
              x = p.popper;

          if ($t(g, x)) {
            c.rects = {
              reference: cn(g, se(x), c.options.strategy === "fixed"),
              popper: ke(x)
            }, c.reset = false, c.placement = c.options.placement, c.orderedModifiers.forEach(function (j) {
              return c.modifiersData[j.name] = Object.assign({}, j.data);
            });

            for (var y = 0; y < c.orderedModifiers.length; y++) {
              if (c.reset === true) {
                c.reset = false, y = -1;
                continue;
              }

              var $ = c.orderedModifiers[y],
                  d = $.fn,
                  b = $.options,
                  w = b === void 0 ? {} : b,
                  O = $.name;
              typeof d == "function" && (c = d({
                state: c,
                options: w,
                name: O,
                instance: v
              }) || c);
            }
          }
        }
      },
      update: ln(function () {
        return new Promise(function (p) {
          v.forceUpdate(), p(c);
        });
      }),
      destroy: function destroy() {
        h(), m = true;
      }
    };
    if (!$t(a, s)) return v;
    v.setOptions(f).then(function (p) {
      !m && f.onFirstUpdate && f.onFirstUpdate(p);
    });

    function l() {
      c.orderedModifiers.forEach(function (p) {
        var g = p.name,
            x = p.options,
            y = x === void 0 ? {} : x,
            $ = p.effect;

        if (typeof $ == "function") {
          var d = $({
            state: c,
            name: g,
            instance: v,
            options: y
          }),
              b = function b() {};

          u.push(d || b);
        }
      });
    }

    function h() {
      u.forEach(function (p) {
        return p();
      }), u = [];
    }

    return v;
  };
}

we();
var mn = [Re, He, Me, Ae];
we({
  defaultModifiers: mn
});
var gn = [Re, He, Me, Ae, wt, vt, xt, pt, bt],
    yn = we({
  defaultModifiers: gn
});

var obtainAllFocusableElements = function obtainAllFocusableElements(element) {
  var nodes = [];
  var walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
    acceptNode: function acceptNode(node) {
      var isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 || node === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });

  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  return nodes;
};

var getVisibleElement = function getVisibleElement(elements, container) {
  var _iterator5 = _createForOfIteratorHelper(elements),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var element = _step5.value;
      if (!isHidden(element, container)) return element;
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
};

var isHidden = function isHidden(element, container) {
  if (getComputedStyle(element).visibility === "hidden") return true;

  while (element) {
    if (container && element === container) return false;
    if (getComputedStyle(element).display === "none") return true;
    element = element.parentElement;
  }

  return false;
};

var getEdges = function getEdges(container) {
  var focusable = obtainAllFocusableElements(container);
  var first = getVisibleElement(focusable, container);
  var last = getVisibleElement(focusable.reverse(), container);
  return [first, last];
};

var isSelectable = function isSelectable(element) {
  return element instanceof HTMLInputElement && "select" in element;
};

var tryFocus = function tryFocus(element, shouldSelect) {
  if (element && element.focus) {
    var prevFocusedElement = document.activeElement;
    element.focus({
      preventScroll: true
    });

    if (element !== prevFocusedElement && isSelectable(element) && shouldSelect) {
      element.select();
    }
  }
};

function removeFromStack(list, item) {
  var copy = _toConsumableArray(list);

  var idx = list.indexOf(item);

  if (idx !== -1) {
    copy.splice(idx, 1);
  }

  return copy;
}

var createFocusableStack = function createFocusableStack() {
  var stack = [];

  var push = function push(layer) {
    var currentLayer = stack[0];

    if (currentLayer && layer !== currentLayer) {
      currentLayer.pause();
    }

    stack = removeFromStack(stack, layer);
    stack.unshift(layer);
  };

  var remove = function remove(layer) {
    var _a2, _b;

    stack = removeFromStack(stack, layer);
    (_b = (_a2 = stack[0]) == null ? void 0 : _a2.resume) == null ? void 0 : _b.call(_a2);
  };

  return {
    push: push,
    remove: remove
  };
};

var focusFirstDescendant = function focusFirstDescendant(elements) {
  var shouldSelect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var prevFocusedElement = document.activeElement;

  var _iterator6 = _createForOfIteratorHelper(elements),
      _step6;

  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var element = _step6.value;
      tryFocus(element, shouldSelect);
      if (document.activeElement !== prevFocusedElement) return;
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
};

var focusableStack = createFocusableStack();
var FOCUS_AFTER_TRAPPED = "focus-trap.focus-after-trapped";
var FOCUS_AFTER_RELEASED = "focus-trap.focus-after-released";
var FOCUS_AFTER_TRAPPED_OPTS = {
  cancelable: true,
  bubbles: false
};
var ON_TRAP_FOCUS_EVT = "focusAfterTrapped";
var ON_RELEASE_FOCUS_EVT = "focusAfterReleased";
var FOCUS_TRAP_INJECTION_KEY = Symbol("elFocusTrap");

var _sfc_main$f = (0, _vue.defineComponent)({
  name: "ElFocusTrap",
  inheritAttrs: false,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      "default": "first"
    }
  },
  emits: [ON_TRAP_FOCUS_EVT, ON_RELEASE_FOCUS_EVT, "focusin", "focusout", "focusout-prevented", "release-requested"],
  setup: function setup(props, _ref30) {
    var emit = _ref30.emit;
    var forwardRef = (0, _vue.ref)();
    var lastFocusBeforeTrapped;
    var lastFocusAfterTrapped;
    useEscapeKeydown(function (event) {
      if (props.trapped && !focusLayer.paused) {
        emit("release-requested", event);
      }
    });
    var focusLayer = {
      paused: false,
      pause: function pause() {
        this.paused = true;
      },
      resume: function resume() {
        this.paused = false;
      }
    };

    var onKeydown = function onKeydown(e) {
      if (!props.loop && !props.trapped) return;
      if (focusLayer.paused) return;
      var key = e.key,
          altKey = e.altKey,
          ctrlKey = e.ctrlKey,
          metaKey = e.metaKey,
          currentTarget = e.currentTarget,
          shiftKey = e.shiftKey;
      var loop = props.loop;
      var isTabbing = key === EVENT_CODE.tab && !altKey && !ctrlKey && !metaKey;
      var currentFocusingEl = document.activeElement;

      if (isTabbing && currentFocusingEl) {
        var container = currentTarget;

        var _getEdges = getEdges(container),
            _getEdges2 = _slicedToArray(_getEdges, 2),
            first = _getEdges2[0],
            last = _getEdges2[1];

        var isTabbable = first && last;

        if (!isTabbable) {
          if (currentFocusingEl === container) {
            e.preventDefault();
            emit("focusout-prevented");
          }
        } else {
          if (!shiftKey && currentFocusingEl === last) {
            e.preventDefault();
            if (loop) tryFocus(first, true);
            emit("focusout-prevented");
          } else if (shiftKey && [first, container].includes(currentFocusingEl)) {
            e.preventDefault();
            if (loop) tryFocus(last, true);
            emit("focusout-prevented");
          }
        }
      }
    };

    (0, _vue.provide)(FOCUS_TRAP_INJECTION_KEY, {
      focusTrapRef: forwardRef,
      onKeydown: onKeydown
    });
    (0, _vue.watch)(function () {
      return props.focusTrapEl;
    }, function (focusTrapEl) {
      if (focusTrapEl) {
        forwardRef.value = focusTrapEl;
      }
    }, {
      immediate: true
    });
    (0, _vue.watch)([forwardRef], function (_ref31, _ref32) {
      var _ref33 = _slicedToArray(_ref31, 1),
          forwardRef2 = _ref33[0];

      var _ref34 = _slicedToArray(_ref32, 1),
          oldForwardRef = _ref34[0];

      if (forwardRef2) {
        forwardRef2.addEventListener("keydown", onKeydown);
        forwardRef2.addEventListener("focusin", onFocusIn);
        forwardRef2.addEventListener("focusout", onFocusOut);
      }

      if (oldForwardRef) {
        oldForwardRef.removeEventListener("keydown", onKeydown);
        oldForwardRef.removeEventListener("focusin", onFocusIn);
        oldForwardRef.removeEventListener("focusout", onFocusOut);
      }
    });

    var trapOnFocus = function trapOnFocus(e) {
      emit(ON_TRAP_FOCUS_EVT, e);
    };

    var releaseOnFocus = function releaseOnFocus(e) {
      return emit(ON_RELEASE_FOCUS_EVT, e);
    };

    var onFocusIn = function onFocusIn(e) {
      var trapContainer = (0, _vue.unref)(forwardRef);
      if (!trapContainer) return;
      var target = e.target;
      var isFocusedInTrap = target && trapContainer.contains(target);
      if (isFocusedInTrap) emit("focusin", e);
      if (focusLayer.paused) return;

      if (props.trapped) {
        if (isFocusedInTrap) {
          lastFocusAfterTrapped = target;
        } else {
          tryFocus(lastFocusAfterTrapped, true);
        }
      }
    };

    var onFocusOut = function onFocusOut(e) {
      var trapContainer = (0, _vue.unref)(forwardRef);
      if (focusLayer.paused || !trapContainer) return;

      if (props.trapped) {
        var relatedTarget = e.relatedTarget;

        if (!isNil(relatedTarget) && !trapContainer.contains(relatedTarget)) {
          setTimeout(function () {
            if (!focusLayer.paused && props.trapped) {
              tryFocus(lastFocusAfterTrapped, true);
            }
          }, 0);
        }
      } else {
        var target = e.target;
        var isFocusedInTrap = target && trapContainer.contains(target);
        if (!isFocusedInTrap) emit("focusout", e);
      }
    };

    function startTrap() {
      return _startTrap.apply(this, arguments);
    }

    function _startTrap() {
      _startTrap = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var trapContainer, prevFocusedElement, isPrevFocusContained, focusEvent;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _vue.nextTick)();

              case 2:
                trapContainer = (0, _vue.unref)(forwardRef);

                if (trapContainer) {
                  focusableStack.push(focusLayer);
                  prevFocusedElement = document.activeElement;
                  lastFocusBeforeTrapped = prevFocusedElement;
                  isPrevFocusContained = trapContainer.contains(prevFocusedElement);

                  if (!isPrevFocusContained) {
                    focusEvent = new Event(FOCUS_AFTER_TRAPPED, FOCUS_AFTER_TRAPPED_OPTS);
                    trapContainer.addEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
                    trapContainer.dispatchEvent(focusEvent);

                    if (!focusEvent.defaultPrevented) {
                      (0, _vue.nextTick)(function () {
                        var focusStartEl = props.focusStartEl;

                        if (!isString(focusStartEl)) {
                          tryFocus(focusStartEl);

                          if (document.activeElement !== focusStartEl) {
                            focusStartEl = "first";
                          }
                        }

                        if (focusStartEl === "first") {
                          focusFirstDescendant(obtainAllFocusableElements(trapContainer), true);
                        }

                        if (document.activeElement === prevFocusedElement || focusStartEl === "container") {
                          tryFocus(trapContainer);
                        }
                      });
                    }
                  }
                }

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));
      return _startTrap.apply(this, arguments);
    }

    function stopTrap() {
      var trapContainer = (0, _vue.unref)(forwardRef);

      if (trapContainer) {
        trapContainer.removeEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
        var releasedEvent = new Event(FOCUS_AFTER_RELEASED, FOCUS_AFTER_TRAPPED_OPTS);
        trapContainer.addEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus);
        trapContainer.dispatchEvent(releasedEvent);

        if (!releasedEvent.defaultPrevented) {
          tryFocus(lastFocusBeforeTrapped != null ? lastFocusBeforeTrapped : document.body, true);
        }

        trapContainer.removeEventListener(FOCUS_AFTER_RELEASED, trapOnFocus);
        focusableStack.remove(focusLayer);
      }
    }

    (0, _vue.onMounted)(function () {
      if (props.trapped) {
        startTrap();
      }

      (0, _vue.watch)(function () {
        return props.trapped;
      }, function (trapped) {
        if (trapped) {
          startTrap();
        } else {
          stopTrap();
        }
      });
    });
    (0, _vue.onBeforeUnmount)(function () {
      if (props.trapped) {
        stopTrap();
      }
    });
    return {
      onKeydown: onKeydown
    };
  }
});

function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, _vue.renderSlot)(_ctx.$slots, "default", {
    handleKeydown: _ctx.onKeydown
  });
}

var ElFocusTrap = /* @__PURE__ */_export_sfc$1(_sfc_main$f, [["render", _sfc_render$7], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);

var POSITIONING_STRATEGIES = ["fixed", "absolute"];
var usePopperCoreConfigProps = buildProps({
  boundariesPadding: {
    type: Number,
    "default": 0
  },
  fallbackPlacements: {
    type: definePropType(Array),
    "default": function _default() {
      return [];
    }
  },
  gpuAcceleration: {
    type: Boolean,
    "default": true
  },
  offset: {
    type: Number,
    "default": 12
  },
  placement: {
    type: String,
    values: Ee,
    "default": "bottom"
  },
  popperOptions: {
    type: definePropType(Object),
    "default": function _default() {
      return {};
    }
  },
  strategy: {
    type: String,
    values: POSITIONING_STRATEGIES,
    "default": "absolute"
  }
});
var usePopperContentProps = buildProps(_objectSpread(_objectSpread({}, usePopperCoreConfigProps), {}, {
  id: String,
  style: {
    type: definePropType([String, Array, Object])
  },
  className: {
    type: definePropType([String, Array, Object])
  },
  effect: {
    type: String,
    "default": "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    "default": true
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    "default": false
  },
  trapping: {
    type: Boolean,
    "default": false
  },
  popperClass: {
    type: definePropType([String, Array, Object])
  },
  popperStyle: {
    type: definePropType([String, Array, Object])
  },
  referenceEl: {
    type: definePropType(Object)
  },
  triggerTargetEl: {
    type: definePropType(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    "default": true
  },
  ariaLabel: {
    type: String,
    "default": void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
}));
var usePopperContentEmits = ["mouseenter", "mouseleave", "focus", "blur", "close"];

var buildPopperOptions = function buildPopperOptions(props, arrowProps) {
  var placement = props.placement,
      strategy = props.strategy,
      popperOptions = props.popperOptions;

  var options = _objectSpread(_objectSpread({
    placement: placement,
    strategy: strategy
  }, popperOptions), {}, {
    modifiers: genModifiers(props)
  });

  attachArrow(options, arrowProps);
  deriveExtraModifiers(options, popperOptions == null ? void 0 : popperOptions.modifiers);
  return options;
};

var unwrapMeasurableEl = function unwrapMeasurableEl($el) {
  if (!isClient) return;
  return unrefElement($el);
};

function genModifiers(options) {
  var offset = options.offset,
      gpuAcceleration = options.gpuAcceleration,
      fallbackPlacements = options.fallbackPlacements;
  return [{
    name: "offset",
    options: {
      offset: [0, offset != null ? offset : 12]
    }
  }, {
    name: "preventOverflow",
    options: {
      padding: {
        top: 2,
        bottom: 2,
        left: 5,
        right: 5
      }
    }
  }, {
    name: "flip",
    options: {
      padding: 5,
      fallbackPlacements: fallbackPlacements != null ? fallbackPlacements : []
    }
  }, {
    name: "computeStyles",
    options: {
      gpuAcceleration: gpuAcceleration,
      adaptive: gpuAcceleration
    }
  }];
}

function attachArrow(options, _ref35) {
  var arrowEl = _ref35.arrowEl,
      arrowOffset = _ref35.arrowOffset;
  options.modifiers.push({
    name: "arrow",
    options: {
      element: arrowEl,
      padding: arrowOffset != null ? arrowOffset : 5
    }
  });
}

function deriveExtraModifiers(options, modifiers) {
  if (modifiers) {
    options.modifiers = [].concat(_toConsumableArray(options.modifiers), _toConsumableArray(modifiers != null ? modifiers : []));
  }
}

var __default__$6 = {
  name: "ElPopperContent"
};

var _sfc_main$e = /* @__PURE__ */(0, _vue.defineComponent)(_objectSpread(_objectSpread({}, __default__$6), {}, {
  props: usePopperContentProps,
  emits: usePopperContentEmits,
  setup: function setup(__props, _ref36) {
    var expose = _ref36.expose,
        emit = _ref36.emit;
    var props = __props;

    var _inject3 = (0, _vue.inject)(POPPER_INJECTION_KEY, void 0),
        popperInstanceRef = _inject3.popperInstanceRef,
        contentRef = _inject3.contentRef,
        triggerRef2 = _inject3.triggerRef,
        role = _inject3.role;

    var formItemContext = (0, _vue.inject)(formItemContextKey, void 0);

    var _useZIndex = useZIndex(),
        nextZIndex = _useZIndex.nextZIndex;

    var ns2 = useNamespace("popper");
    var popperContentRef = (0, _vue.ref)();
    var focusStartRef = (0, _vue.ref)("first");
    var arrowRef = (0, _vue.ref)();
    var arrowOffset = (0, _vue.ref)();
    (0, _vue.provide)(POPPER_CONTENT_INJECTION_KEY, {
      arrowRef: arrowRef,
      arrowOffset: arrowOffset
    });

    if (formItemContext && (formItemContext.addInputId || formItemContext.removeInputId)) {
      (0, _vue.provide)(formItemContextKey, _objectSpread(_objectSpread({}, formItemContext), {}, {
        addInputId: NOOP,
        removeInputId: NOOP
      }));
    }

    var contentZIndex = (0, _vue.ref)(props.zIndex || nextZIndex());
    var trapped = (0, _vue.ref)(false);
    var triggerTargetAriaStopWatch = void 0;
    var computedReference = (0, _vue.computed)(function () {
      return unwrapMeasurableEl(props.referenceEl) || (0, _vue.unref)(triggerRef2);
    });
    var contentStyle = (0, _vue.computed)(function () {
      return [{
        zIndex: (0, _vue.unref)(contentZIndex)
      }, props.popperStyle];
    });
    var contentClass = (0, _vue.computed)(function () {
      return [ns2.b(), ns2.is("pure", props.pure), ns2.is(props.effect), props.popperClass];
    });
    var ariaModal = (0, _vue.computed)(function () {
      return role && role.value === "dialog" ? "false" : void 0;
    });

    var createPopperInstance = function createPopperInstance(_ref37) {
      var referenceEl = _ref37.referenceEl,
          popperContentEl = _ref37.popperContentEl,
          arrowEl = _ref37.arrowEl;
      var options = buildPopperOptions(props, {
        arrowEl: arrowEl,
        arrowOffset: (0, _vue.unref)(arrowOffset)
      });
      return yn(referenceEl, popperContentEl, options);
    };

    var updatePopper = function updatePopper() {
      var shouldUpdateZIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var _a2;

      (_a2 = (0, _vue.unref)(popperInstanceRef)) == null ? void 0 : _a2.update();
      shouldUpdateZIndex && (contentZIndex.value = props.zIndex || nextZIndex());
    };

    var togglePopperAlive = function togglePopperAlive() {
      var _a2, _b;

      var monitorable = {
        name: "eventListeners",
        enabled: props.visible
      };
      (_b = (_a2 = (0, _vue.unref)(popperInstanceRef)) == null ? void 0 : _a2.setOptions) == null ? void 0 : _b.call(_a2, function (options) {
        return _objectSpread(_objectSpread({}, options), {}, {
          modifiers: [].concat(_toConsumableArray(options.modifiers || []), [monitorable])
        });
      });
      updatePopper(false);

      if (props.visible && props.focusOnShow) {
        trapped.value = true;
      } else if (props.visible === false) {
        trapped.value = false;
      }
    };

    var onFocusAfterTrapped = function onFocusAfterTrapped() {
      emit("focus");
    };

    var onFocusAfterReleased = function onFocusAfterReleased() {
      focusStartRef.value = "first";
      emit("blur");
    };

    var onFocusInTrap = function onFocusInTrap(event) {
      var _a2;

      if (props.visible && !trapped.value) {
        if (event.relatedTarget) {
          (_a2 = event.relatedTarget) == null ? void 0 : _a2.focus();
        }

        if (event.target) {
          focusStartRef.value = event.target;
        }

        trapped.value = true;
      }
    };

    var onFocusoutPrevented = function onFocusoutPrevented() {
      if (!props.trapping) {
        trapped.value = false;
      }
    };

    var onReleaseRequested = function onReleaseRequested() {
      trapped.value = false;
      emit("close");
    };

    (0, _vue.onMounted)(function () {
      var updateHandle;
      (0, _vue.watch)(computedReference, function (referenceEl) {
        var _a2;

        updateHandle == null ? void 0 : updateHandle();
        var popperInstance = (0, _vue.unref)(popperInstanceRef);
        (_a2 = popperInstance == null ? void 0 : popperInstance.destroy) == null ? void 0 : _a2.call(popperInstance);

        if (referenceEl) {
          var popperContentEl = (0, _vue.unref)(popperContentRef);
          contentRef.value = popperContentEl;
          popperInstanceRef.value = createPopperInstance({
            referenceEl: referenceEl,
            popperContentEl: popperContentEl,
            arrowEl: (0, _vue.unref)(arrowRef)
          });
          updateHandle = (0, _vue.watch)(function () {
            return referenceEl.getBoundingClientRect();
          }, function () {
            return updatePopper();
          }, {
            immediate: true
          });
        } else {
          popperInstanceRef.value = void 0;
        }
      }, {
        immediate: true
      });
      (0, _vue.watch)(function () {
        return props.triggerTargetEl;
      }, function (triggerTargetEl, prevTriggerTargetEl) {
        triggerTargetAriaStopWatch == null ? void 0 : triggerTargetAriaStopWatch();
        triggerTargetAriaStopWatch = void 0;
        var el = (0, _vue.unref)(triggerTargetEl || popperContentRef.value);
        var prevEl = (0, _vue.unref)(prevTriggerTargetEl || popperContentRef.value);

        if (isElement(el)) {
          var _toRefs = (0, _vue.toRefs)(props),
              ariaLabel = _toRefs.ariaLabel,
              id = _toRefs.id;

          triggerTargetAriaStopWatch = (0, _vue.watch)([role, ariaLabel, ariaModal, id], function (watches) {
            ["role", "aria-label", "aria-modal", "id"].forEach(function (key, idx) {
              isNil(watches[idx]) ? el.removeAttribute(key) : el.setAttribute(key, watches[idx]);
            });
          }, {
            immediate: true
          });
        }

        if (isElement(prevEl)) {
          ["role", "aria-label", "aria-modal", "id"].forEach(function (key) {
            prevEl.removeAttribute(key);
          });
        }
      }, {
        immediate: true
      });
      (0, _vue.watch)(function () {
        return props.visible;
      }, togglePopperAlive, {
        immediate: true
      });
      (0, _vue.watch)(function () {
        return buildPopperOptions(props, {
          arrowEl: (0, _vue.unref)(arrowRef),
          arrowOffset: (0, _vue.unref)(arrowOffset)
        });
      }, function (option) {
        var _a2;

        return (_a2 = popperInstanceRef.value) == null ? void 0 : _a2.setOptions(option);
      });
    });
    (0, _vue.onBeforeUnmount)(function () {
      triggerTargetAriaStopWatch == null ? void 0 : triggerTargetAriaStopWatch();
      triggerTargetAriaStopWatch = void 0;
    });
    expose({
      popperContentRef: popperContentRef,
      popperInstanceRef: popperInstanceRef,
      updatePopper: updatePopper,
      contentStyle: contentStyle
    });
    return function (_ctx, _cache) {
      return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
        ref_key: "popperContentRef",
        ref: popperContentRef,
        style: (0, _vue.normalizeStyle)((0, _vue.unref)(contentStyle)),
        "class": (0, _vue.normalizeClass)((0, _vue.unref)(contentClass)),
        tabindex: "-1",
        onMouseenter: _cache[0] || (_cache[0] = function (e) {
          return _ctx.$emit("mouseenter", e);
        }),
        onMouseleave: _cache[1] || (_cache[1] = function (e) {
          return _ctx.$emit("mouseleave", e);
        })
      }, [(0, _vue.createVNode)((0, _vue.unref)(ElFocusTrap), {
        trapped: trapped.value,
        "trap-on-focus-in": true,
        "focus-trap-el": popperContentRef.value,
        "focus-start-el": focusStartRef.value,
        onFocusAfterTrapped: onFocusAfterTrapped,
        onFocusAfterReleased: onFocusAfterReleased,
        onFocusin: onFocusInTrap,
        onFocusoutPrevented: onFocusoutPrevented,
        onReleaseRequested: onReleaseRequested
      }, {
        "default": (0, _vue.withCtx)(function () {
          return [(0, _vue.renderSlot)(_ctx.$slots, "default")];
        }),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el"])], 38);
    };
  }
}));

var ElPopperContent = /* @__PURE__ */_export_sfc$1(_sfc_main$e, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);

var ElPopper = withInstall(Popper);
var ns = useNamespace("tooltip");
var useTooltipContentProps = buildProps(_objectSpread(_objectSpread(_objectSpread({}, useDelayedToggleProps), usePopperContentProps), {}, {
  appendTo: {
    type: definePropType([String, Object]),
    "default": POPPER_CONTAINER_SELECTOR
  },
  content: {
    type: String,
    "default": ""
  },
  rawContent: {
    type: Boolean,
    "default": false
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: definePropType(Boolean),
    "default": null
  },
  transition: {
    type: String,
    "default": "".concat(ns.namespace.value, "-fade-in-linear")
  },
  teleported: {
    type: Boolean,
    "default": true
  },
  disabled: {
    type: Boolean
  }
}));
var useTooltipTriggerProps = buildProps(_objectSpread(_objectSpread({}, usePopperTriggerProps), {}, {
  disabled: Boolean,
  trigger: {
    type: definePropType([String, Array]),
    "default": "hover"
  },
  triggerKeys: {
    type: definePropType(Array),
    "default": function _default() {
      return [EVENT_CODE.enter, EVENT_CODE.space];
    }
  }
}));
var useTooltipProps = buildProps({
  openDelay: {
    type: Number
  },
  visibleArrow: {
    type: Boolean,
    "default": void 0
  },
  hideAfter: {
    type: Number,
    "default": 200
  },
  showArrow: {
    type: Boolean,
    "default": true
  }
});
var TOOLTIP_INJECTION_KEY = Symbol("elTooltip");

var _sfc_main$d = (0, _vue.defineComponent)({
  name: "ElTooltipContent",
  components: {
    ElPopperContent: ElPopperContent
  },
  inheritAttrs: false,
  props: useTooltipContentProps,
  setup: function setup(props) {
    var contentRef = (0, _vue.ref)(null);
    var intermediateOpen = (0, _vue.ref)(false);
    var entering = (0, _vue.ref)(false);
    var leaving = (0, _vue.ref)(false);
    var destroyed = (0, _vue.ref)(false);

    var _inject4 = (0, _vue.inject)(TOOLTIP_INJECTION_KEY, void 0),
        controlled = _inject4.controlled,
        id = _inject4.id,
        open = _inject4.open,
        trigger = _inject4.trigger,
        onClose = _inject4.onClose,
        onOpen = _inject4.onOpen,
        onShow = _inject4.onShow,
        onHide = _inject4.onHide,
        onBeforeShow = _inject4.onBeforeShow,
        onBeforeHide = _inject4.onBeforeHide;

    var persistentRef = (0, _vue.computed)(function () {
      return props.persistent;
    });
    (0, _vue.onBeforeUnmount)(function () {
      destroyed.value = true;
    });
    var shouldRender = (0, _vue.computed)(function () {
      return (0, _vue.unref)(persistentRef) ? true : (0, _vue.unref)(open);
    });
    var shouldShow = (0, _vue.computed)(function () {
      return props.disabled ? false : (0, _vue.unref)(open);
    });
    var contentStyle = (0, _vue.computed)(function () {
      var _a2;

      return (_a2 = props.style) != null ? _a2 : {};
    });
    var ariaHidden = (0, _vue.computed)(function () {
      return !(0, _vue.unref)(open);
    });

    var onTransitionLeave = function onTransitionLeave() {
      onHide();
    };

    var stopWhenControlled = function stopWhenControlled() {
      if ((0, _vue.unref)(controlled)) return true;
    };

    var onContentEnter = composeEventHandlers(stopWhenControlled, function () {
      if (props.enterable && (0, _vue.unref)(trigger) === "hover") {
        onOpen();
      }
    });
    var onContentLeave = composeEventHandlers(stopWhenControlled, function () {
      if ((0, _vue.unref)(trigger) === "hover") {
        onClose();
      }
    });

    var onBeforeEnter = function onBeforeEnter() {
      var _a2, _b;

      (_b = (_a2 = contentRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b.call(_a2);
      onBeforeShow == null ? void 0 : onBeforeShow();
    };

    var onBeforeLeave = function onBeforeLeave() {
      onBeforeHide == null ? void 0 : onBeforeHide();
    };

    var onAfterShow = function onAfterShow() {
      onShow();
      stopHandle = onClickOutside((0, _vue.computed)(function () {
        var _a2;

        return (_a2 = contentRef.value) == null ? void 0 : _a2.popperContentRef;
      }), function () {
        if ((0, _vue.unref)(controlled)) return;
        var $trigger = (0, _vue.unref)(trigger);

        if ($trigger !== "hover") {
          onClose();
        }
      });
    };

    var onBlur = function onBlur() {
      if (!props.virtualTriggering) {
        onClose();
      }
    };

    var stopHandle;
    (0, _vue.watch)(function () {
      return (0, _vue.unref)(open);
    }, function (val) {
      if (!val) {
        stopHandle == null ? void 0 : stopHandle();
      }
    }, {
      flush: "post"
    });
    return {
      ariaHidden: ariaHidden,
      entering: entering,
      leaving: leaving,
      id: id,
      intermediateOpen: intermediateOpen,
      contentStyle: contentStyle,
      contentRef: contentRef,
      destroyed: destroyed,
      shouldRender: shouldRender,
      shouldShow: shouldShow,
      onClose: onClose,
      open: open,
      onAfterShow: onAfterShow,
      onBeforeEnter: onBeforeEnter,
      onBeforeLeave: onBeforeLeave,
      onContentEnter: onContentEnter,
      onContentLeave: onContentLeave,
      onTransitionLeave: onTransitionLeave,
      onBlur: onBlur
    };
  }
});

function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_el_popper_content = (0, _vue.resolveComponent)("el-popper-content");

  return (0, _vue.openBlock)(), (0, _vue.createBlock)(_vue.Teleport, {
    disabled: !_ctx.teleported,
    to: _ctx.appendTo
  }, [(0, _vue.createVNode)(_vue.Transition, {
    name: _ctx.transition,
    onAfterLeave: _ctx.onTransitionLeave,
    onBeforeEnter: _ctx.onBeforeEnter,
    onAfterEnter: _ctx.onAfterShow,
    onBeforeLeave: _ctx.onBeforeLeave
  }, {
    "default": (0, _vue.withCtx)(function () {
      return [_ctx.shouldRender ? (0, _vue.withDirectives)(((0, _vue.openBlock)(), (0, _vue.createBlock)(_component_el_popper_content, (0, _vue.mergeProps)({
        key: 0,
        id: _ctx.id,
        ref: "contentRef"
      }, _ctx.$attrs, {
        "aria-label": _ctx.ariaLabel,
        "aria-hidden": _ctx.ariaHidden,
        "boundaries-padding": _ctx.boundariesPadding,
        "fallback-placements": _ctx.fallbackPlacements,
        "gpu-acceleration": _ctx.gpuAcceleration,
        offset: _ctx.offset,
        placement: _ctx.placement,
        "popper-options": _ctx.popperOptions,
        strategy: _ctx.strategy,
        effect: _ctx.effect,
        enterable: _ctx.enterable,
        pure: _ctx.pure,
        "popper-class": _ctx.popperClass,
        "popper-style": [_ctx.popperStyle, _ctx.contentStyle],
        "reference-el": _ctx.referenceEl,
        "trigger-target-el": _ctx.triggerTargetEl,
        visible: _ctx.shouldShow,
        "z-index": _ctx.zIndex,
        onMouseenter: _ctx.onContentEnter,
        onMouseleave: _ctx.onContentLeave,
        onBlur: _ctx.onBlur,
        onClose: _ctx.onClose
      }), {
        "default": (0, _vue.withCtx)(function () {
          return [(0, _vue.createCommentVNode)(" Workaround bug #6378 "), !_ctx.destroyed ? (0, _vue.renderSlot)(_ctx.$slots, "default", {
            key: 0
          }) : (0, _vue.createCommentVNode)("v-if", true)];
        }),
        _: 3
      }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onBlur", "onClose"])), [[_vue.vShow, _ctx.shouldShow]]) : (0, _vue.createCommentVNode)("v-if", true)];
    }),
    _: 3
  }, 8, ["name", "onAfterLeave", "onBeforeEnter", "onAfterEnter", "onBeforeLeave"])], 8, ["disabled", "to"]);
}

var ElTooltipContent = /* @__PURE__ */_export_sfc$1(_sfc_main$d, [["render", _sfc_render$6], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);

var isTriggerType = function isTriggerType(trigger, type4) {
  if (isArray(trigger)) {
    return trigger.includes(type4);
  }

  return trigger === type4;
};

var whenTrigger = function whenTrigger(trigger, type4, handler) {
  return function (e) {
    isTriggerType((0, _vue.unref)(trigger), type4) && handler(e);
  };
};

var _sfc_main$c = (0, _vue.defineComponent)({
  name: "ElTooltipTrigger",
  components: {
    ElPopperTrigger: ElPopperTrigger
  },
  props: useTooltipTriggerProps,
  setup: function setup(props) {
    var ns2 = useNamespace("tooltip");

    var _inject5 = (0, _vue.inject)(TOOLTIP_INJECTION_KEY, void 0),
        controlled = _inject5.controlled,
        id = _inject5.id,
        open = _inject5.open,
        onOpen = _inject5.onOpen,
        onClose = _inject5.onClose,
        onToggle = _inject5.onToggle;

    var triggerRef2 = (0, _vue.ref)(null);

    var stopWhenControlledOrDisabled = function stopWhenControlledOrDisabled() {
      if ((0, _vue.unref)(controlled) || props.disabled) {
        return true;
      }
    };

    var trigger = (0, _vue.toRef)(props, "trigger");
    var onMouseenter = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onOpen));
    var onMouseleave = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onClose));
    var onClick = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "click", function (e) {
      if (e.button === 0) {
        onToggle(e);
      }
    }));
    var onFocus = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onOpen));
    var onBlur = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onClose));
    var onContextMenu = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "contextmenu", function (e) {
      e.preventDefault();
      onToggle(e);
    }));
    var onKeydown = composeEventHandlers(stopWhenControlledOrDisabled, function (e) {
      var code = e.code;

      if (props.triggerKeys.includes(code)) {
        e.preventDefault();
        onToggle(e);
      }
    });
    return {
      onBlur: onBlur,
      onContextMenu: onContextMenu,
      onFocus: onFocus,
      onMouseenter: onMouseenter,
      onMouseleave: onMouseleave,
      onClick: onClick,
      onKeydown: onKeydown,
      open: open,
      id: id,
      triggerRef: triggerRef2,
      ns: ns2
    };
  }
});

function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_el_popper_trigger = (0, _vue.resolveComponent)("el-popper-trigger");

  return (0, _vue.openBlock)(), (0, _vue.createBlock)(_component_el_popper_trigger, {
    id: _ctx.id,
    "virtual-ref": _ctx.virtualRef,
    open: _ctx.open,
    "virtual-triggering": _ctx.virtualTriggering,
    "class": (0, _vue.normalizeClass)(_ctx.ns.e("trigger")),
    onBlur: _ctx.onBlur,
    onClick: _ctx.onClick,
    onContextmenu: _ctx.onContextMenu,
    onFocus: _ctx.onFocus,
    onMouseenter: _ctx.onMouseenter,
    onMouseleave: _ctx.onMouseleave,
    onKeydown: _ctx.onKeydown
  }, {
    "default": (0, _vue.withCtx)(function () {
      return [(0, _vue.renderSlot)(_ctx.$slots, "default")];
    }),
    _: 3
  }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]);
}

var ElTooltipTrigger = /* @__PURE__ */_export_sfc$1(_sfc_main$c, [["render", _sfc_render$5], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);

var _createModelToggleCom = createModelToggleComposable("visible"),
    useModelToggleProps = _createModelToggleCom.useModelToggleProps,
    useModelToggle = _createModelToggleCom.useModelToggle,
    useModelToggleEmits = _createModelToggleCom.useModelToggleEmits;

var _sfc_main$b = (0, _vue.defineComponent)({
  name: "ElTooltip",
  components: {
    ElPopper: ElPopper,
    ElPopperArrow: ElPopperArrow,
    ElTooltipContent: ElTooltipContent,
    ElTooltipTrigger: ElTooltipTrigger
  },
  props: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, usePopperProps), useModelToggleProps), useTooltipContentProps), useTooltipTriggerProps), usePopperArrowProps), useTooltipProps),
  emits: [].concat(_toConsumableArray(useModelToggleEmits), ["before-show", "before-hide", "show", "hide", "open", "close"]),
  setup: function setup(props, _ref16) {
    var emit = _ref16.emit;
    usePopperContainer();
    var compatShowAfter = (0, _vue.computed)(function () {
      if (!isUndefined(props.openDelay)) ;
      return props.openDelay || props.showAfter;
    });
    var compatShowArrow = (0, _vue.computed)(function () {
      if (!isUndefined(props.visibleArrow)) ;
      return isBoolean(props.visibleArrow) ? props.visibleArrow : props.showArrow;
    });
    var id = useId();
    var popperRef = (0, _vue.ref)(null);
    var contentRef = (0, _vue.ref)(null);

    var updatePopper = function updatePopper() {
      var _a2;

      var popperComponent = (0, _vue.unref)(popperRef);

      if (popperComponent) {
        (_a2 = popperComponent.popperInstanceRef) == null ? void 0 : _a2.update();
      }
    };

    var open = (0, _vue.ref)(false);
    var toggleReason = (0, _vue.ref)(void 0);

    var _useModelToggle = useModelToggle({
      indicator: open,
      toggleReason: toggleReason
    }),
        show = _useModelToggle.show,
        hide = _useModelToggle.hide;

    var _useDelayedToggle = useDelayedToggle({
      showAfter: compatShowAfter,
      hideAfter: (0, _vue.toRef)(props, "hideAfter"),
      open: show,
      close: hide
    }),
        _onOpen = _useDelayedToggle.onOpen,
        _onClose = _useDelayedToggle.onClose;

    var controlled = (0, _vue.computed)(function () {
      return isBoolean(props.visible);
    });
    (0, _vue.provide)(TOOLTIP_INJECTION_KEY, {
      controlled: controlled,
      id: id,
      open: (0, _vue.readonly)(open),
      trigger: (0, _vue.toRef)(props, "trigger"),
      onOpen: function onOpen(event) {
        _onOpen(event);
      },
      onClose: function onClose(event) {
        _onClose(event);
      },
      onToggle: function onToggle(event) {
        if ((0, _vue.unref)(open)) {
          _onClose(event);
        } else {
          _onOpen(event);
        }
      },
      onShow: function onShow() {
        emit("show", toggleReason.value);
      },
      onHide: function onHide() {
        emit("hide", toggleReason.value);
      },
      onBeforeShow: function onBeforeShow() {
        emit("before-show", toggleReason.value);
      },
      onBeforeHide: function onBeforeHide() {
        emit("before-hide", toggleReason.value);
      },
      updatePopper: updatePopper
    });
    (0, _vue.watch)(function () {
      return props.disabled;
    }, function (disabled) {
      if (disabled && open.value) {
        open.value = false;
      }
    });

    var isFocusInsideContent = function isFocusInsideContent() {
      var _a2, _b;

      var popperContent = (_b = (_a2 = contentRef.value) == null ? void 0 : _a2.contentRef) == null ? void 0 : _b.popperContentRef;
      return popperContent && popperContent.contains(document.activeElement);
    };

    (0, _vue.onDeactivated)(function () {
      return open.value && hide();
    });
    return {
      compatShowAfter: compatShowAfter,
      compatShowArrow: compatShowArrow,
      popperRef: popperRef,
      contentRef: contentRef,
      open: open,
      hide: hide,
      isFocusInsideContent: isFocusInsideContent,
      updatePopper: updatePopper,
      onOpen: _onOpen,
      onClose: _onClose
    };
  }
});

var _hoisted_1$4 = ["innerHTML"];
var _hoisted_2$2 = {
  key: 1
};

function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_el_tooltip_trigger = (0, _vue.resolveComponent)("el-tooltip-trigger");

  var _component_el_popper_arrow = (0, _vue.resolveComponent)("el-popper-arrow");

  var _component_el_tooltip_content = (0, _vue.resolveComponent)("el-tooltip-content");

  var _component_el_popper = (0, _vue.resolveComponent)("el-popper");

  return (0, _vue.openBlock)(), (0, _vue.createBlock)(_component_el_popper, {
    ref: "popperRef",
    role: _ctx.role
  }, {
    "default": (0, _vue.withCtx)(function () {
      return [(0, _vue.createVNode)(_component_el_tooltip_trigger, {
        disabled: _ctx.disabled,
        trigger: _ctx.trigger,
        "trigger-keys": _ctx.triggerKeys,
        "virtual-ref": _ctx.virtualRef,
        "virtual-triggering": _ctx.virtualTriggering
      }, {
        "default": (0, _vue.withCtx)(function () {
          return [_ctx.$slots["default"] ? (0, _vue.renderSlot)(_ctx.$slots, "default", {
            key: 0
          }) : (0, _vue.createCommentVNode)("v-if", true)];
        }),
        _: 3
      }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]), (0, _vue.createVNode)(_component_el_tooltip_content, {
        ref: "contentRef",
        "aria-label": _ctx.ariaLabel,
        "boundaries-padding": _ctx.boundariesPadding,
        content: _ctx.content,
        disabled: _ctx.disabled,
        effect: _ctx.effect,
        enterable: _ctx.enterable,
        "fallback-placements": _ctx.fallbackPlacements,
        "hide-after": _ctx.hideAfter,
        "gpu-acceleration": _ctx.gpuAcceleration,
        offset: _ctx.offset,
        persistent: _ctx.persistent,
        "popper-class": _ctx.popperClass,
        "popper-style": _ctx.popperStyle,
        placement: _ctx.placement,
        "popper-options": _ctx.popperOptions,
        pure: _ctx.pure,
        "raw-content": _ctx.rawContent,
        "reference-el": _ctx.referenceEl,
        "trigger-target-el": _ctx.triggerTargetEl,
        "show-after": _ctx.compatShowAfter,
        strategy: _ctx.strategy,
        teleported: _ctx.teleported,
        transition: _ctx.transition,
        "virtual-triggering": _ctx.virtualTriggering,
        "z-index": _ctx.zIndex,
        "append-to": _ctx.appendTo
      }, {
        "default": (0, _vue.withCtx)(function () {
          return [(0, _vue.renderSlot)(_ctx.$slots, "content", {}, function () {
            return [_ctx.rawContent ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", {
              key: 0,
              innerHTML: _ctx.content
            }, null, 8, _hoisted_1$4)) : ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", _hoisted_2$2, (0, _vue.toDisplayString)(_ctx.content), 1))];
          }), _ctx.compatShowArrow ? ((0, _vue.openBlock)(), (0, _vue.createBlock)(_component_el_popper_arrow, {
            key: 0,
            "arrow-offset": _ctx.arrowOffset
          }, null, 8, ["arrow-offset"])) : (0, _vue.createCommentVNode)("v-if", true)];
        }),
        _: 3
      }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])];
    }),
    _: 3
  }, 8, ["role"]);
}

var Tooltip = /* @__PURE__ */_export_sfc$1(_sfc_main$b, [["render", _sfc_render$4], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);

var ElTooltip = withInstall(Tooltip);
var buttonTypes = ["default", "primary", "success", "warning", "info", "danger", "text", ""];
var buttonNativeTypes = ["button", "submit", "reset"];
var buttonProps = buildProps({
  size: useSizeProp,
  disabled: Boolean,
  type: {
    type: String,
    values: buttonTypes,
    "default": ""
  },
  icon: {
    type: iconPropType,
    "default": ""
  },
  nativeType: {
    type: String,
    values: buttonNativeTypes,
    "default": "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: iconPropType,
    "default": function _default() {
      return loading_default;
    }
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    "default": void 0
  }
});
var buttonEmits = {
  click: function click(evt) {
    return evt instanceof MouseEvent;
  }
};

function bound01(n, max) {
  if (isOnePointZero(n)) {
    n = "100%";
  }

  var isPercent = isPercentage(n);
  n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));

  if (isPercent) {
    n = parseInt(String(n * max), 10) / 100;
  }

  if (Math.abs(n - max) < 1e-6) {
    return 1;
  }

  if (max === 360) {
    n = (n < 0 ? n % max + max : n % max) / parseFloat(String(max));
  } else {
    n = n % max / parseFloat(String(max));
  }

  return n;
}

function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}

function isOnePointZero(n) {
  return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
}

function isPercentage(n) {
  return typeof n === "string" && n.indexOf("%") !== -1;
}

function boundAlpha(a) {
  a = parseFloat(a);

  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }

  return a;
}

function convertToPercentage(n) {
  if (n <= 1) {
    return "".concat(Number(n) * 100, "%");
  }

  return n;
}

function pad2(c) {
  return c.length === 1 ? "0" + c : String(c);
}

function rgbToRgb(r, g, b) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b, 255) * 255
  };
}

function rgbToHsl(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h = 0;
  var s = 0;
  var l = (max + min) / 2;

  if (max === min) {
    s = 0;
    h = 0;
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        h = (b - r) / d + 2;
        break;

      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return {
    h: h,
    s: s,
    l: l
  };
}

function hue2rgb(p, q2, t) {
  if (t < 0) {
    t += 1;
  }

  if (t > 1) {
    t -= 1;
  }

  if (t < 1 / 6) {
    return p + (q2 - p) * (6 * t);
  }

  if (t < 1 / 2) {
    return q2;
  }

  if (t < 2 / 3) {
    return p + (q2 - p) * (2 / 3 - t) * 6;
  }

  return p;
}

function hslToRgb(h, s, l) {
  var r;
  var g;
  var b;
  h = bound01(h, 360);
  s = bound01(s, 100);
  l = bound01(l, 100);

  if (s === 0) {
    g = l;
    b = l;
    r = l;
  } else {
    var q2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q2;
    r = hue2rgb(p, q2, h + 1 / 3);
    g = hue2rgb(p, q2, h);
    b = hue2rgb(p, q2, h - 1 / 3);
  }

  return {
    r: r * 255,
    g: g * 255,
    b: b * 255
  };
}

function rgbToHsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h = 0;
  var v = max;
  var d = max - min;
  var s = max === 0 ? 0 : d / max;

  if (max === min) {
    h = 0;
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        h = (b - r) / d + 2;
        break;

      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return {
    h: h,
    s: s,
    v: v
  };
}

function hsvToRgb(h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  var i = Math.floor(h);
  var f = h - i;
  var p = v * (1 - s);
  var q2 = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  var mod = i % 6;
  var r = [v, q2, p, p, t, v][mod];
  var g = [t, v, v, q2, p, p][mod];
  var b = [p, p, t, v, v, q2][mod];
  return {
    r: r * 255,
    g: g * 255,
    b: b * 255
  };
}

function rgbToHex(r, g, b, allow3Char) {
  var hex2 = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];

  if (allow3Char && hex2[0].startsWith(hex2[0].charAt(1)) && hex2[1].startsWith(hex2[1].charAt(1)) && hex2[2].startsWith(hex2[2].charAt(1))) {
    return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0);
  }

  return hex2.join("");
}

function rgbaToHex(r, g, b, a, allow4Char) {
  var hex2 = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16)), pad2(convertDecimalToHex(a))];

  if (allow4Char && hex2[0].startsWith(hex2[0].charAt(1)) && hex2[1].startsWith(hex2[1].charAt(1)) && hex2[2].startsWith(hex2[2].charAt(1)) && hex2[3].startsWith(hex2[3].charAt(1))) {
    return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0) + hex2[3].charAt(0);
  }

  return hex2.join("");
}

function convertDecimalToHex(d) {
  return Math.round(parseFloat(d) * 255).toString(16);
}

function convertHexToDecimal(h) {
  return parseIntFromHex(h) / 255;
}

function parseIntFromHex(val) {
  return parseInt(val, 16);
}

function numberInputToObject(color) {
  return {
    r: color >> 16,
    g: (color & 65280) >> 8,
    b: color & 255
  };
}

var names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};

function inputToRGB(color) {
  var rgb = {
    r: 0,
    g: 0,
    b: 0
  };
  var a = 1;
  var s = null;
  var v = null;
  var l = null;
  var ok = false;
  var format2 = false;

  if (typeof color === "string") {
    color = stringInputToObject(color);
  }

  if (_typeof(color) === "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format2 = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s = convertToPercentage(color.s);
      v = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s, v);
      ok = true;
      format2 = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s = convertToPercentage(color.s);
      l = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s, l);
      ok = true;
      format2 = "hsl";
    }

    if (Object.prototype.hasOwnProperty.call(color, "a")) {
      a = color.a;
    }
  }

  a = boundAlpha(a);
  return {
    ok: ok,
    format: color.format || format2,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a: a
  };
}

var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};

function stringInputToObject(color) {
  color = color.trim().toLowerCase();

  if (color.length === 0) {
    return false;
  }

  var named = false;

  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === "transparent") {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  }

  var match = matchers.rgb.exec(color);

  if (match) {
    return {
      r: match[1],
      g: match[2],
      b: match[3]
    };
  }

  match = matchers.rgba.exec(color);

  if (match) {
    return {
      r: match[1],
      g: match[2],
      b: match[3],
      a: match[4]
    };
  }

  match = matchers.hsl.exec(color);

  if (match) {
    return {
      h: match[1],
      s: match[2],
      l: match[3]
    };
  }

  match = matchers.hsla.exec(color);

  if (match) {
    return {
      h: match[1],
      s: match[2],
      l: match[3],
      a: match[4]
    };
  }

  match = matchers.hsv.exec(color);

  if (match) {
    return {
      h: match[1],
      s: match[2],
      v: match[3]
    };
  }

  match = matchers.hsva.exec(color);

  if (match) {
    return {
      h: match[1],
      s: match[2],
      v: match[3],
      a: match[4]
    };
  }

  match = matchers.hex8.exec(color);

  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }

  match = matchers.hex6.exec(color);

  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }

  match = matchers.hex4.exec(color);

  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? "name" : "hex8"
    };
  }

  match = matchers.hex3.exec(color);

  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? "name" : "hex"
    };
  }

  return false;
}

function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

var TinyColor = function () {
  function TinyColor2(color, opts) {
    if (color === void 0) {
      color = "";
    }

    if (opts === void 0) {
      opts = {};
    }

    var _a2;

    if (color instanceof TinyColor2) {
      return color;
    }

    if (typeof color === "number") {
      color = numberInputToObject(color);
    }

    this.originalInput = color;
    var rgb = inputToRGB(color);
    this.originalInput = color;
    this.r = rgb.r;
    this.g = rgb.g;
    this.b = rgb.b;
    this.a = rgb.a;
    this.roundA = Math.round(100 * this.a) / 100;
    this.format = (_a2 = opts.format) !== null && _a2 !== void 0 ? _a2 : rgb.format;
    this.gradientType = opts.gradientType;

    if (this.r < 1) {
      this.r = Math.round(this.r);
    }

    if (this.g < 1) {
      this.g = Math.round(this.g);
    }

    if (this.b < 1) {
      this.b = Math.round(this.b);
    }

    this.isValid = rgb.ok;
  }

  TinyColor2.prototype.isDark = function () {
    return this.getBrightness() < 128;
  };

  TinyColor2.prototype.isLight = function () {
    return !this.isDark();
  };

  TinyColor2.prototype.getBrightness = function () {
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
  };

  TinyColor2.prototype.getLuminance = function () {
    var rgb = this.toRgb();
    var R2;
    var G2;
    var B2;
    var RsRGB = rgb.r / 255;
    var GsRGB = rgb.g / 255;
    var BsRGB = rgb.b / 255;

    if (RsRGB <= 0.03928) {
      R2 = RsRGB / 12.92;
    } else {
      R2 = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    }

    if (GsRGB <= 0.03928) {
      G2 = GsRGB / 12.92;
    } else {
      G2 = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    }

    if (BsRGB <= 0.03928) {
      B2 = BsRGB / 12.92;
    } else {
      B2 = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    }

    return 0.2126 * R2 + 0.7152 * G2 + 0.0722 * B2;
  };

  TinyColor2.prototype.getAlpha = function () {
    return this.a;
  };

  TinyColor2.prototype.setAlpha = function (alpha) {
    this.a = boundAlpha(alpha);
    this.roundA = Math.round(100 * this.a) / 100;
    return this;
  };

  TinyColor2.prototype.toHsv = function () {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    return {
      h: hsv.h * 360,
      s: hsv.s,
      v: hsv.v,
      a: this.a
    };
  };

  TinyColor2.prototype.toHsvString = function () {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    var h = Math.round(hsv.h * 360);
    var s = Math.round(hsv.s * 100);
    var v = Math.round(hsv.v * 100);
    return this.a === 1 ? "hsv(".concat(h, ", ").concat(s, "%, ").concat(v, "%)") : "hsva(".concat(h, ", ").concat(s, "%, ").concat(v, "%, ").concat(this.roundA, ")");
  };

  TinyColor2.prototype.toHsl = function () {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    return {
      h: hsl.h * 360,
      s: hsl.s,
      l: hsl.l,
      a: this.a
    };
  };

  TinyColor2.prototype.toHslString = function () {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    var h = Math.round(hsl.h * 360);
    var s = Math.round(hsl.s * 100);
    var l = Math.round(hsl.l * 100);
    return this.a === 1 ? "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)") : "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(this.roundA, ")");
  };

  TinyColor2.prototype.toHex = function (allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }

    return rgbToHex(this.r, this.g, this.b, allow3Char);
  };

  TinyColor2.prototype.toHexString = function (allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }

    return "#" + this.toHex(allow3Char);
  };

  TinyColor2.prototype.toHex8 = function (allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }

    return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
  };

  TinyColor2.prototype.toHex8String = function (allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }

    return "#" + this.toHex8(allow4Char);
  };

  TinyColor2.prototype.toRgb = function () {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  };

  TinyColor2.prototype.toRgbString = function () {
    var r = Math.round(this.r);
    var g = Math.round(this.g);
    var b = Math.round(this.b);
    return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(this.roundA, ")");
  };

  TinyColor2.prototype.toPercentageRgb = function () {
    var fmt = function fmt(x) {
      return "".concat(Math.round(bound01(x, 255) * 100), "%");
    };

    return {
      r: fmt(this.r),
      g: fmt(this.g),
      b: fmt(this.b),
      a: this.a
    };
  };

  TinyColor2.prototype.toPercentageRgbString = function () {
    var rnd = function rnd(x) {
      return Math.round(bound01(x, 255) * 100);
    };

    return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
  };

  TinyColor2.prototype.toName = function () {
    if (this.a === 0) {
      return "transparent";
    }

    if (this.a < 1) {
      return false;
    }

    var hex2 = "#" + rgbToHex(this.r, this.g, this.b, false);

    for (var _i = 0, _a2 = Object.entries(names); _i < _a2.length; _i++) {
      var _b = _a2[_i],
          key = _b[0],
          value = _b[1];

      if (hex2 === value) {
        return key;
      }
    }

    return false;
  };

  TinyColor2.prototype.toString = function (format2) {
    var formatSet = Boolean(format2);
    format2 = format2 !== null && format2 !== void 0 ? format2 : this.format;
    var formattedString = false;
    var hasAlpha = this.a < 1 && this.a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format2.startsWith("hex") || format2 === "name");

    if (needsAlphaFormat) {
      if (format2 === "name" && this.a === 0) {
        return this.toName();
      }

      return this.toRgbString();
    }

    if (format2 === "rgb") {
      formattedString = this.toRgbString();
    }

    if (format2 === "prgb") {
      formattedString = this.toPercentageRgbString();
    }

    if (format2 === "hex" || format2 === "hex6") {
      formattedString = this.toHexString();
    }

    if (format2 === "hex3") {
      formattedString = this.toHexString(true);
    }

    if (format2 === "hex4") {
      formattedString = this.toHex8String(true);
    }

    if (format2 === "hex8") {
      formattedString = this.toHex8String();
    }

    if (format2 === "name") {
      formattedString = this.toName();
    }

    if (format2 === "hsl") {
      formattedString = this.toHslString();
    }

    if (format2 === "hsv") {
      formattedString = this.toHsvString();
    }

    return formattedString || this.toHexString();
  };

  TinyColor2.prototype.toNumber = function () {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  };

  TinyColor2.prototype.clone = function () {
    return new TinyColor2(this.toString());
  };

  TinyColor2.prototype.lighten = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }

    var hsl = this.toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };

  TinyColor2.prototype.brighten = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }

    var rgb = this.toRgb();
    rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
    rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
    rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
    return new TinyColor2(rgb);
  };

  TinyColor2.prototype.darken = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }

    var hsl = this.toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };

  TinyColor2.prototype.tint = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }

    return this.mix("white", amount);
  };

  TinyColor2.prototype.shade = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }

    return this.mix("black", amount);
  };

  TinyColor2.prototype.desaturate = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }

    var hsl = this.toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };

  TinyColor2.prototype.saturate = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }

    var hsl = this.toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };

  TinyColor2.prototype.greyscale = function () {
    return this.desaturate(100);
  };

  TinyColor2.prototype.spin = function (amount) {
    var hsl = this.toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return new TinyColor2(hsl);
  };

  TinyColor2.prototype.mix = function (color, amount) {
    if (amount === void 0) {
      amount = 50;
    }

    var rgb1 = this.toRgb();
    var rgb2 = new TinyColor2(color).toRgb();
    var p = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p + rgb1.r,
      g: (rgb2.g - rgb1.g) * p + rgb1.g,
      b: (rgb2.b - rgb1.b) * p + rgb1.b,
      a: (rgb2.a - rgb1.a) * p + rgb1.a
    };
    return new TinyColor2(rgba);
  };

  TinyColor2.prototype.analogous = function (results, slices) {
    if (results === void 0) {
      results = 6;
    }

    if (slices === void 0) {
      slices = 30;
    }

    var hsl = this.toHsl();
    var part = 360 / slices;
    var ret = [this];

    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(new TinyColor2(hsl));
    }

    return ret;
  };

  TinyColor2.prototype.complement = function () {
    var hsl = this.toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return new TinyColor2(hsl);
  };

  TinyColor2.prototype.monochromatic = function (results) {
    if (results === void 0) {
      results = 6;
    }

    var hsv = this.toHsv();
    var h = hsv.h;
    var s = hsv.s;
    var v = hsv.v;
    var res = [];
    var modification = 1 / results;

    while (results--) {
      res.push(new TinyColor2({
        h: h,
        s: s,
        v: v
      }));
      v = (v + modification) % 1;
    }

    return res;
  };

  TinyColor2.prototype.splitcomplement = function () {
    var hsl = this.toHsl();
    var h = hsl.h;
    return [this, new TinyColor2({
      h: (h + 72) % 360,
      s: hsl.s,
      l: hsl.l
    }), new TinyColor2({
      h: (h + 216) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  };

  TinyColor2.prototype.onBackground = function (background) {
    var fg = this.toRgb();
    var bg = new TinyColor2(background).toRgb();
    return new TinyColor2({
      r: bg.r + (fg.r - bg.r) * fg.a,
      g: bg.g + (fg.g - bg.g) * fg.a,
      b: bg.b + (fg.b - bg.b) * fg.a
    });
  };

  TinyColor2.prototype.triad = function () {
    return this.polyad(3);
  };

  TinyColor2.prototype.tetrad = function () {
    return this.polyad(4);
  };

  TinyColor2.prototype.polyad = function (n) {
    var hsl = this.toHsl();
    var h = hsl.h;
    var result = [this];
    var increment = 360 / n;

    for (var i = 1; i < n; i++) {
      result.push(new TinyColor2({
        h: (h + i * increment) % 360,
        s: hsl.s,
        l: hsl.l
      }));
    }

    return result;
  };

  TinyColor2.prototype.equals = function (color) {
    return this.toRgbString() === new TinyColor2(color).toRgbString();
  };

  return TinyColor2;
}();

function darken(color) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
  return color.mix("#141414", amount).toString();
}

function useButtonCustomStyle(props) {
  var _disabled = useDisabled();

  var ns2 = useNamespace("button");
  return (0, _vue.computed)(function () {
    var styles = {};
    var buttonColor = props.color;

    if (buttonColor) {
      var color = new TinyColor(buttonColor);
      var activeBgColor = props.dark ? color.tint(20).toString() : darken(color, 20);

      if (props.plain) {
        styles = ns2.cssVarBlock({
          "bg-color": props.dark ? darken(color, 90) : color.tint(90).toString(),
          "text-color": buttonColor,
          "border-color": props.dark ? darken(color, 50) : color.tint(50).toString(),
          "hover-text-color": "var(".concat(ns2.cssVarName("color-white"), ")"),
          "hover-bg-color": buttonColor,
          "hover-border-color": buttonColor,
          "active-bg-color": activeBgColor,
          "active-text-color": "var(".concat(ns2.cssVarName("color-white"), ")"),
          "active-border-color": activeBgColor
        });

        if (_disabled.value) {
          styles[ns2.cssVarBlockName("disabled-bg-color")] = props.dark ? darken(color, 90) : color.tint(90).toString();
          styles[ns2.cssVarBlockName("disabled-text-color")] = props.dark ? darken(color, 50) : color.tint(50).toString();
          styles[ns2.cssVarBlockName("disabled-border-color")] = props.dark ? darken(color, 80) : color.tint(80).toString();
        }
      } else {
        var hoverBgColor = props.dark ? darken(color, 30) : color.tint(30).toString();
        var textColor = color.isDark() ? "var(".concat(ns2.cssVarName("color-white"), ")") : "var(".concat(ns2.cssVarName("color-black"), ")");
        styles = ns2.cssVarBlock({
          "bg-color": buttonColor,
          "text-color": textColor,
          "border-color": buttonColor,
          "hover-bg-color": hoverBgColor,
          "hover-text-color": textColor,
          "hover-border-color": hoverBgColor,
          "active-bg-color": activeBgColor,
          "active-border-color": activeBgColor
        });

        if (_disabled.value) {
          var disabledButtonColor = props.dark ? darken(color, 50) : color.tint(50).toString();
          styles[ns2.cssVarBlockName("disabled-bg-color")] = disabledButtonColor;
          styles[ns2.cssVarBlockName("disabled-text-color")] = props.dark ? "rgba(255, 255, 255, 0.5)" : "var(".concat(ns2.cssVarName("color-white"), ")");
          styles[ns2.cssVarBlockName("disabled-border-color")] = disabledButtonColor;
        }
      }
    }

    return styles;
  });
}

var _hoisted_1$3 = ["aria-disabled", "disabled", "autofocus", "type"];
var __default__$5 = {
  name: "ElButton"
};

var _sfc_main$a = /* @__PURE__ */(0, _vue.defineComponent)(_objectSpread(_objectSpread({}, __default__$5), {}, {
  props: buttonProps,
  emits: buttonEmits,
  setup: function setup(__props, _ref17) {
    var expose = _ref17.expose,
        emit = _ref17.emit;
    var props = __props;
    var slots = (0, _vue.useSlots)();
    useDeprecated({
      from: "type.text",
      replacement: "type.link",
      version: "3.0.0",
      scope: "props",
      ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
    }, (0, _vue.computed)(function () {
      return props.type === "text";
    }));
    var buttonGroupContext = (0, _vue.inject)(buttonGroupContextKey, void 0);
    var globalConfig2 = useGlobalConfig("button");
    var ns2 = useNamespace("button");

    var _useFormItem2 = useFormItem(),
        form = _useFormItem2.form;

    var _size = useSize((0, _vue.computed)(function () {
      return buttonGroupContext == null ? void 0 : buttonGroupContext.size;
    }));

    var _disabled = useDisabled();

    var _ref = (0, _vue.ref)();

    var _type = (0, _vue.computed)(function () {
      return props.type || (buttonGroupContext == null ? void 0 : buttonGroupContext.type) || "";
    });

    var autoInsertSpace = (0, _vue.computed)(function () {
      var _a2, _b, _c;

      return (_c = (_b = props.autoInsertSpace) != null ? _b : (_a2 = globalConfig2.value) == null ? void 0 : _a2.autoInsertSpace) != null ? _c : false;
    });
    var shouldAddSpace = (0, _vue.computed)(function () {
      var _a2;

      var defaultSlot = (_a2 = slots["default"]) == null ? void 0 : _a2.call(slots);

      if (autoInsertSpace.value && (defaultSlot == null ? void 0 : defaultSlot.length) === 1) {
        var slot = defaultSlot[0];

        if ((slot == null ? void 0 : slot.type) === _vue.Text) {
          var text = slot.children;
          return /^(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A]){2}$/.test(text.trim());
        }
      }

      return false;
    });
    var buttonStyle = useButtonCustomStyle(props);

    var handleClick = function handleClick(evt) {
      if (props.nativeType === "reset") {
        form == null ? void 0 : form.resetFields();
      }

      emit("click", evt);
    };

    expose({
      ref: _ref,
      size: _size,
      type: _type,
      disabled: _disabled,
      shouldAddSpace: shouldAddSpace
    });
    return function (_ctx, _cache) {
      return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("button", {
        ref_key: "_ref",
        ref: _ref,
        "class": (0, _vue.normalizeClass)([(0, _vue.unref)(ns2).b(), (0, _vue.unref)(ns2).m((0, _vue.unref)(_type)), (0, _vue.unref)(ns2).m((0, _vue.unref)(_size)), (0, _vue.unref)(ns2).is("disabled", (0, _vue.unref)(_disabled)), (0, _vue.unref)(ns2).is("loading", _ctx.loading), (0, _vue.unref)(ns2).is("plain", _ctx.plain), (0, _vue.unref)(ns2).is("round", _ctx.round), (0, _vue.unref)(ns2).is("circle", _ctx.circle), (0, _vue.unref)(ns2).is("text", _ctx.text), (0, _vue.unref)(ns2).is("link", _ctx.link), (0, _vue.unref)(ns2).is("has-bg", _ctx.bg)]),
        "aria-disabled": (0, _vue.unref)(_disabled) || _ctx.loading,
        disabled: (0, _vue.unref)(_disabled) || _ctx.loading,
        autofocus: _ctx.autofocus,
        type: _ctx.nativeType,
        style: (0, _vue.normalizeStyle)((0, _vue.unref)(buttonStyle)),
        onClick: handleClick
      }, [_ctx.loading ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)(_vue.Fragment, {
        key: 0
      }, [_ctx.$slots.loading ? (0, _vue.renderSlot)(_ctx.$slots, "loading", {
        key: 0
      }) : ((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.unref)(ElIcon), {
        key: 1,
        "class": (0, _vue.normalizeClass)((0, _vue.unref)(ns2).is("loading"))
      }, {
        "default": (0, _vue.withCtx)(function () {
          return [((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.loadingIcon)))];
        }),
        _: 1
      }, 8, ["class"]))], 64)) : _ctx.icon || _ctx.$slots.icon ? ((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.unref)(ElIcon), {
        key: 1
      }, {
        "default": (0, _vue.withCtx)(function () {
          return [_ctx.icon ? ((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.icon), {
            key: 0
          })) : (0, _vue.renderSlot)(_ctx.$slots, "icon", {
            key: 1
          })];
        }),
        _: 3
      })) : (0, _vue.createCommentVNode)("v-if", true), _ctx.$slots["default"] ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", {
        key: 2,
        "class": (0, _vue.normalizeClass)(_defineProperty({}, (0, _vue.unref)(ns2).em("text", "expand"), (0, _vue.unref)(shouldAddSpace)))
      }, [(0, _vue.renderSlot)(_ctx.$slots, "default")], 2)) : (0, _vue.createCommentVNode)("v-if", true)], 14, _hoisted_1$3);
    };
  }
}));

var Button = /* @__PURE__ */_export_sfc$1(_sfc_main$a, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);

var buttonGroupProps = {
  size: buttonProps.size,
  type: buttonProps.type
};
var __default__$4 = {
  name: "ElButtonGroup"
};

var _sfc_main$9 = /* @__PURE__ */(0, _vue.defineComponent)(_objectSpread(_objectSpread({}, __default__$4), {}, {
  props: buttonGroupProps,
  setup: function setup(__props) {
    var props = __props;
    (0, _vue.provide)(buttonGroupContextKey, (0, _vue.reactive)({
      size: (0, _vue.toRef)(props, "size"),
      type: (0, _vue.toRef)(props, "type")
    }));
    var ns2 = useNamespace("button");
    return function (_ctx, _cache) {
      return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
        "class": (0, _vue.normalizeClass)("".concat((0, _vue.unref)(ns2).b("group")))
      }, [(0, _vue.renderSlot)(_ctx.$slots, "default")], 2);
    };
  }
}));

var ButtonGroup = /* @__PURE__ */_export_sfc$1(_sfc_main$9, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);

var ElButton = withInstall(Button, {
  ButtonGroup: ButtonGroup
});
withNoopInstall(ButtonGroup);
var nodeList = /* @__PURE__ */new Map();
var startClick;

if (isClient) {
  document.addEventListener("mousedown", function (e) {
    return startClick = e;
  });
  document.addEventListener("mouseup", function (e) {
    var _iterator7 = _createForOfIteratorHelper(nodeList.values()),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var handlers = _step7.value;

        var _iterator8 = _createForOfIteratorHelper(handlers),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var documentHandler = _step8.value.documentHandler;
            documentHandler(e, startClick);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
  });
}

function createDocumentHandler(el, binding) {
  var excludes = [];

  if (Array.isArray(binding.arg)) {
    excludes = binding.arg;
  } else if (isElement(binding.arg)) {
    excludes.push(binding.arg);
  }

  return function (mouseup, mousedown) {
    var popperRef = binding.instance.popperRef;
    var mouseUpTarget = mouseup.target;
    var mouseDownTarget = mousedown == null ? void 0 : mousedown.target;
    var isBound = !binding || !binding.instance;
    var isTargetExists = !mouseUpTarget || !mouseDownTarget;
    var isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
    var isSelf = el === mouseUpTarget;
    var isTargetExcluded = excludes.length && excludes.some(function (item) {
      return item == null ? void 0 : item.contains(mouseUpTarget);
    }) || excludes.length && excludes.includes(mouseDownTarget);
    var isContainedByPopper = popperRef && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));

    if (isBound || isTargetExists || isContainedByEl || isSelf || isTargetExcluded || isContainedByPopper) {
      return;
    }

    binding.value(mouseup, mousedown);
  };
}

var ClickOutside = {
  beforeMount: function beforeMount(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }

    nodeList.get(el).push({
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    });
  },
  updated: function updated(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }

    var handlers = nodeList.get(el);
    var oldHandlerIndex = handlers.findIndex(function (item) {
      return item.bindingFn === binding.oldValue;
    });
    var newHandler = {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    };

    if (oldHandlerIndex >= 0) {
      handlers.splice(oldHandlerIndex, 1, newHandler);
    } else {
      handlers.push(newHandler);
    }
  },
  unmounted: function unmounted(el) {
    nodeList["delete"](el);
  }
};
var tagProps = buildProps({
  closable: Boolean,
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    "default": ""
  },
  hit: Boolean,
  disableTransitions: Boolean,
  color: {
    type: String,
    "default": ""
  },
  size: {
    type: String,
    values: componentSizes,
    "default": ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    "default": "light"
  },
  round: Boolean
});
var tagEmits = {
  close: function close(evt) {
    return evt instanceof MouseEvent;
  },
  click: function click(evt) {
    return evt instanceof MouseEvent;
  }
};
var __default__$3 = {
  name: "ElTag"
};

var _sfc_main$8 = /* @__PURE__ */(0, _vue.defineComponent)(_objectSpread(_objectSpread({}, __default__$3), {}, {
  props: tagProps,
  emits: tagEmits,
  setup: function setup(__props, _ref18) {
    var emit = _ref18.emit;
    var props = __props;
    var tagSize = useSize();
    var ns2 = useNamespace("tag");
    var classes = (0, _vue.computed)(function () {
      var type4 = props.type,
          hit = props.hit,
          effect = props.effect,
          closable = props.closable,
          round = props.round;
      return [ns2.b(), ns2.is("closable", closable), ns2.m(type4), ns2.m(tagSize.value), ns2.m(effect), ns2.is("hit", hit), ns2.is("round", round)];
    });

    var handleClose = function handleClose(event) {
      emit("close", event);
    };

    var handleClick = function handleClick(event) {
      emit("click", event);
    };

    return function (_ctx, _cache) {
      return _ctx.disableTransitions ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", {
        key: 0,
        "class": (0, _vue.normalizeClass)((0, _vue.unref)(classes)),
        style: (0, _vue.normalizeStyle)({
          backgroundColor: _ctx.color
        }),
        onClick: handleClick
      }, [(0, _vue.createElementVNode)("span", {
        "class": (0, _vue.normalizeClass)((0, _vue.unref)(ns2).e("content"))
      }, [(0, _vue.renderSlot)(_ctx.$slots, "default")], 2), _ctx.closable ? ((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.unref)(ElIcon), {
        key: 0,
        "class": (0, _vue.normalizeClass)((0, _vue.unref)(ns2).e("close")),
        onClick: (0, _vue.withModifiers)(handleClose, ["stop"])
      }, {
        "default": (0, _vue.withCtx)(function () {
          return [(0, _vue.createVNode)((0, _vue.unref)(close_default))];
        }),
        _: 1
      }, 8, ["class", "onClick"])) : (0, _vue.createCommentVNode)("v-if", true)], 6)) : ((0, _vue.openBlock)(), (0, _vue.createBlock)(_vue.Transition, {
        key: 1,
        name: "".concat((0, _vue.unref)(ns2).namespace.value, "-zoom-in-center"),
        appear: ""
      }, {
        "default": (0, _vue.withCtx)(function () {
          return [(0, _vue.createElementVNode)("span", {
            "class": (0, _vue.normalizeClass)((0, _vue.unref)(classes)),
            style: (0, _vue.normalizeStyle)({
              backgroundColor: _ctx.color
            }),
            onClick: handleClick
          }, [(0, _vue.createElementVNode)("span", {
            "class": (0, _vue.normalizeClass)((0, _vue.unref)(ns2).e("content"))
          }, [(0, _vue.renderSlot)(_ctx.$slots, "default")], 2), _ctx.closable ? ((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.unref)(ElIcon), {
            key: 0,
            "class": (0, _vue.normalizeClass)((0, _vue.unref)(ns2).e("close")),
            onClick: (0, _vue.withModifiers)(handleClose, ["stop"])
          }, {
            "default": (0, _vue.withCtx)(function () {
              return [(0, _vue.createVNode)((0, _vue.unref)(close_default))];
            }),
            _: 1
          }, 8, ["class", "onClick"])) : (0, _vue.createCommentVNode)("v-if", true)], 6)];
        }),
        _: 3
      }, 8, ["name"]));
    };
  }
}));

var Tag = /* @__PURE__ */_export_sfc$1(_sfc_main$8, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);

var ElTag = withInstall(Tag);
var formProps = buildProps({
  model: Object,
  rules: {
    type: definePropType(Object)
  },
  labelPosition: {
    type: String,
    values: ["left", "right", "top"],
    "default": "right"
  },
  labelWidth: {
    type: [String, Number],
    "default": ""
  },
  labelSuffix: {
    type: String,
    "default": ""
  },
  inline: Boolean,
  inlineMessage: Boolean,
  statusIcon: Boolean,
  showMessage: {
    type: Boolean,
    "default": true
  },
  size: {
    type: String,
    values: componentSizes
  },
  disabled: Boolean,
  validateOnRuleChange: {
    type: Boolean,
    "default": true
  },
  hideRequiredAsterisk: {
    type: Boolean,
    "default": false
  },
  scrollToError: Boolean
});
var formEmits = {
  validate: function validate(prop, isValid, message) {
    return (isArray(prop) || isString(prop)) && isBoolean(isValid) && isString(message);
  }
};

function useFormLabelWidth() {
  var potentialLabelWidthArr = (0, _vue.ref)([]);
  var autoLabelWidth = (0, _vue.computed)(function () {
    if (!potentialLabelWidthArr.value.length) return "0";
    var max = Math.max.apply(Math, _toConsumableArray(potentialLabelWidthArr.value));
    return max ? "".concat(max, "px") : "";
  });

  function getLabelWidthIndex(width) {
    var index = potentialLabelWidthArr.value.indexOf(width);
    return index;
  }

  function registerLabelWidth(val, oldVal) {
    if (val && oldVal) {
      var index = getLabelWidthIndex(oldVal);
      potentialLabelWidthArr.value.splice(index, 1, val);
    } else if (val) {
      potentialLabelWidthArr.value.push(val);
    }
  }

  function deregisterLabelWidth(val) {
    var index = getLabelWidthIndex(val);

    if (index > -1) {
      potentialLabelWidthArr.value.splice(index, 1);
    }
  }

  return {
    autoLabelWidth: autoLabelWidth,
    registerLabelWidth: registerLabelWidth,
    deregisterLabelWidth: deregisterLabelWidth
  };
}

var filterFields = function filterFields(fields, props) {
  var normalized = castArray(props);
  return normalized.length > 0 ? fields.filter(function (field) {
    return field.prop && normalized.includes(field.prop);
  }) : fields;
};

var __default__$2 = {
  name: "ElForm"
};

var _sfc_main$7 = /* @__PURE__ */(0, _vue.defineComponent)(_objectSpread(_objectSpread({}, __default__$2), {}, {
  props: formProps,
  emits: formEmits,
  setup: function setup(__props, _ref25) {
    var expose = _ref25.expose,
        emit = _ref25.emit;
    var props = __props;
    var fields = [];
    var formSize = useSize();
    var ns2 = useNamespace("form");
    var formClasses = (0, _vue.computed)(function () {
      var _ref38;

      var labelPosition = props.labelPosition,
          inline = props.inline;
      return [ns2.b(), ns2.m(formSize.value || "default"), (_ref38 = {}, _defineProperty(_ref38, ns2.m("label-".concat(labelPosition)), labelPosition), _defineProperty(_ref38, ns2.m("inline"), inline), _ref38)];
    });

    var addField = function addField(field) {
      fields.push(field);
    };

    var removeField = function removeField(field) {
      if (field.prop) {
        fields.splice(fields.indexOf(field), 1);
      }
    };

    var resetFields = function resetFields() {
      var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (!props.model) {
        return;
      }

      filterFields(fields, properties).forEach(function (field) {
        return field.resetField();
      });
    };

    var clearValidate = function clearValidate() {
      var props2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      filterFields(fields, props2).forEach(function (field) {
        return field.clearValidate();
      });
    };

    var isValidatable = (0, _vue.computed)(function () {
      var hasModel = !!props.model;
      return hasModel;
    });

    var obtainValidateFields = function obtainValidateFields(props2) {
      if (fields.length === 0) return [];
      var filteredFields = filterFields(fields, props2);

      if (!filteredFields.length) {
        return [];
      }

      return filteredFields;
    };

    var validate = /*#__PURE__*/function () {
      var _ref39 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(callback) {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", validateField(void 0, callback));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function validate(_x2) {
        return _ref39.apply(this, arguments);
      };
    }();

    var doValidateField = /*#__PURE__*/function () {
      var _ref40 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var props2,
            fields2,
            validationErrors,
            _iterator9,
            _step9,
            field,
            _args2 = arguments;

        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                props2 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : [];

                if (isValidatable.value) {
                  _context8.next = 3;
                  break;
                }

                return _context8.abrupt("return", false);

              case 3:
                fields2 = obtainValidateFields(props2);

                if (!(fields2.length === 0)) {
                  _context8.next = 6;
                  break;
                }

                return _context8.abrupt("return", true);

              case 6:
                validationErrors = {};
                _iterator9 = _createForOfIteratorHelper(fields2);
                _context8.prev = 8;

                _iterator9.s();

              case 10:
                if ((_step9 = _iterator9.n()).done) {
                  _context8.next = 22;
                  break;
                }

                field = _step9.value;
                _context8.prev = 12;
                _context8.next = 15;
                return field.validate("");

              case 15:
                _context8.next = 20;
                break;

              case 17:
                _context8.prev = 17;
                _context8.t0 = _context8["catch"](12);
                validationErrors = _objectSpread(_objectSpread({}, validationErrors), _context8.t0);

              case 20:
                _context8.next = 10;
                break;

              case 22:
                _context8.next = 27;
                break;

              case 24:
                _context8.prev = 24;
                _context8.t1 = _context8["catch"](8);

                _iterator9.e(_context8.t1);

              case 27:
                _context8.prev = 27;

                _iterator9.f();

                return _context8.finish(27);

              case 30:
                if (!(Object.keys(validationErrors).length === 0)) {
                  _context8.next = 32;
                  break;
                }

                return _context8.abrupt("return", true);

              case 32:
                return _context8.abrupt("return", Promise.reject(validationErrors));

              case 33:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[8, 24, 27, 30], [12, 17]]);
      }));

      return function doValidateField() {
        return _ref40.apply(this, arguments);
      };
    }();

    var validateField = /*#__PURE__*/function () {
      var _ref41 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var modelProps,
            callback,
            shouldThrow,
            result,
            invalidFields,
            _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                modelProps = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : [];
                callback = _args3.length > 1 ? _args3[1] : undefined;
                shouldThrow = !isFunction(callback);
                _context9.prev = 3;
                _context9.next = 6;
                return doValidateField(modelProps);

              case 6:
                result = _context9.sent;

                if (result === true) {
                  callback == null ? void 0 : callback(result);
                }

                return _context9.abrupt("return", result);

              case 11:
                _context9.prev = 11;
                _context9.t0 = _context9["catch"](3);
                invalidFields = _context9.t0;

                if (props.scrollToError) {
                  scrollToField(Object.keys(invalidFields)[0]);
                }

                callback == null ? void 0 : callback(false, invalidFields);
                return _context9.abrupt("return", shouldThrow && Promise.reject(invalidFields));

              case 17:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[3, 11]]);
      }));

      return function validateField() {
        return _ref41.apply(this, arguments);
      };
    }();

    var scrollToField = function scrollToField(prop) {
      var _a2;

      var field = filterFields(fields, prop)[0];

      if (field) {
        (_a2 = field.$el) == null ? void 0 : _a2.scrollIntoView();
      }
    };

    (0, _vue.watch)(function () {
      return props.rules;
    }, function () {
      if (props.validateOnRuleChange) {
        validate()["catch"](function (err) {
          return debugWarn();
        });
      }
    }, {
      deep: true
    });
    (0, _vue.provide)(formContextKey, (0, _vue.reactive)(_objectSpread(_objectSpread({}, (0, _vue.toRefs)(props)), {}, {
      emit: emit,
      resetFields: resetFields,
      clearValidate: clearValidate,
      validateField: validateField,
      addField: addField,
      removeField: removeField
    }, useFormLabelWidth())));
    expose({
      validate: validate,
      validateField: validateField,
      resetFields: resetFields,
      clearValidate: clearValidate,
      scrollToField: scrollToField
    });
    return function (_ctx, _cache) {
      return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("form", {
        "class": (0, _vue.normalizeClass)((0, _vue.unref)(formClasses))
      }, [(0, _vue.renderSlot)(_ctx.$slots, "default")], 2);
    };
  }
}));

var Form = /* @__PURE__ */_export_sfc$1(_sfc_main$7, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2) _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn2) {
  return Function.toString.call(fn2).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */new Map() : void 0;

  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2)) return Class2;

    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2)) return _cache.get(Class2);

      _cache.set(Class2, Wrapper);
    }

    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class2);
  };

  return _wrapNativeSuper(Class);
}

var formatRegExp = /%[sdj%]/g;

var warning = function warning2() {};

if (typeof process !== "undefined" && process.env && false) {
  warning = function warning3(type4, errors) {
    if (typeof console !== "undefined" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING === "undefined") {
      if (errors.every(function (e) {
        return typeof e === "string";
      })) {
        console.warn(type4, errors);
      }
    }
  };
}

function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}

function format(template) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var i = 0;
  var len = args.length;

  if (typeof template === "function") {
    return template.apply(null, args);
  }

  if (typeof template === "string") {
    var str = template.replace(formatRegExp, function (x) {
      if (x === "%%") {
        return "%";
      }

      if (i >= len) {
        return x;
      }

      switch (x) {
        case "%s":
          return String(args[i++]);

        case "%d":
          return Number(args[i++]);

        case "%j":
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return "[Circular]";
          }

          break;

        default:
          return x;
      }
    });
    return str;
  }

  return template;
}

function isNativeStringType(type4) {
  return type4 === "string" || type4 === "url" || type4 === "hex" || type4 === "email" || type4 === "date" || type4 === "pattern";
}

function isEmptyValue(value, type4) {
  if (value === void 0 || value === null) {
    return true;
  }

  if (type4 === "array" && Array.isArray(value) && !value.length) {
    return true;
  }

  if (isNativeStringType(type4) && typeof value === "string" && !value) {
    return true;
  }

  return false;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors || []);
    total++;

    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }

    var original = index;
    index = index + 1;

    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k] || []);
  });
  return ret;
}

var AsyncValidationError = /* @__PURE__ */function (_Error) {
  _inheritsLoose(AsyncValidationError2, _Error);

  function AsyncValidationError2(errors, fields) {
    var _this;

    _this = _Error.call(this, "Async Validation Error") || this;
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }

  return AsyncValidationError2;
}( /* @__PURE__ */_wrapNativeSuper(Error));

function asyncMap(objArr, option, func, callback, source) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next2(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
      };

      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });

    _pending["catch"](function (e) {
      return e;
    });

    return _pending;
  }

  var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next2(errors) {
      results.push.apply(results, errors);
      total++;

      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
      }
    };

    if (!objArrKeys.length) {
      callback(results);
      resolve(source);
    }

    objArrKeys.forEach(function (key) {
      var arr = objArr[key];

      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function (e) {
    return e;
  });
  return pending;
}

function isErrorObj(obj) {
  return !!(obj && obj.message !== void 0);
}

function getValue(value, path) {
  var v = value;

  for (var i = 0; i < path.length; i++) {
    if (v == void 0) {
      return v;
    }

    v = v[path[i]];
  }

  return v;
}

function complementError(rule, source) {
  return function (oe) {
    var fieldValue;

    if (rule.fullFields) {
      fieldValue = getValue(source, rule.fullFields);
    } else {
      fieldValue = source[oe.field || rule.fullField];
    }

    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField;
      oe.fieldValue = fieldValue;
      return oe;
    }

    return {
      message: typeof oe === "function" ? oe() : oe,
      fieldValue: fieldValue,
      field: oe.field || rule.fullField
    };
  };
}

function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];

        if (_typeof(value) === "object" && _typeof(target[s]) === "object") {
          target[s] = _extends({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }

  return target;
}

var required$1 = function required(rule, value, source, errors, options, type4) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type4 || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
};

var whitespace = function whitespace2(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === "") {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
};

var urlReg;

var getUrlRegex = function getUrlRegex() {
  if (urlReg) {
    return urlReg;
  }

  var word = "[a-fA-F\\d:]";

  var b = function b2(options) {
    return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=" + word + ")|(?<=" + word + ")(?=\\s|$))" : "";
  };

  var v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
  var v6seg = "[a-fA-F\\d]{1,4}";
  var v6 = ("\n(?:\n(?:" + v6seg + ":){7}(?:" + v6seg + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + v6seg + ":){6}(?:" + v4 + "|:" + v6seg + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + v6seg + ":){5}(?::" + v4 + "|(?::" + v6seg + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + v6seg + ":){4}(?:(?::" + v6seg + "){0,1}:" + v4 + "|(?::" + v6seg + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + v6seg + ":){3}(?:(?::" + v6seg + "){0,2}:" + v4 + "|(?::" + v6seg + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + v6seg + ":){2}(?:(?::" + v6seg + "){0,3}:" + v4 + "|(?::" + v6seg + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + v6seg + ":){1}(?:(?::" + v6seg + "){0,4}:" + v4 + "|(?::" + v6seg + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + v6seg + "){0,5}:" + v4 + "|(?::" + v6seg + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim();
  var v46Exact = new RegExp("(?:^" + v4 + "$)|(?:^" + v6 + "$)");
  var v4exact = new RegExp("^" + v4 + "$");
  var v6exact = new RegExp("^" + v6 + "$");

  var ip = function ip2(options) {
    return options && options.exact ? v46Exact : new RegExp("(?:" + b(options) + v4 + b(options) + ")|(?:" + b(options) + v6 + b(options) + ")", "g");
  };

  ip.v4 = function (options) {
    return options && options.exact ? v4exact : new RegExp("" + b(options) + v4 + b(options), "g");
  };

  ip.v6 = function (options) {
    return options && options.exact ? v6exact : new RegExp("" + b(options) + v6 + b(options), "g");
  };

  var protocol = "(?:(?:[a-z]+:)?//)";
  var auth = "(?:\\S+(?::\\S*)?@)?";
  var ipv4 = ip.v4().source;
  var ipv6 = ip.v6().source;
  var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
  var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
  var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
  var port = "(?::\\d{2,5})?";
  var path = '(?:[/?#][^\\s"]*)?';
  var regex = "(?:" + protocol + "|www\\.)" + auth + "(?:localhost|" + ipv4 + "|" + ipv6 + "|" + host + domain + tld + ")" + port + path;
  urlReg = new RegExp("(?:^" + regex + "$)", "i");
  return urlReg;
};

var pattern$2 = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function _float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }

    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function" && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    return typeof value === "number";
  },
  object: function object(value) {
    return _typeof(value) === "object" && !types.array(value);
  },
  method: function method(value) {
    return typeof value === "function";
  },
  email: function email(value) {
    return typeof value === "string" && value.length <= 320 && !!value.match(pattern$2.email);
  },
  url: function url(value) {
    return typeof value === "string" && value.length <= 2048 && !!value.match(getUrlRegex());
  },
  hex: function hex(value) {
    return typeof value === "string" && !!value.match(pattern$2.hex);
  }
};

var type$1 = function type(rule, value, source, errors, options) {
  if (rule.required && value === void 0) {
    required$1(rule, value, source, errors, options);
    return;
  }

  var custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
  var ruleType = rule.type;

  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
  } else if (ruleType && _typeof(value) !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
};

var range = function range2(rule, value, source, errors, options) {
  var len = typeof rule.len === "number";
  var min = typeof rule.min === "number";
  var max = typeof rule.max === "number";
  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === "number";
  var str = typeof value === "string";
  var arr = Array.isArray(value);

  if (num) {
    key = "number";
  } else if (str) {
    key = "string";
  } else if (arr) {
    key = "array";
  }

  if (!key) {
    return false;
  }

  if (arr) {
    val = value.length;
  }

  if (str) {
    val = value.replace(spRegexp, "_").length;
  }

  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
};

var ENUM$1 = "enum";

var enumerable$1 = function enumerable(rule, value, source, errors, options) {
  rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];

  if (rule[ENUM$1].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(", ")));
  }
};

var pattern$1 = function pattern(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      rule.pattern.lastIndex = 0;

      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === "string") {
      var _pattern = new RegExp(rule.pattern);

      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
};

var rules = {
  required: required$1,
  whitespace: whitespace,
  type: type$1,
  range: range,
  "enum": enumerable$1,
  pattern: pattern$1
};

var string = function string2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, "string");

    if (!isEmptyValue(value, "string")) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);

      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }

  callback(errors);
};

var method2 = function method3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var number2 = function number3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (value === "") {
      value = void 0;
    }

    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var _boolean = function _boolean2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var regexp2 = function regexp3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var integer2 = function integer3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var floatFn = function floatFn2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var array2 = function array3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if ((value === void 0 || value === null) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, "array");

    if (value !== void 0 && value !== null) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var object2 = function object3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var ENUM = "enum";

var enumerable2 = function enumerable3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== void 0) {
      rules[ENUM](rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var pattern2 = function pattern3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, "string")) {
      rules.pattern(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var date2 = function date3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, "date") && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, "date")) {
      var dateObject;

      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }

      rules.type(rule, dateObject, source, errors, options);

      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }

  callback(errors);
};

var required2 = function required3(rule, value, callback, source, options) {
  var errors = [];
  var type4 = Array.isArray(value) ? "array" : _typeof(value);
  rules.required(rule, value, source, errors, options, type4);
  callback(errors);
};

var type2 = function type3(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, ruleType);

    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var any = function any2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);
  }

  callback(errors);
};

var validators = {
  string: string,
  method: method2,
  number: number2,
  "boolean": _boolean,
  regexp: regexp2,
  integer: integer2,
  "float": floatFn,
  array: array2,
  object: object2,
  "enum": enumerable2,
  pattern: pattern2,
  date: date2,
  url: type2,
  hex: type2,
  email: type2,
  required: required2,
  any: any
};

function newMessages() {
  return {
    "default": "Validation error on field %s",
    required: "%s is required",
    "enum": "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      "boolean": "%s is not a %s",
      integer: "%s is not an %s",
      "float": "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function clone2() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}

var messages = newMessages();

var Schema = /* @__PURE__ */function () {
  function Schema2(descriptor) {
    this.rules = null;
    this._messages = messages;
    this.define(descriptor);
  }

  var _proto = Schema2.prototype;

  _proto.define = function define(rules2) {
    var _this = this;

    if (!rules2) {
      throw new Error("Cannot configure a schema with no rules");
    }

    if (_typeof(rules2) !== "object" || Array.isArray(rules2)) {
      throw new Error("Rules must be an object");
    }

    this.rules = {};
    Object.keys(rules2).forEach(function (name) {
      var item = rules2[name];
      _this.rules[name] = Array.isArray(item) ? item : [item];
    });
  };

  _proto.messages = function messages2(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }

    return this._messages;
  };

  _proto.validate = function validate(source_, o, oc) {
    var _this2 = this;

    if (o === void 0) {
      o = {};
    }

    if (oc === void 0) {
      oc = function oc2() {};
    }

    var source = source_;
    var options = o;
    var callback = oc;

    if (typeof options === "function") {
      callback = options;
      options = {};
    }

    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback(null, source);
      }

      return Promise.resolve(source);
    }

    function complete(results) {
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          var _errors;

          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }

      for (var i = 0; i < results.length; i++) {
        add(results[i]);
      }

      if (!errors.length) {
        callback(null, source);
      } else {
        fields = convertFieldsError(errors);
        callback(errors, fields);
      }
    }

    if (options.messages) {
      var messages$1 = this.messages();

      if (messages$1 === messages) {
        messages$1 = newMessages();
      }

      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }

    var series = {};
    var keys2 = options.keys || Object.keys(this.rules);
    keys2.forEach(function (z) {
      var arr = _this2.rules[z];
      var value = source[z];
      arr.forEach(function (r) {
        var rule = r;

        if (typeof rule.transform === "function") {
          if (source === source_) {
            source = _extends({}, source);
          }

          value = source[z] = rule.transform(value);
        }

        if (typeof rule === "function") {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        }

        rule.validator = _this2.getValidationMethod(rule);

        if (!rule.validator) {
          return;
        }

        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this2.getType(rule);
        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === "object" || rule.type === "array") && (_typeof(rule.fields) === "object" || _typeof(rule.defaultField) === "object");
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;

      function addFullField(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key,
          fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
        });
      }

      function cb(e) {
        if (e === void 0) {
          e = [];
        }

        var errorList = Array.isArray(e) ? e : [e];

        if (!options.suppressWarning && errorList.length) {
          Schema2.warning("async-validator:", errorList);
        }

        if (errorList.length && rule.message !== void 0) {
          errorList = [].concat(rule.message);
        }

        var filledErrors = errorList.map(complementError(rule, source));

        if (options.first && filledErrors.length) {
          errorFields[rule.field] = 1;
          return doIt(filledErrors);
        }

        if (!deep) {
          doIt(filledErrors);
        } else {
          if (rule.required && !data.value) {
            if (rule.message !== void 0) {
              filledErrors = [].concat(rule.message).map(complementError(rule, source));
            } else if (options.error) {
              filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
            }

            return doIt(filledErrors);
          }

          var fieldsSchema = {};

          if (rule.defaultField) {
            Object.keys(data.value).map(function (key) {
              fieldsSchema[key] = rule.defaultField;
            });
          }

          fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
          var paredFieldsSchema = {};
          Object.keys(fieldsSchema).forEach(function (field) {
            var fieldSchema = fieldsSchema[field];
            var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
            paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
          });
          var schema = new Schema2(paredFieldsSchema);
          schema.messages(options.messages);

          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }

          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];

            if (filledErrors && filledErrors.length) {
              finalErrors.push.apply(finalErrors, filledErrors);
            }

            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }

            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }

      var res;

      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        try {
          res = rule.validator(rule, data.value, cb, data.source, options);
        } catch (error) {
          console.error == null ? void 0 : console.error(error);

          if (!options.suppressValidatorError) {
            setTimeout(function () {
              throw error;
            }, 0);
          }

          cb(error.message);
        }

        if (res === true) {
          cb();
        } else if (res === false) {
          cb(typeof rule.message === "function" ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }

      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    }, source);
  };

  _proto.getType = function getType(rule) {
    if (rule.type === void 0 && rule.pattern instanceof RegExp) {
      rule.type = "pattern";
    }

    if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format("Unknown rule type %s", rule.type));
    }

    return rule.type || "string";
  };

  _proto.getValidationMethod = function getValidationMethod(rule) {
    if (typeof rule.validator === "function") {
      return rule.validator;
    }

    var keys2 = Object.keys(rule);
    var messageIndex = keys2.indexOf("message");

    if (messageIndex !== -1) {
      keys2.splice(messageIndex, 1);
    }

    if (keys2.length === 1 && keys2[0] === "required") {
      return validators.required;
    }

    return validators[this.getType(rule)] || void 0;
  };

  return Schema2;
}();

Schema.register = function register(type4, validator) {
  if (typeof validator !== "function") {
    throw new Error("Cannot register a validator by type, validator is not a function");
  }

  validators[type4] = validator;
};

Schema.warning = warning;
Schema.messages = messages;
Schema.validators = validators;
var formItemValidateStates = ["", "error", "validating", "success"];
var formItemProps = buildProps({
  label: String,
  labelWidth: {
    type: [String, Number],
    "default": ""
  },
  prop: {
    type: definePropType([String, Array])
  },
  required: {
    type: Boolean,
    "default": void 0
  },
  rules: {
    type: definePropType([Object, Array])
  },
  error: String,
  validateStatus: {
    type: String,
    values: formItemValidateStates
  },
  "for": String,
  inlineMessage: {
    type: [String, Boolean],
    "default": ""
  },
  showMessage: {
    type: Boolean,
    "default": true
  },
  size: {
    type: String,
    values: componentSizes
  }
});
var COMPONENT_NAME$1 = "ElLabelWrap";
var FormLabelWrap = (0, _vue.defineComponent)({
  name: COMPONENT_NAME$1,
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },
  setup: function setup(props, _ref42) {
    var slots = _ref42.slots;
    var formContext = (0, _vue.inject)(formContextKey, void 0);
    var formItemContext = (0, _vue.inject)(formItemContextKey);
    if (!formItemContext) throwError(COMPONENT_NAME$1, "usage: <el-form-item><label-wrap /></el-form-item>");
    var ns2 = useNamespace("form");
    var el = (0, _vue.ref)();
    var computedWidth = (0, _vue.ref)(0);

    var getLabelWidth = function getLabelWidth() {
      var _a2;

      if ((_a2 = el.value) == null ? void 0 : _a2.firstElementChild) {
        var width = window.getComputedStyle(el.value.firstElementChild).width;
        return Math.ceil(Number.parseFloat(width));
      } else {
        return 0;
      }
    };

    var updateLabelWidth = function updateLabelWidth() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "update";
      (0, _vue.nextTick)(function () {
        if (slots["default"] && props.isAutoWidth) {
          if (action === "update") {
            computedWidth.value = getLabelWidth();
          } else if (action === "remove") {
            formContext == null ? void 0 : formContext.deregisterLabelWidth(computedWidth.value);
          }
        }
      });
    };

    var updateLabelWidthFn = function updateLabelWidthFn() {
      return updateLabelWidth("update");
    };

    (0, _vue.onMounted)(function () {
      updateLabelWidthFn();
    });
    (0, _vue.onBeforeUnmount)(function () {
      updateLabelWidth("remove");
    });
    (0, _vue.onUpdated)(function () {
      return updateLabelWidthFn();
    });
    (0, _vue.watch)(computedWidth, function (val, oldVal) {
      if (props.updateAll) {
        formContext == null ? void 0 : formContext.registerLabelWidth(val, oldVal);
      }
    });
    useResizeObserver((0, _vue.computed)(function () {
      var _a2, _b;

      return (_b = (_a2 = el.value) == null ? void 0 : _a2.firstElementChild) != null ? _b : null;
    }), updateLabelWidthFn);
    return function () {
      var _a2, _b;

      if (!slots) return null;
      var isAutoWidth = props.isAutoWidth;

      if (isAutoWidth) {
        var autoLabelWidth = formContext == null ? void 0 : formContext.autoLabelWidth;
        var style = {};

        if (autoLabelWidth && autoLabelWidth !== "auto") {
          var marginWidth = Math.max(0, Number.parseInt(autoLabelWidth, 10) - computedWidth.value);
          var marginPosition = formContext.labelPosition === "left" ? "marginRight" : "marginLeft";

          if (marginWidth) {
            style[marginPosition] = "".concat(marginWidth, "px");
          }
        }

        return (0, _vue.createVNode)("div", {
          "ref": el,
          "class": [ns2.be("item", "label-wrap")],
          "style": style
        }, [(_a2 = slots["default"]) == null ? void 0 : _a2.call(slots)]);
      } else {
        return (0, _vue.createVNode)(_vue.Fragment, {
          "ref": el
        }, [(_b = slots["default"]) == null ? void 0 : _b.call(slots)]);
      }
    };
  }
});
var _hoisted_1$2 = ["role", "aria-labelledby"];
var __default__$1 = {
  name: "ElFormItem"
};

var _sfc_main$6 = /* @__PURE__ */(0, _vue.defineComponent)(_objectSpread(_objectSpread({}, __default__$1), {}, {
  props: formItemProps,
  setup: function setup(__props, _ref43) {
    var expose = _ref43.expose;
    var props = __props;
    var slots = (0, _vue.useSlots)();
    var formContext = (0, _vue.inject)(formContextKey, void 0);
    var parentFormItemContext = (0, _vue.inject)(formItemContextKey, void 0);

    var _size = useSize(void 0, {
      formItem: false
    });

    var ns2 = useNamespace("form-item");
    var labelId = useId().value;
    var inputIds = (0, _vue.ref)([]);
    var validateState = (0, _vue.ref)("");
    var validateStateDebounced = refDebounced(validateState, 100);
    var validateMessage = (0, _vue.ref)("");
    var formItemRef = (0, _vue.ref)();
    var initialValue = void 0;
    var isResettingField = false;
    var labelStyle = (0, _vue.computed)(function () {
      if ((formContext == null ? void 0 : formContext.labelPosition) === "top") {
        return {};
      }

      var labelWidth = addUnit(props.labelWidth || (formContext == null ? void 0 : formContext.labelWidth) || "");
      if (labelWidth) return {
        width: labelWidth
      };
      return {};
    });
    var contentStyle = (0, _vue.computed)(function () {
      if ((formContext == null ? void 0 : formContext.labelPosition) === "top" || (formContext == null ? void 0 : formContext.inline)) {
        return {};
      }

      if (!props.label && !props.labelWidth && isNested) {
        return {};
      }

      var labelWidth = addUnit(props.labelWidth || (formContext == null ? void 0 : formContext.labelWidth) || "");

      if (!props.label && !slots.label) {
        return {
          marginLeft: labelWidth
        };
      }

      return {};
    });
    var formItemClasses = (0, _vue.computed)(function () {
      return [ns2.b(), ns2.m(_size.value), ns2.is("error", validateState.value === "error"), ns2.is("validating", validateState.value === "validating"), ns2.is("success", validateState.value === "success"), ns2.is("required", isRequired.value || props.required), ns2.is("no-asterisk", formContext == null ? void 0 : formContext.hideRequiredAsterisk), _defineProperty({}, ns2.m("feedback"), formContext == null ? void 0 : formContext.statusIcon)];
    });

    var _inlineMessage = (0, _vue.computed)(function () {
      return isBoolean(props.inlineMessage) ? props.inlineMessage : (formContext == null ? void 0 : formContext.inlineMessage) || false;
    });

    var validateClasses = (0, _vue.computed)(function () {
      return [ns2.e("error"), _defineProperty({}, ns2.em("error", "inline"), _inlineMessage.value)];
    });
    var propString = (0, _vue.computed)(function () {
      if (!props.prop) return "";
      return isString(props.prop) ? props.prop : props.prop.join(".");
    });
    var hasLabel = (0, _vue.computed)(function () {
      return !!(props.label || slots.label);
    });
    var labelFor = (0, _vue.computed)(function () {
      return props["for"] || inputIds.value.length === 1 ? inputIds.value[0] : void 0;
    });
    var isGroup = (0, _vue.computed)(function () {
      return !labelFor.value && hasLabel.value;
    });
    var isNested = !!parentFormItemContext;
    var fieldValue = (0, _vue.computed)(function () {
      var model = formContext == null ? void 0 : formContext.model;

      if (!model || !props.prop) {
        return;
      }

      return getProp(model, props.prop).value;
    });

    var _rules = (0, _vue.computed)(function () {
      var rules2 = props.rules ? castArray(props.rules) : [];
      var formRules = formContext == null ? void 0 : formContext.rules;

      if (formRules && props.prop) {
        var _rules2 = getProp(formRules, props.prop).value;

        if (_rules2) {
          rules2.push.apply(rules2, _toConsumableArray(castArray(_rules2)));
        }
      }

      if (props.required !== void 0) {
        rules2.push({
          required: !!props.required
        });
      }

      return rules2;
    });

    var validateEnabled = (0, _vue.computed)(function () {
      return _rules.value.length > 0;
    });

    var getFilteredRule = function getFilteredRule(trigger) {
      var rules2 = _rules.value;
      return rules2.filter(function (rule) {
        if (!rule.trigger || !trigger) return true;

        if (Array.isArray(rule.trigger)) {
          return rule.trigger.includes(trigger);
        } else {
          return rule.trigger === trigger;
        }
      }).map(function (_ref46) {
        var trigger2 = _ref46.trigger,
            rule = _objectWithoutProperties(_ref46, _excluded);

        return rule;
      });
    };

    var isRequired = (0, _vue.computed)(function () {
      return _rules.value.some(function (rule) {
        return rule.required === true;
      });
    });
    var shouldShowError = (0, _vue.computed)(function () {
      var _a2;

      return validateStateDebounced.value === "error" && props.showMessage && ((_a2 = formContext == null ? void 0 : formContext.showMessage) != null ? _a2 : true);
    });
    var currentLabel = (0, _vue.computed)(function () {
      return "".concat(props.label || "").concat((formContext == null ? void 0 : formContext.labelSuffix) || "");
    });

    var setValidationState = function setValidationState(state) {
      validateState.value = state;
    };

    var onValidationFailed = function onValidationFailed(error) {
      var _a2, _b;

      var errors = error.errors,
          fields = error.fields;

      if (!errors || !fields) {
        console.error(error);
      }

      setValidationState("error");
      validateMessage.value = errors ? (_b = (_a2 = errors == null ? void 0 : errors[0]) == null ? void 0 : _a2.message) != null ? _b : "".concat(props.prop, " is required") : "";
      formContext == null ? void 0 : formContext.emit("validate", props.prop, false, validateMessage.value);
    };

    var onValidationSucceeded = function onValidationSucceeded() {
      setValidationState("success");
      formContext == null ? void 0 : formContext.emit("validate", props.prop, true, "");
    };

    var doValidate = /*#__PURE__*/function () {
      var _ref47 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(rules2) {
        var modelName, validator;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                modelName = propString.value;
                validator = new Schema(_defineProperty({}, modelName, rules2));
                return _context10.abrupt("return", validator.validate(_defineProperty({}, modelName, fieldValue.value), {
                  firstFields: true
                }).then(function () {
                  onValidationSucceeded();
                  return true;
                })["catch"](function (err) {
                  onValidationFailed(err);
                  return Promise.reject(err);
                }));

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      return function doValidate(_x3) {
        return _ref47.apply(this, arguments);
      };
    }();

    var validate = /*#__PURE__*/function () {
      var _ref48 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(trigger, callback) {
        var hasCallback, rules2;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (!isResettingField) {
                  _context11.next = 3;
                  break;
                }

                isResettingField = false;
                return _context11.abrupt("return", false);

              case 3:
                hasCallback = isFunction(callback);

                if (validateEnabled.value) {
                  _context11.next = 7;
                  break;
                }

                callback == null ? void 0 : callback(false);
                return _context11.abrupt("return", false);

              case 7:
                rules2 = getFilteredRule(trigger);

                if (!(rules2.length === 0)) {
                  _context11.next = 11;
                  break;
                }

                callback == null ? void 0 : callback(true);
                return _context11.abrupt("return", true);

              case 11:
                setValidationState("validating");
                return _context11.abrupt("return", doValidate(rules2).then(function () {
                  callback == null ? void 0 : callback(true);
                  return true;
                })["catch"](function (err) {
                  var fields = err.fields;
                  callback == null ? void 0 : callback(false, fields);
                  return hasCallback ? false : Promise.reject(fields);
                }));

              case 13:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      return function validate(_x4, _x5) {
        return _ref48.apply(this, arguments);
      };
    }();

    var clearValidate = function clearValidate() {
      setValidationState("");
      validateMessage.value = "";
    };

    var resetField = /*#__PURE__*/function () {
      var _ref49 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        var model, computedValue;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                model = formContext == null ? void 0 : formContext.model;

                if (!(!model || !props.prop)) {
                  _context12.next = 3;
                  break;
                }

                return _context12.abrupt("return");

              case 3:
                computedValue = getProp(model, props.prop);

                if (!isEqual(computedValue.value, initialValue)) {
                  isResettingField = true;
                }

                computedValue.value = clone(initialValue);
                _context12.next = 8;
                return (0, _vue.nextTick)();

              case 8:
                clearValidate();

              case 9:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      return function resetField() {
        return _ref49.apply(this, arguments);
      };
    }();

    var addInputId = function addInputId(id) {
      if (!inputIds.value.includes(id)) {
        inputIds.value.push(id);
      }
    };

    var removeInputId = function removeInputId(id) {
      inputIds.value = inputIds.value.filter(function (listId) {
        return listId !== id;
      });
    };

    (0, _vue.watch)(function () {
      return props.error;
    }, function (val) {
      validateMessage.value = val || "";
      setValidationState(val ? "error" : "");
    }, {
      immediate: true
    });
    (0, _vue.watch)(function () {
      return props.validateStatus;
    }, function (val) {
      return setValidationState(val || "");
    });
    var context = (0, _vue.reactive)(_objectSpread(_objectSpread({}, (0, _vue.toRefs)(props)), {}, {
      $el: formItemRef,
      size: _size,
      validateState: validateState,
      labelId: labelId,
      inputIds: inputIds,
      isGroup: isGroup,
      addInputId: addInputId,
      removeInputId: removeInputId,
      resetField: resetField,
      clearValidate: clearValidate,
      validate: validate
    }));
    (0, _vue.provide)(formItemContextKey, context);
    (0, _vue.onMounted)(function () {
      if (props.prop) {
        formContext == null ? void 0 : formContext.addField(context);
        initialValue = clone(fieldValue.value);
      }
    });
    (0, _vue.onBeforeUnmount)(function () {
      formContext == null ? void 0 : formContext.removeField(context);
    });
    expose({
      size: _size,
      validateMessage: validateMessage,
      validateState: validateState,
      validate: validate,
      clearValidate: clearValidate,
      resetField: resetField
    });
    return function (_ctx, _cache) {
      var _a2;

      return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
        ref_key: "formItemRef",
        ref: formItemRef,
        "class": (0, _vue.normalizeClass)((0, _vue.unref)(formItemClasses)),
        role: (0, _vue.unref)(isGroup) ? "group" : void 0,
        "aria-labelledby": (0, _vue.unref)(isGroup) ? (0, _vue.unref)(labelId) : void 0
      }, [(0, _vue.createVNode)((0, _vue.unref)(FormLabelWrap), {
        "is-auto-width": (0, _vue.unref)(labelStyle).width === "auto",
        "update-all": ((_a2 = (0, _vue.unref)(formContext)) == null ? void 0 : _a2.labelWidth) === "auto"
      }, {
        "default": (0, _vue.withCtx)(function () {
          return [(0, _vue.unref)(hasLabel) ? ((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)((0, _vue.unref)(labelFor) ? "label" : "div"), {
            key: 0,
            id: (0, _vue.unref)(labelId),
            "for": (0, _vue.unref)(labelFor),
            "class": (0, _vue.normalizeClass)((0, _vue.unref)(ns2).e("label")),
            style: (0, _vue.normalizeStyle)((0, _vue.unref)(labelStyle))
          }, {
            "default": (0, _vue.withCtx)(function () {
              return [(0, _vue.renderSlot)(_ctx.$slots, "label", {
                label: (0, _vue.unref)(currentLabel)
              }, function () {
                return [(0, _vue.createTextVNode)((0, _vue.toDisplayString)((0, _vue.unref)(currentLabel)), 1)];
              })];
            }),
            _: 3
          }, 8, ["id", "for", "class", "style"])) : (0, _vue.createCommentVNode)("v-if", true)];
        }),
        _: 3
      }, 8, ["is-auto-width", "update-all"]), (0, _vue.createElementVNode)("div", {
        "class": (0, _vue.normalizeClass)((0, _vue.unref)(ns2).e("content")),
        style: (0, _vue.normalizeStyle)((0, _vue.unref)(contentStyle))
      }, [(0, _vue.renderSlot)(_ctx.$slots, "default"), (0, _vue.createVNode)(_vue.Transition, {
        name: "".concat((0, _vue.unref)(ns2).namespace.value, "-zoom-in-top")
      }, {
        "default": (0, _vue.withCtx)(function () {
          return [(0, _vue.unref)(shouldShowError) ? (0, _vue.renderSlot)(_ctx.$slots, "error", {
            key: 0,
            error: validateMessage.value
          }, function () {
            return [(0, _vue.createElementVNode)("div", {
              "class": (0, _vue.normalizeClass)((0, _vue.unref)(validateClasses))
            }, (0, _vue.toDisplayString)(validateMessage.value), 3)];
          }) : (0, _vue.createCommentVNode)("v-if", true)];
        }),
        _: 3
      }, 8, ["name"])], 6)], 10, _hoisted_1$2);
    };
  }
}));

var FormItem = /* @__PURE__ */_export_sfc$1(_sfc_main$6, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);

var ElForm = withInstall(Form, {
  FormItem: FormItem
});
var ElFormItem = withNoopInstall(FormItem);
var selectGroupKey = "ElSelectGroup";
var selectKey = "ElSelect";

function useOption(props, states) {
  var select = (0, _vue.inject)(selectKey);
  var selectGroup = (0, _vue.inject)(selectGroupKey, {
    disabled: false
  });
  var isObject2 = (0, _vue.computed)(function () {
    return Object.prototype.toString.call(props.value).toLowerCase() === "[object object]";
  });
  var itemSelected = (0, _vue.computed)(function () {
    if (!select.props.multiple) {
      return isEqual2(props.value, select.props.modelValue);
    } else {
      return contains(select.props.modelValue, props.value);
    }
  });
  var limitReached = (0, _vue.computed)(function () {
    if (select.props.multiple) {
      var modelValue = select.props.modelValue || [];
      return !itemSelected.value && modelValue.length >= select.props.multipleLimit && select.props.multipleLimit > 0;
    } else {
      return false;
    }
  });
  var currentLabel = (0, _vue.computed)(function () {
    return props.label || (isObject2.value ? "" : props.value);
  });
  var currentValue = (0, _vue.computed)(function () {
    return props.value || props.label || "";
  });
  var isDisabled = (0, _vue.computed)(function () {
    return props.disabled || states.groupDisabled || limitReached.value;
  });
  var instance = (0, _vue.getCurrentInstance)();

  var contains = function contains() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var target = arguments.length > 1 ? arguments[1] : undefined;

    if (!isObject2.value) {
      return arr && arr.includes(target);
    } else {
      var valueKey = select.props.valueKey;
      return arr && arr.some(function (item) {
        return get(item, valueKey) === get(target, valueKey);
      });
    }
  };

  var isEqual2 = function isEqual2(a, b) {
    if (!isObject2.value) {
      return a === b;
    } else {
      var valueKey = select.props.valueKey;
      return get(a, valueKey) === get(b, valueKey);
    }
  };

  var hoverItem = function hoverItem() {
    if (!props.disabled && !selectGroup.disabled) {
      select.hoverIndex = select.optionsArray.indexOf(instance.proxy);
    }
  };

  (0, _vue.watch)(function () {
    return currentLabel.value;
  }, function () {
    if (!props.created && !select.props.remote) select.setSelected();
  });
  (0, _vue.watch)(function () {
    return props.value;
  }, function (val, oldVal) {
    var _select$props = select.props,
        remote = _select$props.remote,
        valueKey = _select$props.valueKey;

    if (!props.created && !remote) {
      if (valueKey && _typeof(val) === "object" && _typeof(oldVal) === "object" && val[valueKey] === oldVal[valueKey]) {
        return;
      }

      select.setSelected();
    }
  });
  (0, _vue.watch)(function () {
    return selectGroup.disabled;
  }, function () {
    states.groupDisabled = selectGroup.disabled;
  }, {
    immediate: true
  });

  var _toRaw = (0, _vue.toRaw)(select),
      queryChange = _toRaw.queryChange;

  (0, _vue.watch)(queryChange, function (changes) {
    var _unref = (0, _vue.unref)(changes),
        query = _unref.query;

    var regexp4 = new RegExp(escapeStringRegexp(query), "i");
    states.visible = regexp4.test(currentLabel.value) || props.created;

    if (!states.visible) {
      select.filteredOptionsCount--;
    }
  });
  return {
    select: select,
    currentLabel: currentLabel,
    currentValue: currentValue,
    itemSelected: itemSelected,
    isDisabled: isDisabled,
    hoverItem: hoverItem
  };
}

var _sfc_main$5 = (0, _vue.defineComponent)({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: true,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      "default": false
    }
  },
  setup: function setup(props) {
    var ns2 = useNamespace("select");
    var states = (0, _vue.reactive)({
      index: -1,
      groupDisabled: false,
      visible: true,
      hitState: false,
      hover: false
    });

    var _useOption = useOption(props, states),
        currentLabel = _useOption.currentLabel,
        itemSelected = _useOption.itemSelected,
        isDisabled = _useOption.isDisabled,
        select = _useOption.select,
        hoverItem = _useOption.hoverItem;

    var _toRefs2 = (0, _vue.toRefs)(states),
        visible = _toRefs2.visible,
        hover = _toRefs2.hover;

    var vm = (0, _vue.getCurrentInstance)().proxy;
    var key = vm.value;
    select.onOptionCreate(vm);
    (0, _vue.onBeforeUnmount)(function () {
      var selected = select.selected;
      var selectedOptions = select.props.multiple ? selected : [selected];
      var doesSelected = selectedOptions.some(function (item) {
        return item.value === vm.value;
      });

      if (select.cachedOptions.get(key) === vm && !doesSelected) {
        (0, _vue.nextTick)(function () {
          select.cachedOptions["delete"](key);
        });
      }

      select.onOptionDestroy(key, vm);
    });

    function selectOptionClick() {
      if (props.disabled !== true && states.groupDisabled !== true) {
        select.handleOptionSelect(vm, true);
      }
    }

    return {
      ns: ns2,
      currentLabel: currentLabel,
      itemSelected: itemSelected,
      isDisabled: isDisabled,
      select: select,
      hoverItem: hoverItem,
      visible: visible,
      hover: hover,
      selectOptionClick: selectOptionClick,
      states: states
    };
  }
});

function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, _vue.withDirectives)(((0, _vue.openBlock)(), (0, _vue.createElementBlock)("li", {
    "class": (0, _vue.normalizeClass)([_ctx.ns.be("dropdown", "item"), _ctx.ns.is("disabled", _ctx.isDisabled), {
      selected: _ctx.itemSelected,
      hover: _ctx.hover
    }]),
    onMouseenter: _cache[0] || (_cache[0] = function () {
      return _ctx.hoverItem && _ctx.hoverItem.apply(_ctx, arguments);
    }),
    onClick: _cache[1] || (_cache[1] = (0, _vue.withModifiers)(function () {
      return _ctx.selectOptionClick && _ctx.selectOptionClick.apply(_ctx, arguments);
    }, ["stop"]))
  }, [(0, _vue.renderSlot)(_ctx.$slots, "default", {}, function () {
    return [(0, _vue.createElementVNode)("span", null, (0, _vue.toDisplayString)(_ctx.currentLabel), 1)];
  })], 34)), [[_vue.vShow, _ctx.visible]]);
}

var Option = /* @__PURE__ */_export_sfc$1(_sfc_main$5, [["render", _sfc_render$3], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);

var _sfc_main$4 = (0, _vue.defineComponent)({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup: function setup() {
    var select = (0, _vue.inject)(selectKey);
    var ns2 = useNamespace("select");
    var popperClass = (0, _vue.computed)(function () {
      return select.props.popperClass;
    });
    var isMultiple = (0, _vue.computed)(function () {
      return select.props.multiple;
    });
    var isFitInputWidth = (0, _vue.computed)(function () {
      return select.props.fitInputWidth;
    });
    var minWidth = (0, _vue.ref)("");

    function updateMinWidth() {
      var _a2;

      minWidth.value = "".concat((_a2 = select.selectWrapper) == null ? void 0 : _a2.offsetWidth, "px");
    }

    (0, _vue.onMounted)(function () {
      updateMinWidth();
      useResizeObserver(select.selectWrapper, updateMinWidth);
    });
    return {
      ns: ns2,
      minWidth: minWidth,
      popperClass: popperClass,
      isMultiple: isMultiple,
      isFitInputWidth: isFitInputWidth
    };
  }
});

function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
    "class": (0, _vue.normalizeClass)([_ctx.ns.b("dropdown"), _ctx.ns.is("multiple", _ctx.isMultiple), _ctx.popperClass]),
    style: (0, _vue.normalizeStyle)(_defineProperty({}, _ctx.isFitInputWidth ? "width" : "minWidth", _ctx.minWidth))
  }, [(0, _vue.renderSlot)(_ctx.$slots, "default")], 6);
}

var ElSelectMenu = /* @__PURE__ */_export_sfc$1(_sfc_main$4, [["render", _sfc_render$2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);

function useSelectStates(props) {
  var _useLocale = useLocale(),
      t = _useLocale.t;

  return (0, _vue.reactive)({
    options: /* @__PURE__ */new Map(),
    cachedOptions: /* @__PURE__ */new Map(),
    createdLabel: null,
    createdSelected: false,
    selected: props.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: false,
    softFocus: false,
    selectedLabel: "",
    hoverIndex: -1,
    query: "",
    previousQuery: null,
    inputHovering: false,
    cachedPlaceHolder: "",
    currentPlaceholder: t("el.select.placeholder"),
    menuVisibleOnFocus: false,
    isOnComposition: false,
    isSilentBlur: false,
    prefixWidth: 11,
    tagInMultiLine: false
  });
}

var useSelect = function useSelect(props, states, ctx) {
  var _useLocale2 = useLocale(),
      t = _useLocale2.t;

  var ns2 = useNamespace("select");
  var reference = (0, _vue.ref)(null);
  var input = (0, _vue.ref)(null);
  var tooltipRef = (0, _vue.ref)(null);
  var tags = (0, _vue.ref)(null);
  var selectWrapper = (0, _vue.ref)(null);
  var scrollbar = (0, _vue.ref)(null);
  var hoverOption = (0, _vue.ref)(-1);
  var queryChange = (0, _vue.shallowRef)({
    query: ""
  });
  var groupQueryChange = (0, _vue.shallowRef)("");
  var elForm2 = (0, _vue.inject)(formContextKey, {});
  var elFormItem2 = (0, _vue.inject)(formItemContextKey, {});
  var readonly2 = (0, _vue.computed)(function () {
    return !props.filterable || props.multiple || !states.visible;
  });
  var selectDisabled = (0, _vue.computed)(function () {
    return props.disabled || elForm2.disabled;
  });
  var showClose = (0, _vue.computed)(function () {
    var hasValue = props.multiple ? Array.isArray(props.modelValue) && props.modelValue.length > 0 : props.modelValue !== void 0 && props.modelValue !== null && props.modelValue !== "";
    var criteria = props.clearable && !selectDisabled.value && states.inputHovering && hasValue;
    return criteria;
  });
  var iconComponent = (0, _vue.computed)(function () {
    return props.remote && props.filterable ? "" : props.suffixIcon;
  });
  var iconReverse = (0, _vue.computed)(function () {
    return ns2.is("reverse", iconComponent.value && states.visible);
  });
  var debounce$1 = (0, _vue.computed)(function () {
    return props.remote ? 300 : 0;
  });
  var emptyText = (0, _vue.computed)(function () {
    if (props.loading) {
      return props.loadingText || t("el.select.loading");
    } else {
      if (props.remote && states.query === "" && states.options.size === 0) return false;

      if (props.filterable && states.query && states.options.size > 0 && states.filteredOptionsCount === 0) {
        return props.noMatchText || t("el.select.noMatch");
      }

      if (states.options.size === 0) {
        return props.noDataText || t("el.select.noData");
      }
    }

    return null;
  });
  var optionsArray = (0, _vue.computed)(function () {
    return Array.from(states.options.values());
  });
  var cachedOptionsArray = (0, _vue.computed)(function () {
    return Array.from(states.cachedOptions.values());
  });
  var showNewOption = (0, _vue.computed)(function () {
    var hasExistingOption = optionsArray.value.filter(function (option) {
      return !option.created;
    }).some(function (option) {
      return option.currentLabel === states.query;
    });
    return props.filterable && props.allowCreate && states.query !== "" && !hasExistingOption;
  });
  var selectSize = useSize();
  var collapseTagSize = (0, _vue.computed)(function () {
    return ["small"].includes(selectSize.value) ? "small" : "default";
  });
  var dropMenuVisible = (0, _vue.computed)({
    get: function get() {
      return states.visible && emptyText.value !== false;
    },
    set: function set(val) {
      states.visible = val;
    }
  });
  (0, _vue.watch)([function () {
    return selectDisabled.value;
  }, function () {
    return selectSize.value;
  }, function () {
    return elForm2.size;
  }], function () {
    (0, _vue.nextTick)(function () {
      resetInputHeight();
    });
  });
  (0, _vue.watch)(function () {
    return props.placeholder;
  }, function (val) {
    states.cachedPlaceHolder = states.currentPlaceholder = val;
  });
  (0, _vue.watch)(function () {
    return props.modelValue;
  }, function (val, oldVal) {
    var _a2;

    if (props.multiple) {
      resetInputHeight();

      if (val && val.length > 0 || input.value && states.query !== "") {
        states.currentPlaceholder = "";
      } else {
        states.currentPlaceholder = states.cachedPlaceHolder;
      }

      if (props.filterable && !props.reserveKeyword) {
        states.query = "";
        handleQueryChange(states.query);
      }
    }

    setSelected();

    if (props.filterable && !props.multiple) {
      states.inputLength = 20;
    }

    if (!isEqual(val, oldVal) && props.validateEvent) {
      (_a2 = elFormItem2.validate) == null ? void 0 : _a2.call(elFormItem2, "change")["catch"](function (err) {
        return debugWarn();
      });
    }
  }, {
    flush: "post",
    deep: true
  });
  (0, _vue.watch)(function () {
    return states.visible;
  }, function (val) {
    var _a2, _b, _c;

    if (!val) {
      input.value && input.value.blur();
      states.query = "";
      states.previousQuery = null;
      states.selectedLabel = "";
      states.inputLength = 20;
      states.menuVisibleOnFocus = false;
      resetHoverIndex();
      (0, _vue.nextTick)(function () {
        if (input.value && input.value.value === "" && states.selected.length === 0) {
          states.currentPlaceholder = states.cachedPlaceHolder;
        }
      });

      if (!props.multiple) {
        if (states.selected) {
          if (props.filterable && props.allowCreate && states.createdSelected && states.createdLabel) {
            states.selectedLabel = states.createdLabel;
          } else {
            states.selectedLabel = states.selected.currentLabel;
          }

          if (props.filterable) states.query = states.selectedLabel;
        }

        if (props.filterable) {
          states.currentPlaceholder = states.cachedPlaceHolder;
        }
      }
    } else {
      (_b = (_a2 = tooltipRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b.call(_a2);

      if (props.filterable) {
        states.filteredOptionsCount = states.optionsCount;
        states.query = props.remote ? "" : states.selectedLabel;

        if (props.multiple) {
          (_c = input.value) == null ? void 0 : _c.focus();
        } else {
          if (states.selectedLabel) {
            states.currentPlaceholder = "".concat(states.selectedLabel);
            states.selectedLabel = "";
          }
        }

        handleQueryChange(states.query);

        if (!props.multiple && !props.remote) {
          queryChange.value.query = "";
          (0, _vue.triggerRef)(queryChange);
          (0, _vue.triggerRef)(groupQueryChange);
        }
      }
    }

    ctx.emit("visible-change", val);
  });
  (0, _vue.watch)(function () {
    return states.options.entries();
  }, function () {
    var _a2, _b, _c;

    if (!isClient) return;
    (_b = (_a2 = tooltipRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b.call(_a2);

    if (props.multiple) {
      resetInputHeight();
    }

    var inputs = ((_c = selectWrapper.value) == null ? void 0 : _c.querySelectorAll("input")) || [];

    if (!Array.from(inputs).includes(document.activeElement)) {
      setSelected();
    }

    if (props.defaultFirstOption && (props.filterable || props.remote) && states.filteredOptionsCount) {
      checkDefaultFirstOption();
    }
  }, {
    flush: "post"
  });
  (0, _vue.watch)(function () {
    return states.hoverIndex;
  }, function (val) {
    if (typeof val === "number" && val > -1) {
      hoverOption.value = optionsArray.value[val] || {};
    }

    optionsArray.value.forEach(function (option) {
      option.hover = hoverOption.value === option;
    });
  });

  var resetInputHeight = function resetInputHeight() {
    if (props.collapseTags && !props.filterable) return;
    (0, _vue.nextTick)(function () {
      var _a2, _b;

      if (!reference.value) return;
      var input2 = reference.value.$el.querySelector("input");
      var _tags = tags.value;
      var sizeInMap = getComponentSize(selectSize.value || elForm2.size);
      input2.style.height = "".concat((states.selected.length === 0 ? sizeInMap : Math.max(_tags ? _tags.clientHeight + (_tags.clientHeight > sizeInMap ? 6 : 0) : 0, sizeInMap)) - 2, "px");
      states.tagInMultiLine = Number.parseFloat(input2.style.height) >= sizeInMap;

      if (states.visible && emptyText.value !== false) {
        (_b = (_a2 = tooltipRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b.call(_a2);
      }
    });
  };

  var handleQueryChange = function handleQueryChange(val) {
    if (states.previousQuery === val || states.isOnComposition) return;

    if (states.previousQuery === null && (typeof props.filterMethod === "function" || typeof props.remoteMethod === "function")) {
      states.previousQuery = val;
      return;
    }

    states.previousQuery = val;
    (0, _vue.nextTick)(function () {
      var _a2, _b;

      if (states.visible) (_b = (_a2 = tooltipRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b.call(_a2);
    });
    states.hoverIndex = -1;

    if (props.multiple && props.filterable) {
      (0, _vue.nextTick)(function () {
        var length = input.value.value.length * 15 + 20;
        states.inputLength = props.collapseTags ? Math.min(50, length) : length;
        managePlaceholder();
        resetInputHeight();
      });
    }

    if (props.remote && typeof props.remoteMethod === "function") {
      states.hoverIndex = -1;
      props.remoteMethod(val);
    } else if (typeof props.filterMethod === "function") {
      props.filterMethod(val);
      (0, _vue.triggerRef)(groupQueryChange);
    } else {
      states.filteredOptionsCount = states.optionsCount;
      queryChange.value.query = val;
      (0, _vue.triggerRef)(queryChange);
      (0, _vue.triggerRef)(groupQueryChange);
    }

    if (props.defaultFirstOption && (props.filterable || props.remote) && states.filteredOptionsCount) {
      checkDefaultFirstOption();
    }
  };

  var managePlaceholder = function managePlaceholder() {
    if (states.currentPlaceholder !== "") {
      states.currentPlaceholder = input.value.value ? "" : states.cachedPlaceHolder;
    }
  };

  var checkDefaultFirstOption = function checkDefaultFirstOption() {
    var optionsInDropdown = optionsArray.value.filter(function (n) {
      return n.visible && !n.disabled && !n.states.groupDisabled;
    });
    var userCreatedOption = optionsInDropdown.find(function (n) {
      return n.created;
    });
    var firstOriginOption = optionsInDropdown[0];
    states.hoverIndex = getValueIndex(optionsArray.value, userCreatedOption || firstOriginOption);
  };

  var setSelected = function setSelected() {
    var _a2;

    if (!props.multiple) {
      var option = getOption(props.modelValue);

      if ((_a2 = option.props) == null ? void 0 : _a2.created) {
        states.createdLabel = option.props.value;
        states.createdSelected = true;
      } else {
        states.createdSelected = false;
      }

      states.selectedLabel = option.currentLabel;
      states.selected = option;
      if (props.filterable) states.query = states.selectedLabel;
      return;
    } else {
      states.selectedLabel = "";
    }

    var result = [];

    if (Array.isArray(props.modelValue)) {
      props.modelValue.forEach(function (value) {
        result.push(getOption(value));
      });
    }

    states.selected = result;
    (0, _vue.nextTick)(function () {
      resetInputHeight();
    });
  };

  var getOption = function getOption(value) {
    var option;
    var isObjectValue = toRawType(value).toLowerCase() === "object";
    var isNull = toRawType(value).toLowerCase() === "null";
    var isUndefined2 = toRawType(value).toLowerCase() === "undefined";

    for (var i = states.cachedOptions.size - 1; i >= 0; i--) {
      var cachedOption = cachedOptionsArray.value[i];
      var isEqualValue = isObjectValue ? get(cachedOption.value, props.valueKey) === get(value, props.valueKey) : cachedOption.value === value;

      if (isEqualValue) {
        option = {
          value: value,
          currentLabel: cachedOption.currentLabel,
          isDisabled: cachedOption.isDisabled
        };
        break;
      }
    }

    if (option) return option;
    var label = isObjectValue ? value.label : !isNull && !isUndefined2 ? value : "";
    var newOption = {
      value: value,
      currentLabel: label
    };

    if (props.multiple) {
      newOption.hitState = false;
    }

    return newOption;
  };

  var resetHoverIndex = function resetHoverIndex() {
    setTimeout(function () {
      var valueKey = props.valueKey;

      if (!props.multiple) {
        states.hoverIndex = optionsArray.value.findIndex(function (item) {
          return getValueKey(item) === getValueKey(states.selected);
        });
      } else {
        if (states.selected.length > 0) {
          states.hoverIndex = Math.min.apply(null, states.selected.map(function (selected) {
            return optionsArray.value.findIndex(function (item) {
              return get(item, valueKey) === get(selected, valueKey);
            });
          }));
        } else {
          states.hoverIndex = -1;
        }
      }
    }, 300);
  };

  var handleResize = function handleResize() {
    var _a2, _b;

    resetInputWidth();
    (_b = (_a2 = tooltipRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b.call(_a2);
    if (props.multiple && !props.filterable) resetInputHeight();
  };

  var resetInputWidth = function resetInputWidth() {
    var _a2;

    states.inputWidth = (_a2 = reference.value) == null ? void 0 : _a2.$el.getBoundingClientRect().width;
  };

  var onInputChange = function onInputChange() {
    if (props.filterable && states.query !== states.selectedLabel) {
      states.query = states.selectedLabel;
      handleQueryChange(states.query);
    }
  };

  var debouncedOnInputChange = debounce(function () {
    onInputChange();
  }, debounce$1.value);
  var debouncedQueryChange = debounce(function (e) {
    handleQueryChange(e.target.value);
  }, debounce$1.value);

  var emitChange = function emitChange(val) {
    if (!isEqual(props.modelValue, val)) {
      ctx.emit(CHANGE_EVENT, val);
    }
  };

  var deletePrevTag = function deletePrevTag(e) {
    if (e.target.value.length <= 0 && !toggleLastOptionHitState()) {
      var value = props.modelValue.slice();
      value.pop();
      ctx.emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
    }

    if (e.target.value.length === 1 && props.modelValue.length === 0) {
      states.currentPlaceholder = states.cachedPlaceHolder;
    }
  };

  var deleteTag = function deleteTag(event, tag) {
    var index = states.selected.indexOf(tag);

    if (index > -1 && !selectDisabled.value) {
      var value = props.modelValue.slice();
      value.splice(index, 1);
      ctx.emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      ctx.emit("remove-tag", tag.value);
    }

    event.stopPropagation();
  };

  var deleteSelected = function deleteSelected(event) {
    event.stopPropagation();
    var value = props.multiple ? [] : "";

    if (typeof value !== "string") {
      var _iterator10 = _createForOfIteratorHelper(states.selected),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var item = _step10.value;
          if (item.isDisabled) value.push(item.value);
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
    }

    ctx.emit(UPDATE_MODEL_EVENT, value);
    emitChange(value);
    states.visible = false;
    ctx.emit("clear");
  };

  var handleOptionSelect = function handleOptionSelect(option, byClick) {
    var _a2;

    if (props.multiple) {
      var value = (props.modelValue || []).slice();
      var optionIndex = getValueIndex(value, option.value);

      if (optionIndex > -1) {
        value.splice(optionIndex, 1);
      } else if (props.multipleLimit <= 0 || value.length < props.multipleLimit) {
        value.push(option.value);
      }

      ctx.emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);

      if (option.created) {
        states.query = "";
        handleQueryChange("");
        states.inputLength = 20;
      }

      if (props.filterable) (_a2 = input.value) == null ? void 0 : _a2.focus();
    } else {
      ctx.emit(UPDATE_MODEL_EVENT, option.value);
      emitChange(option.value);
      states.visible = false;
    }

    states.isSilentBlur = byClick;
    setSoftFocus();
    if (states.visible) return;
    (0, _vue.nextTick)(function () {
      scrollToOption(option);
    });
  };

  var getValueIndex = function getValueIndex() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var value = arguments.length > 1 ? arguments[1] : undefined;
    if (!isObject(value)) return arr.indexOf(value);
    var valueKey = props.valueKey;
    var index = -1;
    arr.some(function (item, i) {
      if (get(item, valueKey) === get(value, valueKey)) {
        index = i;
        return true;
      }

      return false;
    });
    return index;
  };

  var setSoftFocus = function setSoftFocus() {
    states.softFocus = true;

    var _input = input.value || reference.value;

    if (_input) {
      _input == null ? void 0 : _input.focus();
    }
  };

  var scrollToOption = function scrollToOption(option) {
    var _a2, _b, _c, _d, _e;

    var targetOption = Array.isArray(option) ? option[0] : option;
    var target = null;

    if (targetOption == null ? void 0 : targetOption.value) {
      var options = optionsArray.value.filter(function (item) {
        return item.value === targetOption.value;
      });

      if (options.length > 0) {
        target = options[0].$el;
      }
    }

    if (tooltipRef.value && target) {
      var menu = (_d = (_c = (_b = (_a2 = tooltipRef.value) == null ? void 0 : _a2.popperRef) == null ? void 0 : _b.contentRef) == null ? void 0 : _c.querySelector) == null ? void 0 : _d.call(_c, ".".concat(ns2.be("dropdown", "wrap")));

      if (menu) {
        scrollIntoView(menu, target);
      }
    }

    (_e = scrollbar.value) == null ? void 0 : _e.handleScroll();
  };

  var onOptionCreate = function onOptionCreate(vm) {
    states.optionsCount++;
    states.filteredOptionsCount++;
    states.options.set(vm.value, vm);
    states.cachedOptions.set(vm.value, vm);
  };

  var onOptionDestroy = function onOptionDestroy(key, vm) {
    if (states.options.get(key) === vm) {
      states.optionsCount--;
      states.filteredOptionsCount--;
      states.options["delete"](key);
    }
  };

  var resetInputState = function resetInputState(e) {
    if (e.code !== EVENT_CODE.backspace) toggleLastOptionHitState(false);
    states.inputLength = input.value.value.length * 15 + 20;
    resetInputHeight();
  };

  var toggleLastOptionHitState = function toggleLastOptionHitState(hit) {
    if (!Array.isArray(states.selected)) return;
    var option = states.selected[states.selected.length - 1];
    if (!option) return;

    if (hit === true || hit === false) {
      option.hitState = hit;
      return hit;
    }

    option.hitState = !option.hitState;
    return option.hitState;
  };

  var handleComposition = function handleComposition(event) {
    var text = event.target.value;

    if (event.type === "compositionend") {
      states.isOnComposition = false;
      (0, _vue.nextTick)(function () {
        return handleQueryChange(text);
      });
    } else {
      var lastCharacter = text[text.length - 1] || "";
      states.isOnComposition = !isKorean(lastCharacter);
    }
  };

  var handleMenuEnter = function handleMenuEnter() {
    (0, _vue.nextTick)(function () {
      return scrollToOption(states.selected);
    });
  };

  var handleFocus = function handleFocus(event) {
    if (!states.softFocus) {
      if (props.automaticDropdown || props.filterable) {
        if (props.filterable && !states.visible) {
          states.menuVisibleOnFocus = true;
        }

        states.visible = true;
      }

      ctx.emit("focus", event);
    } else {
      states.softFocus = false;
    }
  };

  var blur = function blur() {
    var _a2;

    states.visible = false;
    (_a2 = reference.value) == null ? void 0 : _a2.blur();
  };

  var handleBlur = function handleBlur(event) {
    (0, _vue.nextTick)(function () {
      if (states.isSilentBlur) {
        states.isSilentBlur = false;
      } else {
        ctx.emit("blur", event);
      }
    });
    states.softFocus = false;
  };

  var handleClearClick = function handleClearClick(event) {
    deleteSelected(event);
  };

  var handleClose = function handleClose() {
    states.visible = false;
  };

  var handleKeydownEscape = function handleKeydownEscape(event) {
    if (states.visible) {
      event.preventDefault();
      event.stopPropagation();
      states.visible = false;
    }
  };

  var toggleMenu = function toggleMenu() {
    var _a2;

    if (props.automaticDropdown) return;

    if (!selectDisabled.value) {
      if (states.menuVisibleOnFocus) {
        states.menuVisibleOnFocus = false;
      } else {
        states.visible = !states.visible;
      }

      if (states.visible) {
        (_a2 = input.value || reference.value) == null ? void 0 : _a2.focus();
      }
    }
  };

  var selectOption = function selectOption() {
    if (!states.visible) {
      toggleMenu();
    } else {
      if (optionsArray.value[states.hoverIndex]) {
        handleOptionSelect(optionsArray.value[states.hoverIndex], void 0);
      }
    }
  };

  var getValueKey = function getValueKey(item) {
    return isObject(item.value) ? get(item.value, props.valueKey) : item.value;
  };

  var optionsAllDisabled = (0, _vue.computed)(function () {
    return optionsArray.value.filter(function (option) {
      return option.visible;
    }).every(function (option) {
      return option.disabled;
    });
  });

  var navigateOptions = function navigateOptions(direction) {
    if (!states.visible) {
      states.visible = true;
      return;
    }

    if (states.options.size === 0 || states.filteredOptionsCount === 0) return;
    if (states.isOnComposition) return;

    if (!optionsAllDisabled.value) {
      if (direction === "next") {
        states.hoverIndex++;

        if (states.hoverIndex === states.options.size) {
          states.hoverIndex = 0;
        }
      } else if (direction === "prev") {
        states.hoverIndex--;

        if (states.hoverIndex < 0) {
          states.hoverIndex = states.options.size - 1;
        }
      }

      var option = optionsArray.value[states.hoverIndex];

      if (option.disabled === true || option.states.groupDisabled === true || !option.visible) {
        navigateOptions(direction);
      }

      (0, _vue.nextTick)(function () {
        return scrollToOption(hoverOption.value);
      });
    }
  };

  return {
    optionsArray: optionsArray,
    selectSize: selectSize,
    handleResize: handleResize,
    debouncedOnInputChange: debouncedOnInputChange,
    debouncedQueryChange: debouncedQueryChange,
    deletePrevTag: deletePrevTag,
    deleteTag: deleteTag,
    deleteSelected: deleteSelected,
    handleOptionSelect: handleOptionSelect,
    scrollToOption: scrollToOption,
    readonly: readonly2,
    resetInputHeight: resetInputHeight,
    showClose: showClose,
    iconComponent: iconComponent,
    iconReverse: iconReverse,
    showNewOption: showNewOption,
    collapseTagSize: collapseTagSize,
    setSelected: setSelected,
    managePlaceholder: managePlaceholder,
    selectDisabled: selectDisabled,
    emptyText: emptyText,
    toggleLastOptionHitState: toggleLastOptionHitState,
    resetInputState: resetInputState,
    handleComposition: handleComposition,
    onOptionCreate: onOptionCreate,
    onOptionDestroy: onOptionDestroy,
    handleMenuEnter: handleMenuEnter,
    handleFocus: handleFocus,
    blur: blur,
    handleBlur: handleBlur,
    handleClearClick: handleClearClick,
    handleClose: handleClose,
    handleKeydownEscape: handleKeydownEscape,
    toggleMenu: toggleMenu,
    selectOption: selectOption,
    getValueKey: getValueKey,
    navigateOptions: navigateOptions,
    dropMenuVisible: dropMenuVisible,
    queryChange: queryChange,
    groupQueryChange: groupQueryChange,
    reference: reference,
    input: input,
    tooltipRef: tooltipRef,
    tags: tags,
    selectWrapper: selectWrapper,
    scrollbar: scrollbar
  };
};

var COMPONENT_NAME = "ElSelect";

var _sfc_main$3 = (0, _vue.defineComponent)({
  name: COMPONENT_NAME,
  componentName: COMPONENT_NAME,
  components: {
    ElInput: ElInput,
    ElSelectMenu: ElSelectMenu,
    ElOption: Option,
    ElTag: ElTag,
    ElScrollbar: ElScrollbar,
    ElTooltip: ElTooltip,
    ElIcon: ElIcon
  },
  directives: {
    ClickOutside: ClickOutside
  },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      "default": void 0
    },
    autocomplete: {
      type: String,
      "default": "off"
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      validator: isValidComponentSize
    },
    effect: {
      type: String,
      "default": "light"
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      "default": ""
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      "default": 0
    },
    placeholder: {
      type: String
    },
    defaultFirstOption: Boolean,
    reserveKeyword: {
      type: Boolean,
      "default": true
    },
    valueKey: {
      type: String,
      "default": "value"
    },
    collapseTags: Boolean,
    collapseTagsTooltip: {
      type: Boolean,
      "default": false
    },
    teleported: useTooltipContentProps.teleported,
    persistent: {
      type: Boolean,
      "default": true
    },
    clearIcon: {
      type: [String, Object],
      "default": circle_close_default
    },
    fitInputWidth: {
      type: Boolean,
      "default": false
    },
    suffixIcon: {
      type: [String, Object],
      "default": arrow_up_default
    },
    tagType: _objectSpread(_objectSpread({}, tagProps.type), {}, {
      "default": "info"
    }),
    validateEvent: {
      type: Boolean,
      "default": true
    }
  },
  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT, "remove-tag", "clear", "visible-change", "focus", "blur"],
  setup: function setup(props, ctx) {
    var nsSelect = useNamespace("select");
    var nsInput = useNamespace("input");

    var _useLocale3 = useLocale(),
        t = _useLocale3.t;

    var states = useSelectStates(props);

    var _useSelect = useSelect(props, states, ctx),
        optionsArray = _useSelect.optionsArray,
        selectSize = _useSelect.selectSize,
        readonly2 = _useSelect.readonly,
        handleResize = _useSelect.handleResize,
        collapseTagSize = _useSelect.collapseTagSize,
        debouncedOnInputChange = _useSelect.debouncedOnInputChange,
        debouncedQueryChange = _useSelect.debouncedQueryChange,
        deletePrevTag = _useSelect.deletePrevTag,
        deleteTag = _useSelect.deleteTag,
        deleteSelected = _useSelect.deleteSelected,
        handleOptionSelect = _useSelect.handleOptionSelect,
        scrollToOption = _useSelect.scrollToOption,
        setSelected = _useSelect.setSelected,
        resetInputHeight = _useSelect.resetInputHeight,
        managePlaceholder = _useSelect.managePlaceholder,
        showClose = _useSelect.showClose,
        selectDisabled = _useSelect.selectDisabled,
        iconComponent = _useSelect.iconComponent,
        iconReverse = _useSelect.iconReverse,
        showNewOption = _useSelect.showNewOption,
        emptyText = _useSelect.emptyText,
        toggleLastOptionHitState = _useSelect.toggleLastOptionHitState,
        resetInputState = _useSelect.resetInputState,
        handleComposition = _useSelect.handleComposition,
        onOptionCreate = _useSelect.onOptionCreate,
        onOptionDestroy = _useSelect.onOptionDestroy,
        handleMenuEnter = _useSelect.handleMenuEnter,
        handleFocus = _useSelect.handleFocus,
        blur = _useSelect.blur,
        handleBlur = _useSelect.handleBlur,
        handleClearClick = _useSelect.handleClearClick,
        handleClose = _useSelect.handleClose,
        handleKeydownEscape = _useSelect.handleKeydownEscape,
        toggleMenu = _useSelect.toggleMenu,
        selectOption = _useSelect.selectOption,
        getValueKey = _useSelect.getValueKey,
        navigateOptions = _useSelect.navigateOptions,
        dropMenuVisible = _useSelect.dropMenuVisible,
        reference = _useSelect.reference,
        input = _useSelect.input,
        tooltipRef = _useSelect.tooltipRef,
        tags = _useSelect.tags,
        selectWrapper = _useSelect.selectWrapper,
        scrollbar = _useSelect.scrollbar,
        queryChange = _useSelect.queryChange,
        groupQueryChange = _useSelect.groupQueryChange;

    var _useFocus = useFocus(reference),
        focus = _useFocus.focus;

    var _toRefs3 = (0, _vue.toRefs)(states),
        inputWidth = _toRefs3.inputWidth,
        selected = _toRefs3.selected,
        inputLength = _toRefs3.inputLength,
        filteredOptionsCount = _toRefs3.filteredOptionsCount,
        visible = _toRefs3.visible,
        softFocus = _toRefs3.softFocus,
        selectedLabel = _toRefs3.selectedLabel,
        hoverIndex = _toRefs3.hoverIndex,
        query = _toRefs3.query,
        inputHovering = _toRefs3.inputHovering,
        currentPlaceholder = _toRefs3.currentPlaceholder,
        menuVisibleOnFocus = _toRefs3.menuVisibleOnFocus,
        isOnComposition = _toRefs3.isOnComposition,
        isSilentBlur = _toRefs3.isSilentBlur,
        options = _toRefs3.options,
        cachedOptions = _toRefs3.cachedOptions,
        optionsCount = _toRefs3.optionsCount,
        prefixWidth = _toRefs3.prefixWidth,
        tagInMultiLine = _toRefs3.tagInMultiLine;

    var wrapperKls = (0, _vue.computed)(function () {
      var classList = [nsSelect.b()];

      var _selectSize = (0, _vue.unref)(selectSize);

      if (_selectSize) {
        classList.push(nsSelect.m(_selectSize));
      }

      if (props.disabled) {
        classList.push(nsSelect.m("disabled"));
      }

      return classList;
    });
    var selectTagsStyle = (0, _vue.computed)(function () {
      return {
        maxWidth: "".concat((0, _vue.unref)(inputWidth) - 32, "px"),
        width: "100%"
      };
    });
    (0, _vue.provide)(selectKey, (0, _vue.reactive)({
      props: props,
      options: options,
      optionsArray: optionsArray,
      cachedOptions: cachedOptions,
      optionsCount: optionsCount,
      filteredOptionsCount: filteredOptionsCount,
      hoverIndex: hoverIndex,
      handleOptionSelect: handleOptionSelect,
      onOptionCreate: onOptionCreate,
      onOptionDestroy: onOptionDestroy,
      selectWrapper: selectWrapper,
      selected: selected,
      setSelected: setSelected,
      queryChange: queryChange,
      groupQueryChange: groupQueryChange
    }));
    (0, _vue.onMounted)(function () {
      states.cachedPlaceHolder = currentPlaceholder.value = props.placeholder || t("el.select.placeholder");

      if (props.multiple && Array.isArray(props.modelValue) && props.modelValue.length > 0) {
        currentPlaceholder.value = "";
      }

      useResizeObserver(selectWrapper, handleResize);

      if (props.remote && props.multiple) {
        resetInputHeight();
      }

      (0, _vue.nextTick)(function () {
        var refEl = reference.value && reference.value.$el;
        if (!refEl) return;
        inputWidth.value = refEl.getBoundingClientRect().width;

        if (ctx.slots.prefix) {
          var prefix = refEl.querySelector(".".concat(nsInput.e("prefix")));
          prefixWidth.value = Math.max(prefix.getBoundingClientRect().width + 5, 30);
        }
      });
      setSelected();
    });

    if (props.multiple && !Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, []);
    }

    if (!props.multiple && Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, "");
    }

    var popperPaneRef = (0, _vue.computed)(function () {
      var _a2, _b;

      return (_b = (_a2 = tooltipRef.value) == null ? void 0 : _a2.popperRef) == null ? void 0 : _b.contentRef;
    });
    return {
      tagInMultiLine: tagInMultiLine,
      prefixWidth: prefixWidth,
      selectSize: selectSize,
      readonly: readonly2,
      handleResize: handleResize,
      collapseTagSize: collapseTagSize,
      debouncedOnInputChange: debouncedOnInputChange,
      debouncedQueryChange: debouncedQueryChange,
      deletePrevTag: deletePrevTag,
      deleteTag: deleteTag,
      deleteSelected: deleteSelected,
      handleOptionSelect: handleOptionSelect,
      scrollToOption: scrollToOption,
      inputWidth: inputWidth,
      selected: selected,
      inputLength: inputLength,
      filteredOptionsCount: filteredOptionsCount,
      visible: visible,
      softFocus: softFocus,
      selectedLabel: selectedLabel,
      hoverIndex: hoverIndex,
      query: query,
      inputHovering: inputHovering,
      currentPlaceholder: currentPlaceholder,
      menuVisibleOnFocus: menuVisibleOnFocus,
      isOnComposition: isOnComposition,
      isSilentBlur: isSilentBlur,
      options: options,
      resetInputHeight: resetInputHeight,
      managePlaceholder: managePlaceholder,
      showClose: showClose,
      selectDisabled: selectDisabled,
      iconComponent: iconComponent,
      iconReverse: iconReverse,
      showNewOption: showNewOption,
      emptyText: emptyText,
      toggleLastOptionHitState: toggleLastOptionHitState,
      resetInputState: resetInputState,
      handleComposition: handleComposition,
      handleMenuEnter: handleMenuEnter,
      handleFocus: handleFocus,
      blur: blur,
      handleBlur: handleBlur,
      handleClearClick: handleClearClick,
      handleClose: handleClose,
      handleKeydownEscape: handleKeydownEscape,
      toggleMenu: toggleMenu,
      selectOption: selectOption,
      getValueKey: getValueKey,
      navigateOptions: navigateOptions,
      dropMenuVisible: dropMenuVisible,
      focus: focus,
      reference: reference,
      input: input,
      tooltipRef: tooltipRef,
      popperPaneRef: popperPaneRef,
      tags: tags,
      selectWrapper: selectWrapper,
      scrollbar: scrollbar,
      wrapperKls: wrapperKls,
      selectTagsStyle: selectTagsStyle,
      nsSelect: nsSelect
    };
  }
});

var _hoisted_1$1 = {
  "class": "select-trigger"
};
var _hoisted_2$1 = ["disabled", "autocomplete"];
var _hoisted_3$1 = {
  style: {
    "height": "100%",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center"
  }
};

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_el_tag = (0, _vue.resolveComponent)("el-tag");

  var _component_el_tooltip = (0, _vue.resolveComponent)("el-tooltip");

  var _component_el_icon = (0, _vue.resolveComponent)("el-icon");

  var _component_el_input = (0, _vue.resolveComponent)("el-input");

  var _component_el_option = (0, _vue.resolveComponent)("el-option");

  var _component_el_scrollbar = (0, _vue.resolveComponent)("el-scrollbar");

  var _component_el_select_menu = (0, _vue.resolveComponent)("el-select-menu");

  var _directive_click_outside = (0, _vue.resolveDirective)("click-outside");

  return (0, _vue.withDirectives)(((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
    ref: "selectWrapper",
    "class": (0, _vue.normalizeClass)(_ctx.wrapperKls),
    onClick: _cache[23] || (_cache[23] = (0, _vue.withModifiers)(function () {
      return _ctx.toggleMenu && _ctx.toggleMenu.apply(_ctx, arguments);
    }, ["stop"]))
  }, [(0, _vue.createVNode)(_component_el_tooltip, {
    ref: "tooltipRef",
    visible: _ctx.dropMenuVisible,
    "onUpdate:visible": _cache[22] || (_cache[22] = function ($event) {
      return _ctx.dropMenuVisible = $event;
    }),
    placement: "bottom-start",
    teleported: _ctx.teleported,
    "popper-class": [_ctx.nsSelect.e("popper"), _ctx.popperClass],
    "fallback-placements": ["bottom-start", "top-start", "right", "left"],
    effect: _ctx.effect,
    pure: "",
    trigger: "click",
    transition: "".concat(_ctx.nsSelect.namespace.value, "-zoom-in-top"),
    "stop-popper-mouse-event": false,
    "gpu-acceleration": false,
    persistent: _ctx.persistent,
    onShow: _ctx.handleMenuEnter
  }, {
    "default": (0, _vue.withCtx)(function () {
      return [(0, _vue.createElementVNode)("div", _hoisted_1$1, [_ctx.multiple ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
        key: 0,
        ref: "tags",
        "class": (0, _vue.normalizeClass)(_ctx.nsSelect.e("tags")),
        style: (0, _vue.normalizeStyle)(_ctx.selectTagsStyle)
      }, [_ctx.collapseTags && _ctx.selected.length ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", {
        key: 0,
        "class": (0, _vue.normalizeClass)([_ctx.nsSelect.b("tags-wrapper"), {
          "has-prefix": _ctx.prefixWidth && _ctx.selected.length
        }])
      }, [(0, _vue.createVNode)(_component_el_tag, {
        closable: !_ctx.selectDisabled && !_ctx.selected[0].isDisabled,
        size: _ctx.collapseTagSize,
        hit: _ctx.selected[0].hitState,
        type: _ctx.tagType,
        "disable-transitions": "",
        onClose: _cache[0] || (_cache[0] = function ($event) {
          return _ctx.deleteTag($event, _ctx.selected[0]);
        })
      }, {
        "default": (0, _vue.withCtx)(function () {
          return [(0, _vue.createElementVNode)("span", {
            "class": (0, _vue.normalizeClass)(_ctx.nsSelect.e("tags-text")),
            style: (0, _vue.normalizeStyle)({
              maxWidth: _ctx.inputWidth - 123 + "px"
            })
          }, (0, _vue.toDisplayString)(_ctx.selected[0].currentLabel), 7)];
        }),
        _: 1
      }, 8, ["closable", "size", "hit", "type"]), _ctx.selected.length > 1 ? ((0, _vue.openBlock)(), (0, _vue.createBlock)(_component_el_tag, {
        key: 0,
        closable: false,
        size: _ctx.collapseTagSize,
        type: _ctx.tagType,
        "disable-transitions": ""
      }, {
        "default": (0, _vue.withCtx)(function () {
          return [_ctx.collapseTagsTooltip ? ((0, _vue.openBlock)(), (0, _vue.createBlock)(_component_el_tooltip, {
            key: 0,
            disabled: _ctx.dropMenuVisible,
            "fallback-placements": ["bottom", "top", "right", "left"],
            effect: _ctx.effect,
            placement: "bottom",
            teleported: false
          }, {
            "default": (0, _vue.withCtx)(function () {
              return [(0, _vue.createElementVNode)("span", {
                "class": (0, _vue.normalizeClass)(_ctx.nsSelect.e("tags-text"))
              }, "+ " + (0, _vue.toDisplayString)(_ctx.selected.length - 1), 3)];
            }),
            content: (0, _vue.withCtx)(function () {
              return [(0, _vue.createElementVNode)("div", {
                "class": (0, _vue.normalizeClass)(_ctx.nsSelect.e("collapse-tags"))
              }, [((0, _vue.openBlock)(true), (0, _vue.createElementBlock)(_vue.Fragment, null, (0, _vue.renderList)(_ctx.selected.slice(1), function (item, idx) {
                return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
                  key: idx,
                  "class": (0, _vue.normalizeClass)(_ctx.nsSelect.e("collapse-tag"))
                }, [((0, _vue.openBlock)(), (0, _vue.createBlock)(_component_el_tag, {
                  key: _ctx.getValueKey(item),
                  "class": "in-tooltip",
                  closable: !_ctx.selectDisabled && !item.isDisabled,
                  size: _ctx.collapseTagSize,
                  hit: item.hitState,
                  type: _ctx.tagType,
                  "disable-transitions": "",
                  style: {
                    margin: "2px"
                  },
                  onClose: function onClose($event) {
                    return _ctx.deleteTag($event, item);
                  }
                }, {
                  "default": (0, _vue.withCtx)(function () {
                    return [(0, _vue.createElementVNode)("span", {
                      "class": (0, _vue.normalizeClass)(_ctx.nsSelect.e("tags-text")),
                      style: (0, _vue.normalizeStyle)({
                        maxWidth: _ctx.inputWidth - 75 + "px"
                      })
                    }, (0, _vue.toDisplayString)(item.currentLabel), 7)];
                  }),
                  _: 2
                }, 1032, ["closable", "size", "hit", "type", "onClose"]))], 2);
              }), 128))], 2)];
            }),
            _: 1
          }, 8, ["disabled", "effect"])) : ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", {
            key: 1,
            "class": (0, _vue.normalizeClass)(_ctx.nsSelect.e("tags-text"))
          }, "+ " + (0, _vue.toDisplayString)(_ctx.selected.length - 1), 3))];
        }),
        _: 1
      }, 8, ["size", "type"])) : (0, _vue.createCommentVNode)("v-if", true)], 2)) : (0, _vue.createCommentVNode)("v-if", true), (0, _vue.createCommentVNode)(" <div> "), !_ctx.collapseTags ? ((0, _vue.openBlock)(), (0, _vue.createBlock)(_vue.Transition, {
        key: 1,
        onAfterLeave: _ctx.resetInputHeight
      }, {
        "default": (0, _vue.withCtx)(function () {
          return [(0, _vue.createElementVNode)("span", {
            "class": (0, _vue.normalizeClass)([_ctx.nsSelect.b("tags-wrapper"), {
              "has-prefix": _ctx.prefixWidth && _ctx.selected.length
            }])
          }, [((0, _vue.openBlock)(true), (0, _vue.createElementBlock)(_vue.Fragment, null, (0, _vue.renderList)(_ctx.selected, function (item) {
            return (0, _vue.openBlock)(), (0, _vue.createBlock)(_component_el_tag, {
              key: _ctx.getValueKey(item),
              closable: !_ctx.selectDisabled && !item.isDisabled,
              size: _ctx.collapseTagSize,
              hit: item.hitState,
              type: _ctx.tagType,
              "disable-transitions": "",
              onClose: function onClose($event) {
                return _ctx.deleteTag($event, item);
              }
            }, {
              "default": (0, _vue.withCtx)(function () {
                return [(0, _vue.createElementVNode)("span", {
                  "class": (0, _vue.normalizeClass)(_ctx.nsSelect.e("tags-text")),
                  style: (0, _vue.normalizeStyle)({
                    maxWidth: _ctx.inputWidth - 75 + "px"
                  })
                }, (0, _vue.toDisplayString)(item.currentLabel), 7)];
              }),
              _: 2
            }, 1032, ["closable", "size", "hit", "type", "onClose"]);
          }), 128))], 2)];
        }),
        _: 1
      }, 8, ["onAfterLeave"])) : (0, _vue.createCommentVNode)("v-if", true), (0, _vue.createCommentVNode)(" </div> "), _ctx.filterable ? (0, _vue.withDirectives)(((0, _vue.openBlock)(), (0, _vue.createElementBlock)("input", {
        key: 2,
        ref: "input",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return _ctx.query = $event;
        }),
        type: "text",
        "class": (0, _vue.normalizeClass)([_ctx.nsSelect.e("input"), _ctx.nsSelect.is(_ctx.selectSize)]),
        disabled: _ctx.selectDisabled,
        autocomplete: _ctx.autocomplete,
        style: (0, _vue.normalizeStyle)({
          marginLeft: _ctx.prefixWidth && !_ctx.selected.length || _ctx.tagInMultiLine ? "".concat(_ctx.prefixWidth, "px") : "",
          flexGrow: 1,
          width: "".concat(_ctx.inputLength / (_ctx.inputWidth - 32), "%"),
          maxWidth: "".concat(_ctx.inputWidth - 42, "px")
        }),
        onFocus: _cache[2] || (_cache[2] = function () {
          return _ctx.handleFocus && _ctx.handleFocus.apply(_ctx, arguments);
        }),
        onBlur: _cache[3] || (_cache[3] = function () {
          return _ctx.handleBlur && _ctx.handleBlur.apply(_ctx, arguments);
        }),
        onKeyup: _cache[4] || (_cache[4] = function () {
          return _ctx.managePlaceholder && _ctx.managePlaceholder.apply(_ctx, arguments);
        }),
        onKeydown: [_cache[5] || (_cache[5] = function () {
          return _ctx.resetInputState && _ctx.resetInputState.apply(_ctx, arguments);
        }), _cache[6] || (_cache[6] = (0, _vue.withKeys)((0, _vue.withModifiers)(function ($event) {
          return _ctx.navigateOptions("next");
        }, ["prevent"]), ["down"])), _cache[7] || (_cache[7] = (0, _vue.withKeys)((0, _vue.withModifiers)(function ($event) {
          return _ctx.navigateOptions("prev");
        }, ["prevent"]), ["up"])), _cache[8] || (_cache[8] = (0, _vue.withKeys)(function () {
          return _ctx.handleKeydownEscape && _ctx.handleKeydownEscape.apply(_ctx, arguments);
        }, ["esc"])), _cache[9] || (_cache[9] = (0, _vue.withKeys)((0, _vue.withModifiers)(function () {
          return _ctx.selectOption && _ctx.selectOption.apply(_ctx, arguments);
        }, ["stop", "prevent"]), ["enter"])), _cache[10] || (_cache[10] = (0, _vue.withKeys)(function () {
          return _ctx.deletePrevTag && _ctx.deletePrevTag.apply(_ctx, arguments);
        }, ["delete"])), _cache[11] || (_cache[11] = (0, _vue.withKeys)(function ($event) {
          return _ctx.visible = false;
        }, ["tab"]))],
        onCompositionstart: _cache[12] || (_cache[12] = function () {
          return _ctx.handleComposition && _ctx.handleComposition.apply(_ctx, arguments);
        }),
        onCompositionupdate: _cache[13] || (_cache[13] = function () {
          return _ctx.handleComposition && _ctx.handleComposition.apply(_ctx, arguments);
        }),
        onCompositionend: _cache[14] || (_cache[14] = function () {
          return _ctx.handleComposition && _ctx.handleComposition.apply(_ctx, arguments);
        }),
        onInput: _cache[15] || (_cache[15] = function () {
          return _ctx.debouncedQueryChange && _ctx.debouncedQueryChange.apply(_ctx, arguments);
        })
      }, null, 46, _hoisted_2$1)), [[_vue.vModelText, _ctx.query]]) : (0, _vue.createCommentVNode)("v-if", true)], 6)) : (0, _vue.createCommentVNode)("v-if", true), (0, _vue.createVNode)(_component_el_input, {
        id: _ctx.id,
        ref: "reference",
        modelValue: _ctx.selectedLabel,
        "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
          return _ctx.selectedLabel = $event;
        }),
        type: "text",
        placeholder: _ctx.currentPlaceholder,
        name: _ctx.name,
        autocomplete: _ctx.autocomplete,
        size: _ctx.selectSize,
        disabled: _ctx.selectDisabled,
        readonly: _ctx.readonly,
        "validate-event": false,
        "class": (0, _vue.normalizeClass)([_ctx.nsSelect.is("focus", _ctx.visible)]),
        tabindex: _ctx.multiple && _ctx.filterable ? -1 : void 0,
        onFocus: _ctx.handleFocus,
        onBlur: _ctx.handleBlur,
        onInput: _ctx.debouncedOnInputChange,
        onPaste: _ctx.debouncedOnInputChange,
        onCompositionstart: _ctx.handleComposition,
        onCompositionupdate: _ctx.handleComposition,
        onCompositionend: _ctx.handleComposition,
        onKeydown: [_cache[17] || (_cache[17] = (0, _vue.withKeys)((0, _vue.withModifiers)(function ($event) {
          return _ctx.navigateOptions("next");
        }, ["stop", "prevent"]), ["down"])), _cache[18] || (_cache[18] = (0, _vue.withKeys)((0, _vue.withModifiers)(function ($event) {
          return _ctx.navigateOptions("prev");
        }, ["stop", "prevent"]), ["up"])), (0, _vue.withKeys)((0, _vue.withModifiers)(_ctx.selectOption, ["stop", "prevent"]), ["enter"]), (0, _vue.withKeys)(_ctx.handleKeydownEscape, ["esc"]), _cache[19] || (_cache[19] = (0, _vue.withKeys)(function ($event) {
          return _ctx.visible = false;
        }, ["tab"]))],
        onMouseenter: _cache[20] || (_cache[20] = function ($event) {
          return _ctx.inputHovering = true;
        }),
        onMouseleave: _cache[21] || (_cache[21] = function ($event) {
          return _ctx.inputHovering = false;
        })
      }, (0, _vue.createSlots)({
        suffix: (0, _vue.withCtx)(function () {
          return [_ctx.iconComponent && !_ctx.showClose ? ((0, _vue.openBlock)(), (0, _vue.createBlock)(_component_el_icon, {
            key: 0,
            "class": (0, _vue.normalizeClass)([_ctx.nsSelect.e("caret"), _ctx.nsSelect.e("icon"), _ctx.iconReverse])
          }, {
            "default": (0, _vue.withCtx)(function () {
              return [((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.iconComponent)))];
            }),
            _: 1
          }, 8, ["class"])) : (0, _vue.createCommentVNode)("v-if", true), _ctx.showClose && _ctx.clearIcon ? ((0, _vue.openBlock)(), (0, _vue.createBlock)(_component_el_icon, {
            key: 1,
            "class": (0, _vue.normalizeClass)([_ctx.nsSelect.e("caret"), _ctx.nsSelect.e("icon")]),
            onClick: _ctx.handleClearClick
          }, {
            "default": (0, _vue.withCtx)(function () {
              return [((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.clearIcon)))];
            }),
            _: 1
          }, 8, ["class", "onClick"])) : (0, _vue.createCommentVNode)("v-if", true)];
        }),
        _: 2
      }, [_ctx.$slots.prefix ? {
        name: "prefix",
        fn: (0, _vue.withCtx)(function () {
          return [(0, _vue.createElementVNode)("div", _hoisted_3$1, [(0, _vue.renderSlot)(_ctx.$slots, "prefix")])];
        })
      } : void 0]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])])];
    }),
    content: (0, _vue.withCtx)(function () {
      return [(0, _vue.createVNode)(_component_el_select_menu, null, {
        "default": (0, _vue.withCtx)(function () {
          return [(0, _vue.withDirectives)((0, _vue.createVNode)(_component_el_scrollbar, {
            ref: "scrollbar",
            tag: "ul",
            "wrap-class": _ctx.nsSelect.be("dropdown", "wrap"),
            "view-class": _ctx.nsSelect.be("dropdown", "list"),
            "class": (0, _vue.normalizeClass)([_ctx.nsSelect.is("empty", !_ctx.allowCreate && Boolean(_ctx.query) && _ctx.filteredOptionsCount === 0)])
          }, {
            "default": (0, _vue.withCtx)(function () {
              return [_ctx.showNewOption ? ((0, _vue.openBlock)(), (0, _vue.createBlock)(_component_el_option, {
                key: 0,
                value: _ctx.query,
                created: true
              }, null, 8, ["value"])) : (0, _vue.createCommentVNode)("v-if", true), (0, _vue.renderSlot)(_ctx.$slots, "default")];
            }),
            _: 3
          }, 8, ["wrap-class", "view-class", "class"]), [[_vue.vShow, _ctx.options.size > 0 && !_ctx.loading]]), _ctx.emptyText && (!_ctx.allowCreate || _ctx.loading || _ctx.allowCreate && _ctx.options.size === 0) ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)(_vue.Fragment, {
            key: 0
          }, [_ctx.$slots.empty ? (0, _vue.renderSlot)(_ctx.$slots, "empty", {
            key: 0
          }) : ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("p", {
            key: 1,
            "class": (0, _vue.normalizeClass)(_ctx.nsSelect.be("dropdown", "empty"))
          }, (0, _vue.toDisplayString)(_ctx.emptyText), 3))], 64)) : (0, _vue.createCommentVNode)("v-if", true)];
        }),
        _: 3
      })];
    }),
    _: 3
  }, 8, ["visible", "teleported", "popper-class", "effect", "transition", "persistent", "onShow"])], 2)), [[_directive_click_outside, _ctx.handleClose, _ctx.popperPaneRef]]);
}

var Select = /* @__PURE__ */_export_sfc$1(_sfc_main$3, [["render", _sfc_render$1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);

var _sfc_main$2 = (0, _vue.defineComponent)({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: {
      type: Boolean,
      "default": false
    }
  },
  setup: function setup(props) {
    var ns2 = useNamespace("select");
    var visible = (0, _vue.ref)(true);
    var instance = (0, _vue.getCurrentInstance)();
    var children = (0, _vue.ref)([]);
    (0, _vue.provide)(selectGroupKey, (0, _vue.reactive)(_objectSpread({}, (0, _vue.toRefs)(props))));
    var select = (0, _vue.inject)(selectKey);
    (0, _vue.onMounted)(function () {
      children.value = flattedChildren(instance.subTree);
    });

    var flattedChildren = function flattedChildren(node) {
      var children2 = [];

      if (Array.isArray(node.children)) {
        node.children.forEach(function (child) {
          var _a2;

          if (child.type && child.type.name === "ElOption" && child.component && child.component.proxy) {
            children2.push(child.component.proxy);
          } else if ((_a2 = child.children) == null ? void 0 : _a2.length) {
            children2.push.apply(children2, _toConsumableArray(flattedChildren(child)));
          }
        });
      }

      return children2;
    };

    var _toRaw2 = (0, _vue.toRaw)(select),
        groupQueryChange = _toRaw2.groupQueryChange;

    (0, _vue.watch)(groupQueryChange, function () {
      visible.value = children.value.some(function (option) {
        return option.visible === true;
      });
    });
    return {
      visible: visible,
      ns: ns2
    };
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, _vue.withDirectives)(((0, _vue.openBlock)(), (0, _vue.createElementBlock)("ul", {
    "class": (0, _vue.normalizeClass)(_ctx.ns.be("group", "wrap"))
  }, [(0, _vue.createElementVNode)("li", {
    "class": (0, _vue.normalizeClass)(_ctx.ns.be("group", "title"))
  }, (0, _vue.toDisplayString)(_ctx.label), 3), (0, _vue.createElementVNode)("li", null, [(0, _vue.createElementVNode)("ul", {
    "class": (0, _vue.normalizeClass)(_ctx.ns.b("group"))
  }, [(0, _vue.renderSlot)(_ctx.$slots, "default")], 2)])], 2)), [[_vue.vShow, _ctx.visible]]);
}

var OptionGroup = /* @__PURE__ */_export_sfc$1(_sfc_main$2, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);

var ElSelect = withInstall(Select, {
  Option: Option,
  OptionGroup: OptionGroup
});
var ElOption = withNoopInstall(Option);
withNoopInstall(OptionGroup);
var RowJustify = ["start", "center", "end", "space-around", "space-between", "space-evenly"];
var RowAlign = ["top", "middle", "bottom"];
var rowProps = buildProps({
  tag: {
    type: String,
    "default": "div"
  },
  gutter: {
    type: Number,
    "default": 0
  },
  justify: {
    type: String,
    values: RowJustify,
    "default": "start"
  },
  align: {
    type: String,
    values: RowAlign,
    "default": "top"
  }
});
var __default__ = {
  name: "ElRow"
};

var _sfc_main$1 = /* @__PURE__ */(0, _vue.defineComponent)(_objectSpread(_objectSpread({}, __default__), {}, {
  props: rowProps,
  setup: function setup(__props) {
    var props = __props;
    var ns2 = useNamespace("row");
    var gutter = (0, _vue.computed)(function () {
      return props.gutter;
    });
    (0, _vue.provide)(rowContextKey, {
      gutter: gutter
    });
    var style = (0, _vue.computed)(function () {
      var styles = {};

      if (!props.gutter) {
        return styles;
      }

      styles.marginRight = styles.marginLeft = "-".concat(props.gutter / 2, "px");
      return styles;
    });
    return function (_ctx, _cache) {
      return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.tag), {
        "class": (0, _vue.normalizeClass)([(0, _vue.unref)(ns2).b(), (0, _vue.unref)(ns2).is("justify-".concat(props.justify), _ctx.justify !== "start"), (0, _vue.unref)(ns2).is("align-".concat(props.align), _ctx.align !== "top")]),
        style: (0, _vue.normalizeStyle)((0, _vue.unref)(style))
      }, {
        "default": (0, _vue.withCtx)(function () {
          return [(0, _vue.renderSlot)(_ctx.$slots, "default")];
        }),
        _: 3
      }, 8, ["class", "style"]);
    };
  }
}));

var Row = /* @__PURE__ */_export_sfc$1(_sfc_main$1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);

var ElRow = withInstall(Row);
var base = "";
var elRow = "";
var elIcon = "";
var elButton = "";
var elForm = "";
var elInput = "";
var elTag = "";
var elOption = "";
var elOptionGroup = "";
var elScrollbar = "";
var elPopper = "";
var elSelect = "";
var elFormItem = "";
var Search_vue_vue_type_style_index_0_scoped_true_lang = "";

var _export_sfc = function _export_sfc(sfc, props) {
  var target = sfc.__vccOpts || sfc;

  var _iterator11 = _createForOfIteratorHelper(props),
      _step11;

  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      var _step11$value = _slicedToArray(_step11.value, 2),
          key = _step11$value[0],
          val = _step11$value[1];

      target[key] = val;
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }

  return target;
};

var _hoisted_1 = {
  "class": "right flex flex-no-wrap flex-no-shink"
};

var _hoisted_2 = /* @__PURE__ */(0, _vue.createTextVNode)(" \u67E5\u8BE2 ");

var _hoisted_3 = /* @__PURE__ */(0, _vue.createTextVNode)(" \u91CD\u7F6E ");

var _sfc_main = {
  __name: "Search",
  props: {
    searchOptions: Array
  },
  emits: ["onSearch"],
  setup: function setup(__props, _ref50) {
    var emit = _ref50.emit;
    var props = __props;
    var searchForm = (0, _vue.ref)({});
    var leftRef = (0, _vue.ref)();
    var searchRef = (0, _vue.ref)();
    var isOpen = (0, _vue.ref)(false);
    var showOpenTrigger = (0, _vue.ref)(false);
    props.searchOptions.forEach(function (it2) {
      searchForm.value[it2.key] = it2.defaultValue;
    });

    var calculateOptionsLength = /*#__PURE__*/function () {
      var _ref51 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        var nodeList2;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                nodeList2 = leftRef.value.querySelectorAll(".left-item");

                if (nodeList2[nodeList2.length - 1].offsetTop) {
                  showOpenTrigger.value = true;
                }

              case 2:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      return function calculateOptionsLength() {
        return _ref51.apply(this, arguments);
      };
    }();

    (0, _vue.watch)(function () {
      return props.searchOptions;
    }, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              _context14.next = 2;
              return (0, _vue.nextTick)();

            case 2:
              if (!leftRef.value) {
                _context14.next = 6;
                break;
              }

              calculateOptionsLength();
              _context14.next = 9;
              break;

            case 6:
              _context14.next = 8;
              return (0, _vue.nextTick)();

            case 8:
              calculateOptionsLength();

            case 9:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14);
    })), {
      immediate: true,
      deep: true
    });

    var onSearch = function onSearch() {
      emit("onSearch", _objectSpread({}, searchForm.value));
    };

    var reset = function reset() {
      searchRef.value && searchRef.value.resetFields();
      emit("onSearch", {});
    };

    return function (_ctx, _cache) {
      var _component_el_input = ElInput;
      var _component_el_form_item = ElFormItem;
      var _component_el_option = ElOption;
      var _component_el_select = ElSelect;
      var _component_el_form = ElForm;
      var _component_el_button = ElButton;

      var _component_arrow_down = (0, _vue.resolveComponent)("arrow-down");

      var _component_el_icon = ElIcon;
      var _component_el_row = ElRow;
      return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", null, [(0, _vue.createVNode)(_component_el_row, {
        type: "flex",
        "class": "flex-no-warp"
      }, {
        "default": (0, _vue.withCtx)(function () {
          return [(0, _vue.createElementVNode)("div", {
            ref_key: "leftRef",
            ref: leftRef,
            "class": (0, _vue.normalizeClass)(["left", {
              isOpen: isOpen.value
            }])
          }, [(0, _vue.createVNode)(_component_el_form, {
            "class": "flex flex-wrap",
            ref_key: "searchRef",
            ref: searchRef,
            style: {
              "width": "100%"
            },
            model: searchForm.value
          }, {
            "default": (0, _vue.withCtx)(function () {
              return [((0, _vue.openBlock)(true), (0, _vue.createElementBlock)(_vue.Fragment, null, (0, _vue.renderList)(__props.searchOptions, function (item) {
                return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
                  "class": "mr8 left-item",
                  key: item.key
                }, [item.type === "input" ? ((0, _vue.openBlock)(), (0, _vue.createBlock)(_component_el_form_item, {
                  key: 0,
                  label: item.label,
                  prop: item.key
                }, {
                  "default": (0, _vue.withCtx)(function () {
                    return [(0, _vue.createVNode)(_component_el_input, {
                      modelValue: searchForm.value[item.key],
                      "onUpdate:modelValue": function onUpdateModelValue($event) {
                        return searchForm.value[item.key] = $event;
                      },
                      clearable: "",
                      placeholder: item.placeholder || "\u8BF7\u586B\u5199"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])];
                  }),
                  _: 2
                }, 1032, ["label", "prop"])) : (0, _vue.createCommentVNode)("", true), item.type === "select" ? ((0, _vue.openBlock)(), (0, _vue.createBlock)(_component_el_form_item, {
                  key: 1,
                  label: item.label,
                  prop: item.key
                }, {
                  "default": (0, _vue.withCtx)(function () {
                    return [(0, _vue.createVNode)(_component_el_select, {
                      clearable: "",
                      modelValue: searchForm.value[item.key],
                      "onUpdate:modelValue": function onUpdateModelValue($event) {
                        return searchForm.value[item.key] = $event;
                      },
                      placeholder: item.placeholder || "\u8BF7\u9009\u62E9"
                    }, {
                      "default": (0, _vue.withCtx)(function () {
                        return [((0, _vue.openBlock)(true), (0, _vue.createElementBlock)(_vue.Fragment, null, (0, _vue.renderList)(item.options, function (item2) {
                          return (0, _vue.openBlock)(), (0, _vue.createBlock)(_component_el_option, {
                            key: item2.value,
                            label: item2.label,
                            value: item2.value
                          }, null, 8, ["label", "value"]);
                        }), 128))];
                      }),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue", "placeholder"])];
                  }),
                  _: 2
                }, 1032, ["label", "prop"])) : (0, _vue.createCommentVNode)("", true)]);
              }), 128))];
            }),
            _: 1
          }, 8, ["model"])], 2), (0, _vue.createElementVNode)("div", _hoisted_1, [(0, _vue.createVNode)(_component_el_button, {
            ref: "searchButton",
            type: "primary",
            "class": "search-btn ml8",
            onClick: onSearch
          }, {
            "default": (0, _vue.withCtx)(function () {
              return [_hoisted_2];
            }),
            _: 1
          }, 512), (0, _vue.createVNode)(_component_el_button, {
            plain: "",
            onClick: reset
          }, {
            "default": (0, _vue.withCtx)(function () {
              return [_hoisted_3];
            }),
            _: 1
          }), showOpenTrigger.value ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", {
            key: 0,
            "class": "ml8 mr8 open-tag",
            type: "text",
            size: "small",
            onClick: _cache[0] || (_cache[0] = function ($event) {
              return isOpen.value = !isOpen.value;
            })
          }, [(0, _vue.createTextVNode)((0, _vue.toDisplayString)(isOpen.value ? "\u6536\u8D77" : "\u5C55\u5F00") + " ", 1), (0, _vue.createVNode)(_component_el_icon, {
            "class": (0, _vue.normalizeClass)(["receive-icon", {
              "open-icon": isOpen.value
            }])
          }, {
            "default": (0, _vue.withCtx)(function () {
              return [(0, _vue.createVNode)(_component_arrow_down)];
            }),
            _: 1
          }, 8, ["class"])])) : (0, _vue.createCommentVNode)("", true), (0, _vue.renderSlot)(_ctx.$slots, "default", {}, void 0, true)])];
        }),
        _: 3
      })]);
    };
  }
};

var Search = /* @__PURE__ */_export_sfc(_sfc_main, [["__scopeId", "data-v-61cccc65"]]);

exports["default"] = Search;