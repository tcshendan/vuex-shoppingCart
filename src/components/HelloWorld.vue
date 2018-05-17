<template>
  <div class="hello">
    <h3>Vuex购物车demo</h3>
    <product></product>
    <cart></cart>
    <info></info>
  </div>
</template>

<script>
import product from '@/components/product'
import cart from '@/components/cart'
import info from '@/components/info'

export default {
  name: 'HelloWorld',
  components: {
    product,
    cart,
    info
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
