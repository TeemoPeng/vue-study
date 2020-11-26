<template>
    <div>
        <input :type='type' :value='value' @input='onInput' v-bind='$attrs'/>
    </div>
</template>

<script>
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
                this.$parent.$emit('validate')

            }
        },
    }
</script>