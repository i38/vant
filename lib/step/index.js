"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _create = _interopRequireDefault(require("../utils/create"));

var _default = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "van-hairline",
      class: _vm.b([_vm.$parent.direction, (_obj = {}, _obj[_vm.status] = _vm.status, _obj)])
    }, [_c('div', {
      class: _vm.b('title'),
      style: _vm.titleStyle
    }, [_vm._t("default")], 2), _c('div', {
      class: _vm.b('circle-container')
    }, [_vm.status !== 'process' ? _c('i', {
      class: _vm.b('circle')
    }) : _c('i', {
      staticClass: "step-process ion-ios-checkmark",
      style: {
        color: _vm.$parent.activeColor
      }
    })]), _c('div', {
      class: _vm.b('line')
    })]);

    var _obj;
  },
  name: 'step',
  beforeCreate: function beforeCreate() {
    this.$parent.steps.push(this);
  },
  computed: {
    status: function status() {
      var index = this.$parent.steps.indexOf(this);
      var active = this.$parent.active;

      if (index < active) {
        return 'finish';
      } else if (index === active) {
        return 'process';
      }
    },
    titleStyle: function titleStyle() {
      return this.status === 'process' ? {
        color: this.$parent.activeColor
      } : {};
    }
  }
});

exports.default = _default;