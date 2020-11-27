<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        provide() {
            return {
                form: this
            }
        },
        props: {
            model: {
                type: Object,
                required: true
            },
            rules: {
                type: Object
            },
        },
        mounted () {
        },
        methods: {
            validate(callback) {
                // 获取所有的py-form-item
                let tasks = []
                this.$children
                    .filter(it => it.prop) // 过滤没有prop属性的form-item
                    .forEach(item => {
                        const reuslt = item.validate()
                        tasks.push(reuslt)
                    })


                // 统一处理所有的promise结果
                Promise.all(tasks)
                    .then(() => callback(true) )
                    .catch(() => callback(false) )
            }
        },
    }
</script>