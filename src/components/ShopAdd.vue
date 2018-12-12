<template>
  <div class="adding-overlay">
    <div class="wrapper">
      <input type="text" placeholder="Titre" v-model="title">
      <input type="number" placeholder="prix" v-model="price">
      <input type="submit" value="Valider" class="btn btn-primary" @click.prevent="submit">
      <input type="button" value="Annuler" class="btn btn-danger" @click.prevent="close">
    </div>
  </div>
</template>

<script>
import store from './ShopListStore.js'

export default {
  data () {
    return {
      state: store.state,
      title: '',
      price: ''
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    submit () {
      store.commit('ADD_ITEM', {
        title: this.title,
        price: this.price
      })
      this.close()
    }
  }
}
</script>

<style lang="scss" scoped>
.adding-overlay{
  background-color: rgba(0, 0, 0, 0.363);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper{
    padding: 20px;
    background-color: #fff;
  }
}
</style>
