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
        methods: {
            validate(cb) {
                // 获取所有的py-form-item
                
                const tasks = this.$children
                    .filter(it => it.prop) // 过滤没有prop属性的form-item
                    .map(item => {
                        item.validate()
                    })

                console.log('tasks:', tasks);


                // 统一处理所有的promise结果
                Promise.all(tasks)
                    .then(() => cb(true) )
                    .catch(() => cb(false) )
            }
        },
    }
</script>