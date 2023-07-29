/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/src/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/src/blocks.js":
/*!******************************!*\
  !*** ./blocks/src/blocks.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./blocks/src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var InspectorControls = wp.editor.InspectorControls;
var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    RangeControl = _wp$components.RangeControl,
    CheckboxControl = _wp$components.CheckboxControl;

var blockIcon = function blockIcon() {
  return wp.element.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "40",
    viewBox: "0 0 49 28",
    fill: "none"
  }, wp.element.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M34.4757 22.0614V17.2941L43.0323 23.4061C43.5361 23.7659 44.1987 23.814 44.7491 23.5307C45.2996 23.2474 45.6455 22.6803 45.6455 22.0612V5.53492C45.6455 4.91587 45.2996 4.34873 44.7491 4.06545C44.1987 3.78219 43.5361 3.8303 43.0323 4.19012L34.4757 10.3021V5.53504C34.4757 2.61741 31.8784 0.577148 29.0998 0.577148H8.62239C5.84387 0.577148 3.24658 2.61741 3.24658 5.53504V22.0614C3.24658 24.979 5.84387 27.0193 8.62239 27.0193H29.0998C31.8784 27.0193 34.4757 24.979 34.4757 22.0614ZM20.3316 18.1759C17.8232 16.8906 15.7668 14.8431 14.4904 12.3347L16.4404 10.3847C16.6886 10.1365 16.7596 9.79081 16.6621 9.48059C16.3341 8.48784 16.1568 7.42421 16.1568 6.31627C16.1568 5.82876 15.758 5.4299 15.2704 5.4299H12.1681C11.6807 5.4299 11.2818 5.82876 11.2818 6.31627C11.2818 14.6393 18.027 21.3845 26.35 21.3845C26.8375 21.3845 27.2364 20.9856 27.2364 20.4981V17.4047C27.2364 16.9172 26.8375 16.5183 26.35 16.5183C25.2509 16.5183 24.1784 16.341 23.1857 16.0131C22.8755 15.9068 22.5209 15.9865 22.2816 16.2258L20.3316 18.1759ZM25.8625 5.42103L26.4918 6.04149L20.8989 11.6345H24.5773V12.5209H19.2591V7.20264H20.1455V11.0051L25.8625 5.42103Z",
    fill: "#407BFF"
  }));
};




var EditBlock = /*#__PURE__*/function (_Component) {
  _inherits(EditBlock, _Component);

  var _super = _createSuper(EditBlock);

  function EditBlock(props) {
    _classCallCheck(this, EditBlock);

    return _super.call(this, props);
  }

  _createClass(EditBlock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          setAttributes = _this$props.setAttributes,
          _this$props$attribute = _this$props.attributes,
          name = _this$props$attribute.name,
          fromGlobal = _this$props$attribute.fromGlobal;

      var _newName = Math.random().toString(36).substring(2, 15);

      if (!name) {
        setAttributes({
          name: _newName
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          attributes = _this$props2.attributes,
          setAttributes = _this$props2.setAttributes;
      var name = attributes.name,
          fromGlobal = attributes.fromGlobal,
          width = attributes.width,
          height = attributes.height,
          audioMuted = attributes.audioMuted,
          videoMuted = attributes.videoMuted,
          screenSharing = attributes.screenSharing,
          invite = attributes.invite;
      return wp.element.createElement(Fragment, null, wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
        title: __('Settings'),
        initialOpen: true
      }, wp.element.createElement(TextControl, {
        label: __('Name'),
        value: name,
        onChange: function onChange(val) {
          return setAttributes({
            name: val
          });
        }
      }), wp.element.createElement(CheckboxControl, {
        label: __('Config from global'),
        checked: fromGlobal,
        onChange: function onChange(val) {
          setAttributes({
            fromGlobal: val
          });

          if (!fromGlobal) {
            setAttributes({
              width: parseInt(jitsi.meeting_width),
              height: parseInt(jitsi.meeting_height),
              audioMuted: parseInt(jitsi.startwithaudiomuted) ? true : false,
              videoMuted: parseInt(jitsi.startwithvideomuted) ? true : false,
              screenSharing: parseInt(jitsi.startscreensharing) ? true : false,
              invite: parseInt(jitsi.invite) ? true : false
            });
          }
        }
      }), !fromGlobal && wp.element.createElement("div", null, wp.element.createElement(RangeControl, {
        label: __('Width'),
        value: width,
        onChange: function onChange(val) {
          return setAttributes({
            width: val
          });
        },
        min: 100,
        max: 2000,
        step: 10
      }), wp.element.createElement(RangeControl, {
        label: __('Height'),
        value: height,
        onChange: function onChange(val) {
          return setAttributes({
            height: val
          });
        },
        min: 100,
        max: 2000,
        step: 10
      }), wp.element.createElement(CheckboxControl, {
        label: __('Start with audio muted'),
        checked: audioMuted,
        onChange: function onChange(val) {
          return setAttributes({
            audioMuted: val
          });
        }
      }), wp.element.createElement(CheckboxControl, {
        label: __('Start with video muted'),
        checked: videoMuted,
        onChange: function onChange(val) {
          return setAttributes({
            videoMuted: val
          });
        }
      }), wp.element.createElement(CheckboxControl, {
        label: __('Start with screen sharing'),
        checked: screenSharing,
        onChange: function onChange(val) {
          return setAttributes({
            screenSharing: val
          });
        }
      }), wp.element.createElement(CheckboxControl, {
        label: __('Enable Inviting'),
        checked: invite,
        onChange: function onChange(val) {
          return setAttributes({
            invite: val
          });
        }
      })))), wp.element.createElement("div", {
        className: "jitsi-wrapper",
        "data-name": name,
        "data-width": width,
        "data-height": height,
        "data-mute": audioMuted,
        "data-videomute": videoMuted,
        "data-screen": screenSharing,
        "data-invite": invite
      }, "https://meet.jit.si/".concat(name)));
    }
  }]);

  return EditBlock;
}(Component);

registerBlockType('jitsi-meet-wp/jitsi-meet', {
  title: __('Jitsi Meet', 'jitsi-meet-wp'),
  icon: blockIcon,
  category: 'embed',
  keywords: [__('jitsi', 'jitsi-meet-wp'), __('meeting', 'jitsi-meet-wp'), __('video', 'jitsi-meet-wp'), __('conference', 'jitsi-meet-wp'), __('zoom', 'jitsi-meet-wp')],
  attributes: {
    name: {
      type: 'string',
      "default": ''
    },
    width: {
      type: 'number',
      "default": 1080
    },
    height: {
      type: 'number',
      "default": 720
    },
    fromGlobal: {
      type: 'boolean',
      "default": false
    },
    audioMuted: {
      type: 'boolean',
      "default": false
    },
    videoMuted: {
      type: 'boolean',
      "default": true
    },
    screenSharing: {
      type: 'boolean',
      "default": false
    },
    invite: {
      type: 'boolean',
      "default": true
    }
  },
  edit: EditBlock,
  save: function save(props) {
    var _props$attributes = props.attributes,
        name = _props$attributes.name,
        width = _props$attributes.width,
        height = _props$attributes.height,
        audioMuted = _props$attributes.audioMuted,
        videoMuted = _props$attributes.videoMuted,
        screenSharing = _props$attributes.screenSharing,
        invite = _props$attributes.invite;
    return wp.element.createElement("div", {
      className: "jitsi-wrapper",
      "data-name": name,
      "data-width": width,
      "data-height": height,
      "data-mute": audioMuted,
      "data-videomute": videoMuted,
      "data-screen": screenSharing,
      "data-invite": invite,
      style: {
        width: "".concat(width, "px")
      }
    });
  }
});

/***/ }),

/***/ "./blocks/src/editor.scss":
/*!********************************!*\
  !*** ./blocks/src/editor.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/style.scss":
/*!*******************************!*\
  !*** ./blocks/src/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL3N0eWxlLnNjc3MiXSwibmFtZXMiOlsiSW5zcGVjdG9yQ29udHJvbHMiLCJ3cCIsImVkaXRvciIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiX18iLCJpMThuIiwiZWxlbWVudCIsIkNvbXBvbmVudCIsIkZyYWdtZW50IiwiY29tcG9uZW50cyIsIlBhbmVsQm9keSIsIlRleHRDb250cm9sIiwiUmFuZ2VDb250cm9sIiwiQ2hlY2tib3hDb250cm9sIiwiYmxvY2tJY29uIiwiRWRpdEJsb2NrIiwicHJvcHMiLCJzZXRBdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsIm5hbWUiLCJmcm9tR2xvYmFsIiwiX25ld05hbWUiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJ3aWR0aCIsImhlaWdodCIsImF1ZGlvTXV0ZWQiLCJ2aWRlb011dGVkIiwic2NyZWVuU2hhcmluZyIsImludml0ZSIsInZhbCIsInBhcnNlSW50Iiwiaml0c2kiLCJtZWV0aW5nX3dpZHRoIiwibWVldGluZ19oZWlnaHQiLCJzdGFydHdpdGhhdWRpb211dGVkIiwic3RhcnR3aXRodmlkZW9tdXRlZCIsInN0YXJ0c2NyZWVuc2hhcmluZyIsInRpdGxlIiwiaWNvbiIsImNhdGVnb3J5Iiwia2V5d29yZHMiLCJ0eXBlIiwiZWRpdCIsInNhdmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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QyxVQU5wQjtBQU9JLHFCQUFhQyxhQVBqQjtBQVFJLHFCQUFhQyxNQVJqQjtBQVNJLFdBQUssRUFBRTtBQUNITCxhQUFLLFlBQUtBLEtBQUw7QUFERjtBQVRYLE1BRFY7QUFlQTtBQXpFNEMsQ0FBN0IsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNsSUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoiYmxvY2tzLmJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qc1wiKTtcbiIsImNvbnN0IHsgSW5zcGVjdG9yQ29udHJvbHMgfSA9IHdwLmVkaXRvcjtcclxuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5jb25zdCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSA9IHdwLmVsZW1lbnQ7XHJcbmNvbnN0IHsgUGFuZWxCb2R5LCBUZXh0Q29udHJvbCwgUmFuZ2VDb250cm9sLCBDaGVja2JveENvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCBibG9ja0ljb24gPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjQwXCIgdmlld0JveD1cIjAgMCA0OSAyOFwiIGZpbGw9XCJub25lXCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0zNC40NzU3IDIyLjA2MTRWMTcuMjk0MUw0My4wMzIzIDIzLjQwNjFDNDMuNTM2MSAyMy43NjU5IDQ0LjE5ODcgMjMuODE0IDQ0Ljc0OTEgMjMuNTMwN0M0NS4yOTk2IDIzLjI0NzQgNDUuNjQ1NSAyMi42ODAzIDQ1LjY0NTUgMjIuMDYxMlY1LjUzNDkyQzQ1LjY0NTUgNC45MTU4NyA0NS4yOTk2IDQuMzQ4NzMgNDQuNzQ5MSA0LjA2NTQ1QzQ0LjE5ODcgMy43ODIxOSA0My41MzYxIDMuODMwMyA0My4wMzIzIDQuMTkwMTJMMzQuNDc1NyAxMC4zMDIxVjUuNTM1MDRDMzQuNDc1NyAyLjYxNzQxIDMxLjg3ODQgMC41NzcxNDggMjkuMDk5OCAwLjU3NzE0OEg4LjYyMjM5QzUuODQzODcgMC41NzcxNDggMy4yNDY1OCAyLjYxNzQxIDMuMjQ2NTggNS41MzUwNFYyMi4wNjE0QzMuMjQ2NTggMjQuOTc5IDUuODQzODcgMjcuMDE5MyA4LjYyMjM5IDI3LjAxOTNIMjkuMDk5OEMzMS44Nzg0IDI3LjAxOTMgMzQuNDc1NyAyNC45NzkgMzQuNDc1NyAyMi4wNjE0Wk0yMC4zMzE2IDE4LjE3NTlDMTcuODIzMiAxNi44OTA2IDE1Ljc2NjggMTQuODQzMSAxNC40OTA0IDEyLjMzNDdMMTYuNDQwNCAxMC4zODQ3QzE2LjY4ODYgMTAuMTM2NSAxNi43NTk2IDkuNzkwODEgMTYuNjYyMSA5LjQ4MDU5QzE2LjMzNDEgOC40ODc4NCAxNi4xNTY4IDcuNDI0MjEgMTYuMTU2OCA2LjMxNjI3QzE2LjE1NjggNS44Mjg3NiAxNS43NTggNS40Mjk5IDE1LjI3MDQgNS40Mjk5SDEyLjE2ODFDMTEuNjgwNyA1LjQyOTkgMTEuMjgxOCA1LjgyODc2IDExLjI4MTggNi4zMTYyN0MxMS4yODE4IDE0LjYzOTMgMTguMDI3IDIxLjM4NDUgMjYuMzUgMjEuMzg0NUMyNi44Mzc1IDIxLjM4NDUgMjcuMjM2NCAyMC45ODU2IDI3LjIzNjQgMjAuNDk4MVYxNy40MDQ3QzI3LjIzNjQgMTYuOTE3MiAyNi44Mzc1IDE2LjUxODMgMjYuMzUgMTYuNTE4M0MyNS4yNTA5IDE2LjUxODMgMjQuMTc4NCAxNi4zNDEgMjMuMTg1NyAxNi4wMTMxQzIyLjg3NTUgMTUuOTA2OCAyMi41MjA5IDE1Ljk4NjUgMjIuMjgxNiAxNi4yMjU4TDIwLjMzMTYgMTguMTc1OVpNMjUuODYyNSA1LjQyMTAzTDI2LjQ5MTggNi4wNDE0OUwyMC44OTg5IDExLjYzNDVIMjQuNTc3M1YxMi41MjA5SDE5LjI1OTFWNy4yMDI2NEgyMC4xNDU1VjExLjAwNTFMMjUuODYyNSA1LjQyMTAzWlwiIGZpbGw9XCIjNDA3QkZGXCIvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG5cdClcclxufVxyXG5cclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xyXG5cclxuY2xhc3MgRWRpdEJsb2NrIGV4dGVuZHMgQ29tcG9uZW50e1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlciggcHJvcHMgKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgeyBzZXRBdHRyaWJ1dGVzLCBhdHRyaWJ1dGVzOiB7IG5hbWUsIGZyb21HbG9iYWwgfSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBfbmV3TmFtZSA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCAxNSk7XHJcbiAgICAgICAgaWYgKCFuYW1lKSB7XHJcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyBuYW1lOiBfbmV3TmFtZSB9KTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdGNvbnN0IHtcclxuXHRcdFx0YXR0cmlidXRlcyxcclxuXHRcdFx0c2V0QXR0cmlidXRlc1xyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgZnJvbUdsb2JhbCxcclxuICAgICAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodCxcclxuICAgICAgICAgICAgYXVkaW9NdXRlZCxcclxuICAgICAgICAgICAgdmlkZW9NdXRlZCxcclxuICAgICAgICAgICAgc2NyZWVuU2hhcmluZyxcclxuICAgICAgICAgICAgaW52aXRlXHJcbiAgICAgICAgfSA9IGF0dHJpYnV0ZXM7XHJcblxyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhbmVsQm9keSB0aXRsZT17X18oJ1NldHRpbmdzJyl9IGluaXRpYWxPcGVuPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ05hbWUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgbmFtZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsICkgPT4gc2V0QXR0cmlidXRlcyh7bmFtZTogdmFsfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ0NvbmZpZyBmcm9tIGdsb2JhbCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17IGZyb21HbG9iYWwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB2YWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoe2Zyb21HbG9iYWw6IHZhbH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFmcm9tR2xvYmFsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogcGFyc2VJbnQoaml0c2kubWVldGluZ193aWR0aCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBwYXJzZUludChqaXRzaS5tZWV0aW5nX2hlaWdodCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW9NdXRlZDogcGFyc2VJbnQoaml0c2kuc3RhcnR3aXRoYXVkaW9tdXRlZCkgPyB0cnVlIDogZmFsc2UsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9NdXRlZDpwYXJzZUludChqaXRzaS5zdGFydHdpdGh2aWRlb211dGVkKSA/IHRydWUgOiBmYWxzZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JlZW5TaGFyaW5nOnBhcnNlSW50KGppdHNpLnN0YXJ0c2NyZWVuc2hhcmluZykgPyB0cnVlIDogZmFsc2UsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52aXRlOiBwYXJzZUludChqaXRzaS5pbnZpdGUpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyFmcm9tR2xvYmFsICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ1dpZHRoJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgd2lkdGggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsICkgPT4gc2V0QXR0cmlidXRlcyh7d2lkdGg6IHZhbH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsgMTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsgMjAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9eyAxMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnSGVpZ2h0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgaGVpZ2h0IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbCApID0+IHNldEF0dHJpYnV0ZXMoe2hlaWdodDogdmFsfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49eyAxMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9eyAyMDAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17IDEwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdTdGFydCB3aXRoIGF1ZGlvIG11dGVkJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyBhdWRpb011dGVkIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB2YWwgPT4gc2V0QXR0cmlidXRlcyh7YXVkaW9NdXRlZDogdmFsfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ1N0YXJ0IHdpdGggdmlkZW8gbXV0ZWQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17IHZpZGVvTXV0ZWQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHZhbCA9PiBzZXRBdHRyaWJ1dGVzKHt2aWRlb011dGVkOiB2YWx9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnU3RhcnQgd2l0aCBzY3JlZW4gc2hhcmluZycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXsgc2NyZWVuU2hhcmluZyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdmFsID0+IHNldEF0dHJpYnV0ZXMoe3NjcmVlblNoYXJpbmc6IHZhbH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdFbmFibGUgSW52aXRpbmcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17IGludml0ZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdmFsID0+IHNldEF0dHJpYnV0ZXMoe2ludml0ZTogdmFsfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1BhbmVsQm9keT4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9JbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaml0c2ktd3JhcHBlclwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtbmFtZT17bmFtZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS13aWR0aD17d2lkdGh9IFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1tdXRlPXthdWRpb011dGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdmlkZW9tdXRlPXt2aWRlb011dGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtc2NyZWVuPXtzY3JlZW5TaGFyaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaW52aXRlPXtpbnZpdGV9XHJcbiAgICAgICAgICAgICAgICA+e2BodHRwczovL21lZXQuaml0LnNpLyR7bmFtZX1gfTwvZGl2PlxyXG5cdFx0XHQ8L0ZyYWdtZW50PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcbnJlZ2lzdGVyQmxvY2tUeXBlKCdqaXRzaS1tZWV0LXdwL2ppdHNpLW1lZXQnLCB7XHJcbiAgdGl0bGU6IF9fKCdKaXRzaSBNZWV0JywgJ2ppdHNpLW1lZXQtd3AnKSxcclxuICBpY29uOiBibG9ja0ljb24sXHJcbiAgY2F0ZWdvcnk6ICdlbWJlZCcsXHJcbiAga2V5d29yZHM6IFtcclxuICAgIF9fKCAnaml0c2knLCAnaml0c2ktbWVldC13cCcgKSxcclxuICAgIF9fKCAnbWVldGluZycsICdqaXRzaS1tZWV0LXdwJyApLFxyXG4gICAgX18oICd2aWRlbycsICdqaXRzaS1tZWV0LXdwJyApLFxyXG4gICAgX18oICdjb25mZXJlbmNlJywgJ2ppdHNpLW1lZXQtd3AnICksXHJcbiAgICBfXyggJ3pvb20nLCAnaml0c2ktbWVldC13cCcgKVxyXG4gIF0sXHJcbiAgYXR0cmlidXRlczoge1xyXG4gICAgbmFtZToge1xyXG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICB9LFxyXG4gICAgd2lkdGg6IHtcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgICAgICBkZWZhdWx0OiAxMDgwXHJcbiAgICB9LFxyXG4gICAgaGVpZ2h0OiB7XHJcbiAgICAgICAgdHlwZTogJ251bWJlcicsXHJcbiAgICAgICAgZGVmYXVsdDogNzIwXHJcbiAgICB9LFxyXG4gICAgZnJvbUdsb2JhbDoge1xyXG4gICAgICAgIHR5cGU6ICdib29sZWFuJyxcclxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGF1ZGlvTXV0ZWQ6IHtcclxuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXHJcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB2aWRlb011dGVkOiB7XHJcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxyXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBzY3JlZW5TaGFyaW5nOiB7XHJcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxyXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgaW52aXRlOiB7XHJcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxyXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgIH1cclxuICB9LFxyXG4gIGVkaXQ6IEVkaXRCbG9jayxcclxuICBzYXZlOiBmdW5jdGlvbiggcHJvcHMgKSB7XHJcblxyXG5cdFx0Y29uc3Qge1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICB3aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0LFxyXG4gICAgICAgICAgICBhdWRpb011dGVkLFxyXG4gICAgICAgICAgICB2aWRlb011dGVkLFxyXG4gICAgICAgICAgICBzY3JlZW5TaGFyaW5nLFxyXG4gICAgICAgICAgICBpbnZpdGVcclxuXHRcdH0gPSBwcm9wcy5hdHRyaWJ1dGVzO1xyXG5cclxuXHRcdHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJqaXRzaS13cmFwcGVyXCIgXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9e25hbWV9IFxyXG4gICAgICAgICAgICAgICAgZGF0YS13aWR0aD17d2lkdGh9IFxyXG4gICAgICAgICAgICAgICAgZGF0YS1oZWlnaHQ9e2hlaWdodH1cclxuICAgICAgICAgICAgICAgIGRhdGEtbXV0ZT17YXVkaW9NdXRlZH1cclxuICAgICAgICAgICAgICAgIGRhdGEtdmlkZW9tdXRlPXt2aWRlb011dGVkfVxyXG4gICAgICAgICAgICAgICAgZGF0YS1zY3JlZW49e3NjcmVlblNoYXJpbmd9XHJcbiAgICAgICAgICAgICAgICBkYXRhLWludml0ZT17aW52aXRlfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7d2lkdGh9cHhgXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPjwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn0pO1xyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==