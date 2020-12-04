import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter(state) {
            return state.counter * 2
        }
    },
    mutations: {
        add(state) {
            state.counter++
        }
    },
    actions: {
        add({commit}) {
            setTimeout(() => {
                commit('add')
            }, 1000);
        }
    },
    modules: {

    }
})
console.log('store ;;', store);
export default store