<template>
    <div>
        <py-input v-model="userInfo.username"></py-input>
        <p>{{userInfo.username}}</p>
    </div>
</template>

<script>
    import pyInput from '@/components/form/py-input'
    export default {
        data() {
            return {
                userInfo: {
                    username: 'pengyi'
                }
            }
        },
        components: {
            pyInput
        },
    }
</script>
