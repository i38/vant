"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _create = _interopRequireDefault(require("../utils/create"));

var _raf = require("../utils/raf");

var _default = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b(),
      style: _vm.style,
      on: {
        "click": function click($event) {
          _vm.$emit('click');
        }
      }
    }, [_c('svg', {
      attrs: {
        "viewBox": "0 0 1060 1060"
      }
    }, [_c('path', {
      class: _vm.b('hover'),
      style: _vm.hoverStyle,
      attrs: {
        "d": _vm.path
      }
    }), _c('path', {
      class: _vm.b('layer'),
      style: _vm.layerStyle,
      attrs: {
        "d": _vm.path
      }
    })]), _vm._t("default", [_c('div', {
      class: _vm.b('text')
    }, [_vm._v(_vm._s(_vm.text))])])], 2);
  },
  name: 'circle',
  props: {
    text: String,
    speed: Number,
    size: {
      type: String,
      default: '100px'
    },
    fill: {
      type: String,
      default: 'none'
    },
    total: {
      type: Number,
      default: 100
    },
    current: {
      type: Number,
      default: 0
    },
    layerColor: {
      type: String,
      default: '#fff'
    },
    color: {
      type: String,
      default: '#38f'
    },
    strokeWidth: {
      type: Number,
      default: 40
    },
    clockwise: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      dynamic: this.current
    };
  },
  beforeCreate: function beforeCreate() {
    this.perimeter = 3140;
    this.path = 'M 530 530 m -500, 0 a 500, 500 0 1, 1 1000, 0 a 500, 500 0 1, 1 -1000, 0';
  },
  computed: {
    style: function style() {
      return {
        width: this.size,
        height: this.size
      };
    },
    layerStyle: function layerStyle() {
      var offset = this.perimeter * this.format((this.total - this.dynamic) / this.total, 0, 1);
      offset = this.clockwise ? offset : this.perimeter * 2 - offset;
      return {
        stroke: "" + this.color,
        strokeDashoffset: offset + "px",
        strokeWidth: this.strokeWidth + 1 + "px"
      };
    },
    hoverStyle: function hoverStyle() {
      return {
        fill: "" + this.fill,
        stroke: "" + this.layerColor,
        strokeWidth: this.strokeWidth + "px"
      };
    }
  },
  watch: {
    current: {
      handler: function handler(val, old) {
        this.startTime = Date.now();
        this.startRate = old;
        this.endRate = val;
        this.increase = this.endRate > this.startRate;
        this.duration = Math.abs((this.startRate - this.endRate) * 1000 / this.speed);

        if (this.speed) {
          (0, _raf.cancel)(this.rafId);
          this.rafId = (0, _raf.raf)(this.animate);
        } else {
          this.dynamic = this.current;
        }
      },
      immediate: true
    }
  },
  methods: {
    animate: function animate() {
      var now = Date.now();
      var progress = Math.min((now - this.startTime) / this.duration, 1);
      this.dynamic = progress * (this.endRate - this.startRate) + this.startRate;

      if (this.increase ? this.dynamic < this.endRate : this.dynamic > this.endRate) {
        this.rafId = (0, _raf.raf)(this.animate);
      }
    },
    format: function format(rate, min, max) {
      return Math.min(Math.max(rate, min), max);
    }
  }
});

exports.default = _default;