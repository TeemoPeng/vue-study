<template>
    <div>
        <ul>
            <li>
                <router-link to='/form'>自定义表单组件</router-link>
            </li>
            <li>
                <a @click='showDialog'>自定义弹窗组件</a>
            </li>
        </ul>
        
    </div>
</template>

<script>
    import createDialog from '@/utils/dialog'
    import Notice from '@/components/Notice'
    export default {
        data() {
            return {
                formPath: '/form',
            }
        },
        methods: {
            showDialog() {
                createDialog(Notice, {
                    title: '弹窗标题',
                    message: '这是一个弹窗',
                    duration: 3000
                }).show()
            }
        },
    }
</script>
<style>
    ul li{list-style: none;}
</style>