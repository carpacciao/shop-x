import Vuex from 'vuex'

const state = {
  lastId: 0,
  list: [{
    id: 100,
    img: '../assets/img/apple.png',
    title: 'Pomme',
    price: '2.50',
    menu: false
  }, {
    id: 101,
    img: '../assets/img/apple.png',
    title: 'Podmme',
    price: '2.50',
    menu: false
  }]
}

const mutations = {
  DELETE_ITEM (state, item) {
    state.list = state.list.filter(i => i !== item)
  },
  ADD_ITEM (state, obj) {
    state.list.push({
      id: state.lastId,
      img: null,
      title: obj.title,
      price: obj.price,
      menu: false
    })
    state.lastId++
  }
}

export default new Vuex.Store({
  state: state,
  mutations: mutations
})
