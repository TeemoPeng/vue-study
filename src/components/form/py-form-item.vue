<template>
    <div>
        <label v-if="label">{{label}}</label>
        <slot></slot>

        <!--校验信息-->
        <p v-if="error">{{error}}</p>
    </div>
</template>

<script>
    import Schema from 'async-validator'
    export default {
        inject: ['form'],
        data() {
            return {
                error: '', // 空为校验通过
            }
        },
        props: {
            label: {
                type: String,
                default: ''
            },
            prop: {
                type: String
            }
        },
        mounted () {
            this.$on('validate', () => {
                this.validate()
            });
        },
        methods: {
            validate() {
                // 规则
                const rules = this.form.rules[this.prop]

                // 当前值
                const value = this.form.model[this.prop]

                const descriptor = {
                    [this.prop]: rules
                }

                // 创建schema实例
                const schema = new Schema(descriptor)
                
                schema.validate({
                    [this.prop]: value
                }, errors => {
                    this.error = errors ? errors[0].message : ''
                })

            }
        },
    }
</script>
