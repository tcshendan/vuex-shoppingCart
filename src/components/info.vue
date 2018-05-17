<template>
  <div class="info">
    <h4>结算信息</h4>
    <div class="item-wrapper">
      <div class='item'>总数：
        <strong>{{totalNum}}</strong>
      </div>
      <div class='item'>总价：
        <strong>{{totalPrice}}</strong>
      </div>
      <div class="item btn btn-danger">清空购物车</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'info',
  data () {
    return {
      totalNum: 13,
      totalPrice: 342
    }
  }
}
</script>
<style scoped>
  .item-wrapper {
    display: flex;
    background-color: #dfdfdf;
    align-items: center;
    justify-content: center;
  }

  .item {
    flex: 1;
  }
</style>
