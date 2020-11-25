<template>
    <div>
        <input :type='type' :value='value' @input='onInput'/>
    </div>
</template>

<script>
    export default {
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
        methods: {
            onInput(e) {
                this.$emit('input', e.target.value)
            }
        },
    }
</script>