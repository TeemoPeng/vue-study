<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'pyForm',
        componentName: 'pyForm',
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
        data() {
            return {
                fields: []
            }
        },
        created () {
            this.$on('py-form-addFiedls', item => {
                this.fields.push(item)
            });
        },
        mounted () {

        },
        methods: {
            validate(callback) {
                // 获取所有的py-form-item
                let tasks = []

                // tasks = this.$children
                //     .filter(item => item.prop) // 过滤掉没有prop属性的form-item
                //     .map(item => item.validate() )

                tasks = this.fields.map( item => item.validate() )

                // 统一处理所有的promise结果
                Promise.all(tasks)
                    .then(() => callback(true) )
                    .catch(() => callback(false) )
            }
        },
    }
</script>