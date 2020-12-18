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

        <p @click='$store.commit("add")'>couter:{{$store.state.counter}}</p>
        <p @click='$store.dispatch("add")'>async.couter: {{$store.state.counter}}</p>
        <p>double counter: {{$store.getters.doubleCounter}}</p>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formPath: '/form',
            }
        },
        methods: {
            showDialog() {
                this.$notice({
                    title: '弹窗标题',
                    message: '这是一个弹窗',
                    duration: 3000
                }).show()
            }
        },
        mounted () {
            // this.$store.state = {}
        },
    }
</script>
<style>
    ul li{list-style: none;}
</style>