(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var Person = require("./components/Person").Person;

window.app = function () {
	var oleg = new Person("Oleg", "Zaiats");
	console.log(oleg.fullName);
};

window.app();

},{"./components/Person":2}],2:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS96YWlhdHM4NS9EZXNrdG9wL3Rlc3R0YXNrL3NyYy9hcHAuanMiLCIvaG9tZS96YWlhdHM4NS9EZXNrdG9wL3Rlc3R0YXNrL3NyYy9jb21wb25lbnRzL1BlcnNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0lDQVEsTUFBTSxXQUFPLHFCQUFxQixFQUFsQyxNQUFNOztBQUVkLE1BQU0sQ0FBQyxHQUFHLEdBQUcsWUFBWTtBQUN4QixLQUFNLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDMUMsUUFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Q0FDM0IsQ0FBQzs7QUFFRixNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNQUCxNQUFNO0FBQ0EsVUFETixNQUFNLENBQ0MsU0FBUyxFQUFFLFFBQVEsRUFBRTt3QkFENUIsTUFBTTs7QUFFVixNQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUMzQixNQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztFQUN6Qjs7Y0FKSSxNQUFNO0FBTVAsVUFBUTtRQUFBLFlBQUc7QUFDZCxnQkFBVSxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxRQUFRLENBQUc7SUFDNUM7Ozs7UUFSSSxNQUFNOzs7UUFVSixNQUFNLEdBQU4sTUFBTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQge1BlcnNvbn0gZnJvbSAnLi9jb21wb25lbnRzL1BlcnNvbic7XG5cbndpbmRvdy5hcHAgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IG9sZWcgPSBuZXcgUGVyc29uKCdPbGVnJywgJ1phaWF0cycpO1xuXHRjb25zb2xlLmxvZyhvbGVnLmZ1bGxOYW1lKTtcbn07XG5cbndpbmRvdy5hcHAoKTsiLCJjbGFzcyBQZXJzb24ge1xuXHRjb25zdHJ1Y3RvcihmaXJzdE5hbWUsIGxhc3ROYW1lKSB7XG5cdFx0dGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XG5cdFx0dGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xuXHR9XG5cblx0Z2V0IGZ1bGxOYW1lKCkge1xuXHRcdHJldHVybiBgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfWA7XG5cdH1cbn1cbmV4cG9ydCB7UGVyc29ufSJdfQ==
