<template>
  <div class="van-circle" :style="style">
    <svg viewBox="0 0 1060 1060">
      <path class="van-circle__hover" :style="hoverStyle" :d="path" />
      <path class="van-circle__layer" :style="layerStyle" :d="path" />
    </svg>
    <slot>
      <div class="van-circle__text">{{ text }}</div>
    </slot>
  </div>
</template>

<script>
import { create } from '../utils';
import { raf, cancel } from '../utils/raf';

export default create({
  name: 'van-circle',

  props: {
    text: String,
    value: Number,
    speed: Number,
    size: {
      type: String,
      default: '100px'
    },
    fill: {
      type: String,
      default: 'none'
    },
    rate: {
      type: Number,
      default: 100
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

  beforeCreate() {
    this.perimeter = Math.PI * 1000;
    this.path = 'M 530 530 m -500, 0 a 500, 500 0 1, 1 1000, 0 a 500, 500 0 1, 1 -1000, 0';
  },

  computed: {
    style() {
      return {
        width: this.size,
        height: this.size
      };
    },

    layerStyle() {
      let offset = this.perimeter * (100 - this.value) / 100;
      offset = this.clockwise ? offset : this.perimeter * 2 - offset;
      return {
        stroke: `${this.color}`,
        strokeDashoffset: `${offset}px`,
        strokeWidth: `${this.strokeWidth + 1}px`
      };
    },

    hoverStyle() {
      return {
        fill: `${this.fill}`,
        stroke: `${this.layerColor}`,
        strokeWidth: `${this.strokeWidth}px`
      };
    }
  },

  mounted() {
    this.render();
  },

  watch: {
    rate() {
      this.render();
    }
  },

  methods: {
    render() {
      this.startTime = Date.now();
      this.startRate = this.value;
      this.endRate = this.format(this.rate);
      this.increase = this.endRate > this.startRate;
      this.duration = Math.abs((this.startRate - this.endRate) * 1000 / this.speed);
      if (this.speed) {
        cancel(this.rafId);
        this.rafId = raf(this.animate);
      } else {
        this.$emit('input', this.endRate);
      }
    },

    animate() {
      const now = Date.now();
      const progress = Math.min((now - this.startTime) / this.duration, 1);
      const rate = progress * (this.endRate - this.startRate) + this.startRate;
      this.$emit('input', this.format(parseFloat(rate.toFixed(1))));
      if (this.increase ? rate < this.endRate : rate > this.endRate) {
        this.rafId = raf(this.animate);
      }
    },

    format(rate) {
      return Math.min(Math.max(rate, 0), 100);
    }
  }
});
</script>