/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _MeasurementUnitsConverter = __webpack_require__(1);
	
	console.log('\n  Default Converter, value = 1 (cm to mm): ' + _MeasurementUnitsConverter.MeasurementUnitsConverter.createConverter().convert(1) + '\n  Default Converter, value = \'1\' (cm to mm): ' + _MeasurementUnitsConverter.MeasurementUnitsConverter.createConverter().convert('1') + '\n  Default Converter, value = 1,2,3 (cm to mm): ' + _MeasurementUnitsConverter.MeasurementUnitsConverter.createConverter().convert(1, 2, 3) + '\n  Default Converter, value = [1,2,3] (cm to mm): ' + _MeasurementUnitsConverter.MeasurementUnitsConverter.createConverter().convert([1, 2, 3]) + '\n  From cm to mm Converter, value = 2: ' + _MeasurementUnitsConverter.MeasurementUnitsConverter.createConverter({ from: 'cm', to: 'mm' }).convert(2) + '\n  From km to m Converter, value = 3: ' + _MeasurementUnitsConverter.MeasurementUnitsConverter.createConverter({ from: 'km', to: 'm' }).convert(3) + '\n  From m to s Converter, value = 4: ' + _MeasurementUnitsConverter.MeasurementUnitsConverter.createConverter({ from: 'm', to: 's' }).convert(4) + '\n');
	console.log(_MeasurementUnitsConverter.MeasurementUnitsConverter.createConverter().convert(1));
	console.log(_MeasurementUnitsConverter.MeasurementUnitsConverter.createConverter().convert('1'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MeasurementUnitsConverter = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _converter = __webpack_require__(2);
	
	var Converter = _interopRequireWildcard(_converter);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MeasurementUnitsConverter = function () {
	    function MeasurementUnitsConverter() {
	        _classCallCheck(this, MeasurementUnitsConverter);
	    }
	
	    _createClass(MeasurementUnitsConverter, null, [{
	        key: 'createConverter',
	        value: function createConverter() {
	            var conversion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	                from: 'cm',
	                to: 'mm'
	            };
	
	            return new Converter[this.getConverterName(conversion)]();
	        }
	    }, {
	        key: 'getConverterName',
	        value: function getConverterName(conversion) {
	            return conversion.from.toUpperCase() + 'To' + conversion.to.toUpperCase() + 'Converter';
	        }
	    }]);
	
	    return MeasurementUnitsConverter;
	}();
	
	exports.MeasurementUnitsConverter = MeasurementUnitsConverter;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.KMToMConverter = exports.MToSConverter = exports.CMToMMConverter = undefined;
	
	var _CMToMMConverter = __webpack_require__(3);
	
	var _MToSConverter = __webpack_require__(5);
	
	var _KMToMConverter = __webpack_require__(6);
	
	exports.CMToMMConverter = _CMToMMConverter.CMToMMConverter;
	exports.MToSConverter = _MToSConverter.MToSConverter;
	exports.KMToMConverter = _KMToMConverter.KMToMConverter;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CMToMMConverter = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Converter2 = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MULTIPLIER = 10;
	
	var CMToMMConverter = function (_Converter) {
	    _inherits(CMToMMConverter, _Converter);
	
	    function CMToMMConverter() {
	        _classCallCheck(this, CMToMMConverter);
	
	        return _possibleConstructorReturn(this, (CMToMMConverter.__proto__ || Object.getPrototypeOf(CMToMMConverter)).apply(this, arguments));
	    }
	
	    _createClass(CMToMMConverter, [{
	        key: 'getMultiplier',
	        value: function getMultiplier(value) {
	            return MULTIPLIER;
	        }
	    }]);
	
	    return CMToMMConverter;
	}(_Converter2.Converter);
	
	exports.CMToMMConverter = CMToMMConverter;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DEFAULT_MULTIPLIER = 1;
	
	var Converter = function () {
	    function Converter() {
	        _classCallCheck(this, Converter);
	    }
	
	    _createClass(Converter, [{
	        key: 'convert',
	        value: function convert(singleVlaue) {
	            var _this = this;
	
	            for (var _len = arguments.length, restValues = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                restValues[_key - 1] = arguments[_key];
	            }
	
	            var values = [].concat(singleVlaue, restValues),
	                result = values.map(function (value) {
	                return Number.parseInt(value) * _this.getMultiplier();
	            });
	
	            return typeof values[0] === 'string' ? result.map(function (value) {
	                return '' + value;
	            }) : result;
	        }
	    }, {
	        key: 'getMultiplier',
	        value: function getMultiplier() {
	            return DEFAULT_MULTIPLIER;
	        }
	    }]);
	
	    return Converter;
	}();
	
	exports.Converter = Converter;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MToSConverter = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Converter2 = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MULTIPLIER = 60;
	
	var MToSConverter = function (_Converter) {
	    _inherits(MToSConverter, _Converter);
	
	    function MToSConverter() {
	        _classCallCheck(this, MToSConverter);
	
	        return _possibleConstructorReturn(this, (MToSConverter.__proto__ || Object.getPrototypeOf(MToSConverter)).apply(this, arguments));
	    }
	
	    _createClass(MToSConverter, [{
	        key: 'getMultiplier',
	        value: function getMultiplier(value) {
	            return MULTIPLIER;
	        }
	    }]);
	
	    return MToSConverter;
	}(_Converter2.Converter);
	
	exports.MToSConverter = MToSConverter;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.KMToMConverter = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Converter2 = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MULTIPLIER = 1000;
	
	var KMToMConverter = function (_Converter) {
	    _inherits(KMToMConverter, _Converter);
	
	    function KMToMConverter() {
	        _classCallCheck(this, KMToMConverter);
	
	        return _possibleConstructorReturn(this, (KMToMConverter.__proto__ || Object.getPrototypeOf(KMToMConverter)).apply(this, arguments));
	    }
	
	    _createClass(KMToMConverter, [{
	        key: 'getMultiplier',
	        value: function getMultiplier(value) {
	            return MULTIPLIER;
	        }
	    }]);
	
	    return KMToMConverter;
	}(_Converter2.Converter);
	
	exports.KMToMConverter = KMToMConverter;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTRhYzIxY2EzYmEyMjQ2NzZkYjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9NZWFzdXJlbWVudFVuaXRzQ29udmVydGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9DTVRvTU1Db252ZXJ0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9Db252ZXJ0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9NVG9TQ29udmVydGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvS01Ub01Db252ZXJ0ZXIuanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImNyZWF0ZUNvbnZlcnRlciIsImNvbnZlcnQiLCJmcm9tIiwidG8iLCJDb252ZXJ0ZXIiLCJNZWFzdXJlbWVudFVuaXRzQ29udmVydGVyIiwiY29udmVyc2lvbiIsImdldENvbnZlcnRlck5hbWUiLCJ0b1VwcGVyQ2FzZSIsIkNNVG9NTUNvbnZlcnRlciIsIk1Ub1NDb252ZXJ0ZXIiLCJLTVRvTUNvbnZlcnRlciIsIk1VTFRJUExJRVIiLCJ2YWx1ZSIsIkRFRkFVTFRfTVVMVElQTElFUiIsInNpbmdsZVZsYXVlIiwicmVzdFZhbHVlcyIsInZhbHVlcyIsImNvbmNhdCIsInJlc3VsdCIsIm1hcCIsIk51bWJlciIsInBhcnNlSW50IiwiZ2V0TXVsdGlwbGllciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTs7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OztBQUdBLEtBQU1FLGFBQWEsSUFBbkI7O0tBRU1ELGM7Ozs7Ozs7Ozs7O3VDQUVZRSxLLEVBQU87QUFDakIsb0JBQU9ELFVBQVA7QUFDSDs7Ozs7O1NBS0RELGMsR0FBQUEsYyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDE0YWMyMWNhM2JhMjI0Njc2ZGIzXG4gKiovIiwiaW1wb3J0IHtcclxuICAgIE1lYXN1cmVtZW50VW5pdHNDb252ZXJ0ZXJcclxufSBmcm9tICcuL01lYXN1cmVtZW50VW5pdHNDb252ZXJ0ZXInO1xyXG5cclxuY29uc29sZS5sb2coYFxyXG4gIERlZmF1bHQgQ29udmVydGVyLCB2YWx1ZSA9IDEgKGNtIHRvIG1tKTogJHtNZWFzdXJlbWVudFVuaXRzQ29udmVydGVyLmNyZWF0ZUNvbnZlcnRlcigpLmNvbnZlcnQoMSl9XHJcbiAgRGVmYXVsdCBDb252ZXJ0ZXIsIHZhbHVlID0gJzEnIChjbSB0byBtbSk6ICR7TWVhc3VyZW1lbnRVbml0c0NvbnZlcnRlci5jcmVhdGVDb252ZXJ0ZXIoKS5jb252ZXJ0KCcxJyl9XHJcbiAgRGVmYXVsdCBDb252ZXJ0ZXIsIHZhbHVlID0gMSwyLDMgKGNtIHRvIG1tKTogJHtNZWFzdXJlbWVudFVuaXRzQ29udmVydGVyLmNyZWF0ZUNvbnZlcnRlcigpLmNvbnZlcnQoMSwyLDMpfVxyXG4gIERlZmF1bHQgQ29udmVydGVyLCB2YWx1ZSA9IFsxLDIsM10gKGNtIHRvIG1tKTogJHtNZWFzdXJlbWVudFVuaXRzQ29udmVydGVyLmNyZWF0ZUNvbnZlcnRlcigpLmNvbnZlcnQoWzEsMiwzXSl9XHJcbiAgRnJvbSBjbSB0byBtbSBDb252ZXJ0ZXIsIHZhbHVlID0gMjogJHtNZWFzdXJlbWVudFVuaXRzQ29udmVydGVyLmNyZWF0ZUNvbnZlcnRlcih7ZnJvbTogJ2NtJywgdG86ICdtbSd9KS5jb252ZXJ0KDIpfVxyXG4gIEZyb20ga20gdG8gbSBDb252ZXJ0ZXIsIHZhbHVlID0gMzogJHtNZWFzdXJlbWVudFVuaXRzQ29udmVydGVyLmNyZWF0ZUNvbnZlcnRlcih7ZnJvbTogJ2ttJywgdG86ICdtJ30pLmNvbnZlcnQoMyl9XHJcbiAgRnJvbSBtIHRvIHMgQ29udmVydGVyLCB2YWx1ZSA9IDQ6ICR7TWVhc3VyZW1lbnRVbml0c0NvbnZlcnRlci5jcmVhdGVDb252ZXJ0ZXIoe2Zyb206ICdtJywgdG86ICdzJ30pLmNvbnZlcnQoNCl9XHJcbmApO1xyXG5jb25zb2xlLmxvZyhNZWFzdXJlbWVudFVuaXRzQ29udmVydGVyLmNyZWF0ZUNvbnZlcnRlcigpLmNvbnZlcnQoMSkpO1xyXG5jb25zb2xlLmxvZyhNZWFzdXJlbWVudFVuaXRzQ29udmVydGVyLmNyZWF0ZUNvbnZlcnRlcigpLmNvbnZlcnQoJzEnKSk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0ICogYXMgQ29udmVydGVyIGZyb20gJy4vY29udmVydGVyJztcclxuXHJcbmNsYXNzIE1lYXN1cmVtZW50VW5pdHNDb252ZXJ0ZXIge1xyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVDb252ZXJ0ZXIoY29udmVyc2lvbiA9IHtcclxuICAgICAgICBmcm9tOiAnY20nLFxyXG4gICAgICAgIHRvOiAnbW0nXHJcbiAgICB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb252ZXJ0ZXJbdGhpcy5nZXRDb252ZXJ0ZXJOYW1lKGNvbnZlcnNpb24pXSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb252ZXJ0ZXJOYW1lKGNvbnZlcnNpb24pIHtcclxuICAgICAgICByZXR1cm4gYCR7Y29udmVyc2lvbi5mcm9tLnRvVXBwZXJDYXNlKCl9VG8ke2NvbnZlcnNpb24udG8udG9VcHBlckNhc2UoKX1Db252ZXJ0ZXJgO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIE1lYXN1cmVtZW50VW5pdHNDb252ZXJ0ZXJcclxufTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvTWVhc3VyZW1lbnRVbml0c0NvbnZlcnRlci5qc1xuICoqLyIsImltcG9ydCB7XHJcbiAgICBDTVRvTU1Db252ZXJ0ZXJcclxufSBmcm9tICcuL0NNVG9NTUNvbnZlcnRlcic7XHJcbmltcG9ydCB7XHJcbiAgICBNVG9TQ29udmVydGVyXHJcbn0gZnJvbSAnLi9NVG9TQ29udmVydGVyJztcclxuaW1wb3J0IHtcclxuICAgIEtNVG9NQ29udmVydGVyXHJcbn0gZnJvbSAnLi9LTVRvTUNvbnZlcnRlcic7XHJcblxyXG5leHBvcnQge1xyXG4gICAgQ01Ub01NQ29udmVydGVyLFxyXG4gICAgTVRvU0NvbnZlcnRlcixcclxuICAgIEtNVG9NQ29udmVydGVyXHJcbn07XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbnZlcnRlci9pbmRleC5qc1xuICoqLyIsImltcG9ydCB7XHJcbiAgICBDb252ZXJ0ZXJcclxufSBmcm9tICcuL0NvbnZlcnRlcic7XHJcblxyXG5jb25zdCBNVUxUSVBMSUVSID0gMTA7XHJcblxyXG5jbGFzcyBDTVRvTU1Db252ZXJ0ZXIgZXh0ZW5kcyBDb252ZXJ0ZXIge1xyXG5cclxuICAgIGdldE11bHRpcGxpZXIodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gTVVMVElQTElFUjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBDTVRvTU1Db252ZXJ0ZXJcclxufTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29udmVydGVyL0NNVG9NTUNvbnZlcnRlci5qc1xuICoqLyIsImNvbnN0IERFRkFVTFRfTVVMVElQTElFUiA9IDE7XHJcblxyXG5jbGFzcyBDb252ZXJ0ZXIge1xyXG5cclxuICAgIGNvbnZlcnQoc2luZ2xlVmxhdWUsIC4uLnJlc3RWYWx1ZXMpIHtcclxuICAgICAgICBsZXQgdmFsdWVzID0gW10uY29uY2F0KHNpbmdsZVZsYXVlLCByZXN0VmFsdWVzKSxcclxuICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWVzLm1hcCh2YWx1ZSA9PiBOdW1iZXIucGFyc2VJbnQodmFsdWUpICogdGhpcy5nZXRNdWx0aXBsaWVyKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlc1swXSA9PT0gJ3N0cmluZycgPyByZXN1bHQubWFwKHZhbHVlID0+ICcnICsgdmFsdWUpIDogcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldE11bHRpcGxpZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIERFRkFVTFRfTVVMVElQTElFUjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBDb252ZXJ0ZXJcclxufTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29udmVydGVyL0NvbnZlcnRlci5qc1xuICoqLyIsImltcG9ydCB7XHJcbiAgICBDb252ZXJ0ZXJcclxufSBmcm9tICcuL0NvbnZlcnRlcic7XHJcblxyXG5jb25zdCBNVUxUSVBMSUVSID0gNjA7XHJcblxyXG5jbGFzcyBNVG9TQ29udmVydGVyIGV4dGVuZHMgQ29udmVydGVyIHtcclxuXHJcbiAgZ2V0TXVsdGlwbGllcih2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gTVVMVElQTElFUjtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgTVRvU0NvbnZlcnRlclxyXG59O1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb252ZXJ0ZXIvTVRvU0NvbnZlcnRlci5qc1xuICoqLyIsImltcG9ydCB7XHJcbiAgICBDb252ZXJ0ZXJcclxufSBmcm9tICcuL0NvbnZlcnRlcic7XHJcbmNvbnN0IE1VTFRJUExJRVIgPSAxMDAwO1xyXG5cclxuY2xhc3MgS01Ub01Db252ZXJ0ZXIgZXh0ZW5kcyBDb252ZXJ0ZXIge1xyXG5cclxuICAgIGdldE11bHRpcGxpZXIodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gTVVMVElQTElFUjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBLTVRvTUNvbnZlcnRlclxyXG59O1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb252ZXJ0ZXIvS01Ub01Db252ZXJ0ZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9