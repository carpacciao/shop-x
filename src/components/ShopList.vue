<template>
<div>
  <div class="card-container mt-5" v-for="item in state.list" :key="item.id">
    <div class="menu">
      <a href="#" class="balls" :class="{active: item.menu}" @click.prevent="item.menu = !item.menu"><i class="fas fa-ellipsis-v"></i></a>
      <transition name="slide-fade">
      <ul class="menu-list"  v-if="item.menu">
        <li><a href="#" class="text-primary">Modifier</a></li>
        <li><a href="#" class="text-danger" @click.prevent="deleteItem(item)">Supprimer</a></li>
      </ul>
      </transition>
    </div>
    <div class="row">
      <div class="col-6">
        <img src="../assets/img/cherries.png" class="d-block mx-auto" alt="">
      </div>
      <div class="col-6">
        <h3>&nbsp;{{ item.title }}</h3>
        <div class="stars text-primary">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <p class="m-0 my-2">Lorem ipsum dolor sit amet consectetur.</p>
        <div class="price text-primary"><strong>{{ item.price }} €</strong></div>
      </div>
    </div>
  </div>
  <div class="mt-5 plus">
    <a href="#/add" @click="addItem; adding = true">+</a>
  </div>
  <transition name="fade">
  <shop-add v-if="adding" @close="adding = false"></shop-add>
  </transition>
</div>
</template>

<script>
import store from './ShopListStore.js'
import ShopAdd from './ShopAdd'

export default {
  components: {ShopAdd},
  data () {
    return {
      state: store.state,
      adding: false
    }
  },
  methods: {
    deleteItem (item) {
      store.commit('DELETE_ITEM', item)
    },
    addItem () {
      store.commit('ADD_ITEM', {
        title: 'titre',
        price: '12.34'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.card-container{
  position: relative;
  background-color: #fff;
  box-shadow: 0px 0px 20px 0px rgba(167, 167, 167, 0.75);
  padding: 20px;
  .menu{
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 100;
    .balls{
      text-align: center;
      display: inline-block;
      background-color: white;
      width: 30px;
      height: 30px;
      font-size: 20px;
      line-height: 30px;
      border-radius: 50%;
      transition: .2s;
      &.active{
        background-color: #27ae60;
        color: white;
      }
    }
    .menu-list{
      background-color: white;
      box-shadow: 0px 0px 20px 0px rgba(167, 167, 167, 0.75);
      position: absolute;
      list-style-type: none;
      padding: 0;
      left: 45px;
      top: -10px;
      font-size: 15px;
      li{
        a{
          display: inline-block;
          width: 100%;
          padding: 10px 20px;
          background-color: white;
          &:hover{
            background-color: rgb(250, 250, 250);
          }
        }
      }
    }
  }
  h3{
    border-left: 3px solid #27ae60;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
  }
  .stars{
    i{
      font-size: 10px;
    }
  }
  .price{
    font-size: 20px;
  }
}
.plus{
  position: relative;
  text-align: center;
  a{
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.158);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    text-decoration: none;
    font-size: 60px;
    line-height: 52px;
    color: white;
    transition: .4s;
    &:hover{
      background-color: #27ae60;
    }
  }
}
</style>
