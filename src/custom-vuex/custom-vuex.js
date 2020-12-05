/**
 * 自定义vuex
 */

let Vue;

class Store {
    constructor(options) {

        // state 需要是响应式的，这样才会触发render函数重新渲染
        this.state = new Vue({
            data: options.state
        })

        this._mutations = options.mutations
        this._actions = options.actions

        // 绑定commit、dispatch上下文为当前Store

        this.commit = this.commit.bind(this)
        this.dispatch = this.dispatch.bind(this)
    }
    /**
     * commit 方法实现
     * type, mutation类型
     * payload 参数
     */
    commit(type, payload) {
        const entry = this._mutations[type] 

        if (entry) {
            entry(this.state, payload)
        }
    }

    /**
     * dispatch 方法实现
     */
    dispatch(type, payload) {
        const entry = this._actions[type] 

        if (entry) {
            entry(this, payload)
        }
    }
}

function install(_Vue) {
    Vue = _Vue

    Vue.mixin({
        beforeCreate() {
            if (this.$options.store) {
                Vue.prototype.$store = this.$options.store
            }
        }
    })

}

export default {
    Store,
    install
}