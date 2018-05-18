
const state = {
  // 商品列表
  shop_list: [
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
  ],
  added: []
}

const getters = {
  // 商品列表
  shoplist: state => state.shop_list,
  // 购物车的列表
  cartProducts: state => {
    return state.added.map(({id, num}) => {
      let product = state.shop_list.find(n => n.id === id)
      return {
        ...product,
        num
      }
    })
  }
}

const actions = {
  // 添加到购物车操作
  addToCart ({commit}, product) {
    commit('add', {
      id: product.id
    })
  }
}

const mutations = {
  // 添加到购物车操作
  add (state, {id}) {
    let record = state.added.find(n => n.id === id)
    if (!record) {
      state.added.push({
        id,
        num: 1
      })
    } else {
      record.num++
    }
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
