(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _interopRequire = function _interopRequire(obj) {
	return obj && obj.__esModule ? obj["default"] : obj;
};

var Person = require("./components/Person").Person;

var Range = _interopRequire(require("./components/Range"));

var rangesliderJs = _interopRequire(require("../node_modules/rangeslider-pure/dist/range-slider"));

window.app = function () {
	var oleg = new Person("Oleg", "Zaiats");
	// let sliderAge = new Range('age', 'age-out');
	// sliderAge.init();
	// let sliderHeight = new Range('height', 'height-out');
	// sliderHeight.init();
	// Initialize a new plugin instance for one element or NodeList of elements.

	var slider = document.getElementById("age");
	rangesliderJs.create(slider, {
		polyfill: true, // Boolean, if true, custom markup will be created
		rangeClass: "rangeSlider",
		disabledClass: "rangeSlider--disabled",
		fillClass: "rangeSlider__fill",
		bufferClass: "rangeSlider__buffer",
		handleClass: "rangeSlider__handle",
		startEvent: ["mousedown", "touchstart", "pointerdown"],
		moveEvent: ["mousemove", "touchmove", "pointermove"],
		endEvent: ["mouseup", "touchend", "pointerup"],
		vertical: false, // Boolean, if true slider will be displayed in vertical orientation
		min: null, // Number , 0
		max: null, // Number, 100
		step: null, // Number, 1
		value: null, // Number, center of slider
		buffer: null, // Number, in percent, 0 by default
		stick: null, // [Number stickTo, Number stickRadius] : use it if handle should stick to stickTo-th value in stickRadius
		borderRadius: 10, // Number, if you use buffer + border-radius in css for looks good,
		onInit: function onInit() {
			console.info("onInit");
		},
		onSlideStart: function onSlideStart(position, value) {
			console.info("onSlideStart", "position: " + position, "value: " + value);
		},
		onSlide: function onSlide(position, value) {
			console.log("onSlide", "position: " + position, "value: " + value);
		},
		onSlideEnd: function onSlideEnd(position, value) {
			console.warn("onSlideEnd", "position: " + position, "value: " + value);
		}
	});

	// update position
	var triggerEvents = true; // or false
	slider.rangeSlider.update({ min: 0, max: 20, step: 0.5, value: 1.5 }, triggerEvents);
};

window.app();

},{"../node_modules/rangeslider-pure/dist/range-slider":2,"./components/Person":3,"./components/Range":4}],2:[function(require,module,exports){
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("rangeSlider", [], factory);
	else if(typeof exports === 'object')
		exports["rangeSlider"] = factory();
	else
		root["rangeSlider"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Delays a function for the given number of milliseconds, and then calls
 * it with the arguments supplied.
 *
 * @param  {Function} fn   function
 * @param  {Number}   wait delay
 * @param  {Number}   args arguments
 * @return {Function}
 */
var delay = exports.delay = function delay(fn, wait) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return setTimeout(function () {
    return fn.apply(null, args);
  }, wait);
};

/**
 * Returns a debounced function that will make sure the given
 * function is not triggered too much.
 *
 * @param  {Function} fn Function to debounce.
 * @param  {Number}   debounceDuration OPTIONAL. The amount of time in milliseconds for which we will debounce the
 *         function. (defaults to 100ms)
 * @return {Function}
 */
var debounce = exports.debounce = function debounce(fn) {
  var debounceDuration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (!fn.debouncing) {
      fn.lastReturnVal = fn.apply(window, args);
      fn.debouncing = true;
    }
    clearTimeout(fn.debounceTimeout);
    fn.debounceTimeout = setTimeout(function () {
      fn.debouncing = false;
    }, debounceDuration);
    return fn.lastReturnVal;
  };
};

var isString = exports.isString = function isString(obj) {
  return obj === '' + obj;
};

var isArray = exports.isArray = function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

var isNumberLike = exports.isNumberLike = function isNumberLike(obj) {
  return obj !== null && obj !== undefined && (isString(obj) && isFinite(parseFloat(obj)) || isFinite(obj));
};

var getFirsNumberLike = exports.getFirsNumberLike = function getFirsNumberLike() {
  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  if (!args.length) {
    return null;
  }

  for (var i = 0, len = args.length; i < len; i++) {
    if (isNumberLike(args[i])) {
      return args[i];
    }
  }

  return null;
};

var isObject = exports.isObject = function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

var simpleExtend = exports.simpleExtend = function simpleExtend(defaultOpt, options) {
  var opt = {};

  for (var key in defaultOpt) {
    opt[key] = defaultOpt[key];
  }
  for (var _key4 in options) {
    opt[_key4] = options[_key4];
  }

  return opt;
};

var between = exports.between = function between(pos, min, max) {
  if (pos < min) {
    return min;
  }
  if (pos > max) {
    return max;
  }
  return pos;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dom = __webpack_require__(2);

var dom = _interopRequireWildcard(_dom);

var _functions = __webpack_require__(0);

var func = _interopRequireWildcard(_functions);

__webpack_require__(3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var newLineAndTabRegexp = new RegExp('/[\\n\\t]/', 'g');
var MAX_SET_BY_DEFAULT = 100;
var HANDLE_RESIZE_DELAY = 300;
var HANDLE_RESIZE_DEBOUNCE = 50;

var pluginName = 'rangeSlider';
var pluginIdentifier = 0;
var inputrange = dom.supportsRange();
var defaults = {
  polyfill: true,
  rangeClass: 'rangeSlider',
  disabledClass: 'rangeSlider--disabled',
  fillClass: 'rangeSlider__fill',
  bufferClass: 'rangeSlider__buffer',
  handleClass: 'rangeSlider__handle',
  startEvent: ['mousedown', 'touchstart', 'pointerdown'],
  moveEvent: ['mousemove', 'touchmove', 'pointermove'],
  endEvent: ['mouseup', 'touchend', 'pointerup'],
  min: null,
  max: null,
  step: null,
  value: null,
  buffer: null,
  stick: null,
  borderRadius: 10,
  vertical: false
};

/**
 * Plugin
 * @param {HTMLElement} element
 * @param {this} options
 */

var RangeSlider = function () {
  function RangeSlider(element, options) {
    _classCallCheck(this, RangeSlider);

    var minSetByDefault = void 0;
    var maxSetByDefault = void 0;
    var stepSetByDefault = void 0;
    var stickAttribute = void 0;
    var stickValues = void 0;

    this.element = element;
    this.options = func.simpleExtend(defaults, options);
    this.polyfill = this.options.polyfill;
    this.vertical = this.options.vertical;
    this.onInit = this.options.onInit;
    this.onSlide = this.options.onSlide;
    this.onSlideStart = this.options.onSlideStart;
    this.onSlideEnd = this.options.onSlideEnd;
    this.onSlideEventsCount = -1;
    this.isInteractsNow = false;
    this.needTriggerEvents = false;

    // Plugin should only be used as a polyfill
    if (!this.polyfill) {
      // Input range support?
      if (inputrange) {
        return;
      }
    }

    this.options.buffer = this.options.buffer || parseFloat(this.element.getAttribute('data-buffer'));

    this.identifier = 'js-' + pluginName + '-' + pluginIdentifier++;

    this.min = func.getFirsNumberLike(this.options.min, parseFloat(this.element.getAttribute('min')), minSetByDefault = 0);

    this.max = func.getFirsNumberLike(this.options.max, parseFloat(this.element.getAttribute('max')), maxSetByDefault = MAX_SET_BY_DEFAULT);

    this.value = func.getFirsNumberLike(this.options.value, this.element.value, parseFloat(this.element.value || this.min + (this.max - this.min) / 2));

    this.step = func.getFirsNumberLike(this.options.step, parseFloat(this.element.getAttribute('step')) || (stepSetByDefault = 1));

    this.percent = null;

    if (func.isArray(this.options.stick) && this.options.stick.length >= 1) {
      this.stick = this.options.stick;
    } else if (stickAttribute = this.element.getAttribute('stick')) {
      stickValues = stickAttribute.split(' ');
      if (stickValues.length >= 1) {
        this.stick = stickValues.map(parseFloat);
      }
    }
    if (this.stick && this.stick.length === 1) {
      this.stick.push(this.step * 1.5);
    }
    this._updatePercentFromValue();

    this.toFixed = this._toFixed(this.step);

    var directionClass = void 0;

    this.container = document.createElement('div');
    dom.addClass(this.container, this.options.fillClass);

    directionClass = this.vertical ? this.options.fillClass + '__vertical' : this.options.fillClass + '__horizontal';
    dom.addClass(this.container, directionClass);

    this.handle = document.createElement('div');
    dom.addClass(this.handle, this.options.handleClass);

    directionClass = this.vertical ? this.options.handleClass + '__vertical' : this.options.handleClass + '__horizontal';
    dom.addClass(this.handle, directionClass);

    this.range = document.createElement('div');
    dom.addClass(this.range, this.options.rangeClass);
    this.range.id = this.identifier;
    this.range.appendChild(this.handle);
    this.range.appendChild(this.container);

    directionClass = this.vertical ? this.options.rangeClass + '__vertical' : this.options.rangeClass + '__horizontal';
    dom.addClass(this.range, directionClass);

    if (this.options.bufferClass) {
      this.buffer = document.createElement('div');
      dom.addClass(this.buffer, this.options.bufferClass);
      this.range.appendChild(this.buffer);

      directionClass = this.vertical ? this.options.bufferClass + '__vertical' : this.options.bufferClass + '__horizontal';
      dom.addClass(this.buffer, directionClass);
    }

    if (func.isNumberLike(this.options.value)) {
      this._setValue(this.options.value, true);
      this.element.value = this.options.value;
    }

    if (func.isNumberLike(this.options.buffer)) {
      this.element.setAttribute('data-buffer', this.options.buffer);
    }

    if (func.isNumberLike(this.options.min) || minSetByDefault) {
      this.element.setAttribute('min', '' + this.min);
    }

    if (func.isNumberLike(this.options.max) || maxSetByDefault) {
      this.element.setAttribute('max', '' + this.max);
    }

    if (func.isNumberLike(this.options.step) || stepSetByDefault) {
      this.element.setAttribute('step', '' + this.step);
    }

    dom.insertAfter(this.element, this.range);

    // hide the input visually
    dom.setCss(this.element, {
      'position': 'absolute',
      'width': '1px',
      'height': '1px',
      'overflow': 'hidden',
      'opacity': '0'
    });

    // Store context
    this._handleDown = this._handleDown.bind(this);
    this._handleMove = this._handleMove.bind(this);
    this._handleEnd = this._handleEnd.bind(this);
    this._startEventListener = this._startEventListener.bind(this);
    this._changeEventListener = this._changeEventListener.bind(this);
    this._handleResize = this._handleResize.bind(this);

    this._init();

    // Attach Events
    window.addEventListener('resize', this._handleResize, false);

    dom.addEventListeners(document, this.options.startEvent, this._startEventListener);

    // Listen to programmatic value changes
    this.element.addEventListener('change', this._changeEventListener, false);
  }

  /* public methods */

  /**
   * @param {Object} obj like {min : Number, max : Number, value : Number, step : Number, buffer : [String|Number]}
   * @param {Boolean} triggerEvents
   * @returns {RangeSlider}
   */


  _createClass(RangeSlider, [{
    key: 'update',
    value: function update(obj, triggerEvents) {
      if (triggerEvents) {
        this.needTriggerEvents = true;
      }
      if (func.isObject(obj)) {
        if (func.isNumberLike(obj.min)) {
          this.element.setAttribute('min', '' + obj.min);
          this.min = obj.min;
        }

        if (func.isNumberLike(obj.max)) {
          this.element.setAttribute('max', '' + obj.max);
          this.max = obj.max;
        }

        if (func.isNumberLike(obj.step)) {
          this.element.setAttribute('step', '' + obj.step);
          this.step = obj.step;
          this.toFixed = this._toFixed(obj.step);
        }

        if (func.isNumberLike(obj.buffer)) {
          this._setBufferPosition(obj.buffer);
        }

        if (func.isNumberLike(obj.value)) {
          this._setValue(obj.value);
        }
      }
      this._update();
      this.onSlideEventsCount = 0;
      this.needTriggerEvents = false;
      return this;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      dom.removeAllListenersFromEl(this, document);
      window.removeEventListener('resize', this._handleResize, false);
      this.element.removeEventListener('change', this._changeEventListener, false);

      this.element.style.cssText = '';
      delete this.element[pluginName];

      // Remove the generated markup
      if (this.range) {
        this.range.parentNode.removeChild(this.range);
      }
    }

    /**
     * A lightweight plugin wrapper around the constructor,preventing against multiple instantiations
     * @param {Element} el
     * @param {Object} options
     */

  }, {
    key: '_toFixed',


    /* private methods */

    value: function _toFixed(step) {
      return (step + '').replace('.', '').length - 1;
    }
  }, {
    key: '_init',
    value: function _init() {
      if (this.onInit && typeof this.onInit === 'function') {
        this.onInit();
      }
      this._update();
    }
  }, {
    key: '_updatePercentFromValue',
    value: function _updatePercentFromValue() {
      this.percent = (this.value - this.min) / (this.max - this.min);
    }

    /**
     * This method check if this.identifier exists in ev.target's ancestors
     * @param ev
     * @param data
     */

  }, {
    key: '_startEventListener',
    value: function _startEventListener(ev, data) {
      var _this = this;

      var el = ev.target;
      var isEventOnSlider = false;

      if (ev.which !== 1 && !('touches' in ev)) {
        return;
      }

      dom.forEachAncestors(el, function (el) {
        return isEventOnSlider = el.id === _this.identifier && !dom.hasClass(el, _this.options.disabledClass);
      }, true);

      if (isEventOnSlider) {
        this._handleDown(ev, data);
      }
    }
  }, {
    key: '_changeEventListener',
    value: function _changeEventListener(ev, data) {
      if (data && data.origin === this.identifier) {
        return;
      }

      var value = ev.target.value;
      var pos = this._getPositionFromValue(value);

      this._setPosition(pos);
    }
  }, {
    key: '_update',
    value: function _update() {
      var sizeProperty = this.vertical ? 'offsetHeight' : 'offsetWidth';

      this.handleSize = dom.getDimension(this.handle, sizeProperty);
      this.rangeSize = dom.getDimension(this.range, sizeProperty);
      this.maxHandleX = this.rangeSize - this.handleSize;
      this.grabX = this.handleSize / 2;
      this.position = this._getPositionFromValue(this.value);

      // Consider disabled state
      if (this.element.disabled) {
        dom.addClass(this.range, this.options.disabledClass);
      } else {
        dom.removeClass(this.range, this.options.disabledClass);
      }

      this._setPosition(this.position);
      if (this.options.bufferClass && this.options.buffer) {
        this._setBufferPosition(this.options.buffer);
      }
      this._updatePercentFromValue();
      dom.triggerEvent(this.element, 'change', { origin: this.identifier });
    }
  }, {
    key: '_handleResize',
    value: function _handleResize() {
      var _this2 = this;

      return func.debounce(function () {
        // Simulate resizeEnd event.
        func.delay(function () {
          _this2._update();
        }, HANDLE_RESIZE_DELAY);
      }, HANDLE_RESIZE_DEBOUNCE)();
    }
  }, {
    key: '_handleDown',
    value: function _handleDown(e) {
      this.isInteractsNow = true;
      e.preventDefault();
      dom.addEventListeners(document, this.options.moveEvent, this._handleMove);
      dom.addEventListeners(document, this.options.endEvent, this._handleEnd);

      // If we click on the handle don't set the new position
      if ((' ' + e.target.className + ' ').replace(newLineAndTabRegexp, ' ').indexOf(this.options.handleClass) > -1) {
        return;
      }

      var boundingClientRect = this.range.getBoundingClientRect();

      var posX = this._getRelativePosition(e);
      var rangeX = this.vertical ? boundingClientRect.bottom : boundingClientRect.left;
      var handleX = this._getPositionFromNode(this.handle) - rangeX;
      var position = posX - this.grabX;

      this._setPosition(position);

      if (posX >= handleX && posX < handleX + this.options.borderRadius * 2) {
        this.grabX = posX - handleX;
      }
      this._updatePercentFromValue();
    }
  }, {
    key: '_handleMove',
    value: function _handleMove(e) {
      var posX = this._getRelativePosition(e);

      this.isInteractsNow = true;
      e.preventDefault();
      this._setPosition(posX - this.grabX);
    }
  }, {
    key: '_handleEnd',
    value: function _handleEnd(e) {
      e.preventDefault();
      dom.removeEventListeners(document, this.options.moveEvent, this._handleMove);
      dom.removeEventListeners(document, this.options.endEvent, this._handleEnd);

      // Ok we're done fire the change event
      dom.triggerEvent(this.element, 'change', { origin: this.identifier });

      if (this.isInteractsNow || this.needTriggerEvents) {
        if (this.onSlideEnd && typeof this.onSlideEnd === 'function') {
          this.onSlideEnd(this.value, this.percent, this.position);
        }
      }
      this.onSlideEventsCount = 0;
      this.isInteractsNow = false;
    }
  }, {
    key: '_setPosition',
    value: function _setPosition(pos) {
      var position = void 0;
      var stickRadius = void 0;
      var restFromValue = void 0;
      var stickTo = void 0;

      // Snapping steps
      var value = this._getValueFromPosition(func.between(pos, 0, this.maxHandleX));

      // Stick to stick[0] in radius stick[1]
      if (this.stick) {
        stickTo = this.stick[0];
        stickRadius = this.stick[1] || 0.1;
        restFromValue = value % stickTo;
        if (restFromValue < stickRadius) {
          value = value - restFromValue;
        } else if (Math.abs(stickTo - restFromValue) < stickRadius) {
          value = value - restFromValue + stickTo;
        }
      }
      position = this._getPositionFromValue(value);

      // Update ui
      if (this.vertical) {
        this.container.style.height = position + this.grabX + 'px';
        this.handle.style.transform = 'translateY(-' + position + 'px)';
        this.handle.style['-ms-transform'] = 'translateY(-' + position + 'px)';
      } else {
        this.container.style.width = position + this.grabX + 'px';
        this.handle.style.transform = 'translateX(' + position + 'px)';
        this.handle.style['-ms-transform'] = 'translateX(' + position + 'px)';
      }

      this._setValue(value);

      // Update globals
      this.position = position;
      this.value = value;
      this._updatePercentFromValue();

      if (this.isInteractsNow || this.needTriggerEvents) {
        if (this.onSlideStart && typeof this.onSlideStart === 'function' && this.onSlideEventsCount === 0) {
          this.onSlideStart(this.value, this.percent, this.position);
        }

        if (this.onSlide && typeof this.onSlide === 'function') {
          this.onSlide(this.value, this.percent, this.position);
        }
      }

      this.onSlideEventsCount++;
    }
  }, {
    key: '_setBufferPosition',
    value: function _setBufferPosition(pos) {
      var isPercent = true;

      if (isFinite(pos)) {
        pos = parseFloat(pos);
      } else if (func.isString(pos)) {
        if (pos.indexOf('px') > 0) {
          isPercent = false;
        }
        pos = parseFloat(pos);
      } else {
        console.warn('New position must be XXpx or XX%');
        return;
      }

      if (isNaN(pos)) {
        console.warn('New position is NaN');
        return;
      }
      if (!this.options.bufferClass) {
        console.warn('You disabled buffer, it\'s className is empty');
        return;
      }
      var bufferSize = isPercent ? pos : pos / this.rangeSize * 100;

      if (bufferSize < 0) {
        bufferSize = 0;
      }
      if (bufferSize > 100) {
        bufferSize = 100;
      }
      this.options.buffer = bufferSize;

      var paddingSize = this.options.borderRadius / this.rangeSize * 100;
      var bufferSizeWithPadding = bufferSize - paddingSize;

      if (bufferSizeWithPadding < 0) {
        bufferSizeWithPadding = 0;
      }

      if (this.vertical) {
        this.buffer.style.height = bufferSizeWithPadding + '%';
        this.buffer.style.bottom = paddingSize * 0.5 + '%';
      } else {
        this.buffer.style.width = bufferSizeWithPadding + '%';
        this.buffer.style.left = paddingSize * 0.5 + '%';
      }

      this.element.setAttribute('data-buffer', bufferSize);
    }

    /**
     *
     * @param {Element} node
     * @returns {*} Returns element position relative to the parent
     * @private
     */

  }, {
    key: '_getPositionFromNode',
    value: function _getPositionFromNode(node) {
      var i = this.vertical ? this.maxHandleX : 0;

      while (node !== null) {
        i += this.vertical ? node.offsetTop : node.offsetLeft;
        node = node.offsetParent;
      }
      return i;
    }

    /**
     *
     * @param {(MouseEvent|TouchEvent)}e
     * @returns {number}
     */

  }, {
    key: '_getRelativePosition',
    value: function _getRelativePosition(e) {
      var boundingClientRect = this.range.getBoundingClientRect();

      // Get the offset relative to the viewport
      var rangeSize = this.vertical ? boundingClientRect.bottom : boundingClientRect.left;
      var pageOffset = 0;

      var pagePositionProperty = this.vertical ? 'pageY' : 'pageX';

      if (typeof e[pagePositionProperty] !== 'undefined') {
        pageOffset = e.touches && e.touches.length ? e.touches[0][pagePositionProperty] : e[pagePositionProperty];
      } else if (typeof e.originalEvent !== 'undefined') {
        if (typeof e.originalEvent[pagePositionProperty] !== 'undefined') {
          pageOffset = e.originalEvent[pagePositionProperty];
        } else if (e.originalEvent.touches && e.originalEvent.touches[0] && typeof e.originalEvent.touches[0][pagePositionProperty] !== 'undefined') {
          pageOffset = e.originalEvent.touches[0][pagePositionProperty];
        }
      } else if (e.touches && e.touches[0] && typeof e.touches[0][pagePositionProperty] !== 'undefined') {
        pageOffset = e.touches[0][pagePositionProperty];
      } else if (e.currentPoint && (typeof e.currentPoint.x !== 'undefined' || typeof e.currentPoint.y !== 'undefined')) {
        pageOffset = this.vertical ? e.currentPoint.y : e.currentPoint.x;
      }

      if (this.vertical) {
        pageOffset -= window.pageYOffset;
      }

      return this.vertical ? rangeSize - pageOffset : pageOffset - rangeSize;
    }
  }, {
    key: '_getPositionFromValue',
    value: function _getPositionFromValue(value) {
      var percentage = (value - this.min) / (this.max - this.min);
      var pos = percentage * this.maxHandleX;

      return isNaN(pos) ? 0 : pos;
    }
  }, {
    key: '_getValueFromPosition',
    value: function _getValueFromPosition(pos) {
      var percentage = pos / (this.maxHandleX || 1);
      var value = this.step * Math.round(percentage * (this.max - this.min) / this.step) + this.min;

      return Number(value.toFixed(this.toFixed));
    }
  }, {
    key: '_setValue',
    value: function _setValue(value, force) {
      if (value === this.value && !force) {
        return;
      }

      // Set the new value and fire the `input` event
      this.element.value = value;
      this.value = value;
      dom.triggerEvent(this.element, 'input', { origin: this.identifier });
    }
  }], [{
    key: 'create',
    value: function create(el, options) {
      var createInstance = function createInstance(el) {
        var data = el[pluginName];

        // Create a new instance.
        if (!data) {
          data = new RangeSlider(el, options);
          el[pluginName] = data;
        }
      };

      if (el.length) {
        Array.prototype.slice.call(el).forEach(function (el) {
          createInstance(el);
        });
      } else {
        createInstance(el);
      }
    }
  }]);

  return RangeSlider;
}();

exports.default = RangeSlider;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportsRange = exports.removeAllListenersFromEl = exports.removeEventListeners = exports.addEventListeners = exports.insertAfter = exports.triggerEvent = exports.forEachAncestors = exports.removeClass = exports.addClass = exports.hasClass = exports.setCss = exports.getDimension = exports.getHiddenParentNodes = exports.isHidden = exports.detectIE = undefined;

var _functions = __webpack_require__(0);

var func = _interopRequireWildcard(_functions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var EVENT_LISTENER_LIST = 'eventListenerList';

var detectIE = exports.detectIE = function detectIE() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');

  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');

  if (trident > 0) {
    var rv = ua.indexOf('rv:');

    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');

  if (edge > 0) {
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  return false;
};

var ieVersion = detectIE();
var eventCaptureParams = window.PointerEvent && !ieVersion ? { passive: false } : false;

/**
 * Check if a `element` is visible in the DOM
 *
 * @param  {Element}  element
 * @return {Boolean}
 */
var isHidden = exports.isHidden = function isHidden(element) {
  return element.offsetWidth === 0 || element.offsetHeight === 0 || element.open === false;
};

/**
 * Get hidden parentNodes of an `element`
 *
 * @param {Element} element
 * @return {Element[]}
 */
var getHiddenParentNodes = exports.getHiddenParentNodes = function getHiddenParentNodes(element) {
  var parents = [];
  var node = element.parentNode;

  while (isHidden(node)) {
    parents.push(node);
    node = node.parentNode;
  }
  return parents;
};

/**
 * Returns dimensions for an element even if it is not visible in the DOM.
 *
 * @param  {Element} element
 * @param  {string}  key     (e.g. offsetWidth …)
 * @return {Number}
 */
var getDimension = exports.getDimension = function getDimension(element, key) {
  var hiddenParentNodes = getHiddenParentNodes(element);
  var hiddenParentNodesLength = hiddenParentNodes.length;
  var displayProperty = [];
  var dimension = element[key];

  // Used for native `<details>` elements
  var toggleOpenProperty = function toggleOpenProperty(element) {
    if (typeof element.open !== 'undefined') {
      element.open = !element.open;
    }
  };

  if (hiddenParentNodesLength) {
    for (var i = 0; i < hiddenParentNodesLength; i++) {
      // Cache the display property to restore it later.
      displayProperty[i] = hiddenParentNodes[i].style.display;

      hiddenParentNodes[i].style.display = 'block';
      hiddenParentNodes[i].style.height = '0';
      hiddenParentNodes[i].style.overflow = 'hidden';
      hiddenParentNodes[i].style.visibility = 'hidden';
      toggleOpenProperty(hiddenParentNodes[i]);
    }

    dimension = element[key];

    for (var j = 0; j < hiddenParentNodesLength; j++) {
      toggleOpenProperty(hiddenParentNodes[j]);
      hiddenParentNodes[j].style.display = displayProperty[j];
      hiddenParentNodes[j].style.height = '';
      hiddenParentNodes[j].style.overflow = '';
      hiddenParentNodes[j].style.visibility = '';
    }
  }
  return dimension;
};

/**
 *
 * @param {HTMLElement} el
 * @param {Object} cssObj
 * @returns {*}
 */
var setCss = exports.setCss = function setCss(el, cssObj) {
  for (var key in cssObj) {
    el.style[key] = cssObj[key];
  }
  return el.style;
};

/**
 *
 * @param {HTMLElement} elem
 * @param {string} className
 */
var hasClass = exports.hasClass = function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
};

/**
 *
 * @param {HTMLElement} elem
 * @param {string} className
 */
var addClass = exports.addClass = function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
};

/**
 *
 * @param {HTMLElement} elem
 * @param {string} className
 */
var removeClass = exports.removeClass = function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';

  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
};

/**
 *
 * @param {HTMLElement} el
 * @param {Function} callback
 * @param {boolean} andForElement - apply callback for el
 * @returns {HTMLElement}
 */
var forEachAncestors = exports.forEachAncestors = function forEachAncestors(el, callback, andForElement) {
  if (andForElement) {
    callback(el);
  }

  while (el.parentNode && !callback(el)) {
    el = el.parentNode;
  }

  return el;
};

/**
 *
 * @param {HTMLElement} el
 * @param {string} name event name
 * @param {Object} data
 */
var triggerEvent = exports.triggerEvent = function triggerEvent(el, name, data) {
  if (!func.isString(name)) {
    throw new TypeError('event name must be String');
  }
  if (!(el instanceof HTMLElement)) {
    throw new TypeError('element must be HTMLElement');
  }
  name = name.trim();
  var event = document.createEvent('CustomEvent');

  event.initCustomEvent(name, false, false, data);
  el.dispatchEvent(event);
};

/**
 * @param {Object} referenceNode after this
 * @param {Object} newNode insert this
 */
var insertAfter = exports.insertAfter = function insertAfter(referenceNode, newNode) {
  return referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

/**
 * Add event listeners and push them to el[EVENT_LISTENER_LIST]
 * @param {HTMLElement|Node|Document} el DOM element
 * @param {Array} events
 * @param {Function} listener
 */
var addEventListeners = exports.addEventListeners = function addEventListeners(el, events, listener) {
  events.forEach(function (eventName) {
    if (!el[EVENT_LISTENER_LIST]) {
      el[EVENT_LISTENER_LIST] = {};
    }
    if (!el[EVENT_LISTENER_LIST][eventName]) {
      el[EVENT_LISTENER_LIST][eventName] = [];
    }

    el.addEventListener(eventName, listener, eventCaptureParams);
    if (el[EVENT_LISTENER_LIST][eventName].indexOf(listener) < 0) {
      el[EVENT_LISTENER_LIST][eventName].push(listener);
    }
  });
};

/**
 * Remove event listeners and remove them from el[EVENT_LISTENER_LIST]
 * @param {HTMLElement} el DOM element
 * @param {Array} events
 * @param {Function} listener
 */
var removeEventListeners = exports.removeEventListeners = function removeEventListeners(el, events, listener) {
  events.forEach(function (eventName) {
    var index = void 0;

    el.removeEventListener(eventName, listener, false);

    if (el[EVENT_LISTENER_LIST] && el[EVENT_LISTENER_LIST][eventName] && (index = el[EVENT_LISTENER_LIST][eventName].indexOf(listener)) > -1) {
      el[EVENT_LISTENER_LIST][eventName].splice(index, 1);
    }
  });
};

/**
 * Remove ALL event listeners which exists in el[EVENT_LISTENER_LIST]
 * @param instance
 * @param {HTMLElement} el DOM element
 */
var removeAllListenersFromEl = exports.removeAllListenersFromEl = function removeAllListenersFromEl(instance, el) {
  if (!el[EVENT_LISTENER_LIST]) {
    return;
  }

  /* jshint ignore:start */

  /**
   *
   * @callback listener
   * @this {Object} event name
   */
  function rm(listener) {
    if (listener === instance._startEventListener) {
      this.el.removeEventListener(this.eventName, listener, false);
    }
  }

  for (var eventName in el[EVENT_LISTENER_LIST]) {
    el[EVENT_LISTENER_LIST][eventName].forEach(rm, { eventName: eventName, el: el });
  }

  el[EVENT_LISTENER_LIST] = {};
  /* jshint ignore:end */
};

/**
 * Range feature detection
 * @return {Boolean}
 */
var supportsRange = exports.supportsRange = function supportsRange() {
  var input = document.createElement('input');

  input.setAttribute('type', 'range');
  return input.type !== 'text';
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=range-slider.js.map
},{}],3:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var Person = (function () {
	function Person(firstName, lastName) {
		_classCallCheck(this, Person);

		this.firstName = firstName;
		this.lastName = lastName;
	}

	_createClass(Person, {
		fullName: {
			get: function () {
				return "" + this.firstName + " " + this.lastName;
			}
		}
	});

	return Person;
})();

exports.Person = Person;

},{}],4:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Slider = (function () {
	function Slider(slider, output) {
		_classCallCheck(this, Slider);

		this.x = document.getElementById(slider);
		this.y = document.getElementById(output);
	}

	_createClass(Slider, {
		init: {
			value: function init() {
				var _this = this;

				this.y.innerHTML = this.x.value;
				this.x.addEventListener("input", function (evt) {
					return _this.y.innerHTML = evt.target.value;
				});
			}
		}
	});

	return Slider;
})();

module.exports = Slider;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS96YWlhdHM4NS9EZXNrdG9wL3Rlc3R0YXNrL3NyYy9hcHAuanMiLCJub2RlX21vZHVsZXMvcmFuZ2VzbGlkZXItcHVyZS9kaXN0L3JhbmdlLXNsaWRlci5qcyIsIi9ob21lL3phaWF0czg1L0Rlc2t0b3AvdGVzdHRhc2svc3JjL2NvbXBvbmVudHMvUGVyc29uLmpzIiwiL2hvbWUvemFpYXRzODUvRGVza3RvcC90ZXN0dGFzay9zcmMvY29tcG9uZW50cy9SYW5nZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLFlBQVksQ0FBQzs7QUFFYixJQUFJLGVBQWUsR0FBRyxTQUFBLGVBQUEsQ0FBVSxHQUFHLEVBQUU7QUFBRSxRQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUM7Q0FBRSxDQUFDOztBQUU5RixJQUpRLE1BQU0sR0FBQSxPQUFBLENBQU8scUJBQXFCLENBQUEsQ0FBbEMsTUFBTSxDQUFBOztBQU1kLElBTE8sS0FBSyxHQUFBLGVBQUEsQ0FBQSxPQUFBLENBQU0sb0JBQW9CLENBQUEsQ0FBQSxDQUFBOztBQU90QyxJQU5PLGFBQWEsR0FBQSxlQUFBLENBQUEsT0FBQSxDQUFNLG9EQUFvRCxDQUFBLENBQUEsQ0FBQTs7QUFFOUUsTUFBTSxDQUFDLEdBQUcsR0FBRyxZQUFZO0FBQ3hCLEtBQU0sSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQzs7Ozs7OztBQU8xQyxLQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzVDLGNBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO0FBQzVCLFVBQVEsRUFBRSxJQUFJO0FBQ2QsWUFBVSxFQUFFLGFBQWE7QUFDekIsZUFBYSxFQUFFLHVCQUF1QjtBQUN0QyxXQUFTLEVBQUUsbUJBQW1CO0FBQzlCLGFBQVcsRUFBRSxxQkFBcUI7QUFDbEMsYUFBVyxFQUFFLHFCQUFxQjtBQUNsQyxZQUFVLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQztBQUN0RCxXQUFTLEVBQUUsQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLGFBQWEsQ0FBQztBQUNwRCxVQUFRLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQztBQUM5QyxVQUFRLEVBQUUsS0FBSztBQUNmLEtBQUcsRUFBRSxJQUFJO0FBQ1QsS0FBRyxFQUFFLElBQUk7QUFDVCxNQUFJLEVBQUUsSUFBSTtBQUNWLE9BQUssRUFBRSxJQUFJO0FBQ1gsUUFBTSxFQUFFLElBQUk7QUFDWixPQUFLLEVBQUUsSUFBSTtBQUNYLGNBQVksRUFBRSxFQUFFO0FBQ2hCLFFBQU0sRUFBRSxTQUFBLE1BQUEsR0FBWTtBQUNuQixVQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0dBQ3RCO0FBQ0QsY0FBWSxFQUFFLFNBQUEsWUFBQSxDQUFVLFFBQVEsRUFBRSxLQUFLLEVBQUU7QUFDeEMsVUFBTyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsWUFBWSxHQUFHLFFBQVEsRUFBRSxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUM7R0FDekU7QUFDRCxTQUFPLEVBQUUsU0FBQSxPQUFBLENBQVUsUUFBUSxFQUFFLEtBQUssRUFBRTtBQUNuQyxVQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxZQUFZLEdBQUcsUUFBUSxFQUFFLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQztHQUNuRTtBQUNELFlBQVUsRUFBRSxTQUFBLFVBQUEsQ0FBVSxRQUFRLEVBQUUsS0FBSyxFQUFFO0FBQ3RDLFVBQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFlBQVksR0FBRyxRQUFRLEVBQUUsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO0dBQ3ZFO0VBQ0QsQ0FBQyxDQUFDOzs7QUFHSCxLQUFJLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFDekIsT0FBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRyxFQUFFLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxLQUFLLEVBQUcsR0FBRyxFQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7Q0FHdkYsQ0FBQzs7QUFJRixNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7OztBQ3REYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7SUNsbkNNLE1BQU07QUFDQSxVQUROLE1BQU0sQ0FDQyxTQUFTLEVBQUUsUUFBUSxFQUFFO3dCQUQ1QixNQUFNOztBQUVWLE1BQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzNCLE1BQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0VBQ3pCOztjQUpJLE1BQU07QUFNUCxVQUFRO1FBQUEsWUFBRztBQUNkLGdCQUFVLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVEsQ0FBRztJQUM1Qzs7OztRQVJJLE1BQU07OztRQVVKLE1BQU0sR0FBTixNQUFNOzs7Ozs7Ozs7SUNWTyxNQUFNO0FBQ2YsVUFEUyxNQUFNLENBQ2QsTUFBTSxFQUFFLE1BQU0sRUFBRTt3QkFEUixNQUFNOztBQUV6QixNQUFJLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDekMsTUFBSSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ3pDOztjQUptQixNQUFNO0FBTTFCLE1BQUk7VUFBQSxnQkFBRzs7O0FBQ04sUUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDaEMsUUFBSSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxHQUFHO1lBQUssTUFBSyxDQUFDLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSztLQUFBLENBQUMsQ0FBQztJQUMvRTs7OztRQVRtQixNQUFNOzs7aUJBQU4sTUFBTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQge1BlcnNvbn0gZnJvbSAnLi9jb21wb25lbnRzL1BlcnNvbic7XG5pbXBvcnQgUmFuZ2UgZnJvbSAnLi9jb21wb25lbnRzL1JhbmdlJztcbmltcG9ydCByYW5nZXNsaWRlckpzIGZyb20gJy4uL25vZGVfbW9kdWxlcy9yYW5nZXNsaWRlci1wdXJlL2Rpc3QvcmFuZ2Utc2xpZGVyJztcblxud2luZG93LmFwcCA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3Qgb2xlZyA9IG5ldyBQZXJzb24oJ09sZWcnLCAnWmFpYXRzJyk7XG5cdC8vIGxldCBzbGlkZXJBZ2UgPSBuZXcgUmFuZ2UoJ2FnZScsICdhZ2Utb3V0Jyk7XG5cdC8vIHNsaWRlckFnZS5pbml0KCk7XG5cdC8vIGxldCBzbGlkZXJIZWlnaHQgPSBuZXcgUmFuZ2UoJ2hlaWdodCcsICdoZWlnaHQtb3V0Jyk7XG5cdC8vIHNsaWRlckhlaWdodC5pbml0KCk7XG5cdC8vIEluaXRpYWxpemUgYSBuZXcgcGx1Z2luIGluc3RhbmNlIGZvciBvbmUgZWxlbWVudCBvciBOb2RlTGlzdCBvZiBlbGVtZW50cy5cblxuXHR2YXIgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FnZScpO1xuXHRyYW5nZXNsaWRlckpzLmNyZWF0ZShzbGlkZXIsIHtcblx0XHRwb2x5ZmlsbDogdHJ1ZSwgICAgIC8vIEJvb2xlYW4sIGlmIHRydWUsIGN1c3RvbSBtYXJrdXAgd2lsbCBiZSBjcmVhdGVkXG5cdFx0cmFuZ2VDbGFzczogJ3JhbmdlU2xpZGVyJyxcblx0XHRkaXNhYmxlZENsYXNzOiAncmFuZ2VTbGlkZXItLWRpc2FibGVkJyxcblx0XHRmaWxsQ2xhc3M6ICdyYW5nZVNsaWRlcl9fZmlsbCcsXG5cdFx0YnVmZmVyQ2xhc3M6ICdyYW5nZVNsaWRlcl9fYnVmZmVyJyxcblx0XHRoYW5kbGVDbGFzczogJ3JhbmdlU2xpZGVyX19oYW5kbGUnLFxuXHRcdHN0YXJ0RXZlbnQ6IFsnbW91c2Vkb3duJywgJ3RvdWNoc3RhcnQnLCAncG9pbnRlcmRvd24nXSxcblx0XHRtb3ZlRXZlbnQ6IFsnbW91c2Vtb3ZlJywgJ3RvdWNobW92ZScsICdwb2ludGVybW92ZSddLFxuXHRcdGVuZEV2ZW50OiBbJ21vdXNldXAnLCAndG91Y2hlbmQnLCAncG9pbnRlcnVwJ10sXG5cdFx0dmVydGljYWw6IGZhbHNlLCAgICAvLyBCb29sZWFuLCBpZiB0cnVlIHNsaWRlciB3aWxsIGJlIGRpc3BsYXllZCBpbiB2ZXJ0aWNhbCBvcmllbnRhdGlvblxuXHRcdG1pbjogbnVsbCwgICAgICAgICAgLy8gTnVtYmVyICwgMFxuXHRcdG1heDogbnVsbCwgICAgICAgICAgLy8gTnVtYmVyLCAxMDBcblx0XHRzdGVwOiBudWxsLCAgICAgICAgIC8vIE51bWJlciwgMVxuXHRcdHZhbHVlOiBudWxsLCAgICAgICAgLy8gTnVtYmVyLCBjZW50ZXIgb2Ygc2xpZGVyXG5cdFx0YnVmZmVyOiBudWxsLCAgICAgICAvLyBOdW1iZXIsIGluIHBlcmNlbnQsIDAgYnkgZGVmYXVsdFxuXHRcdHN0aWNrOiBudWxsLCAgICAgICAgLy8gW051bWJlciBzdGlja1RvLCBOdW1iZXIgc3RpY2tSYWRpdXNdIDogdXNlIGl0IGlmIGhhbmRsZSBzaG91bGQgc3RpY2sgdG8gc3RpY2tUby10aCB2YWx1ZSBpbiBzdGlja1JhZGl1c1xuXHRcdGJvcmRlclJhZGl1czogMTAsICAgLy8gTnVtYmVyLCBpZiB5b3UgdXNlIGJ1ZmZlciArIGJvcmRlci1yYWRpdXMgaW4gY3NzIGZvciBsb29rcyBnb29kLFxuXHRcdG9uSW5pdDogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc29sZS5pbmZvKCdvbkluaXQnKVxuXHRcdH0sXG5cdFx0b25TbGlkZVN0YXJ0OiBmdW5jdGlvbiAocG9zaXRpb24sIHZhbHVlKSB7XG5cdFx0XHRjb25zb2xlLmluZm8oJ29uU2xpZGVTdGFydCcsICdwb3NpdGlvbjogJyArIHBvc2l0aW9uLCAndmFsdWU6ICcgKyB2YWx1ZSk7XG5cdFx0fSxcblx0XHRvblNsaWRlOiBmdW5jdGlvbiAocG9zaXRpb24sIHZhbHVlKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnb25TbGlkZScsICdwb3NpdGlvbjogJyArIHBvc2l0aW9uLCAndmFsdWU6ICcgKyB2YWx1ZSk7XG5cdFx0fSxcblx0XHRvblNsaWRlRW5kOiBmdW5jdGlvbiAocG9zaXRpb24sIHZhbHVlKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ29uU2xpZGVFbmQnLCAncG9zaXRpb246ICcgKyBwb3NpdGlvbiwgJ3ZhbHVlOiAnICsgdmFsdWUpO1xuXHRcdH1cblx0fSk7XG5cbi8vIHVwZGF0ZSBwb3NpdGlvblxuXHR2YXIgdHJpZ2dlckV2ZW50cyA9IHRydWU7IC8vIG9yIGZhbHNlXG5cdHNsaWRlci5yYW5nZVNsaWRlci51cGRhdGUoe21pbiA6IDAsIG1heCA6IDIwLCBzdGVwIDogMC41LCB2YWx1ZSA6IDEuNX0sIHRyaWdnZXJFdmVudHMpO1xuXG5cbn07XG5cblxuXG53aW5kb3cuYXBwKCk7XG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInJhbmdlU2xpZGVyXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInJhbmdlU2xpZGVyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInJhbmdlU2xpZGVyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLyoqXG4gKiBEZWxheXMgYSBmdW5jdGlvbiBmb3IgdGhlIGdpdmVuIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIGFuZCB0aGVuIGNhbGxzXG4gKiBpdCB3aXRoIHRoZSBhcmd1bWVudHMgc3VwcGxpZWQuXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IGZuICAgZnVuY3Rpb25cbiAqIEBwYXJhbSAge051bWJlcn0gICB3YWl0IGRlbGF5XG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgYXJncyBhcmd1bWVudHNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG52YXIgZGVsYXkgPSBleHBvcnRzLmRlbGF5ID0gZnVuY3Rpb24gZGVsYXkoZm4sIHdhaXQpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICB9LCB3YWl0KTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IHdpbGwgbWFrZSBzdXJlIHRoZSBnaXZlblxuICogZnVuY3Rpb24gaXMgbm90IHRyaWdnZXJlZCB0b28gbXVjaC5cbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgZGVib3VuY2VEdXJhdGlvbiBPUFRJT05BTC4gVGhlIGFtb3VudCBvZiB0aW1lIGluIG1pbGxpc2Vjb25kcyBmb3Igd2hpY2ggd2Ugd2lsbCBkZWJvdW5jZSB0aGVcbiAqICAgICAgICAgZnVuY3Rpb24uIChkZWZhdWx0cyB0byAxMDBtcylcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG52YXIgZGVib3VuY2UgPSBleHBvcnRzLmRlYm91bmNlID0gZnVuY3Rpb24gZGVib3VuY2UoZm4pIHtcbiAgdmFyIGRlYm91bmNlRHVyYXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDEwMDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIGlmICghZm4uZGVib3VuY2luZykge1xuICAgICAgZm4ubGFzdFJldHVyblZhbCA9IGZuLmFwcGx5KHdpbmRvdywgYXJncyk7XG4gICAgICBmbi5kZWJvdW5jaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgY2xlYXJUaW1lb3V0KGZuLmRlYm91bmNlVGltZW91dCk7XG4gICAgZm4uZGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBmbi5kZWJvdW5jaW5nID0gZmFsc2U7XG4gICAgfSwgZGVib3VuY2VEdXJhdGlvbik7XG4gICAgcmV0dXJuIGZuLmxhc3RSZXR1cm5WYWw7XG4gIH07XG59O1xuXG52YXIgaXNTdHJpbmcgPSBleHBvcnRzLmlzU3RyaW5nID0gZnVuY3Rpb24gaXNTdHJpbmcob2JqKSB7XG4gIHJldHVybiBvYmogPT09ICcnICsgb2JqO1xufTtcblxudmFyIGlzQXJyYXkgPSBleHBvcnRzLmlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG52YXIgaXNOdW1iZXJMaWtlID0gZXhwb3J0cy5pc051bWJlckxpa2UgPSBmdW5jdGlvbiBpc051bWJlckxpa2Uob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgb2JqICE9PSB1bmRlZmluZWQgJiYgKGlzU3RyaW5nKG9iaikgJiYgaXNGaW5pdGUocGFyc2VGbG9hdChvYmopKSB8fCBpc0Zpbml0ZShvYmopKTtcbn07XG5cbnZhciBnZXRGaXJzTnVtYmVyTGlrZSA9IGV4cG9ydHMuZ2V0Rmlyc051bWJlckxpa2UgPSBmdW5jdGlvbiBnZXRGaXJzTnVtYmVyTGlrZSgpIHtcbiAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gIH1cblxuICBpZiAoIWFyZ3MubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJncy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChpc051bWJlckxpa2UoYXJnc1tpXSkpIHtcbiAgICAgIHJldHVybiBhcmdzW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxudmFyIGlzT2JqZWN0ID0gZXhwb3J0cy5pc09iamVjdCA9IGZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufTtcblxudmFyIHNpbXBsZUV4dGVuZCA9IGV4cG9ydHMuc2ltcGxlRXh0ZW5kID0gZnVuY3Rpb24gc2ltcGxlRXh0ZW5kKGRlZmF1bHRPcHQsIG9wdGlvbnMpIHtcbiAgdmFyIG9wdCA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBkZWZhdWx0T3B0KSB7XG4gICAgb3B0W2tleV0gPSBkZWZhdWx0T3B0W2tleV07XG4gIH1cbiAgZm9yICh2YXIgX2tleTQgaW4gb3B0aW9ucykge1xuICAgIG9wdFtfa2V5NF0gPSBvcHRpb25zW19rZXk0XTtcbiAgfVxuXG4gIHJldHVybiBvcHQ7XG59O1xuXG52YXIgYmV0d2VlbiA9IGV4cG9ydHMuYmV0d2VlbiA9IGZ1bmN0aW9uIGJldHdlZW4ocG9zLCBtaW4sIG1heCkge1xuICBpZiAocG9zIDwgbWluKSB7XG4gICAgcmV0dXJuIG1pbjtcbiAgfVxuICBpZiAocG9zID4gbWF4KSB7XG4gICAgcmV0dXJuIG1heDtcbiAgfVxuICByZXR1cm4gcG9zO1xufTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZG9tID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIGRvbSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9kb20pO1xuXG52YXIgX2Z1bmN0aW9ucyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBmdW5jID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2Z1bmN0aW9ucyk7XG5cbl9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBuZXdMaW5lQW5kVGFiUmVnZXhwID0gbmV3IFJlZ0V4cCgnL1tcXFxcblxcXFx0XS8nLCAnZycpO1xudmFyIE1BWF9TRVRfQllfREVGQVVMVCA9IDEwMDtcbnZhciBIQU5ETEVfUkVTSVpFX0RFTEFZID0gMzAwO1xudmFyIEhBTkRMRV9SRVNJWkVfREVCT1VOQ0UgPSA1MDtcblxudmFyIHBsdWdpbk5hbWUgPSAncmFuZ2VTbGlkZXInO1xudmFyIHBsdWdpbklkZW50aWZpZXIgPSAwO1xudmFyIGlucHV0cmFuZ2UgPSBkb20uc3VwcG9ydHNSYW5nZSgpO1xudmFyIGRlZmF1bHRzID0ge1xuICBwb2x5ZmlsbDogdHJ1ZSxcbiAgcmFuZ2VDbGFzczogJ3JhbmdlU2xpZGVyJyxcbiAgZGlzYWJsZWRDbGFzczogJ3JhbmdlU2xpZGVyLS1kaXNhYmxlZCcsXG4gIGZpbGxDbGFzczogJ3JhbmdlU2xpZGVyX19maWxsJyxcbiAgYnVmZmVyQ2xhc3M6ICdyYW5nZVNsaWRlcl9fYnVmZmVyJyxcbiAgaGFuZGxlQ2xhc3M6ICdyYW5nZVNsaWRlcl9faGFuZGxlJyxcbiAgc3RhcnRFdmVudDogWydtb3VzZWRvd24nLCAndG91Y2hzdGFydCcsICdwb2ludGVyZG93biddLFxuICBtb3ZlRXZlbnQ6IFsnbW91c2Vtb3ZlJywgJ3RvdWNobW92ZScsICdwb2ludGVybW92ZSddLFxuICBlbmRFdmVudDogWydtb3VzZXVwJywgJ3RvdWNoZW5kJywgJ3BvaW50ZXJ1cCddLFxuICBtaW46IG51bGwsXG4gIG1heDogbnVsbCxcbiAgc3RlcDogbnVsbCxcbiAgdmFsdWU6IG51bGwsXG4gIGJ1ZmZlcjogbnVsbCxcbiAgc3RpY2s6IG51bGwsXG4gIGJvcmRlclJhZGl1czogMTAsXG4gIHZlcnRpY2FsOiBmYWxzZVxufTtcblxuLyoqXG4gKiBQbHVnaW5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7dGhpc30gb3B0aW9uc1xuICovXG5cbnZhciBSYW5nZVNsaWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUmFuZ2VTbGlkZXIoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSYW5nZVNsaWRlcik7XG5cbiAgICB2YXIgbWluU2V0QnlEZWZhdWx0ID0gdm9pZCAwO1xuICAgIHZhciBtYXhTZXRCeURlZmF1bHQgPSB2b2lkIDA7XG4gICAgdmFyIHN0ZXBTZXRCeURlZmF1bHQgPSB2b2lkIDA7XG4gICAgdmFyIHN0aWNrQXR0cmlidXRlID0gdm9pZCAwO1xuICAgIHZhciBzdGlja1ZhbHVlcyA9IHZvaWQgMDtcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5vcHRpb25zID0gZnVuYy5zaW1wbGVFeHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIHRoaXMucG9seWZpbGwgPSB0aGlzLm9wdGlvbnMucG9seWZpbGw7XG4gICAgdGhpcy52ZXJ0aWNhbCA9IHRoaXMub3B0aW9ucy52ZXJ0aWNhbDtcbiAgICB0aGlzLm9uSW5pdCA9IHRoaXMub3B0aW9ucy5vbkluaXQ7XG4gICAgdGhpcy5vblNsaWRlID0gdGhpcy5vcHRpb25zLm9uU2xpZGU7XG4gICAgdGhpcy5vblNsaWRlU3RhcnQgPSB0aGlzLm9wdGlvbnMub25TbGlkZVN0YXJ0O1xuICAgIHRoaXMub25TbGlkZUVuZCA9IHRoaXMub3B0aW9ucy5vblNsaWRlRW5kO1xuICAgIHRoaXMub25TbGlkZUV2ZW50c0NvdW50ID0gLTE7XG4gICAgdGhpcy5pc0ludGVyYWN0c05vdyA9IGZhbHNlO1xuICAgIHRoaXMubmVlZFRyaWdnZXJFdmVudHMgPSBmYWxzZTtcblxuICAgIC8vIFBsdWdpbiBzaG91bGQgb25seSBiZSB1c2VkIGFzIGEgcG9seWZpbGxcbiAgICBpZiAoIXRoaXMucG9seWZpbGwpIHtcbiAgICAgIC8vIElucHV0IHJhbmdlIHN1cHBvcnQ/XG4gICAgICBpZiAoaW5wdXRyYW5nZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zLmJ1ZmZlciA9IHRoaXMub3B0aW9ucy5idWZmZXIgfHwgcGFyc2VGbG9hdCh0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJ1ZmZlcicpKTtcblxuICAgIHRoaXMuaWRlbnRpZmllciA9ICdqcy0nICsgcGx1Z2luTmFtZSArICctJyArIHBsdWdpbklkZW50aWZpZXIrKztcblxuICAgIHRoaXMubWluID0gZnVuYy5nZXRGaXJzTnVtYmVyTGlrZSh0aGlzLm9wdGlvbnMubWluLCBwYXJzZUZsb2F0KHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ21pbicpKSwgbWluU2V0QnlEZWZhdWx0ID0gMCk7XG5cbiAgICB0aGlzLm1heCA9IGZ1bmMuZ2V0Rmlyc051bWJlckxpa2UodGhpcy5vcHRpb25zLm1heCwgcGFyc2VGbG9hdCh0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdtYXgnKSksIG1heFNldEJ5RGVmYXVsdCA9IE1BWF9TRVRfQllfREVGQVVMVCk7XG5cbiAgICB0aGlzLnZhbHVlID0gZnVuYy5nZXRGaXJzTnVtYmVyTGlrZSh0aGlzLm9wdGlvbnMudmFsdWUsIHRoaXMuZWxlbWVudC52YWx1ZSwgcGFyc2VGbG9hdCh0aGlzLmVsZW1lbnQudmFsdWUgfHwgdGhpcy5taW4gKyAodGhpcy5tYXggLSB0aGlzLm1pbikgLyAyKSk7XG5cbiAgICB0aGlzLnN0ZXAgPSBmdW5jLmdldEZpcnNOdW1iZXJMaWtlKHRoaXMub3B0aW9ucy5zdGVwLCBwYXJzZUZsb2F0KHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0ZXAnKSkgfHwgKHN0ZXBTZXRCeURlZmF1bHQgPSAxKSk7XG5cbiAgICB0aGlzLnBlcmNlbnQgPSBudWxsO1xuXG4gICAgaWYgKGZ1bmMuaXNBcnJheSh0aGlzLm9wdGlvbnMuc3RpY2spICYmIHRoaXMub3B0aW9ucy5zdGljay5sZW5ndGggPj0gMSkge1xuICAgICAgdGhpcy5zdGljayA9IHRoaXMub3B0aW9ucy5zdGljaztcbiAgICB9IGVsc2UgaWYgKHN0aWNrQXR0cmlidXRlID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnc3RpY2snKSkge1xuICAgICAgc3RpY2tWYWx1ZXMgPSBzdGlja0F0dHJpYnV0ZS5zcGxpdCgnICcpO1xuICAgICAgaWYgKHN0aWNrVmFsdWVzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgIHRoaXMuc3RpY2sgPSBzdGlja1ZhbHVlcy5tYXAocGFyc2VGbG9hdCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnN0aWNrICYmIHRoaXMuc3RpY2subGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLnN0aWNrLnB1c2godGhpcy5zdGVwICogMS41KTtcbiAgICB9XG4gICAgdGhpcy5fdXBkYXRlUGVyY2VudEZyb21WYWx1ZSgpO1xuXG4gICAgdGhpcy50b0ZpeGVkID0gdGhpcy5fdG9GaXhlZCh0aGlzLnN0ZXApO1xuXG4gICAgdmFyIGRpcmVjdGlvbkNsYXNzID0gdm9pZCAwO1xuXG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkb20uYWRkQ2xhc3ModGhpcy5jb250YWluZXIsIHRoaXMub3B0aW9ucy5maWxsQ2xhc3MpO1xuXG4gICAgZGlyZWN0aW9uQ2xhc3MgPSB0aGlzLnZlcnRpY2FsID8gdGhpcy5vcHRpb25zLmZpbGxDbGFzcyArICdfX3ZlcnRpY2FsJyA6IHRoaXMub3B0aW9ucy5maWxsQ2xhc3MgKyAnX19ob3Jpem9udGFsJztcbiAgICBkb20uYWRkQ2xhc3ModGhpcy5jb250YWluZXIsIGRpcmVjdGlvbkNsYXNzKTtcblxuICAgIHRoaXMuaGFuZGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG9tLmFkZENsYXNzKHRoaXMuaGFuZGxlLCB0aGlzLm9wdGlvbnMuaGFuZGxlQ2xhc3MpO1xuXG4gICAgZGlyZWN0aW9uQ2xhc3MgPSB0aGlzLnZlcnRpY2FsID8gdGhpcy5vcHRpb25zLmhhbmRsZUNsYXNzICsgJ19fdmVydGljYWwnIDogdGhpcy5vcHRpb25zLmhhbmRsZUNsYXNzICsgJ19faG9yaXpvbnRhbCc7XG4gICAgZG9tLmFkZENsYXNzKHRoaXMuaGFuZGxlLCBkaXJlY3Rpb25DbGFzcyk7XG5cbiAgICB0aGlzLnJhbmdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG9tLmFkZENsYXNzKHRoaXMucmFuZ2UsIHRoaXMub3B0aW9ucy5yYW5nZUNsYXNzKTtcbiAgICB0aGlzLnJhbmdlLmlkID0gdGhpcy5pZGVudGlmaWVyO1xuICAgIHRoaXMucmFuZ2UuYXBwZW5kQ2hpbGQodGhpcy5oYW5kbGUpO1xuICAgIHRoaXMucmFuZ2UuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xuXG4gICAgZGlyZWN0aW9uQ2xhc3MgPSB0aGlzLnZlcnRpY2FsID8gdGhpcy5vcHRpb25zLnJhbmdlQ2xhc3MgKyAnX192ZXJ0aWNhbCcgOiB0aGlzLm9wdGlvbnMucmFuZ2VDbGFzcyArICdfX2hvcml6b250YWwnO1xuICAgIGRvbS5hZGRDbGFzcyh0aGlzLnJhbmdlLCBkaXJlY3Rpb25DbGFzcyk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmJ1ZmZlckNsYXNzKSB7XG4gICAgICB0aGlzLmJ1ZmZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZG9tLmFkZENsYXNzKHRoaXMuYnVmZmVyLCB0aGlzLm9wdGlvbnMuYnVmZmVyQ2xhc3MpO1xuICAgICAgdGhpcy5yYW5nZS5hcHBlbmRDaGlsZCh0aGlzLmJ1ZmZlcik7XG5cbiAgICAgIGRpcmVjdGlvbkNsYXNzID0gdGhpcy52ZXJ0aWNhbCA/IHRoaXMub3B0aW9ucy5idWZmZXJDbGFzcyArICdfX3ZlcnRpY2FsJyA6IHRoaXMub3B0aW9ucy5idWZmZXJDbGFzcyArICdfX2hvcml6b250YWwnO1xuICAgICAgZG9tLmFkZENsYXNzKHRoaXMuYnVmZmVyLCBkaXJlY3Rpb25DbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKGZ1bmMuaXNOdW1iZXJMaWtlKHRoaXMub3B0aW9ucy52YWx1ZSkpIHtcbiAgICAgIHRoaXMuX3NldFZhbHVlKHRoaXMub3B0aW9ucy52YWx1ZSwgdHJ1ZSk7XG4gICAgICB0aGlzLmVsZW1lbnQudmFsdWUgPSB0aGlzLm9wdGlvbnMudmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKGZ1bmMuaXNOdW1iZXJMaWtlKHRoaXMub3B0aW9ucy5idWZmZXIpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWJ1ZmZlcicsIHRoaXMub3B0aW9ucy5idWZmZXIpO1xuICAgIH1cblxuICAgIGlmIChmdW5jLmlzTnVtYmVyTGlrZSh0aGlzLm9wdGlvbnMubWluKSB8fCBtaW5TZXRCeURlZmF1bHQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21pbicsICcnICsgdGhpcy5taW4pO1xuICAgIH1cblxuICAgIGlmIChmdW5jLmlzTnVtYmVyTGlrZSh0aGlzLm9wdGlvbnMubWF4KSB8fCBtYXhTZXRCeURlZmF1bHQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21heCcsICcnICsgdGhpcy5tYXgpO1xuICAgIH1cblxuICAgIGlmIChmdW5jLmlzTnVtYmVyTGlrZSh0aGlzLm9wdGlvbnMuc3RlcCkgfHwgc3RlcFNldEJ5RGVmYXVsdCkge1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnc3RlcCcsICcnICsgdGhpcy5zdGVwKTtcbiAgICB9XG5cbiAgICBkb20uaW5zZXJ0QWZ0ZXIodGhpcy5lbGVtZW50LCB0aGlzLnJhbmdlKTtcblxuICAgIC8vIGhpZGUgdGhlIGlucHV0IHZpc3VhbGx5XG4gICAgZG9tLnNldENzcyh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICdwb3NpdGlvbic6ICdhYnNvbHV0ZScsXG4gICAgICAnd2lkdGgnOiAnMXB4JyxcbiAgICAgICdoZWlnaHQnOiAnMXB4JyxcbiAgICAgICdvdmVyZmxvdyc6ICdoaWRkZW4nLFxuICAgICAgJ29wYWNpdHknOiAnMCdcbiAgICB9KTtcblxuICAgIC8vIFN0b3JlIGNvbnRleHRcbiAgICB0aGlzLl9oYW5kbGVEb3duID0gdGhpcy5faGFuZGxlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2hhbmRsZU1vdmUgPSB0aGlzLl9oYW5kbGVNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5faGFuZGxlRW5kID0gdGhpcy5faGFuZGxlRW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fc3RhcnRFdmVudExpc3RlbmVyID0gdGhpcy5fc3RhcnRFdmVudExpc3RlbmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fY2hhbmdlRXZlbnRMaXN0ZW5lciA9IHRoaXMuX2NoYW5nZUV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oYW5kbGVSZXNpemUgPSB0aGlzLl9oYW5kbGVSZXNpemUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuX2luaXQoKTtcblxuICAgIC8vIEF0dGFjaCBFdmVudHNcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5faGFuZGxlUmVzaXplLCBmYWxzZSk7XG5cbiAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcnMoZG9jdW1lbnQsIHRoaXMub3B0aW9ucy5zdGFydEV2ZW50LCB0aGlzLl9zdGFydEV2ZW50TGlzdGVuZXIpO1xuXG4gICAgLy8gTGlzdGVuIHRvIHByb2dyYW1tYXRpYyB2YWx1ZSBjaGFuZ2VzXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuX2NoYW5nZUV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbiAgfVxuXG4gIC8qIHB1YmxpYyBtZXRob2RzICovXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogbGlrZSB7bWluIDogTnVtYmVyLCBtYXggOiBOdW1iZXIsIHZhbHVlIDogTnVtYmVyLCBzdGVwIDogTnVtYmVyLCBidWZmZXIgOiBbU3RyaW5nfE51bWJlcl19XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gdHJpZ2dlckV2ZW50c1xuICAgKiBAcmV0dXJucyB7UmFuZ2VTbGlkZXJ9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFJhbmdlU2xpZGVyLCBbe1xuICAgIGtleTogJ3VwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZShvYmosIHRyaWdnZXJFdmVudHMpIHtcbiAgICAgIGlmICh0cmlnZ2VyRXZlbnRzKSB7XG4gICAgICAgIHRoaXMubmVlZFRyaWdnZXJFdmVudHMgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGZ1bmMuaXNPYmplY3Qob2JqKSkge1xuICAgICAgICBpZiAoZnVuYy5pc051bWJlckxpa2Uob2JqLm1pbikpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdtaW4nLCAnJyArIG9iai5taW4pO1xuICAgICAgICAgIHRoaXMubWluID0gb2JqLm1pbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmdW5jLmlzTnVtYmVyTGlrZShvYmoubWF4KSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21heCcsICcnICsgb2JqLm1heCk7XG4gICAgICAgICAgdGhpcy5tYXggPSBvYmoubWF4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZ1bmMuaXNOdW1iZXJMaWtlKG9iai5zdGVwKSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0ZXAnLCAnJyArIG9iai5zdGVwKTtcbiAgICAgICAgICB0aGlzLnN0ZXAgPSBvYmouc3RlcDtcbiAgICAgICAgICB0aGlzLnRvRml4ZWQgPSB0aGlzLl90b0ZpeGVkKG9iai5zdGVwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmdW5jLmlzTnVtYmVyTGlrZShvYmouYnVmZmVyKSkge1xuICAgICAgICAgIHRoaXMuX3NldEJ1ZmZlclBvc2l0aW9uKG9iai5idWZmZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZ1bmMuaXNOdW1iZXJMaWtlKG9iai52YWx1ZSkpIHtcbiAgICAgICAgICB0aGlzLl9zZXRWYWx1ZShvYmoudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl91cGRhdGUoKTtcbiAgICAgIHRoaXMub25TbGlkZUV2ZW50c0NvdW50ID0gMDtcbiAgICAgIHRoaXMubmVlZFRyaWdnZXJFdmVudHMgPSBmYWxzZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Rlc3Ryb3knLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgZG9tLnJlbW92ZUFsbExpc3RlbmVyc0Zyb21FbCh0aGlzLCBkb2N1bWVudCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5faGFuZGxlUmVzaXplLCBmYWxzZSk7XG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5fY2hhbmdlRXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xuXG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgICAgZGVsZXRlIHRoaXMuZWxlbWVudFtwbHVnaW5OYW1lXTtcblxuICAgICAgLy8gUmVtb3ZlIHRoZSBnZW5lcmF0ZWQgbWFya3VwXG4gICAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgICB0aGlzLnJhbmdlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5yYW5nZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBsaWdodHdlaWdodCBwbHVnaW4gd3JhcHBlciBhcm91bmQgdGhlIGNvbnN0cnVjdG9yLHByZXZlbnRpbmcgYWdhaW5zdCBtdWx0aXBsZSBpbnN0YW50aWF0aW9uc1xuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdfdG9GaXhlZCcsXG5cblxuICAgIC8qIHByaXZhdGUgbWV0aG9kcyAqL1xuXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF90b0ZpeGVkKHN0ZXApIHtcbiAgICAgIHJldHVybiAoc3RlcCArICcnKS5yZXBsYWNlKCcuJywgJycpLmxlbmd0aCAtIDE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2luaXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLm9uSW5pdCAmJiB0eXBlb2YgdGhpcy5vbkluaXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5vbkluaXQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3VwZGF0ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ191cGRhdGVQZXJjZW50RnJvbVZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZVBlcmNlbnRGcm9tVmFsdWUoKSB7XG4gICAgICB0aGlzLnBlcmNlbnQgPSAodGhpcy52YWx1ZSAtIHRoaXMubWluKSAvICh0aGlzLm1heCAtIHRoaXMubWluKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBjaGVjayBpZiB0aGlzLmlkZW50aWZpZXIgZXhpc3RzIGluIGV2LnRhcmdldCdzIGFuY2VzdG9yc1xuICAgICAqIEBwYXJhbSBldlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ19zdGFydEV2ZW50TGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc3RhcnRFdmVudExpc3RlbmVyKGV2LCBkYXRhKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgZWwgPSBldi50YXJnZXQ7XG4gICAgICB2YXIgaXNFdmVudE9uU2xpZGVyID0gZmFsc2U7XG5cbiAgICAgIGlmIChldi53aGljaCAhPT0gMSAmJiAhKCd0b3VjaGVzJyBpbiBldikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBkb20uZm9yRWFjaEFuY2VzdG9ycyhlbCwgZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHJldHVybiBpc0V2ZW50T25TbGlkZXIgPSBlbC5pZCA9PT0gX3RoaXMuaWRlbnRpZmllciAmJiAhZG9tLmhhc0NsYXNzKGVsLCBfdGhpcy5vcHRpb25zLmRpc2FibGVkQ2xhc3MpO1xuICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgIGlmIChpc0V2ZW50T25TbGlkZXIpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlRG93bihldiwgZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2NoYW5nZUV2ZW50TGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfY2hhbmdlRXZlbnRMaXN0ZW5lcihldiwgZGF0YSkge1xuICAgICAgaWYgKGRhdGEgJiYgZGF0YS5vcmlnaW4gPT09IHRoaXMuaWRlbnRpZmllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZSA9IGV2LnRhcmdldC52YWx1ZTtcbiAgICAgIHZhciBwb3MgPSB0aGlzLl9nZXRQb3NpdGlvbkZyb21WYWx1ZSh2YWx1ZSk7XG5cbiAgICAgIHRoaXMuX3NldFBvc2l0aW9uKHBvcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX3VwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUoKSB7XG4gICAgICB2YXIgc2l6ZVByb3BlcnR5ID0gdGhpcy52ZXJ0aWNhbCA/ICdvZmZzZXRIZWlnaHQnIDogJ29mZnNldFdpZHRoJztcblxuICAgICAgdGhpcy5oYW5kbGVTaXplID0gZG9tLmdldERpbWVuc2lvbih0aGlzLmhhbmRsZSwgc2l6ZVByb3BlcnR5KTtcbiAgICAgIHRoaXMucmFuZ2VTaXplID0gZG9tLmdldERpbWVuc2lvbih0aGlzLnJhbmdlLCBzaXplUHJvcGVydHkpO1xuICAgICAgdGhpcy5tYXhIYW5kbGVYID0gdGhpcy5yYW5nZVNpemUgLSB0aGlzLmhhbmRsZVNpemU7XG4gICAgICB0aGlzLmdyYWJYID0gdGhpcy5oYW5kbGVTaXplIC8gMjtcbiAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLl9nZXRQb3NpdGlvbkZyb21WYWx1ZSh0aGlzLnZhbHVlKTtcblxuICAgICAgLy8gQ29uc2lkZXIgZGlzYWJsZWQgc3RhdGVcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQuZGlzYWJsZWQpIHtcbiAgICAgICAgZG9tLmFkZENsYXNzKHRoaXMucmFuZ2UsIHRoaXMub3B0aW9ucy5kaXNhYmxlZENsYXNzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbS5yZW1vdmVDbGFzcyh0aGlzLnJhbmdlLCB0aGlzLm9wdGlvbnMuZGlzYWJsZWRDbGFzcyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NldFBvc2l0aW9uKHRoaXMucG9zaXRpb24pO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5idWZmZXJDbGFzcyAmJiB0aGlzLm9wdGlvbnMuYnVmZmVyKSB7XG4gICAgICAgIHRoaXMuX3NldEJ1ZmZlclBvc2l0aW9uKHRoaXMub3B0aW9ucy5idWZmZXIpO1xuICAgICAgfVxuICAgICAgdGhpcy5fdXBkYXRlUGVyY2VudEZyb21WYWx1ZSgpO1xuICAgICAgZG9tLnRyaWdnZXJFdmVudCh0aGlzLmVsZW1lbnQsICdjaGFuZ2UnLCB7IG9yaWdpbjogdGhpcy5pZGVudGlmaWVyIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19oYW5kbGVSZXNpemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlUmVzaXplKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBmdW5jLmRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU2ltdWxhdGUgcmVzaXplRW5kIGV2ZW50LlxuICAgICAgICBmdW5jLmRlbGF5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuX3VwZGF0ZSgpO1xuICAgICAgICB9LCBIQU5ETEVfUkVTSVpFX0RFTEFZKTtcbiAgICAgIH0sIEhBTkRMRV9SRVNJWkVfREVCT1VOQ0UpKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2hhbmRsZURvd24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlRG93bihlKSB7XG4gICAgICB0aGlzLmlzSW50ZXJhY3RzTm93ID0gdHJ1ZTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRvbS5hZGRFdmVudExpc3RlbmVycyhkb2N1bWVudCwgdGhpcy5vcHRpb25zLm1vdmVFdmVudCwgdGhpcy5faGFuZGxlTW92ZSk7XG4gICAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcnMoZG9jdW1lbnQsIHRoaXMub3B0aW9ucy5lbmRFdmVudCwgdGhpcy5faGFuZGxlRW5kKTtcblxuICAgICAgLy8gSWYgd2UgY2xpY2sgb24gdGhlIGhhbmRsZSBkb24ndCBzZXQgdGhlIG5ldyBwb3NpdGlvblxuICAgICAgaWYgKCgnICcgKyBlLnRhcmdldC5jbGFzc05hbWUgKyAnICcpLnJlcGxhY2UobmV3TGluZUFuZFRhYlJlZ2V4cCwgJyAnKS5pbmRleE9mKHRoaXMub3B0aW9ucy5oYW5kbGVDbGFzcykgPiAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBib3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLnJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICB2YXIgcG9zWCA9IHRoaXMuX2dldFJlbGF0aXZlUG9zaXRpb24oZSk7XG4gICAgICB2YXIgcmFuZ2VYID0gdGhpcy52ZXJ0aWNhbCA/IGJvdW5kaW5nQ2xpZW50UmVjdC5ib3R0b20gOiBib3VuZGluZ0NsaWVudFJlY3QubGVmdDtcbiAgICAgIHZhciBoYW5kbGVYID0gdGhpcy5fZ2V0UG9zaXRpb25Gcm9tTm9kZSh0aGlzLmhhbmRsZSkgLSByYW5nZVg7XG4gICAgICB2YXIgcG9zaXRpb24gPSBwb3NYIC0gdGhpcy5ncmFiWDtcblxuICAgICAgdGhpcy5fc2V0UG9zaXRpb24ocG9zaXRpb24pO1xuXG4gICAgICBpZiAocG9zWCA+PSBoYW5kbGVYICYmIHBvc1ggPCBoYW5kbGVYICsgdGhpcy5vcHRpb25zLmJvcmRlclJhZGl1cyAqIDIpIHtcbiAgICAgICAgdGhpcy5ncmFiWCA9IHBvc1ggLSBoYW5kbGVYO1xuICAgICAgfVxuICAgICAgdGhpcy5fdXBkYXRlUGVyY2VudEZyb21WYWx1ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19oYW5kbGVNb3ZlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZU1vdmUoZSkge1xuICAgICAgdmFyIHBvc1ggPSB0aGlzLl9nZXRSZWxhdGl2ZVBvc2l0aW9uKGUpO1xuXG4gICAgICB0aGlzLmlzSW50ZXJhY3RzTm93ID0gdHJ1ZTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX3NldFBvc2l0aW9uKHBvc1ggLSB0aGlzLmdyYWJYKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfaGFuZGxlRW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUVuZChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoZG9jdW1lbnQsIHRoaXMub3B0aW9ucy5tb3ZlRXZlbnQsIHRoaXMuX2hhbmRsZU1vdmUpO1xuICAgICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXJzKGRvY3VtZW50LCB0aGlzLm9wdGlvbnMuZW5kRXZlbnQsIHRoaXMuX2hhbmRsZUVuZCk7XG5cbiAgICAgIC8vIE9rIHdlJ3JlIGRvbmUgZmlyZSB0aGUgY2hhbmdlIGV2ZW50XG4gICAgICBkb20udHJpZ2dlckV2ZW50KHRoaXMuZWxlbWVudCwgJ2NoYW5nZScsIHsgb3JpZ2luOiB0aGlzLmlkZW50aWZpZXIgfSk7XG5cbiAgICAgIGlmICh0aGlzLmlzSW50ZXJhY3RzTm93IHx8IHRoaXMubmVlZFRyaWdnZXJFdmVudHMpIHtcbiAgICAgICAgaWYgKHRoaXMub25TbGlkZUVuZCAmJiB0eXBlb2YgdGhpcy5vblNsaWRlRW5kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5vblNsaWRlRW5kKHRoaXMudmFsdWUsIHRoaXMucGVyY2VudCwgdGhpcy5wb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMub25TbGlkZUV2ZW50c0NvdW50ID0gMDtcbiAgICAgIHRoaXMuaXNJbnRlcmFjdHNOb3cgPSBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfc2V0UG9zaXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0UG9zaXRpb24ocG9zKSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSB2b2lkIDA7XG4gICAgICB2YXIgc3RpY2tSYWRpdXMgPSB2b2lkIDA7XG4gICAgICB2YXIgcmVzdEZyb21WYWx1ZSA9IHZvaWQgMDtcbiAgICAgIHZhciBzdGlja1RvID0gdm9pZCAwO1xuXG4gICAgICAvLyBTbmFwcGluZyBzdGVwc1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5fZ2V0VmFsdWVGcm9tUG9zaXRpb24oZnVuYy5iZXR3ZWVuKHBvcywgMCwgdGhpcy5tYXhIYW5kbGVYKSk7XG5cbiAgICAgIC8vIFN0aWNrIHRvIHN0aWNrWzBdIGluIHJhZGl1cyBzdGlja1sxXVxuICAgICAgaWYgKHRoaXMuc3RpY2spIHtcbiAgICAgICAgc3RpY2tUbyA9IHRoaXMuc3RpY2tbMF07XG4gICAgICAgIHN0aWNrUmFkaXVzID0gdGhpcy5zdGlja1sxXSB8fCAwLjE7XG4gICAgICAgIHJlc3RGcm9tVmFsdWUgPSB2YWx1ZSAlIHN0aWNrVG87XG4gICAgICAgIGlmIChyZXN0RnJvbVZhbHVlIDwgc3RpY2tSYWRpdXMpIHtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC0gcmVzdEZyb21WYWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhzdGlja1RvIC0gcmVzdEZyb21WYWx1ZSkgPCBzdGlja1JhZGl1cykge1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUgLSByZXN0RnJvbVZhbHVlICsgc3RpY2tUbztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcG9zaXRpb24gPSB0aGlzLl9nZXRQb3NpdGlvbkZyb21WYWx1ZSh2YWx1ZSk7XG5cbiAgICAgIC8vIFVwZGF0ZSB1aVxuICAgICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gcG9zaXRpb24gKyB0aGlzLmdyYWJYICsgJ3B4JztcbiAgICAgICAgdGhpcy5oYW5kbGUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoLScgKyBwb3NpdGlvbiArICdweCknO1xuICAgICAgICB0aGlzLmhhbmRsZS5zdHlsZVsnLW1zLXRyYW5zZm9ybSddID0gJ3RyYW5zbGF0ZVkoLScgKyBwb3NpdGlvbiArICdweCknO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUud2lkdGggPSBwb3NpdGlvbiArIHRoaXMuZ3JhYlggKyAncHgnO1xuICAgICAgICB0aGlzLmhhbmRsZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgcG9zaXRpb24gKyAncHgpJztcbiAgICAgICAgdGhpcy5oYW5kbGUuc3R5bGVbJy1tcy10cmFuc2Zvcm0nXSA9ICd0cmFuc2xhdGVYKCcgKyBwb3NpdGlvbiArICdweCknO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zZXRWYWx1ZSh2YWx1ZSk7XG5cbiAgICAgIC8vIFVwZGF0ZSBnbG9iYWxzXG4gICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLl91cGRhdGVQZXJjZW50RnJvbVZhbHVlKCk7XG5cbiAgICAgIGlmICh0aGlzLmlzSW50ZXJhY3RzTm93IHx8IHRoaXMubmVlZFRyaWdnZXJFdmVudHMpIHtcbiAgICAgICAgaWYgKHRoaXMub25TbGlkZVN0YXJ0ICYmIHR5cGVvZiB0aGlzLm9uU2xpZGVTdGFydCA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLm9uU2xpZGVFdmVudHNDb3VudCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMub25TbGlkZVN0YXJ0KHRoaXMudmFsdWUsIHRoaXMucGVyY2VudCwgdGhpcy5wb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vblNsaWRlICYmIHR5cGVvZiB0aGlzLm9uU2xpZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLm9uU2xpZGUodGhpcy52YWx1ZSwgdGhpcy5wZXJjZW50LCB0aGlzLnBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLm9uU2xpZGVFdmVudHNDb3VudCsrO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19zZXRCdWZmZXJQb3NpdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXRCdWZmZXJQb3NpdGlvbihwb3MpIHtcbiAgICAgIHZhciBpc1BlcmNlbnQgPSB0cnVlO1xuXG4gICAgICBpZiAoaXNGaW5pdGUocG9zKSkge1xuICAgICAgICBwb3MgPSBwYXJzZUZsb2F0KHBvcyk7XG4gICAgICB9IGVsc2UgaWYgKGZ1bmMuaXNTdHJpbmcocG9zKSkge1xuICAgICAgICBpZiAocG9zLmluZGV4T2YoJ3B4JykgPiAwKSB7XG4gICAgICAgICAgaXNQZXJjZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcG9zID0gcGFyc2VGbG9hdChwb3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdOZXcgcG9zaXRpb24gbXVzdCBiZSBYWHB4IG9yIFhYJScpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc05hTihwb3MpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignTmV3IHBvc2l0aW9uIGlzIE5hTicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5idWZmZXJDbGFzcykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1lvdSBkaXNhYmxlZCBidWZmZXIsIGl0XFwncyBjbGFzc05hbWUgaXMgZW1wdHknKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGJ1ZmZlclNpemUgPSBpc1BlcmNlbnQgPyBwb3MgOiBwb3MgLyB0aGlzLnJhbmdlU2l6ZSAqIDEwMDtcblxuICAgICAgaWYgKGJ1ZmZlclNpemUgPCAwKSB7XG4gICAgICAgIGJ1ZmZlclNpemUgPSAwO1xuICAgICAgfVxuICAgICAgaWYgKGJ1ZmZlclNpemUgPiAxMDApIHtcbiAgICAgICAgYnVmZmVyU2l6ZSA9IDEwMDtcbiAgICAgIH1cbiAgICAgIHRoaXMub3B0aW9ucy5idWZmZXIgPSBidWZmZXJTaXplO1xuXG4gICAgICB2YXIgcGFkZGluZ1NpemUgPSB0aGlzLm9wdGlvbnMuYm9yZGVyUmFkaXVzIC8gdGhpcy5yYW5nZVNpemUgKiAxMDA7XG4gICAgICB2YXIgYnVmZmVyU2l6ZVdpdGhQYWRkaW5nID0gYnVmZmVyU2l6ZSAtIHBhZGRpbmdTaXplO1xuXG4gICAgICBpZiAoYnVmZmVyU2l6ZVdpdGhQYWRkaW5nIDwgMCkge1xuICAgICAgICBidWZmZXJTaXplV2l0aFBhZGRpbmcgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgICB0aGlzLmJ1ZmZlci5zdHlsZS5oZWlnaHQgPSBidWZmZXJTaXplV2l0aFBhZGRpbmcgKyAnJSc7XG4gICAgICAgIHRoaXMuYnVmZmVyLnN0eWxlLmJvdHRvbSA9IHBhZGRpbmdTaXplICogMC41ICsgJyUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5idWZmZXIuc3R5bGUud2lkdGggPSBidWZmZXJTaXplV2l0aFBhZGRpbmcgKyAnJSc7XG4gICAgICAgIHRoaXMuYnVmZmVyLnN0eWxlLmxlZnQgPSBwYWRkaW5nU2l6ZSAqIDAuNSArICclJztcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1idWZmZXInLCBidWZmZXJTaXplKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZVxuICAgICAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGVsZW1lbnQgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIHBhcmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ19nZXRQb3NpdGlvbkZyb21Ob2RlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2dldFBvc2l0aW9uRnJvbU5vZGUobm9kZSkge1xuICAgICAgdmFyIGkgPSB0aGlzLnZlcnRpY2FsID8gdGhpcy5tYXhIYW5kbGVYIDogMDtcblxuICAgICAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgaSArPSB0aGlzLnZlcnRpY2FsID8gbm9kZS5vZmZzZXRUb3AgOiBub2RlLm9mZnNldExlZnQ7XG4gICAgICAgIG5vZGUgPSBub2RlLm9mZnNldFBhcmVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHsoTW91c2VFdmVudHxUb3VjaEV2ZW50KX1lXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnX2dldFJlbGF0aXZlUG9zaXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0UmVsYXRpdmVQb3NpdGlvbihlKSB7XG4gICAgICB2YXIgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5yYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgLy8gR2V0IHRoZSBvZmZzZXQgcmVsYXRpdmUgdG8gdGhlIHZpZXdwb3J0XG4gICAgICB2YXIgcmFuZ2VTaXplID0gdGhpcy52ZXJ0aWNhbCA/IGJvdW5kaW5nQ2xpZW50UmVjdC5ib3R0b20gOiBib3VuZGluZ0NsaWVudFJlY3QubGVmdDtcbiAgICAgIHZhciBwYWdlT2Zmc2V0ID0gMDtcblxuICAgICAgdmFyIHBhZ2VQb3NpdGlvblByb3BlcnR5ID0gdGhpcy52ZXJ0aWNhbCA/ICdwYWdlWScgOiAncGFnZVgnO1xuXG4gICAgICBpZiAodHlwZW9mIGVbcGFnZVBvc2l0aW9uUHJvcGVydHldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBwYWdlT2Zmc2V0ID0gZS50b3VjaGVzICYmIGUudG91Y2hlcy5sZW5ndGggPyBlLnRvdWNoZXNbMF1bcGFnZVBvc2l0aW9uUHJvcGVydHldIDogZVtwYWdlUG9zaXRpb25Qcm9wZXJ0eV07XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlLm9yaWdpbmFsRXZlbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZS5vcmlnaW5hbEV2ZW50W3BhZ2VQb3NpdGlvblByb3BlcnR5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBwYWdlT2Zmc2V0ID0gZS5vcmlnaW5hbEV2ZW50W3BhZ2VQb3NpdGlvblByb3BlcnR5XTtcbiAgICAgICAgfSBlbHNlIGlmIChlLm9yaWdpbmFsRXZlbnQudG91Y2hlcyAmJiBlLm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXSAmJiB0eXBlb2YgZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF1bcGFnZVBvc2l0aW9uUHJvcGVydHldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHBhZ2VPZmZzZXQgPSBlLm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXVtwYWdlUG9zaXRpb25Qcm9wZXJ0eV07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZS50b3VjaGVzICYmIGUudG91Y2hlc1swXSAmJiB0eXBlb2YgZS50b3VjaGVzWzBdW3BhZ2VQb3NpdGlvblByb3BlcnR5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcGFnZU9mZnNldCA9IGUudG91Y2hlc1swXVtwYWdlUG9zaXRpb25Qcm9wZXJ0eV07XG4gICAgICB9IGVsc2UgaWYgKGUuY3VycmVudFBvaW50ICYmICh0eXBlb2YgZS5jdXJyZW50UG9pbnQueCAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGUuY3VycmVudFBvaW50LnkgIT09ICd1bmRlZmluZWQnKSkge1xuICAgICAgICBwYWdlT2Zmc2V0ID0gdGhpcy52ZXJ0aWNhbCA/IGUuY3VycmVudFBvaW50LnkgOiBlLmN1cnJlbnRQb2ludC54O1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgICBwYWdlT2Zmc2V0IC09IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMudmVydGljYWwgPyByYW5nZVNpemUgLSBwYWdlT2Zmc2V0IDogcGFnZU9mZnNldCAtIHJhbmdlU2l6ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfZ2V0UG9zaXRpb25Gcm9tVmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0UG9zaXRpb25Gcm9tVmFsdWUodmFsdWUpIHtcbiAgICAgIHZhciBwZXJjZW50YWdlID0gKHZhbHVlIC0gdGhpcy5taW4pIC8gKHRoaXMubWF4IC0gdGhpcy5taW4pO1xuICAgICAgdmFyIHBvcyA9IHBlcmNlbnRhZ2UgKiB0aGlzLm1heEhhbmRsZVg7XG5cbiAgICAgIHJldHVybiBpc05hTihwb3MpID8gMCA6IHBvcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfZ2V0VmFsdWVGcm9tUG9zaXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0VmFsdWVGcm9tUG9zaXRpb24ocG9zKSB7XG4gICAgICB2YXIgcGVyY2VudGFnZSA9IHBvcyAvICh0aGlzLm1heEhhbmRsZVggfHwgMSk7XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLnN0ZXAgKiBNYXRoLnJvdW5kKHBlcmNlbnRhZ2UgKiAodGhpcy5tYXggLSB0aGlzLm1pbikgLyB0aGlzLnN0ZXApICsgdGhpcy5taW47XG5cbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUudG9GaXhlZCh0aGlzLnRvRml4ZWQpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfc2V0VmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0VmFsdWUodmFsdWUsIGZvcmNlKSB7XG4gICAgICBpZiAodmFsdWUgPT09IHRoaXMudmFsdWUgJiYgIWZvcmNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0IHRoZSBuZXcgdmFsdWUgYW5kIGZpcmUgdGhlIGBpbnB1dGAgZXZlbnRcbiAgICAgIHRoaXMuZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgZG9tLnRyaWdnZXJFdmVudCh0aGlzLmVsZW1lbnQsICdpbnB1dCcsIHsgb3JpZ2luOiB0aGlzLmlkZW50aWZpZXIgfSk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6ICdjcmVhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGUoZWwsIG9wdGlvbnMpIHtcbiAgICAgIHZhciBjcmVhdGVJbnN0YW5jZSA9IGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGVsKSB7XG4gICAgICAgIHZhciBkYXRhID0gZWxbcGx1Z2luTmFtZV07XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlLlxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IFJhbmdlU2xpZGVyKGVsLCBvcHRpb25zKTtcbiAgICAgICAgICBlbFtwbHVnaW5OYW1lXSA9IGRhdGE7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmIChlbC5sZW5ndGgpIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWwpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgY3JlYXRlSW5zdGFuY2UoZWwpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNyZWF0ZUluc3RhbmNlKGVsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUmFuZ2VTbGlkZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJhbmdlU2xpZGVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5zdXBwb3J0c1JhbmdlID0gZXhwb3J0cy5yZW1vdmVBbGxMaXN0ZW5lcnNGcm9tRWwgPSBleHBvcnRzLnJlbW92ZUV2ZW50TGlzdGVuZXJzID0gZXhwb3J0cy5hZGRFdmVudExpc3RlbmVycyA9IGV4cG9ydHMuaW5zZXJ0QWZ0ZXIgPSBleHBvcnRzLnRyaWdnZXJFdmVudCA9IGV4cG9ydHMuZm9yRWFjaEFuY2VzdG9ycyA9IGV4cG9ydHMucmVtb3ZlQ2xhc3MgPSBleHBvcnRzLmFkZENsYXNzID0gZXhwb3J0cy5oYXNDbGFzcyA9IGV4cG9ydHMuc2V0Q3NzID0gZXhwb3J0cy5nZXREaW1lbnNpb24gPSBleHBvcnRzLmdldEhpZGRlblBhcmVudE5vZGVzID0gZXhwb3J0cy5pc0hpZGRlbiA9IGV4cG9ydHMuZGV0ZWN0SUUgPSB1bmRlZmluZWQ7XG5cbnZhciBfZnVuY3Rpb25zID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIGZ1bmMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfZnVuY3Rpb25zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIEVWRU5UX0xJU1RFTkVSX0xJU1QgPSAnZXZlbnRMaXN0ZW5lckxpc3QnO1xuXG52YXIgZGV0ZWN0SUUgPSBleHBvcnRzLmRldGVjdElFID0gZnVuY3Rpb24gZGV0ZWN0SUUoKSB7XG4gIHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICB2YXIgbXNpZSA9IHVhLmluZGV4T2YoJ01TSUUgJyk7XG5cbiAgaWYgKG1zaWUgPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHVhLnN1YnN0cmluZyhtc2llICsgNSwgdWEuaW5kZXhPZignLicsIG1zaWUpKSwgMTApO1xuICB9XG5cbiAgdmFyIHRyaWRlbnQgPSB1YS5pbmRleE9mKCdUcmlkZW50LycpO1xuXG4gIGlmICh0cmlkZW50ID4gMCkge1xuICAgIHZhciBydiA9IHVhLmluZGV4T2YoJ3J2OicpO1xuXG4gICAgcmV0dXJuIHBhcnNlSW50KHVhLnN1YnN0cmluZyhydiArIDMsIHVhLmluZGV4T2YoJy4nLCBydikpLCAxMCk7XG4gIH1cblxuICB2YXIgZWRnZSA9IHVhLmluZGV4T2YoJ0VkZ2UvJyk7XG5cbiAgaWYgKGVkZ2UgPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHVhLnN1YnN0cmluZyhlZGdlICsgNSwgdWEuaW5kZXhPZignLicsIGVkZ2UpKSwgMTApO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIGllVmVyc2lvbiA9IGRldGVjdElFKCk7XG52YXIgZXZlbnRDYXB0dXJlUGFyYW1zID0gd2luZG93LlBvaW50ZXJFdmVudCAmJiAhaWVWZXJzaW9uID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2U7XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBgZWxlbWVudGAgaXMgdmlzaWJsZSBpbiB0aGUgRE9NXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gIGVsZW1lbnRcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbnZhciBpc0hpZGRlbiA9IGV4cG9ydHMuaXNIaWRkZW4gPSBmdW5jdGlvbiBpc0hpZGRlbihlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50Lm9mZnNldFdpZHRoID09PSAwIHx8IGVsZW1lbnQub2Zmc2V0SGVpZ2h0ID09PSAwIHx8IGVsZW1lbnQub3BlbiA9PT0gZmFsc2U7XG59O1xuXG4vKipcbiAqIEdldCBoaWRkZW4gcGFyZW50Tm9kZXMgb2YgYW4gYGVsZW1lbnRgXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJuIHtFbGVtZW50W119XG4gKi9cbnZhciBnZXRIaWRkZW5QYXJlbnROb2RlcyA9IGV4cG9ydHMuZ2V0SGlkZGVuUGFyZW50Tm9kZXMgPSBmdW5jdGlvbiBnZXRIaWRkZW5QYXJlbnROb2RlcyhlbGVtZW50KSB7XG4gIHZhciBwYXJlbnRzID0gW107XG4gIHZhciBub2RlID0gZWxlbWVudC5wYXJlbnROb2RlO1xuXG4gIHdoaWxlIChpc0hpZGRlbihub2RlKSkge1xuICAgIHBhcmVudHMucHVzaChub2RlKTtcbiAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiBwYXJlbnRzO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGRpbWVuc2lvbnMgZm9yIGFuIGVsZW1lbnQgZXZlbiBpZiBpdCBpcyBub3QgdmlzaWJsZSBpbiB0aGUgRE9NLlxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSAge3N0cmluZ30gIGtleSAgICAgKGUuZy4gb2Zmc2V0V2lkdGgg4oCmKVxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG52YXIgZ2V0RGltZW5zaW9uID0gZXhwb3J0cy5nZXREaW1lbnNpb24gPSBmdW5jdGlvbiBnZXREaW1lbnNpb24oZWxlbWVudCwga2V5KSB7XG4gIHZhciBoaWRkZW5QYXJlbnROb2RlcyA9IGdldEhpZGRlblBhcmVudE5vZGVzKGVsZW1lbnQpO1xuICB2YXIgaGlkZGVuUGFyZW50Tm9kZXNMZW5ndGggPSBoaWRkZW5QYXJlbnROb2Rlcy5sZW5ndGg7XG4gIHZhciBkaXNwbGF5UHJvcGVydHkgPSBbXTtcbiAgdmFyIGRpbWVuc2lvbiA9IGVsZW1lbnRba2V5XTtcblxuICAvLyBVc2VkIGZvciBuYXRpdmUgYDxkZXRhaWxzPmAgZWxlbWVudHNcbiAgdmFyIHRvZ2dsZU9wZW5Qcm9wZXJ0eSA9IGZ1bmN0aW9uIHRvZ2dsZU9wZW5Qcm9wZXJ0eShlbGVtZW50KSB7XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50Lm9wZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBlbGVtZW50Lm9wZW4gPSAhZWxlbWVudC5vcGVuO1xuICAgIH1cbiAgfTtcblxuICBpZiAoaGlkZGVuUGFyZW50Tm9kZXNMZW5ndGgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhpZGRlblBhcmVudE5vZGVzTGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIENhY2hlIHRoZSBkaXNwbGF5IHByb3BlcnR5IHRvIHJlc3RvcmUgaXQgbGF0ZXIuXG4gICAgICBkaXNwbGF5UHJvcGVydHlbaV0gPSBoaWRkZW5QYXJlbnROb2Rlc1tpXS5zdHlsZS5kaXNwbGF5O1xuXG4gICAgICBoaWRkZW5QYXJlbnROb2Rlc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGhpZGRlblBhcmVudE5vZGVzW2ldLnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgIGhpZGRlblBhcmVudE5vZGVzW2ldLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICBoaWRkZW5QYXJlbnROb2Rlc1tpXS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICB0b2dnbGVPcGVuUHJvcGVydHkoaGlkZGVuUGFyZW50Tm9kZXNbaV0pO1xuICAgIH1cblxuICAgIGRpbWVuc2lvbiA9IGVsZW1lbnRba2V5XTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgaGlkZGVuUGFyZW50Tm9kZXNMZW5ndGg7IGorKykge1xuICAgICAgdG9nZ2xlT3BlblByb3BlcnR5KGhpZGRlblBhcmVudE5vZGVzW2pdKTtcbiAgICAgIGhpZGRlblBhcmVudE5vZGVzW2pdLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5UHJvcGVydHlbal07XG4gICAgICBoaWRkZW5QYXJlbnROb2Rlc1tqXS5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgIGhpZGRlblBhcmVudE5vZGVzW2pdLnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgICBoaWRkZW5QYXJlbnROb2Rlc1tqXS5zdHlsZS52aXNpYmlsaXR5ID0gJyc7XG4gICAgfVxuICB9XG4gIHJldHVybiBkaW1lbnNpb247XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICogQHBhcmFtIHtPYmplY3R9IGNzc09ialxuICogQHJldHVybnMgeyp9XG4gKi9cbnZhciBzZXRDc3MgPSBleHBvcnRzLnNldENzcyA9IGZ1bmN0aW9uIHNldENzcyhlbCwgY3NzT2JqKSB7XG4gIGZvciAodmFyIGtleSBpbiBjc3NPYmopIHtcbiAgICBlbC5zdHlsZVtrZXldID0gY3NzT2JqW2tleV07XG4gIH1cbiAgcmV0dXJuIGVsLnN0eWxlO1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICovXG52YXIgaGFzQ2xhc3MgPSBleHBvcnRzLmhhc0NsYXNzID0gZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gIHJldHVybiBuZXcgUmVnRXhwKCcgJyArIGNsYXNzTmFtZSArICcgJykudGVzdCgnICcgKyBlbGVtLmNsYXNzTmFtZSArICcgJyk7XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gKi9cbnZhciBhZGRDbGFzcyA9IGV4cG9ydHMuYWRkQ2xhc3MgPSBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgaWYgKCFoYXNDbGFzcyhlbGVtLCBjbGFzc05hbWUpKSB7XG4gICAgZWxlbS5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xuICB9XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gKi9cbnZhciByZW1vdmVDbGFzcyA9IGV4cG9ydHMucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgdmFyIG5ld0NsYXNzID0gJyAnICsgZWxlbS5jbGFzc05hbWUucmVwbGFjZSgvW1xcdFxcclxcbl0vZywgJyAnKSArICcgJztcblxuICBpZiAoaGFzQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSkge1xuICAgIHdoaWxlIChuZXdDbGFzcy5pbmRleE9mKCcgJyArIGNsYXNzTmFtZSArICcgJykgPj0gMCkge1xuICAgICAgbmV3Q2xhc3MgPSBuZXdDbGFzcy5yZXBsYWNlKCcgJyArIGNsYXNzTmFtZSArICcgJywgJyAnKTtcbiAgICB9XG4gICAgZWxlbS5jbGFzc05hbWUgPSBuZXdDbGFzcy5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG4gIH1cbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtib29sZWFufSBhbmRGb3JFbGVtZW50IC0gYXBwbHkgY2FsbGJhY2sgZm9yIGVsXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gKi9cbnZhciBmb3JFYWNoQW5jZXN0b3JzID0gZXhwb3J0cy5mb3JFYWNoQW5jZXN0b3JzID0gZnVuY3Rpb24gZm9yRWFjaEFuY2VzdG9ycyhlbCwgY2FsbGJhY2ssIGFuZEZvckVsZW1lbnQpIHtcbiAgaWYgKGFuZEZvckVsZW1lbnQpIHtcbiAgICBjYWxsYmFjayhlbCk7XG4gIH1cblxuICB3aGlsZSAoZWwucGFyZW50Tm9kZSAmJiAhY2FsbGJhY2soZWwpKSB7XG4gICAgZWwgPSBlbC5wYXJlbnROb2RlO1xuICB9XG5cbiAgcmV0dXJuIGVsO1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIGV2ZW50IG5hbWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gKi9cbnZhciB0cmlnZ2VyRXZlbnQgPSBleHBvcnRzLnRyaWdnZXJFdmVudCA9IGZ1bmN0aW9uIHRyaWdnZXJFdmVudChlbCwgbmFtZSwgZGF0YSkge1xuICBpZiAoIWZ1bmMuaXNTdHJpbmcobmFtZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdldmVudCBuYW1lIG11c3QgYmUgU3RyaW5nJyk7XG4gIH1cbiAgaWYgKCEoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbGVtZW50IG11c3QgYmUgSFRNTEVsZW1lbnQnKTtcbiAgfVxuICBuYW1lID0gbmFtZS50cmltKCk7XG4gIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuXG4gIGV2ZW50LmluaXRDdXN0b21FdmVudChuYW1lLCBmYWxzZSwgZmFsc2UsIGRhdGEpO1xuICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IHJlZmVyZW5jZU5vZGUgYWZ0ZXIgdGhpc1xuICogQHBhcmFtIHtPYmplY3R9IG5ld05vZGUgaW5zZXJ0IHRoaXNcbiAqL1xudmFyIGluc2VydEFmdGVyID0gZXhwb3J0cy5pbnNlcnRBZnRlciA9IGZ1bmN0aW9uIGluc2VydEFmdGVyKHJlZmVyZW5jZU5vZGUsIG5ld05vZGUpIHtcbiAgcmV0dXJuIHJlZmVyZW5jZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZS5uZXh0U2libGluZyk7XG59O1xuXG4vKipcbiAqIEFkZCBldmVudCBsaXN0ZW5lcnMgYW5kIHB1c2ggdGhlbSB0byBlbFtFVkVOVF9MSVNURU5FUl9MSVNUXVxuICogQHBhcmFtIHtIVE1MRWxlbWVudHxOb2RlfERvY3VtZW50fSBlbCBET00gZWxlbWVudFxuICogQHBhcmFtIHtBcnJheX0gZXZlbnRzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICovXG52YXIgYWRkRXZlbnRMaXN0ZW5lcnMgPSBleHBvcnRzLmFkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoZWwsIGV2ZW50cywgbGlzdGVuZXIpIHtcbiAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgIGlmICghZWxbRVZFTlRfTElTVEVORVJfTElTVF0pIHtcbiAgICAgIGVsW0VWRU5UX0xJU1RFTkVSX0xJU1RdID0ge307XG4gICAgfVxuICAgIGlmICghZWxbRVZFTlRfTElTVEVORVJfTElTVF1bZXZlbnROYW1lXSkge1xuICAgICAgZWxbRVZFTlRfTElTVEVORVJfTElTVF1bZXZlbnROYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lciwgZXZlbnRDYXB0dXJlUGFyYW1zKTtcbiAgICBpZiAoZWxbRVZFTlRfTElTVEVORVJfTElTVF1bZXZlbnROYW1lXS5pbmRleE9mKGxpc3RlbmVyKSA8IDApIHtcbiAgICAgIGVsW0VWRU5UX0xJU1RFTkVSX0xJU1RdW2V2ZW50TmFtZV0ucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBhbmQgcmVtb3ZlIHRoZW0gZnJvbSBlbFtFVkVOVF9MSVNURU5FUl9MSVNUXVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7QXJyYXl9IGV2ZW50c1xuICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcbiAqL1xudmFyIHJlbW92ZUV2ZW50TGlzdGVuZXJzID0gZXhwb3J0cy5yZW1vdmVFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKGVsLCBldmVudHMsIGxpc3RlbmVyKSB7XG4gIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICB2YXIgaW5kZXggPSB2b2lkIDA7XG5cbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIsIGZhbHNlKTtcblxuICAgIGlmIChlbFtFVkVOVF9MSVNURU5FUl9MSVNUXSAmJiBlbFtFVkVOVF9MSVNURU5FUl9MSVNUXVtldmVudE5hbWVdICYmIChpbmRleCA9IGVsW0VWRU5UX0xJU1RFTkVSX0xJU1RdW2V2ZW50TmFtZV0uaW5kZXhPZihsaXN0ZW5lcikpID4gLTEpIHtcbiAgICAgIGVsW0VWRU5UX0xJU1RFTkVSX0xJU1RdW2V2ZW50TmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgQUxMIGV2ZW50IGxpc3RlbmVycyB3aGljaCBleGlzdHMgaW4gZWxbRVZFTlRfTElTVEVORVJfTElTVF1cbiAqIEBwYXJhbSBpbnN0YW5jZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgRE9NIGVsZW1lbnRcbiAqL1xudmFyIHJlbW92ZUFsbExpc3RlbmVyc0Zyb21FbCA9IGV4cG9ydHMucmVtb3ZlQWxsTGlzdGVuZXJzRnJvbUVsID0gZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzRnJvbUVsKGluc3RhbmNlLCBlbCkge1xuICBpZiAoIWVsW0VWRU5UX0xJU1RFTkVSX0xJU1RdKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoganNoaW50IGlnbm9yZTpzdGFydCAqL1xuXG4gIC8qKlxuICAgKlxuICAgKiBAY2FsbGJhY2sgbGlzdGVuZXJcbiAgICogQHRoaXMge09iamVjdH0gZXZlbnQgbmFtZVxuICAgKi9cbiAgZnVuY3Rpb24gcm0obGlzdGVuZXIpIHtcbiAgICBpZiAobGlzdGVuZXIgPT09IGluc3RhbmNlLl9zdGFydEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50TmFtZSwgbGlzdGVuZXIsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBldmVudE5hbWUgaW4gZWxbRVZFTlRfTElTVEVORVJfTElTVF0pIHtcbiAgICBlbFtFVkVOVF9MSVNURU5FUl9MSVNUXVtldmVudE5hbWVdLmZvckVhY2gocm0sIHsgZXZlbnROYW1lOiBldmVudE5hbWUsIGVsOiBlbCB9KTtcbiAgfVxuXG4gIGVsW0VWRU5UX0xJU1RFTkVSX0xJU1RdID0ge307XG4gIC8qIGpzaGludCBpZ25vcmU6ZW5kICovXG59O1xuXG4vKipcbiAqIFJhbmdlIGZlYXR1cmUgZGV0ZWN0aW9uXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG52YXIgc3VwcG9ydHNSYW5nZSA9IGV4cG9ydHMuc3VwcG9ydHNSYW5nZSA9IGZ1bmN0aW9uIHN1cHBvcnRzUmFuZ2UoKSB7XG4gIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhbmdlJyk7XG4gIHJldHVybiBpbnB1dC50eXBlICE9PSAndGV4dCc7XG59O1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5nZS1zbGlkZXIuanMubWFwIiwiY2xhc3MgUGVyc29uIHtcblx0Y29uc3RydWN0b3IoZmlyc3ROYW1lLCBsYXN0TmFtZSkge1xuXHRcdHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xuXHRcdHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcblx0fVxuXG5cdGdldCBmdWxsTmFtZSgpIHtcblx0XHRyZXR1cm4gYCR7dGhpcy5maXJzdE5hbWV9ICR7dGhpcy5sYXN0TmFtZX1gO1xuXHR9XG59XG5leHBvcnQge1BlcnNvbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXIge1xuXHRjb25zdHJ1Y3RvcihzbGlkZXIsIG91dHB1dCkge1xuXHRcdHRoaXMueCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNsaWRlcik7XG5cdFx0dGhpcy55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3V0cHV0KTtcblx0fVxuXG5cdGluaXQoKSB7XG5cdFx0dGhpcy55LmlubmVySFRNTCA9IHRoaXMueC52YWx1ZTtcblx0XHR0aGlzLnguYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZ0KSA9PiB0aGlzLnkuaW5uZXJIVE1MID0gZXZ0LnRhcmdldC52YWx1ZSk7XG5cdH1cbn1cblxuIl19
