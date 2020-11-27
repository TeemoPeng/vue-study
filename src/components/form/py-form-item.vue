<template>
    <div class="py-form-item">
        <div class="py-form-label">
            <label v-if="label" :style='{width: form.$attrs["label-width"]}' v-bind='$attrs'>{{label}}</label>
            <slot></slot>
        </div>
        <!--校验信息-->
        <p v-if="error" class="py-form-error" :style='{left: form.$attrs["label-width"]}'>{{error}}</p>
    </div>
</template>

<script>
    import Schema from 'async-validator'
    export default {
        inheritAttrs: false,
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
            console.log('label-width:', this.form);
        },
        methods: {
            validate() {
                // 规则
                const rules = this.form.rules[this.prop]

                // 当前值
                const value = this.form.model[this.prop]

                const descriptor = {[this.prop]: rules}

                // 创建schema实例
                const schema = new Schema(descriptor)
                return schema.validate({[this.prop]: value}, errors => {
                    this.error = errors ? errors[0].message : ''
                })
            }
        },
    }
</script>
<style>
    .py-form-label{display: flex;flex-flow: row;align-items: center;}
    .py-form-item{margin-bottom: 16px;position: relative;}
    .py-form-error{line-height: 1;font-size: 12px;color: rgb(243, 128, 128);position: absolute;bottom:-26px}
</style>
