/**
 * Vuex 模拟
 * 1. 暴露一个Store类，一个install方法
 * 2. 通过mixin方法，在beforeCreate生命周期中获取根实例的store
 * 3. 创建一个响应式的state
 * 4. 创建commit、dispatch方法
 * 5. 实现getters（类似computed）
 */

let Vue = null
class Store {
    constructor(options) {
        this._mutations = options.mutations
        this._actions = options.actions
        this._wrappedGetters = options.getters

        // 定义computed选项
        const computed = {}
        
        //暴露getters
        this.getters = {}

        const store = this

        Object.keys(this._wrappedGetters).forEach(key => {
            // 获取用户定义的getter
            const fn = store._wrappedGetters[key]

            //转换为无参的computed
            computed[key] = function() {
                return fn(store.state)
            }

            // 为getters定义只读属性
            Object.defineProperty(store.getters, key, {
                get: () => store._vm[key]
            })
        })


        // 创建响应式的state
        // this.state = new Vue({
        //     data: options.state
        // })

        // 创建响应式的state
        // Vue.util.defineReactive(this, 'state', options.state)

        // 将state保护起来，不能在外部直接修改
        this._vm = new Vue({
            data: {
                // 两个$ , vue不会为这个变量做代理
                $$state: options.state
            },
            computed
        })

        // 重新绑定commit、dispatch上下文为当前Store实例
        this.commit = this.commit.bind(this)
        this.dispatch = this.dispatch.bind(this)
    }

    get state() {
        return this._vm._data.$$state
    }

    set state(v) {
        console.error('不能直接修改vuex中的state')
    }

    // commit 方法实现, commit 提交的是mutation
    commit(type, payload) {
        const entry = this._mutations[type]

        if (entry) {
            entry(this.state, payload)
        }
    }

    // dispatch方法实现
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
        },
    })
}

export default {
    Store,
    install
}