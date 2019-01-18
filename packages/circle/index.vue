<template>
  <div :class="b()" :style="style" @click="$emit('click')">
    <svg viewBox="0 0 1060 1060">
      <path :class="b('hover')" :style="hoverStyle" :d="path" />
      <path :class="b('layer')" :style="layerStyle" :d="path" />
    </svg>
    <slot>
      <div :class="b('text')">{{ text }}</div>
    </slot>
  </div>
</template>

<script>
import create from '../utils/create';
import { raf, cancel } from '../utils/raf';

export default create({
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
  data() {
    return {
      dynamic: this.current
    };
  },
  beforeCreate() {
    this.perimeter = 3140;
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
      let offset = this.perimeter * this.format((this.total - this.dynamic) / this.total, 0, 1);
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

  watch: {
    current: {
      handler(val, old) {
        this.startTime = Date.now();
        this.startRate = old;
        this.endRate = val;
        this.increase = this.endRate > this.startRate;
        this.duration = Math.abs((this.startRate - this.endRate) * 1000 / this.speed);
        if (this.speed) {
          cancel(this.rafId);
          this.rafId = raf(this.animate);
        } else {
          this.dynamic = this.current;
        }
      },
      immediate: true
    }
  },

  methods: {
    animate() {
      const now = Date.now();
      const progress = Math.min((now - this.startTime) / this.duration, 1);
      this.dynamic = progress * (this.endRate - this.startRate) + this.startRate;
      if (this.increase ? this.dynamic < this.endRate : this.dynamic > this.endRate) {
        this.rafId = raf(this.animate);
      }
    },

    format(rate, min, max) {
      return Math.min(Math.max(rate, min), max);
    }
  }
});
</script>
