<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-circle
        :current="rate"
        size="120px"
        :text="rate.toFixed(0)"
        @click="onClick"
      />
      <van-circle
        color="#13ce66"
        fill="#fff"
        :current="rate"
        :total="150"
        size="120px"
        layer-color="#eee"
        :speed="100"
        :stroke-width="5"
        :clockwise="false"
        :text="rate.toFixed(0)"
        @click="onClick"
      />
      <div>
        <van-button :text="$t('add')" type="primary" size="small" @click="add" />
        <van-button :text="$t('decrease')" type="danger" size="small" @click="reduce" />
      </div>
    </demo-block>
  </demo-section>
</template>

<script>

export default {
  i18n: {
    'zh-CN': {
      title2: '样式定制'
    },
    'en-US': {
      title2: 'Custom Style'
    }
  },

  data() {
    return {
      rate: 30
    };
  },

  methods: {
    add() {
      this.rate = this.rate + 20;
    },

    reduce() {
      this.rate = this.rate - 20;
    },

    onClick() {
      alert('click event');
    }
  }
};
</script>

<style lang="postcss">
.demo-circle {
  .van-circle {
    margin-left: 15px;
  }

  .van-button {
    margin: 15px 0 0 10px;

    &:first-of-type {
      margin-left: 15px;
    }
  }
}
</style>
