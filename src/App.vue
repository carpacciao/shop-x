<template>
  <div class="kheyes">
    <shop-list></shop-list>
  </div>
</template>

<script>
import ShopList from './components/ShopList'

export default {
  name: 'App',
  components: {
    ShopList
  }
}
</script>

<style lang="scss">
.kheyes{
  margin: 0 auto;
  width: 600px;
}
</style>
