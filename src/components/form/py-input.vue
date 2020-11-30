<template>
    <div class="py-form-input">
        <input :type='type' :value='value' @input='onInput' v-bind='$attrs'/>
    </div>
</template>

<script>
    import emitter from '@/mixins/emitter'
    export default {
        inheritAttrs: false, // false , 避免设置到根元素上
        props: {
            value: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            }
        },
        mixins: [emitter],
        data() {
            return {
                
            }
        },
        mounted () {
        },
        methods: {
            onInput(e) {
                // 派发一个事件给父组件
                this.$emit('input', e.target.value)

                // 通知父级执行校验
                // this.$parent.$emit('validate')
                
                this.dispatch('pyForm', 'validate')

            }
        },
    }
</script>
<style>
    .py-form-input{flex:1;display: flex;flex-flow: row;align-items: center;}
    .py-form-input input{border:1px solid #ddd;padding:8px 10px;border-radius: 4px;width: 100%;flex:1}
    .py-form-input input:focus{border:1px solid #c7c7ea;outline: none;}
</style>