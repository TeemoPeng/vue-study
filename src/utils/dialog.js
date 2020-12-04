import Vue from 'vue'
import Notice from '@/components/notice'
/**
 * 自定义弹窗组件
 */
const createDialog = function(Component, props){
    // 2 Vue.extend() 方式

    const Ctor = Vue.extend(Component)

    const comp = new Ctor({ propsData: props})

    comp.$mount() // 挂载, 得到真实dom

    document.body.appendChild(comp.$el)


    // // 1. render方式
    // const vm = new Vue({
    //     // h 是createElement，返回vNode

    //     // 通过$mount挂载，得到真实dom
    //     render: h => h(Component, { props })

    // }).$mount() // 不指定宿主元素，需手动追加到body中，$mount不能指定body，指定body将会把body下所有元素都替换掉

    

    // document.body.appendChild(vm.$el)

    // const comp = vm.$children[0] // 组件实例    


    // 销毁
    comp.remove = function() {
        document.body.removeChild(comp.$el)
        comp.$destroy()
    }

    return comp
}

export default { 

    // 使用插件的方式
    install(Vue) {
        Vue.prototype.$notice = function(options) {
            return createDialog(Notice, options)
        }
    }
 }