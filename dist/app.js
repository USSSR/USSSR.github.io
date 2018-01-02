(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _interopRequire = function _interopRequire(obj) {
	return obj && obj.__esModule ? obj["default"] : obj;
};

var config = _interopRequire(require("./components/config"));

var Range = _interopRequire(require("./components/Range"));

var rangesliderJs = _interopRequire(require("../node_modules/rangeslider-pure/dist/range-slider"));

window.app = function () {
	var ageSlider = document.getElementById("age"),
	    heightSlider = document.getElementById("height");

	rangesliderJs.create(ageSlider, config.rangeSlider);
	rangesliderJs.create(heightSlider, config.rangeSlider);

	document.getElementsByClassName("button")[0].addEventListener("click", function (e) {
		e.preventDefault();
		console.log(e);
	});
};
window.app();

},{"../node_modules/rangeslider-pure/dist/range-slider":2,"./components/Range":3,"./components/config":4}],2:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
"use strict";

var config = {
	rangeSlider: {
		polyfill: true,
		disabledClass: "rangeSlider--disabled",
		rangeClass: "rangeSlider",
		fillClass: "rangeSlider__fill",
		bufferClass: "rangeSlider__buffer",
		handleClass: "rangeSlider__handle",
		startEvent: ["mousedown", "touchstart", "pointerdown"],
		moveEvent: ["mousemove", "touchmove", "pointermove"],
		endEvent: ["mouseup", "touchend", "pointerup"],
		vertical: false,
		min: null,
		max: null,
		step: null,
		value: null,
		buffer: null,
		stick: null,
		borderRadius: 0,
		onSlideEnd: function onSlideEnd(value) {
			var outElement = document.getElementById(this.element.dataset.out);
			outElement.innerHTML = value;
		}
	}
};
module.exports = config;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS96YWlhdHM4NS9EZXNrdG9wL3Rlc3R0YXNrL3NyYy9hcHAuanMiLCJub2RlX21vZHVsZXMvcmFuZ2VzbGlkZXItcHVyZS9kaXN0L3JhbmdlLXNsaWRlci5qcyIsIi9ob21lL3phaWF0czg1L0Rlc2t0b3AvdGVzdHRhc2svc3JjL2NvbXBvbmVudHMvUmFuZ2UuanMiLCIvaG9tZS96YWlhdHM4NS9EZXNrdG9wL3Rlc3R0YXNrL3NyYy9jb21wb25lbnRzL2NvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLFlBQVksQ0FBQzs7QUFFYixJQUFJLGVBQWUsR0FBRyxTQUFBLGVBQUEsQ0FBVSxHQUFHLEVBQUU7QUFBRSxRQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUM7Q0FBRSxDQUFDOztBQUU5RixJQUpPLE1BQU0sR0FBQSxlQUFBLENBQUEsT0FBQSxDQUFNLHFCQUFxQixDQUFBLENBQUEsQ0FBQTs7QUFNeEMsSUFMTyxLQUFLLEdBQUEsZUFBQSxDQUFBLE9BQUEsQ0FBTSxvQkFBb0IsQ0FBQSxDQUFBLENBQUE7O0FBT3RDLElBTk8sYUFBYSxHQUFBLGVBQUEsQ0FBQSxPQUFBLENBQU0sb0RBQW9ELENBQUEsQ0FBQSxDQUFBOztBQUc5RSxNQUFNLENBQUMsR0FBRyxHQUFHLFlBQVk7QUFDeEIsS0FBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7S0FDL0MsWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7O0FBRWxELGNBQWEsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNwRCxjQUFhLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7O0FBRXZELFNBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBUyxDQUFDLEVBQUM7QUFDakYsR0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ25CLFNBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDZixDQUFDLENBQUE7Q0FFRixDQUFDO0FBQ0YsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDOzs7QUNsQmI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7SUNsbkNxQixNQUFNO0FBQ2YsVUFEUyxNQUFNLENBQ2QsTUFBTSxFQUFFLE1BQU0sRUFBRTt3QkFEUixNQUFNOztBQUV6QixNQUFJLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDekMsTUFBSSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ3pDOztjQUptQixNQUFNO0FBTTFCLE1BQUk7VUFBQSxnQkFBRzs7O0FBQ04sUUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDaEMsUUFBSSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxHQUFHO1lBQUssTUFBSyxDQUFDLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSztLQUFBLENBQUMsQ0FBQztJQUMvRTs7OztRQVRtQixNQUFNOzs7aUJBQU4sTUFBTTs7Ozs7QUNBM0IsSUFBTSxNQUFNLEdBQUc7QUFDZCxZQUFXLEVBQUU7QUFDWixVQUFRLEVBQUUsSUFBSTtBQUNiLGVBQWEsRUFBRSx1QkFBdUI7QUFDdEMsWUFBVSxFQUFFLGFBQWE7QUFDekIsV0FBUyxFQUFFLG1CQUFtQjtBQUM5QixhQUFXLEVBQUUscUJBQXFCO0FBQ2xDLGFBQVcsRUFBRSxxQkFBcUI7QUFDbEMsWUFBVSxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUM7QUFDdEQsV0FBUyxFQUFFLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxhQUFhLENBQUM7QUFDcEQsVUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUM7QUFDOUMsVUFBUSxFQUFFLEtBQUs7QUFDZixLQUFHLEVBQUUsSUFBSTtBQUNULEtBQUcsRUFBRSxJQUFJO0FBQ1QsTUFBSSxFQUFFLElBQUk7QUFDVixPQUFLLEVBQUUsSUFBSTtBQUNYLFFBQU0sRUFBRSxJQUFJO0FBQ1osT0FBSyxFQUFFLElBQUk7QUFDWCxjQUFZLEVBQUUsQ0FBQztBQUNmLFlBQVUsRUFBQyxvQkFBQyxLQUFLLEVBQUU7QUFDbEIsT0FBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyRSxhQUFVLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztHQUM5QjtFQUNEO0NBQ0QsQ0FBQztpQkFDYSxNQUFNIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb21wb25lbnRzL2NvbmZpZyc7XG5pbXBvcnQgUmFuZ2UgZnJvbSAnLi9jb21wb25lbnRzL1JhbmdlJztcbmltcG9ydCByYW5nZXNsaWRlckpzIGZyb20gJy4uL25vZGVfbW9kdWxlcy9yYW5nZXNsaWRlci1wdXJlL2Rpc3QvcmFuZ2Utc2xpZGVyJztcblxuXG53aW5kb3cuYXBwID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBhZ2VTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWdlJyksXG5cdFx0aGVpZ2h0U2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlaWdodCcpO1xuXG5cdHJhbmdlc2xpZGVySnMuY3JlYXRlKGFnZVNsaWRlciwgY29uZmlnLnJhbmdlU2xpZGVyKTtcblx0cmFuZ2VzbGlkZXJKcy5jcmVhdGUoaGVpZ2h0U2xpZGVyLCBjb25maWcucmFuZ2VTbGlkZXIpO1xuXG5cdGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J1dHRvbicpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHR9KVxuXG59O1xud2luZG93LmFwcCgpO1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJyYW5nZVNsaWRlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJyYW5nZVNsaWRlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJyYW5nZVNsaWRlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8qKlxuICogRGVsYXlzIGEgZnVuY3Rpb24gZm9yIHRoZSBnaXZlbiBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCBhbmQgdGhlbiBjYWxsc1xuICogaXQgd2l0aCB0aGUgYXJndW1lbnRzIHN1cHBsaWVkLlxuICpcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAgIGZ1bmN0aW9uXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgd2FpdCBkZWxheVxuICogQHBhcmFtICB7TnVtYmVyfSAgIGFyZ3MgYXJndW1lbnRzXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xudmFyIGRlbGF5ID0gZXhwb3J0cy5kZWxheSA9IGZ1bmN0aW9uIGRlbGF5KGZuLCB3YWl0KSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmbi5hcHBseShudWxsLCBhcmdzKTtcbiAgfSwgd2FpdCk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCB3aWxsIG1ha2Ugc3VyZSB0aGUgZ2l2ZW5cbiAqIGZ1bmN0aW9uIGlzIG5vdCB0cmlnZ2VyZWQgdG9vIG11Y2guXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtICB7TnVtYmVyfSAgIGRlYm91bmNlRHVyYXRpb24gT1BUSU9OQUwuIFRoZSBhbW91bnQgb2YgdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIHdoaWNoIHdlIHdpbGwgZGVib3VuY2UgdGhlXG4gKiAgICAgICAgIGZ1bmN0aW9uLiAoZGVmYXVsdHMgdG8gMTAwbXMpXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xudmFyIGRlYm91bmNlID0gZXhwb3J0cy5kZWJvdW5jZSA9IGZ1bmN0aW9uIGRlYm91bmNlKGZuKSB7XG4gIHZhciBkZWJvdW5jZUR1cmF0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxMDA7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBpZiAoIWZuLmRlYm91bmNpbmcpIHtcbiAgICAgIGZuLmxhc3RSZXR1cm5WYWwgPSBmbi5hcHBseSh3aW5kb3csIGFyZ3MpO1xuICAgICAgZm4uZGVib3VuY2luZyA9IHRydWU7XG4gICAgfVxuICAgIGNsZWFyVGltZW91dChmbi5kZWJvdW5jZVRpbWVvdXQpO1xuICAgIGZuLmRlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgZm4uZGVib3VuY2luZyA9IGZhbHNlO1xuICAgIH0sIGRlYm91bmNlRHVyYXRpb24pO1xuICAgIHJldHVybiBmbi5sYXN0UmV0dXJuVmFsO1xuICB9O1xufTtcblxudmFyIGlzU3RyaW5nID0gZXhwb3J0cy5pc1N0cmluZyA9IGZ1bmN0aW9uIGlzU3RyaW5nKG9iaikge1xuICByZXR1cm4gb2JqID09PSAnJyArIG9iajtcbn07XG5cbnZhciBpc0FycmF5ID0gZXhwb3J0cy5pc0FycmF5ID0gZnVuY3Rpb24gaXNBcnJheShvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxudmFyIGlzTnVtYmVyTGlrZSA9IGV4cG9ydHMuaXNOdW1iZXJMaWtlID0gZnVuY3Rpb24gaXNOdW1iZXJMaWtlKG9iaikge1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIG9iaiAhPT0gdW5kZWZpbmVkICYmIChpc1N0cmluZyhvYmopICYmIGlzRmluaXRlKHBhcnNlRmxvYXQob2JqKSkgfHwgaXNGaW5pdGUob2JqKSk7XG59O1xuXG52YXIgZ2V0Rmlyc051bWJlckxpa2UgPSBleHBvcnRzLmdldEZpcnNOdW1iZXJMaWtlID0gZnVuY3Rpb24gZ2V0Rmlyc051bWJlckxpa2UoKSB7XG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgaWYgKCFhcmdzLmxlbmd0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyZ3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoaXNOdW1iZXJMaWtlKGFyZ3NbaV0pKSB7XG4gICAgICByZXR1cm4gYXJnc1tpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbnZhciBpc09iamVjdCA9IGV4cG9ydHMuaXNPYmplY3QgPSBmdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJztcbn07XG5cbnZhciBzaW1wbGVFeHRlbmQgPSBleHBvcnRzLnNpbXBsZUV4dGVuZCA9IGZ1bmN0aW9uIHNpbXBsZUV4dGVuZChkZWZhdWx0T3B0LCBvcHRpb25zKSB7XG4gIHZhciBvcHQgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdE9wdCkge1xuICAgIG9wdFtrZXldID0gZGVmYXVsdE9wdFtrZXldO1xuICB9XG4gIGZvciAodmFyIF9rZXk0IGluIG9wdGlvbnMpIHtcbiAgICBvcHRbX2tleTRdID0gb3B0aW9uc1tfa2V5NF07XG4gIH1cblxuICByZXR1cm4gb3B0O1xufTtcblxudmFyIGJldHdlZW4gPSBleHBvcnRzLmJldHdlZW4gPSBmdW5jdGlvbiBiZXR3ZWVuKHBvcywgbWluLCBtYXgpIHtcbiAgaWYgKHBvcyA8IG1pbikge1xuICAgIHJldHVybiBtaW47XG4gIH1cbiAgaWYgKHBvcyA+IG1heCkge1xuICAgIHJldHVybiBtYXg7XG4gIH1cbiAgcmV0dXJuIHBvcztcbn07XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2RvbSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBkb20gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfZG9tKTtcblxudmFyIF9mdW5jdGlvbnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgZnVuYyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9mdW5jdGlvbnMpO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgbmV3TGluZUFuZFRhYlJlZ2V4cCA9IG5ldyBSZWdFeHAoJy9bXFxcXG5cXFxcdF0vJywgJ2cnKTtcbnZhciBNQVhfU0VUX0JZX0RFRkFVTFQgPSAxMDA7XG52YXIgSEFORExFX1JFU0laRV9ERUxBWSA9IDMwMDtcbnZhciBIQU5ETEVfUkVTSVpFX0RFQk9VTkNFID0gNTA7XG5cbnZhciBwbHVnaW5OYW1lID0gJ3JhbmdlU2xpZGVyJztcbnZhciBwbHVnaW5JZGVudGlmaWVyID0gMDtcbnZhciBpbnB1dHJhbmdlID0gZG9tLnN1cHBvcnRzUmFuZ2UoKTtcbnZhciBkZWZhdWx0cyA9IHtcbiAgcG9seWZpbGw6IHRydWUsXG4gIHJhbmdlQ2xhc3M6ICdyYW5nZVNsaWRlcicsXG4gIGRpc2FibGVkQ2xhc3M6ICdyYW5nZVNsaWRlci0tZGlzYWJsZWQnLFxuICBmaWxsQ2xhc3M6ICdyYW5nZVNsaWRlcl9fZmlsbCcsXG4gIGJ1ZmZlckNsYXNzOiAncmFuZ2VTbGlkZXJfX2J1ZmZlcicsXG4gIGhhbmRsZUNsYXNzOiAncmFuZ2VTbGlkZXJfX2hhbmRsZScsXG4gIHN0YXJ0RXZlbnQ6IFsnbW91c2Vkb3duJywgJ3RvdWNoc3RhcnQnLCAncG9pbnRlcmRvd24nXSxcbiAgbW92ZUV2ZW50OiBbJ21vdXNlbW92ZScsICd0b3VjaG1vdmUnLCAncG9pbnRlcm1vdmUnXSxcbiAgZW5kRXZlbnQ6IFsnbW91c2V1cCcsICd0b3VjaGVuZCcsICdwb2ludGVydXAnXSxcbiAgbWluOiBudWxsLFxuICBtYXg6IG51bGwsXG4gIHN0ZXA6IG51bGwsXG4gIHZhbHVlOiBudWxsLFxuICBidWZmZXI6IG51bGwsXG4gIHN0aWNrOiBudWxsLFxuICBib3JkZXJSYWRpdXM6IDEwLFxuICB2ZXJ0aWNhbDogZmFsc2Vcbn07XG5cbi8qKlxuICogUGx1Z2luXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge3RoaXN9IG9wdGlvbnNcbiAqL1xuXG52YXIgUmFuZ2VTbGlkZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFJhbmdlU2xpZGVyKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmFuZ2VTbGlkZXIpO1xuXG4gICAgdmFyIG1pblNldEJ5RGVmYXVsdCA9IHZvaWQgMDtcbiAgICB2YXIgbWF4U2V0QnlEZWZhdWx0ID0gdm9pZCAwO1xuICAgIHZhciBzdGVwU2V0QnlEZWZhdWx0ID0gdm9pZCAwO1xuICAgIHZhciBzdGlja0F0dHJpYnV0ZSA9IHZvaWQgMDtcbiAgICB2YXIgc3RpY2tWYWx1ZXMgPSB2b2lkIDA7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMub3B0aW9ucyA9IGZ1bmMuc2ltcGxlRXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB0aGlzLnBvbHlmaWxsID0gdGhpcy5vcHRpb25zLnBvbHlmaWxsO1xuICAgIHRoaXMudmVydGljYWwgPSB0aGlzLm9wdGlvbnMudmVydGljYWw7XG4gICAgdGhpcy5vbkluaXQgPSB0aGlzLm9wdGlvbnMub25Jbml0O1xuICAgIHRoaXMub25TbGlkZSA9IHRoaXMub3B0aW9ucy5vblNsaWRlO1xuICAgIHRoaXMub25TbGlkZVN0YXJ0ID0gdGhpcy5vcHRpb25zLm9uU2xpZGVTdGFydDtcbiAgICB0aGlzLm9uU2xpZGVFbmQgPSB0aGlzLm9wdGlvbnMub25TbGlkZUVuZDtcbiAgICB0aGlzLm9uU2xpZGVFdmVudHNDb3VudCA9IC0xO1xuICAgIHRoaXMuaXNJbnRlcmFjdHNOb3cgPSBmYWxzZTtcbiAgICB0aGlzLm5lZWRUcmlnZ2VyRXZlbnRzID0gZmFsc2U7XG5cbiAgICAvLyBQbHVnaW4gc2hvdWxkIG9ubHkgYmUgdXNlZCBhcyBhIHBvbHlmaWxsXG4gICAgaWYgKCF0aGlzLnBvbHlmaWxsKSB7XG4gICAgICAvLyBJbnB1dCByYW5nZSBzdXBwb3J0P1xuICAgICAgaWYgKGlucHV0cmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucy5idWZmZXIgPSB0aGlzLm9wdGlvbnMuYnVmZmVyIHx8IHBhcnNlRmxvYXQodGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1idWZmZXInKSk7XG5cbiAgICB0aGlzLmlkZW50aWZpZXIgPSAnanMtJyArIHBsdWdpbk5hbWUgKyAnLScgKyBwbHVnaW5JZGVudGlmaWVyKys7XG5cbiAgICB0aGlzLm1pbiA9IGZ1bmMuZ2V0Rmlyc051bWJlckxpa2UodGhpcy5vcHRpb25zLm1pbiwgcGFyc2VGbG9hdCh0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdtaW4nKSksIG1pblNldEJ5RGVmYXVsdCA9IDApO1xuXG4gICAgdGhpcy5tYXggPSBmdW5jLmdldEZpcnNOdW1iZXJMaWtlKHRoaXMub3B0aW9ucy5tYXgsIHBhcnNlRmxvYXQodGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnbWF4JykpLCBtYXhTZXRCeURlZmF1bHQgPSBNQVhfU0VUX0JZX0RFRkFVTFQpO1xuXG4gICAgdGhpcy52YWx1ZSA9IGZ1bmMuZ2V0Rmlyc051bWJlckxpa2UodGhpcy5vcHRpb25zLnZhbHVlLCB0aGlzLmVsZW1lbnQudmFsdWUsIHBhcnNlRmxvYXQodGhpcy5lbGVtZW50LnZhbHVlIHx8IHRoaXMubWluICsgKHRoaXMubWF4IC0gdGhpcy5taW4pIC8gMikpO1xuXG4gICAgdGhpcy5zdGVwID0gZnVuYy5nZXRGaXJzTnVtYmVyTGlrZSh0aGlzLm9wdGlvbnMuc3RlcCwgcGFyc2VGbG9hdCh0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdGVwJykpIHx8IChzdGVwU2V0QnlEZWZhdWx0ID0gMSkpO1xuXG4gICAgdGhpcy5wZXJjZW50ID0gbnVsbDtcblxuICAgIGlmIChmdW5jLmlzQXJyYXkodGhpcy5vcHRpb25zLnN0aWNrKSAmJiB0aGlzLm9wdGlvbnMuc3RpY2subGVuZ3RoID49IDEpIHtcbiAgICAgIHRoaXMuc3RpY2sgPSB0aGlzLm9wdGlvbnMuc3RpY2s7XG4gICAgfSBlbHNlIGlmIChzdGlja0F0dHJpYnV0ZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0aWNrJykpIHtcbiAgICAgIHN0aWNrVmFsdWVzID0gc3RpY2tBdHRyaWJ1dGUuc3BsaXQoJyAnKTtcbiAgICAgIGlmIChzdGlja1ZhbHVlcy5sZW5ndGggPj0gMSkge1xuICAgICAgICB0aGlzLnN0aWNrID0gc3RpY2tWYWx1ZXMubWFwKHBhcnNlRmxvYXQpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5zdGljayAmJiB0aGlzLnN0aWNrLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5zdGljay5wdXNoKHRoaXMuc3RlcCAqIDEuNSk7XG4gICAgfVxuICAgIHRoaXMuX3VwZGF0ZVBlcmNlbnRGcm9tVmFsdWUoKTtcblxuICAgIHRoaXMudG9GaXhlZCA9IHRoaXMuX3RvRml4ZWQodGhpcy5zdGVwKTtcblxuICAgIHZhciBkaXJlY3Rpb25DbGFzcyA9IHZvaWQgMDtcblxuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG9tLmFkZENsYXNzKHRoaXMuY29udGFpbmVyLCB0aGlzLm9wdGlvbnMuZmlsbENsYXNzKTtcblxuICAgIGRpcmVjdGlvbkNsYXNzID0gdGhpcy52ZXJ0aWNhbCA/IHRoaXMub3B0aW9ucy5maWxsQ2xhc3MgKyAnX192ZXJ0aWNhbCcgOiB0aGlzLm9wdGlvbnMuZmlsbENsYXNzICsgJ19faG9yaXpvbnRhbCc7XG4gICAgZG9tLmFkZENsYXNzKHRoaXMuY29udGFpbmVyLCBkaXJlY3Rpb25DbGFzcyk7XG5cbiAgICB0aGlzLmhhbmRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvbS5hZGRDbGFzcyh0aGlzLmhhbmRsZSwgdGhpcy5vcHRpb25zLmhhbmRsZUNsYXNzKTtcblxuICAgIGRpcmVjdGlvbkNsYXNzID0gdGhpcy52ZXJ0aWNhbCA/IHRoaXMub3B0aW9ucy5oYW5kbGVDbGFzcyArICdfX3ZlcnRpY2FsJyA6IHRoaXMub3B0aW9ucy5oYW5kbGVDbGFzcyArICdfX2hvcml6b250YWwnO1xuICAgIGRvbS5hZGRDbGFzcyh0aGlzLmhhbmRsZSwgZGlyZWN0aW9uQ2xhc3MpO1xuXG4gICAgdGhpcy5yYW5nZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvbS5hZGRDbGFzcyh0aGlzLnJhbmdlLCB0aGlzLm9wdGlvbnMucmFuZ2VDbGFzcyk7XG4gICAgdGhpcy5yYW5nZS5pZCA9IHRoaXMuaWRlbnRpZmllcjtcbiAgICB0aGlzLnJhbmdlLmFwcGVuZENoaWxkKHRoaXMuaGFuZGxlKTtcbiAgICB0aGlzLnJhbmdlLmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcblxuICAgIGRpcmVjdGlvbkNsYXNzID0gdGhpcy52ZXJ0aWNhbCA/IHRoaXMub3B0aW9ucy5yYW5nZUNsYXNzICsgJ19fdmVydGljYWwnIDogdGhpcy5vcHRpb25zLnJhbmdlQ2xhc3MgKyAnX19ob3Jpem9udGFsJztcbiAgICBkb20uYWRkQ2xhc3ModGhpcy5yYW5nZSwgZGlyZWN0aW9uQ2xhc3MpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5idWZmZXJDbGFzcykge1xuICAgICAgdGhpcy5idWZmZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLmJ1ZmZlciwgdGhpcy5vcHRpb25zLmJ1ZmZlckNsYXNzKTtcbiAgICAgIHRoaXMucmFuZ2UuYXBwZW5kQ2hpbGQodGhpcy5idWZmZXIpO1xuXG4gICAgICBkaXJlY3Rpb25DbGFzcyA9IHRoaXMudmVydGljYWwgPyB0aGlzLm9wdGlvbnMuYnVmZmVyQ2xhc3MgKyAnX192ZXJ0aWNhbCcgOiB0aGlzLm9wdGlvbnMuYnVmZmVyQ2xhc3MgKyAnX19ob3Jpem9udGFsJztcbiAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLmJ1ZmZlciwgZGlyZWN0aW9uQ2xhc3MpO1xuICAgIH1cblxuICAgIGlmIChmdW5jLmlzTnVtYmVyTGlrZSh0aGlzLm9wdGlvbnMudmFsdWUpKSB7XG4gICAgICB0aGlzLl9zZXRWYWx1ZSh0aGlzLm9wdGlvbnMudmFsdWUsIHRydWUpO1xuICAgICAgdGhpcy5lbGVtZW50LnZhbHVlID0gdGhpcy5vcHRpb25zLnZhbHVlO1xuICAgIH1cblxuICAgIGlmIChmdW5jLmlzTnVtYmVyTGlrZSh0aGlzLm9wdGlvbnMuYnVmZmVyKSkge1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1idWZmZXInLCB0aGlzLm9wdGlvbnMuYnVmZmVyKTtcbiAgICB9XG5cbiAgICBpZiAoZnVuYy5pc051bWJlckxpa2UodGhpcy5vcHRpb25zLm1pbikgfHwgbWluU2V0QnlEZWZhdWx0KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdtaW4nLCAnJyArIHRoaXMubWluKTtcbiAgICB9XG5cbiAgICBpZiAoZnVuYy5pc051bWJlckxpa2UodGhpcy5vcHRpb25zLm1heCkgfHwgbWF4U2V0QnlEZWZhdWx0KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdtYXgnLCAnJyArIHRoaXMubWF4KTtcbiAgICB9XG5cbiAgICBpZiAoZnVuYy5pc051bWJlckxpa2UodGhpcy5vcHRpb25zLnN0ZXApIHx8IHN0ZXBTZXRCeURlZmF1bHQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0ZXAnLCAnJyArIHRoaXMuc3RlcCk7XG4gICAgfVxuXG4gICAgZG9tLmluc2VydEFmdGVyKHRoaXMuZWxlbWVudCwgdGhpcy5yYW5nZSk7XG5cbiAgICAvLyBoaWRlIHRoZSBpbnB1dCB2aXN1YWxseVxuICAgIGRvbS5zZXRDc3ModGhpcy5lbGVtZW50LCB7XG4gICAgICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxuICAgICAgJ3dpZHRoJzogJzFweCcsXG4gICAgICAnaGVpZ2h0JzogJzFweCcsXG4gICAgICAnb3ZlcmZsb3cnOiAnaGlkZGVuJyxcbiAgICAgICdvcGFjaXR5JzogJzAnXG4gICAgfSk7XG5cbiAgICAvLyBTdG9yZSBjb250ZXh0XG4gICAgdGhpcy5faGFuZGxlRG93biA9IHRoaXMuX2hhbmRsZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oYW5kbGVNb3ZlID0gdGhpcy5faGFuZGxlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2hhbmRsZUVuZCA9IHRoaXMuX2hhbmRsZUVuZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3N0YXJ0RXZlbnRMaXN0ZW5lciA9IHRoaXMuX3N0YXJ0RXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2NoYW5nZUV2ZW50TGlzdGVuZXIgPSB0aGlzLl9jaGFuZ2VFdmVudExpc3RlbmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5faGFuZGxlUmVzaXplID0gdGhpcy5faGFuZGxlUmVzaXplLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLl9pbml0KCk7XG5cbiAgICAvLyBBdHRhY2ggRXZlbnRzXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVJlc2l6ZSwgZmFsc2UpO1xuXG4gICAgZG9tLmFkZEV2ZW50TGlzdGVuZXJzKGRvY3VtZW50LCB0aGlzLm9wdGlvbnMuc3RhcnRFdmVudCwgdGhpcy5fc3RhcnRFdmVudExpc3RlbmVyKTtcblxuICAgIC8vIExpc3RlbiB0byBwcm9ncmFtbWF0aWMgdmFsdWUgY2hhbmdlc1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLl9jaGFuZ2VFdmVudExpc3RlbmVyLCBmYWxzZSk7XG4gIH1cblxuICAvKiBwdWJsaWMgbWV0aG9kcyAqL1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIGxpa2Uge21pbiA6IE51bWJlciwgbWF4IDogTnVtYmVyLCB2YWx1ZSA6IE51bWJlciwgc3RlcCA6IE51bWJlciwgYnVmZmVyIDogW1N0cmluZ3xOdW1iZXJdfVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHRyaWdnZXJFdmVudHNcbiAgICogQHJldHVybnMge1JhbmdlU2xpZGVyfVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhSYW5nZVNsaWRlciwgW3tcbiAgICBrZXk6ICd1cGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGUob2JqLCB0cmlnZ2VyRXZlbnRzKSB7XG4gICAgICBpZiAodHJpZ2dlckV2ZW50cykge1xuICAgICAgICB0aGlzLm5lZWRUcmlnZ2VyRXZlbnRzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChmdW5jLmlzT2JqZWN0KG9iaikpIHtcbiAgICAgICAgaWYgKGZ1bmMuaXNOdW1iZXJMaWtlKG9iai5taW4pKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnbWluJywgJycgKyBvYmoubWluKTtcbiAgICAgICAgICB0aGlzLm1pbiA9IG9iai5taW47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZnVuYy5pc051bWJlckxpa2Uob2JqLm1heCkpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdtYXgnLCAnJyArIG9iai5tYXgpO1xuICAgICAgICAgIHRoaXMubWF4ID0gb2JqLm1heDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmdW5jLmlzTnVtYmVyTGlrZShvYmouc3RlcCkpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdGVwJywgJycgKyBvYmouc3RlcCk7XG4gICAgICAgICAgdGhpcy5zdGVwID0gb2JqLnN0ZXA7XG4gICAgICAgICAgdGhpcy50b0ZpeGVkID0gdGhpcy5fdG9GaXhlZChvYmouc3RlcCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZnVuYy5pc051bWJlckxpa2Uob2JqLmJ1ZmZlcikpIHtcbiAgICAgICAgICB0aGlzLl9zZXRCdWZmZXJQb3NpdGlvbihvYmouYnVmZmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmdW5jLmlzTnVtYmVyTGlrZShvYmoudmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy5fc2V0VmFsdWUob2JqLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fdXBkYXRlKCk7XG4gICAgICB0aGlzLm9uU2xpZGVFdmVudHNDb3VudCA9IDA7XG4gICAgICB0aGlzLm5lZWRUcmlnZ2VyRXZlbnRzID0gZmFsc2U7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkZXN0cm95JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIGRvbS5yZW1vdmVBbGxMaXN0ZW5lcnNGcm9tRWwodGhpcywgZG9jdW1lbnQpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVJlc2l6ZSwgZmFsc2UpO1xuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuX2NoYW5nZUV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcblxuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmNzc1RleHQgPSAnJztcbiAgICAgIGRlbGV0ZSB0aGlzLmVsZW1lbnRbcGx1Z2luTmFtZV07XG5cbiAgICAgIC8vIFJlbW92ZSB0aGUgZ2VuZXJhdGVkIG1hcmt1cFxuICAgICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgICAgdGhpcy5yYW5nZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMucmFuZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgbGlnaHR3ZWlnaHQgcGx1Z2luIHdyYXBwZXIgYXJvdW5kIHRoZSBjb25zdHJ1Y3RvcixwcmV2ZW50aW5nIGFnYWluc3QgbXVsdGlwbGUgaW5zdGFudGlhdGlvbnNcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnX3RvRml4ZWQnLFxuXG5cbiAgICAvKiBwcml2YXRlIG1ldGhvZHMgKi9cblxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdG9GaXhlZChzdGVwKSB7XG4gICAgICByZXR1cm4gKHN0ZXAgKyAnJykucmVwbGFjZSgnLicsICcnKS5sZW5ndGggLSAxO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19pbml0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2luaXQoKSB7XG4gICAgICBpZiAodGhpcy5vbkluaXQgJiYgdHlwZW9mIHRoaXMub25Jbml0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMub25Jbml0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLl91cGRhdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfdXBkYXRlUGVyY2VudEZyb21WYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGVQZXJjZW50RnJvbVZhbHVlKCkge1xuICAgICAgdGhpcy5wZXJjZW50ID0gKHRoaXMudmFsdWUgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgY2hlY2sgaWYgdGhpcy5pZGVudGlmaWVyIGV4aXN0cyBpbiBldi50YXJnZXQncyBhbmNlc3RvcnNcbiAgICAgKiBAcGFyYW0gZXZcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdfc3RhcnRFdmVudExpc3RlbmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3N0YXJ0RXZlbnRMaXN0ZW5lcihldiwgZGF0YSkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIGVsID0gZXYudGFyZ2V0O1xuICAgICAgdmFyIGlzRXZlbnRPblNsaWRlciA9IGZhbHNlO1xuXG4gICAgICBpZiAoZXYud2hpY2ggIT09IDEgJiYgISgndG91Y2hlcycgaW4gZXYpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZG9tLmZvckVhY2hBbmNlc3RvcnMoZWwsIGZ1bmN0aW9uIChlbCkge1xuICAgICAgICByZXR1cm4gaXNFdmVudE9uU2xpZGVyID0gZWwuaWQgPT09IF90aGlzLmlkZW50aWZpZXIgJiYgIWRvbS5oYXNDbGFzcyhlbCwgX3RoaXMub3B0aW9ucy5kaXNhYmxlZENsYXNzKTtcbiAgICAgIH0sIHRydWUpO1xuXG4gICAgICBpZiAoaXNFdmVudE9uU2xpZGVyKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZURvd24oZXYsIGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19jaGFuZ2VFdmVudExpc3RlbmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2NoYW5nZUV2ZW50TGlzdGVuZXIoZXYsIGRhdGEpIHtcbiAgICAgIGlmIChkYXRhICYmIGRhdGEub3JpZ2luID09PSB0aGlzLmlkZW50aWZpZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWUgPSBldi50YXJnZXQudmFsdWU7XG4gICAgICB2YXIgcG9zID0gdGhpcy5fZ2V0UG9zaXRpb25Gcm9tVmFsdWUodmFsdWUpO1xuXG4gICAgICB0aGlzLl9zZXRQb3NpdGlvbihwb3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ191cGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKCkge1xuICAgICAgdmFyIHNpemVQcm9wZXJ0eSA9IHRoaXMudmVydGljYWwgPyAnb2Zmc2V0SGVpZ2h0JyA6ICdvZmZzZXRXaWR0aCc7XG5cbiAgICAgIHRoaXMuaGFuZGxlU2l6ZSA9IGRvbS5nZXREaW1lbnNpb24odGhpcy5oYW5kbGUsIHNpemVQcm9wZXJ0eSk7XG4gICAgICB0aGlzLnJhbmdlU2l6ZSA9IGRvbS5nZXREaW1lbnNpb24odGhpcy5yYW5nZSwgc2l6ZVByb3BlcnR5KTtcbiAgICAgIHRoaXMubWF4SGFuZGxlWCA9IHRoaXMucmFuZ2VTaXplIC0gdGhpcy5oYW5kbGVTaXplO1xuICAgICAgdGhpcy5ncmFiWCA9IHRoaXMuaGFuZGxlU2l6ZSAvIDI7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5fZ2V0UG9zaXRpb25Gcm9tVmFsdWUodGhpcy52YWx1ZSk7XG5cbiAgICAgIC8vIENvbnNpZGVyIGRpc2FibGVkIHN0YXRlXG4gICAgICBpZiAodGhpcy5lbGVtZW50LmRpc2FibGVkKSB7XG4gICAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLnJhbmdlLCB0aGlzLm9wdGlvbnMuZGlzYWJsZWRDbGFzcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb20ucmVtb3ZlQ2xhc3ModGhpcy5yYW5nZSwgdGhpcy5vcHRpb25zLmRpc2FibGVkQ2xhc3MpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zZXRQb3NpdGlvbih0aGlzLnBvc2l0aW9uKTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYnVmZmVyQ2xhc3MgJiYgdGhpcy5vcHRpb25zLmJ1ZmZlcikge1xuICAgICAgICB0aGlzLl9zZXRCdWZmZXJQb3NpdGlvbih0aGlzLm9wdGlvbnMuYnVmZmVyKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3VwZGF0ZVBlcmNlbnRGcm9tVmFsdWUoKTtcbiAgICAgIGRvbS50cmlnZ2VyRXZlbnQodGhpcy5lbGVtZW50LCAnY2hhbmdlJywgeyBvcmlnaW46IHRoaXMuaWRlbnRpZmllciB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfaGFuZGxlUmVzaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZVJlc2l6ZSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gZnVuYy5kZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFNpbXVsYXRlIHJlc2l6ZUVuZCBldmVudC5cbiAgICAgICAgZnVuYy5kZWxheShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLl91cGRhdGUoKTtcbiAgICAgICAgfSwgSEFORExFX1JFU0laRV9ERUxBWSk7XG4gICAgICB9LCBIQU5ETEVfUkVTSVpFX0RFQk9VTkNFKSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19oYW5kbGVEb3duJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZURvd24oZSkge1xuICAgICAgdGhpcy5pc0ludGVyYWN0c05vdyA9IHRydWU7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcnMoZG9jdW1lbnQsIHRoaXMub3B0aW9ucy5tb3ZlRXZlbnQsIHRoaXMuX2hhbmRsZU1vdmUpO1xuICAgICAgZG9tLmFkZEV2ZW50TGlzdGVuZXJzKGRvY3VtZW50LCB0aGlzLm9wdGlvbnMuZW5kRXZlbnQsIHRoaXMuX2hhbmRsZUVuZCk7XG5cbiAgICAgIC8vIElmIHdlIGNsaWNrIG9uIHRoZSBoYW5kbGUgZG9uJ3Qgc2V0IHRoZSBuZXcgcG9zaXRpb25cbiAgICAgIGlmICgoJyAnICsgZS50YXJnZXQuY2xhc3NOYW1lICsgJyAnKS5yZXBsYWNlKG5ld0xpbmVBbmRUYWJSZWdleHAsICcgJykuaW5kZXhPZih0aGlzLm9wdGlvbnMuaGFuZGxlQ2xhc3MpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5yYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgdmFyIHBvc1ggPSB0aGlzLl9nZXRSZWxhdGl2ZVBvc2l0aW9uKGUpO1xuICAgICAgdmFyIHJhbmdlWCA9IHRoaXMudmVydGljYWwgPyBib3VuZGluZ0NsaWVudFJlY3QuYm90dG9tIDogYm91bmRpbmdDbGllbnRSZWN0LmxlZnQ7XG4gICAgICB2YXIgaGFuZGxlWCA9IHRoaXMuX2dldFBvc2l0aW9uRnJvbU5vZGUodGhpcy5oYW5kbGUpIC0gcmFuZ2VYO1xuICAgICAgdmFyIHBvc2l0aW9uID0gcG9zWCAtIHRoaXMuZ3JhYlg7XG5cbiAgICAgIHRoaXMuX3NldFBvc2l0aW9uKHBvc2l0aW9uKTtcblxuICAgICAgaWYgKHBvc1ggPj0gaGFuZGxlWCAmJiBwb3NYIDwgaGFuZGxlWCArIHRoaXMub3B0aW9ucy5ib3JkZXJSYWRpdXMgKiAyKSB7XG4gICAgICAgIHRoaXMuZ3JhYlggPSBwb3NYIC0gaGFuZGxlWDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3VwZGF0ZVBlcmNlbnRGcm9tVmFsdWUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfaGFuZGxlTW92ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVNb3ZlKGUpIHtcbiAgICAgIHZhciBwb3NYID0gdGhpcy5fZ2V0UmVsYXRpdmVQb3NpdGlvbihlKTtcblxuICAgICAgdGhpcy5pc0ludGVyYWN0c05vdyA9IHRydWU7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLl9zZXRQb3NpdGlvbihwb3NYIC0gdGhpcy5ncmFiWCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2hhbmRsZUVuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVFbmQoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXJzKGRvY3VtZW50LCB0aGlzLm9wdGlvbnMubW92ZUV2ZW50LCB0aGlzLl9oYW5kbGVNb3ZlKTtcbiAgICAgIGRvbS5yZW1vdmVFdmVudExpc3RlbmVycyhkb2N1bWVudCwgdGhpcy5vcHRpb25zLmVuZEV2ZW50LCB0aGlzLl9oYW5kbGVFbmQpO1xuXG4gICAgICAvLyBPayB3ZSdyZSBkb25lIGZpcmUgdGhlIGNoYW5nZSBldmVudFxuICAgICAgZG9tLnRyaWdnZXJFdmVudCh0aGlzLmVsZW1lbnQsICdjaGFuZ2UnLCB7IG9yaWdpbjogdGhpcy5pZGVudGlmaWVyIH0pO1xuXG4gICAgICBpZiAodGhpcy5pc0ludGVyYWN0c05vdyB8fCB0aGlzLm5lZWRUcmlnZ2VyRXZlbnRzKSB7XG4gICAgICAgIGlmICh0aGlzLm9uU2xpZGVFbmQgJiYgdHlwZW9mIHRoaXMub25TbGlkZUVuZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMub25TbGlkZUVuZCh0aGlzLnZhbHVlLCB0aGlzLnBlcmNlbnQsIHRoaXMucG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLm9uU2xpZGVFdmVudHNDb3VudCA9IDA7XG4gICAgICB0aGlzLmlzSW50ZXJhY3RzTm93ID0gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX3NldFBvc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NldFBvc2l0aW9uKHBvcykge1xuICAgICAgdmFyIHBvc2l0aW9uID0gdm9pZCAwO1xuICAgICAgdmFyIHN0aWNrUmFkaXVzID0gdm9pZCAwO1xuICAgICAgdmFyIHJlc3RGcm9tVmFsdWUgPSB2b2lkIDA7XG4gICAgICB2YXIgc3RpY2tUbyA9IHZvaWQgMDtcblxuICAgICAgLy8gU25hcHBpbmcgc3RlcHNcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuX2dldFZhbHVlRnJvbVBvc2l0aW9uKGZ1bmMuYmV0d2Vlbihwb3MsIDAsIHRoaXMubWF4SGFuZGxlWCkpO1xuXG4gICAgICAvLyBTdGljayB0byBzdGlja1swXSBpbiByYWRpdXMgc3RpY2tbMV1cbiAgICAgIGlmICh0aGlzLnN0aWNrKSB7XG4gICAgICAgIHN0aWNrVG8gPSB0aGlzLnN0aWNrWzBdO1xuICAgICAgICBzdGlja1JhZGl1cyA9IHRoaXMuc3RpY2tbMV0gfHwgMC4xO1xuICAgICAgICByZXN0RnJvbVZhbHVlID0gdmFsdWUgJSBzdGlja1RvO1xuICAgICAgICBpZiAocmVzdEZyb21WYWx1ZSA8IHN0aWNrUmFkaXVzKSB7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZSAtIHJlc3RGcm9tVmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoc3RpY2tUbyAtIHJlc3RGcm9tVmFsdWUpIDwgc3RpY2tSYWRpdXMpIHtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC0gcmVzdEZyb21WYWx1ZSArIHN0aWNrVG87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHBvc2l0aW9uID0gdGhpcy5fZ2V0UG9zaXRpb25Gcm9tVmFsdWUodmFsdWUpO1xuXG4gICAgICAvLyBVcGRhdGUgdWlcbiAgICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHBvc2l0aW9uICsgdGhpcy5ncmFiWCArICdweCc7XG4gICAgICAgIHRoaXMuaGFuZGxlLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKC0nICsgcG9zaXRpb24gKyAncHgpJztcbiAgICAgICAgdGhpcy5oYW5kbGUuc3R5bGVbJy1tcy10cmFuc2Zvcm0nXSA9ICd0cmFuc2xhdGVZKC0nICsgcG9zaXRpb24gKyAncHgpJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLndpZHRoID0gcG9zaXRpb24gKyB0aGlzLmdyYWJYICsgJ3B4JztcbiAgICAgICAgdGhpcy5oYW5kbGUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIHBvc2l0aW9uICsgJ3B4KSc7XG4gICAgICAgIHRoaXMuaGFuZGxlLnN0eWxlWyctbXMtdHJhbnNmb3JtJ10gPSAndHJhbnNsYXRlWCgnICsgcG9zaXRpb24gKyAncHgpJztcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2V0VmFsdWUodmFsdWUpO1xuXG4gICAgICAvLyBVcGRhdGUgZ2xvYmFsc1xuICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5fdXBkYXRlUGVyY2VudEZyb21WYWx1ZSgpO1xuXG4gICAgICBpZiAodGhpcy5pc0ludGVyYWN0c05vdyB8fCB0aGlzLm5lZWRUcmlnZ2VyRXZlbnRzKSB7XG4gICAgICAgIGlmICh0aGlzLm9uU2xpZGVTdGFydCAmJiB0eXBlb2YgdGhpcy5vblNsaWRlU3RhcnQgPT09ICdmdW5jdGlvbicgJiYgdGhpcy5vblNsaWRlRXZlbnRzQ291bnQgPT09IDApIHtcbiAgICAgICAgICB0aGlzLm9uU2xpZGVTdGFydCh0aGlzLnZhbHVlLCB0aGlzLnBlcmNlbnQsIHRoaXMucG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub25TbGlkZSAmJiB0eXBlb2YgdGhpcy5vblNsaWRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5vblNsaWRlKHRoaXMudmFsdWUsIHRoaXMucGVyY2VudCwgdGhpcy5wb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5vblNsaWRlRXZlbnRzQ291bnQrKztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfc2V0QnVmZmVyUG9zaXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0QnVmZmVyUG9zaXRpb24ocG9zKSB7XG4gICAgICB2YXIgaXNQZXJjZW50ID0gdHJ1ZTtcblxuICAgICAgaWYgKGlzRmluaXRlKHBvcykpIHtcbiAgICAgICAgcG9zID0gcGFyc2VGbG9hdChwb3MpO1xuICAgICAgfSBlbHNlIGlmIChmdW5jLmlzU3RyaW5nKHBvcykpIHtcbiAgICAgICAgaWYgKHBvcy5pbmRleE9mKCdweCcpID4gMCkge1xuICAgICAgICAgIGlzUGVyY2VudCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHBvcyA9IHBhcnNlRmxvYXQocG9zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybignTmV3IHBvc2l0aW9uIG11c3QgYmUgWFhweCBvciBYWCUnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNOYU4ocG9zKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ05ldyBwb3NpdGlvbiBpcyBOYU4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuYnVmZmVyQ2xhc3MpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdZb3UgZGlzYWJsZWQgYnVmZmVyLCBpdFxcJ3MgY2xhc3NOYW1lIGlzIGVtcHR5Jyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBidWZmZXJTaXplID0gaXNQZXJjZW50ID8gcG9zIDogcG9zIC8gdGhpcy5yYW5nZVNpemUgKiAxMDA7XG5cbiAgICAgIGlmIChidWZmZXJTaXplIDwgMCkge1xuICAgICAgICBidWZmZXJTaXplID0gMDtcbiAgICAgIH1cbiAgICAgIGlmIChidWZmZXJTaXplID4gMTAwKSB7XG4gICAgICAgIGJ1ZmZlclNpemUgPSAxMDA7XG4gICAgICB9XG4gICAgICB0aGlzLm9wdGlvbnMuYnVmZmVyID0gYnVmZmVyU2l6ZTtcblxuICAgICAgdmFyIHBhZGRpbmdTaXplID0gdGhpcy5vcHRpb25zLmJvcmRlclJhZGl1cyAvIHRoaXMucmFuZ2VTaXplICogMTAwO1xuICAgICAgdmFyIGJ1ZmZlclNpemVXaXRoUGFkZGluZyA9IGJ1ZmZlclNpemUgLSBwYWRkaW5nU2l6ZTtcblxuICAgICAgaWYgKGJ1ZmZlclNpemVXaXRoUGFkZGluZyA8IDApIHtcbiAgICAgICAgYnVmZmVyU2l6ZVdpdGhQYWRkaW5nID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgICAgdGhpcy5idWZmZXIuc3R5bGUuaGVpZ2h0ID0gYnVmZmVyU2l6ZVdpdGhQYWRkaW5nICsgJyUnO1xuICAgICAgICB0aGlzLmJ1ZmZlci5zdHlsZS5ib3R0b20gPSBwYWRkaW5nU2l6ZSAqIDAuNSArICclJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYnVmZmVyLnN0eWxlLndpZHRoID0gYnVmZmVyU2l6ZVdpdGhQYWRkaW5nICsgJyUnO1xuICAgICAgICB0aGlzLmJ1ZmZlci5zdHlsZS5sZWZ0ID0gcGFkZGluZ1NpemUgKiAwLjUgKyAnJSc7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnVmZmVyJywgYnVmZmVyU2l6ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAgICAgKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBlbGVtZW50IHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBwYXJlbnRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdfZ2V0UG9zaXRpb25Gcm9tTm9kZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRQb3NpdGlvbkZyb21Ob2RlKG5vZGUpIHtcbiAgICAgIHZhciBpID0gdGhpcy52ZXJ0aWNhbCA/IHRoaXMubWF4SGFuZGxlWCA6IDA7XG5cbiAgICAgIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIGkgKz0gdGhpcy52ZXJ0aWNhbCA/IG5vZGUub2Zmc2V0VG9wIDogbm9kZS5vZmZzZXRMZWZ0O1xuICAgICAgICBub2RlID0gbm9kZS5vZmZzZXRQYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7KE1vdXNlRXZlbnR8VG91Y2hFdmVudCl9ZVxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ19nZXRSZWxhdGl2ZVBvc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2dldFJlbGF0aXZlUG9zaXRpb24oZSkge1xuICAgICAgdmFyIGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMucmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIC8vIEdldCB0aGUgb2Zmc2V0IHJlbGF0aXZlIHRvIHRoZSB2aWV3cG9ydFxuICAgICAgdmFyIHJhbmdlU2l6ZSA9IHRoaXMudmVydGljYWwgPyBib3VuZGluZ0NsaWVudFJlY3QuYm90dG9tIDogYm91bmRpbmdDbGllbnRSZWN0LmxlZnQ7XG4gICAgICB2YXIgcGFnZU9mZnNldCA9IDA7XG5cbiAgICAgIHZhciBwYWdlUG9zaXRpb25Qcm9wZXJ0eSA9IHRoaXMudmVydGljYWwgPyAncGFnZVknIDogJ3BhZ2VYJztcblxuICAgICAgaWYgKHR5cGVvZiBlW3BhZ2VQb3NpdGlvblByb3BlcnR5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcGFnZU9mZnNldCA9IGUudG91Y2hlcyAmJiBlLnRvdWNoZXMubGVuZ3RoID8gZS50b3VjaGVzWzBdW3BhZ2VQb3NpdGlvblByb3BlcnR5XSA6IGVbcGFnZVBvc2l0aW9uUHJvcGVydHldO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZS5vcmlnaW5hbEV2ZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAodHlwZW9mIGUub3JpZ2luYWxFdmVudFtwYWdlUG9zaXRpb25Qcm9wZXJ0eV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcGFnZU9mZnNldCA9IGUub3JpZ2luYWxFdmVudFtwYWdlUG9zaXRpb25Qcm9wZXJ0eV07XG4gICAgICAgIH0gZWxzZSBpZiAoZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgJiYgZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0gJiYgdHlwZW9mIGUub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdW3BhZ2VQb3NpdGlvblByb3BlcnR5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBwYWdlT2Zmc2V0ID0gZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF1bcGFnZVBvc2l0aW9uUHJvcGVydHldO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGUudG91Y2hlcyAmJiBlLnRvdWNoZXNbMF0gJiYgdHlwZW9mIGUudG91Y2hlc1swXVtwYWdlUG9zaXRpb25Qcm9wZXJ0eV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHBhZ2VPZmZzZXQgPSBlLnRvdWNoZXNbMF1bcGFnZVBvc2l0aW9uUHJvcGVydHldO1xuICAgICAgfSBlbHNlIGlmIChlLmN1cnJlbnRQb2ludCAmJiAodHlwZW9mIGUuY3VycmVudFBvaW50LnggIT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBlLmN1cnJlbnRQb2ludC55ICE9PSAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgcGFnZU9mZnNldCA9IHRoaXMudmVydGljYWwgPyBlLmN1cnJlbnRQb2ludC55IDogZS5jdXJyZW50UG9pbnQueDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgICAgcGFnZU9mZnNldCAtPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnZlcnRpY2FsID8gcmFuZ2VTaXplIC0gcGFnZU9mZnNldCA6IHBhZ2VPZmZzZXQgLSByYW5nZVNpemU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2dldFBvc2l0aW9uRnJvbVZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2dldFBvc2l0aW9uRnJvbVZhbHVlKHZhbHVlKSB7XG4gICAgICB2YXIgcGVyY2VudGFnZSA9ICh2YWx1ZSAtIHRoaXMubWluKSAvICh0aGlzLm1heCAtIHRoaXMubWluKTtcbiAgICAgIHZhciBwb3MgPSBwZXJjZW50YWdlICogdGhpcy5tYXhIYW5kbGVYO1xuXG4gICAgICByZXR1cm4gaXNOYU4ocG9zKSA/IDAgOiBwb3M7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2dldFZhbHVlRnJvbVBvc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2dldFZhbHVlRnJvbVBvc2l0aW9uKHBvcykge1xuICAgICAgdmFyIHBlcmNlbnRhZ2UgPSBwb3MgLyAodGhpcy5tYXhIYW5kbGVYIHx8IDEpO1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5zdGVwICogTWF0aC5yb3VuZChwZXJjZW50YWdlICogKHRoaXMubWF4IC0gdGhpcy5taW4pIC8gdGhpcy5zdGVwKSArIHRoaXMubWluO1xuXG4gICAgICByZXR1cm4gTnVtYmVyKHZhbHVlLnRvRml4ZWQodGhpcy50b0ZpeGVkKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX3NldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NldFZhbHVlKHZhbHVlLCBmb3JjZSkge1xuICAgICAgaWYgKHZhbHVlID09PSB0aGlzLnZhbHVlICYmICFmb3JjZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFNldCB0aGUgbmV3IHZhbHVlIGFuZCBmaXJlIHRoZSBgaW5wdXRgIGV2ZW50XG4gICAgICB0aGlzLmVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIGRvbS50cmlnZ2VyRXZlbnQodGhpcy5lbGVtZW50LCAnaW5wdXQnLCB7IG9yaWdpbjogdGhpcy5pZGVudGlmaWVyIH0pO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiAnY3JlYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlKGVsLCBvcHRpb25zKSB7XG4gICAgICB2YXIgY3JlYXRlSW5zdGFuY2UgPSBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShlbCkge1xuICAgICAgICB2YXIgZGF0YSA9IGVsW3BsdWdpbk5hbWVdO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZS5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBSYW5nZVNsaWRlcihlbCwgb3B0aW9ucyk7XG4gICAgICAgICAgZWxbcGx1Z2luTmFtZV0gPSBkYXRhO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAoZWwubGVuZ3RoKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVsKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgIGNyZWF0ZUluc3RhbmNlKGVsKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjcmVhdGVJbnN0YW5jZShlbCk7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJhbmdlU2xpZGVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSYW5nZVNsaWRlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuc3VwcG9ydHNSYW5nZSA9IGV4cG9ydHMucmVtb3ZlQWxsTGlzdGVuZXJzRnJvbUVsID0gZXhwb3J0cy5yZW1vdmVFdmVudExpc3RlbmVycyA9IGV4cG9ydHMuYWRkRXZlbnRMaXN0ZW5lcnMgPSBleHBvcnRzLmluc2VydEFmdGVyID0gZXhwb3J0cy50cmlnZ2VyRXZlbnQgPSBleHBvcnRzLmZvckVhY2hBbmNlc3RvcnMgPSBleHBvcnRzLnJlbW92ZUNsYXNzID0gZXhwb3J0cy5hZGRDbGFzcyA9IGV4cG9ydHMuaGFzQ2xhc3MgPSBleHBvcnRzLnNldENzcyA9IGV4cG9ydHMuZ2V0RGltZW5zaW9uID0gZXhwb3J0cy5nZXRIaWRkZW5QYXJlbnROb2RlcyA9IGV4cG9ydHMuaXNIaWRkZW4gPSBleHBvcnRzLmRldGVjdElFID0gdW5kZWZpbmVkO1xuXG52YXIgX2Z1bmN0aW9ucyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBmdW5jID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2Z1bmN0aW9ucyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBFVkVOVF9MSVNURU5FUl9MSVNUID0gJ2V2ZW50TGlzdGVuZXJMaXN0JztcblxudmFyIGRldGVjdElFID0gZXhwb3J0cy5kZXRlY3RJRSA9IGZ1bmN0aW9uIGRldGVjdElFKCkge1xuICB2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgdmFyIG1zaWUgPSB1YS5pbmRleE9mKCdNU0lFICcpO1xuXG4gIGlmIChtc2llID4gMCkge1xuICAgIHJldHVybiBwYXJzZUludCh1YS5zdWJzdHJpbmcobXNpZSArIDUsIHVhLmluZGV4T2YoJy4nLCBtc2llKSksIDEwKTtcbiAgfVxuXG4gIHZhciB0cmlkZW50ID0gdWEuaW5kZXhPZignVHJpZGVudC8nKTtcblxuICBpZiAodHJpZGVudCA+IDApIHtcbiAgICB2YXIgcnYgPSB1YS5pbmRleE9mKCdydjonKTtcblxuICAgIHJldHVybiBwYXJzZUludCh1YS5zdWJzdHJpbmcocnYgKyAzLCB1YS5pbmRleE9mKCcuJywgcnYpKSwgMTApO1xuICB9XG5cbiAgdmFyIGVkZ2UgPSB1YS5pbmRleE9mKCdFZGdlLycpO1xuXG4gIGlmIChlZGdlID4gMCkge1xuICAgIHJldHVybiBwYXJzZUludCh1YS5zdWJzdHJpbmcoZWRnZSArIDUsIHVhLmluZGV4T2YoJy4nLCBlZGdlKSksIDEwKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBpZVZlcnNpb24gPSBkZXRlY3RJRSgpO1xudmFyIGV2ZW50Q2FwdHVyZVBhcmFtcyA9IHdpbmRvdy5Qb2ludGVyRXZlbnQgJiYgIWllVmVyc2lvbiA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IGZhbHNlO1xuXG4vKipcbiAqIENoZWNrIGlmIGEgYGVsZW1lbnRgIGlzIHZpc2libGUgaW4gdGhlIERPTVxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR9ICBlbGVtZW50XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG52YXIgaXNIaWRkZW4gPSBleHBvcnRzLmlzSGlkZGVuID0gZnVuY3Rpb24gaXNIaWRkZW4oZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC5vZmZzZXRXaWR0aCA9PT0gMCB8fCBlbGVtZW50Lm9mZnNldEhlaWdodCA9PT0gMCB8fCBlbGVtZW50Lm9wZW4gPT09IGZhbHNlO1xufTtcblxuLyoqXG4gKiBHZXQgaGlkZGVuIHBhcmVudE5vZGVzIG9mIGFuIGBlbGVtZW50YFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybiB7RWxlbWVudFtdfVxuICovXG52YXIgZ2V0SGlkZGVuUGFyZW50Tm9kZXMgPSBleHBvcnRzLmdldEhpZGRlblBhcmVudE5vZGVzID0gZnVuY3Rpb24gZ2V0SGlkZGVuUGFyZW50Tm9kZXMoZWxlbWVudCkge1xuICB2YXIgcGFyZW50cyA9IFtdO1xuICB2YXIgbm9kZSA9IGVsZW1lbnQucGFyZW50Tm9kZTtcblxuICB3aGlsZSAoaXNIaWRkZW4obm9kZSkpIHtcbiAgICBwYXJlbnRzLnB1c2gobm9kZSk7XG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgfVxuICByZXR1cm4gcGFyZW50cztcbn07XG5cbi8qKlxuICogUmV0dXJucyBkaW1lbnNpb25zIGZvciBhbiBlbGVtZW50IGV2ZW4gaWYgaXQgaXMgbm90IHZpc2libGUgaW4gdGhlIERPTS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBrZXkgICAgIChlLmcuIG9mZnNldFdpZHRoIOKApilcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xudmFyIGdldERpbWVuc2lvbiA9IGV4cG9ydHMuZ2V0RGltZW5zaW9uID0gZnVuY3Rpb24gZ2V0RGltZW5zaW9uKGVsZW1lbnQsIGtleSkge1xuICB2YXIgaGlkZGVuUGFyZW50Tm9kZXMgPSBnZXRIaWRkZW5QYXJlbnROb2RlcyhlbGVtZW50KTtcbiAgdmFyIGhpZGRlblBhcmVudE5vZGVzTGVuZ3RoID0gaGlkZGVuUGFyZW50Tm9kZXMubGVuZ3RoO1xuICB2YXIgZGlzcGxheVByb3BlcnR5ID0gW107XG4gIHZhciBkaW1lbnNpb24gPSBlbGVtZW50W2tleV07XG5cbiAgLy8gVXNlZCBmb3IgbmF0aXZlIGA8ZGV0YWlscz5gIGVsZW1lbnRzXG4gIHZhciB0b2dnbGVPcGVuUHJvcGVydHkgPSBmdW5jdGlvbiB0b2dnbGVPcGVuUHJvcGVydHkoZWxlbWVudCkge1xuICAgIGlmICh0eXBlb2YgZWxlbWVudC5vcGVuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgZWxlbWVudC5vcGVuID0gIWVsZW1lbnQub3BlbjtcbiAgICB9XG4gIH07XG5cbiAgaWYgKGhpZGRlblBhcmVudE5vZGVzTGVuZ3RoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoaWRkZW5QYXJlbnROb2Rlc0xlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBDYWNoZSB0aGUgZGlzcGxheSBwcm9wZXJ0eSB0byByZXN0b3JlIGl0IGxhdGVyLlxuICAgICAgZGlzcGxheVByb3BlcnR5W2ldID0gaGlkZGVuUGFyZW50Tm9kZXNbaV0uc3R5bGUuZGlzcGxheTtcblxuICAgICAgaGlkZGVuUGFyZW50Tm9kZXNbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBoaWRkZW5QYXJlbnROb2Rlc1tpXS5zdHlsZS5oZWlnaHQgPSAnMCc7XG4gICAgICBoaWRkZW5QYXJlbnROb2Rlc1tpXS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgaGlkZGVuUGFyZW50Tm9kZXNbaV0uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgdG9nZ2xlT3BlblByb3BlcnR5KGhpZGRlblBhcmVudE5vZGVzW2ldKTtcbiAgICB9XG5cbiAgICBkaW1lbnNpb24gPSBlbGVtZW50W2tleV07XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGhpZGRlblBhcmVudE5vZGVzTGVuZ3RoOyBqKyspIHtcbiAgICAgIHRvZ2dsZU9wZW5Qcm9wZXJ0eShoaWRkZW5QYXJlbnROb2Rlc1tqXSk7XG4gICAgICBoaWRkZW5QYXJlbnROb2Rlc1tqXS5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheVByb3BlcnR5W2pdO1xuICAgICAgaGlkZGVuUGFyZW50Tm9kZXNbal0uc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICBoaWRkZW5QYXJlbnROb2Rlc1tqXS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgICAgaGlkZGVuUGFyZW50Tm9kZXNbal0uc3R5bGUudmlzaWJpbGl0eSA9ICcnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGltZW5zaW9uO1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBjc3NPYmpcbiAqIEByZXR1cm5zIHsqfVxuICovXG52YXIgc2V0Q3NzID0gZXhwb3J0cy5zZXRDc3MgPSBmdW5jdGlvbiBzZXRDc3MoZWwsIGNzc09iaikge1xuICBmb3IgKHZhciBrZXkgaW4gY3NzT2JqKSB7XG4gICAgZWwuc3R5bGVba2V5XSA9IGNzc09ialtrZXldO1xuICB9XG4gIHJldHVybiBlbC5zdHlsZTtcbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1cbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAqL1xudmFyIGhhc0NsYXNzID0gZXhwb3J0cy5oYXNDbGFzcyA9IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICByZXR1cm4gbmV3IFJlZ0V4cCgnICcgKyBjbGFzc05hbWUgKyAnICcpLnRlc3QoJyAnICsgZWxlbS5jbGFzc05hbWUgKyAnICcpO1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICovXG52YXIgYWRkQ2xhc3MgPSBleHBvcnRzLmFkZENsYXNzID0gZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gIGlmICghaGFzQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSkge1xuICAgIGVsZW0uY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcbiAgfVxufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICovXG52YXIgcmVtb3ZlQ2xhc3MgPSBleHBvcnRzLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gIHZhciBuZXdDbGFzcyA9ICcgJyArIGVsZW0uY2xhc3NOYW1lLnJlcGxhY2UoL1tcXHRcXHJcXG5dL2csICcgJykgKyAnICc7XG5cbiAgaWYgKGhhc0NsYXNzKGVsZW0sIGNsYXNzTmFtZSkpIHtcbiAgICB3aGlsZSAobmV3Q2xhc3MuaW5kZXhPZignICcgKyBjbGFzc05hbWUgKyAnICcpID49IDApIHtcbiAgICAgIG5ld0NsYXNzID0gbmV3Q2xhc3MucmVwbGFjZSgnICcgKyBjbGFzc05hbWUgKyAnICcsICcgJyk7XG4gICAgfVxuICAgIGVsZW0uY2xhc3NOYW1lID0gbmV3Q2xhc3MucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xuICB9XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYW5kRm9yRWxlbWVudCAtIGFwcGx5IGNhbGxiYWNrIGZvciBlbFxuICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICovXG52YXIgZm9yRWFjaEFuY2VzdG9ycyA9IGV4cG9ydHMuZm9yRWFjaEFuY2VzdG9ycyA9IGZ1bmN0aW9uIGZvckVhY2hBbmNlc3RvcnMoZWwsIGNhbGxiYWNrLCBhbmRGb3JFbGVtZW50KSB7XG4gIGlmIChhbmRGb3JFbGVtZW50KSB7XG4gICAgY2FsbGJhY2soZWwpO1xuICB9XG5cbiAgd2hpbGUgKGVsLnBhcmVudE5vZGUgJiYgIWNhbGxiYWNrKGVsKSkge1xuICAgIGVsID0gZWwucGFyZW50Tm9kZTtcbiAgfVxuXG4gIHJldHVybiBlbDtcbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBldmVudCBuYW1lXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICovXG52YXIgdHJpZ2dlckV2ZW50ID0gZXhwb3J0cy50cmlnZ2VyRXZlbnQgPSBmdW5jdGlvbiB0cmlnZ2VyRXZlbnQoZWwsIG5hbWUsIGRhdGEpIHtcbiAgaWYgKCFmdW5jLmlzU3RyaW5nKG5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXZlbnQgbmFtZSBtdXN0IGJlIFN0cmluZycpO1xuICB9XG4gIGlmICghKGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZWxlbWVudCBtdXN0IGJlIEhUTUxFbGVtZW50Jyk7XG4gIH1cbiAgbmFtZSA9IG5hbWUudHJpbSgpO1xuICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcblxuICBldmVudC5pbml0Q3VzdG9tRXZlbnQobmFtZSwgZmFsc2UsIGZhbHNlLCBkYXRhKTtcbiAgZWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWZlcmVuY2VOb2RlIGFmdGVyIHRoaXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBuZXdOb2RlIGluc2VydCB0aGlzXG4gKi9cbnZhciBpbnNlcnRBZnRlciA9IGV4cG9ydHMuaW5zZXJ0QWZ0ZXIgPSBmdW5jdGlvbiBpbnNlcnRBZnRlcihyZWZlcmVuY2VOb2RlLCBuZXdOb2RlKSB7XG4gIHJldHVybiByZWZlcmVuY2VOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUubmV4dFNpYmxpbmcpO1xufTtcblxuLyoqXG4gKiBBZGQgZXZlbnQgbGlzdGVuZXJzIGFuZCBwdXNoIHRoZW0gdG8gZWxbRVZFTlRfTElTVEVORVJfTElTVF1cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8Tm9kZXxEb2N1bWVudH0gZWwgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7QXJyYXl9IGV2ZW50c1xuICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcbiAqL1xudmFyIGFkZEV2ZW50TGlzdGVuZXJzID0gZXhwb3J0cy5hZGRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKGVsLCBldmVudHMsIGxpc3RlbmVyKSB7XG4gIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICBpZiAoIWVsW0VWRU5UX0xJU1RFTkVSX0xJU1RdKSB7XG4gICAgICBlbFtFVkVOVF9MSVNURU5FUl9MSVNUXSA9IHt9O1xuICAgIH1cbiAgICBpZiAoIWVsW0VWRU5UX0xJU1RFTkVSX0xJU1RdW2V2ZW50TmFtZV0pIHtcbiAgICAgIGVsW0VWRU5UX0xJU1RFTkVSX0xJU1RdW2V2ZW50TmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIsIGV2ZW50Q2FwdHVyZVBhcmFtcyk7XG4gICAgaWYgKGVsW0VWRU5UX0xJU1RFTkVSX0xJU1RdW2V2ZW50TmFtZV0uaW5kZXhPZihsaXN0ZW5lcikgPCAwKSB7XG4gICAgICBlbFtFVkVOVF9MSVNURU5FUl9MSVNUXVtldmVudE5hbWVdLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgYW5kIHJlbW92ZSB0aGVtIGZyb20gZWxbRVZFTlRfTElTVEVORVJfTElTVF1cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge0FycmF5fSBldmVudHNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyXG4gKi9cbnZhciByZW1vdmVFdmVudExpc3RlbmVycyA9IGV4cG9ydHMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVycyhlbCwgZXZlbnRzLCBsaXN0ZW5lcikge1xuICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgdmFyIGluZGV4ID0gdm9pZCAwO1xuXG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyLCBmYWxzZSk7XG5cbiAgICBpZiAoZWxbRVZFTlRfTElTVEVORVJfTElTVF0gJiYgZWxbRVZFTlRfTElTVEVORVJfTElTVF1bZXZlbnROYW1lXSAmJiAoaW5kZXggPSBlbFtFVkVOVF9MSVNURU5FUl9MSVNUXVtldmVudE5hbWVdLmluZGV4T2YobGlzdGVuZXIpKSA+IC0xKSB7XG4gICAgICBlbFtFVkVOVF9MSVNURU5FUl9MSVNUXVtldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIEFMTCBldmVudCBsaXN0ZW5lcnMgd2hpY2ggZXhpc3RzIGluIGVsW0VWRU5UX0xJU1RFTkVSX0xJU1RdXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIERPTSBlbGVtZW50XG4gKi9cbnZhciByZW1vdmVBbGxMaXN0ZW5lcnNGcm9tRWwgPSBleHBvcnRzLnJlbW92ZUFsbExpc3RlbmVyc0Zyb21FbCA9IGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVyc0Zyb21FbChpbnN0YW5jZSwgZWwpIHtcbiAgaWYgKCFlbFtFVkVOVF9MSVNURU5FUl9MSVNUXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qIGpzaGludCBpZ25vcmU6c3RhcnQgKi9cblxuICAvKipcbiAgICpcbiAgICogQGNhbGxiYWNrIGxpc3RlbmVyXG4gICAqIEB0aGlzIHtPYmplY3R9IGV2ZW50IG5hbWVcbiAgICovXG4gIGZ1bmN0aW9uIHJtKGxpc3RlbmVyKSB7XG4gICAgaWYgKGxpc3RlbmVyID09PSBpbnN0YW5jZS5fc3RhcnRFdmVudExpc3RlbmVyKSB7XG4gICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgZXZlbnROYW1lIGluIGVsW0VWRU5UX0xJU1RFTkVSX0xJU1RdKSB7XG4gICAgZWxbRVZFTlRfTElTVEVORVJfTElTVF1bZXZlbnROYW1lXS5mb3JFYWNoKHJtLCB7IGV2ZW50TmFtZTogZXZlbnROYW1lLCBlbDogZWwgfSk7XG4gIH1cblxuICBlbFtFVkVOVF9MSVNURU5FUl9MSVNUXSA9IHt9O1xuICAvKiBqc2hpbnQgaWdub3JlOmVuZCAqL1xufTtcblxuLyoqXG4gKiBSYW5nZSBmZWF0dXJlIGRldGVjdGlvblxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xudmFyIHN1cHBvcnRzUmFuZ2UgPSBleHBvcnRzLnN1cHBvcnRzUmFuZ2UgPSBmdW5jdGlvbiBzdXBwb3J0c1JhbmdlKCkge1xuICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYW5nZScpO1xuICByZXR1cm4gaW5wdXQudHlwZSAhPT0gJ3RleHQnO1xufTtcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFuZ2Utc2xpZGVyLmpzLm1hcCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlciB7XG5cdGNvbnN0cnVjdG9yKHNsaWRlciwgb3V0cHV0KSB7XG5cdFx0dGhpcy54ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2xpZGVyKTtcblx0XHR0aGlzLnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvdXRwdXQpO1xuXHR9XG5cblx0aW5pdCgpIHtcblx0XHR0aGlzLnkuaW5uZXJIVE1MID0gdGhpcy54LnZhbHVlO1xuXHRcdHRoaXMueC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldnQpID0+IHRoaXMueS5pbm5lckhUTUwgPSBldnQudGFyZ2V0LnZhbHVlKTtcblx0fVxufVxuXG4iLCJjb25zdCBjb25maWcgPSB7XG5cdHJhbmdlU2xpZGVyOiB7XG5cdFx0cG9seWZpbGw6IHRydWUsXG5cdFx0XHRkaXNhYmxlZENsYXNzOiAncmFuZ2VTbGlkZXItLWRpc2FibGVkJyxcblx0XHRcdHJhbmdlQ2xhc3M6ICdyYW5nZVNsaWRlcicsXG5cdFx0XHRmaWxsQ2xhc3M6ICdyYW5nZVNsaWRlcl9fZmlsbCcsXG5cdFx0XHRidWZmZXJDbGFzczogJ3JhbmdlU2xpZGVyX19idWZmZXInLFxuXHRcdFx0aGFuZGxlQ2xhc3M6ICdyYW5nZVNsaWRlcl9faGFuZGxlJyxcblx0XHRcdHN0YXJ0RXZlbnQ6IFsnbW91c2Vkb3duJywgJ3RvdWNoc3RhcnQnLCAncG9pbnRlcmRvd24nXSxcblx0XHRcdG1vdmVFdmVudDogWydtb3VzZW1vdmUnLCAndG91Y2htb3ZlJywgJ3BvaW50ZXJtb3ZlJ10sXG5cdFx0XHRlbmRFdmVudDogWydtb3VzZXVwJywgJ3RvdWNoZW5kJywgJ3BvaW50ZXJ1cCddLFxuXHRcdFx0dmVydGljYWw6IGZhbHNlLFxuXHRcdFx0bWluOiBudWxsLFxuXHRcdFx0bWF4OiBudWxsLFxuXHRcdFx0c3RlcDogbnVsbCxcblx0XHRcdHZhbHVlOiBudWxsLFxuXHRcdFx0YnVmZmVyOiBudWxsLFxuXHRcdFx0c3RpY2s6IG51bGwsXG5cdFx0XHRib3JkZXJSYWRpdXM6IDAsXG5cdFx0XHRvblNsaWRlRW5kICh2YWx1ZSkge1xuXHRcdFx0XHRjb25zdCBvdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50LmRhdGFzZXQub3V0KTtcblx0XHRcdFx0b3V0RWxlbWVudC5pbm5lckhUTUwgPSB2YWx1ZTtcblx0XHR9XG5cdH1cbn07XG5leHBvcnQgZGVmYXVsdCBjb25maWc7Il19
