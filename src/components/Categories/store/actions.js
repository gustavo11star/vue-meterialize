import axios from 'axios'

const setCategories = async ({commit}, obj) => {
  const response = (await axios.get('http://192.168.10.10/api/categories')).data
  commit('SET_CATEGORIES', response)
}

export default {
  setCategories
}
