<template>
  <div class="product">
    <h4>商品信息</h4>
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>id</th>
          <th>名称</th>
          <th>价格</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(shop, index) in shoplist" :key="index">
          <td>{{shop.id}}</td>
          <td>{{shop.name}}</td>
          <td>{{shop.price}}</td>
          <td>
            <div class="btn btn-info">购物车</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'product',
  data () {
    return {
      shoplist: [
        {
          id: 11,
          name: '鱼香肉丝',
          price: 12
        },
        {
          id: 22,
          name: '宫保鸡丁',
          price: 14
        },
        {
          id: 34,
          name: '土豆丝',
          price: 10
        },
        {
          id: 47,
          name: '米饭',
          price: 2
        }
      ]
    }
  }
}
</script>
<style scoped>
  .table th {
    text-align: center;
  }
</style>
