<template>
    <div>
        <!-- py-form -->
        <py-form :model='userInfo' :rules='rules' ref='loginForm' label-width='100px'>
            <py-form-item label='用户名' prop='username'>
                <py-input v-model="userInfo.username" placeholder='请输入用户名'></py-input>   
            </py-form-item>
            <py-form-item label='密码' prop='password'>
                <py-input v-model="userInfo.password" type='password' placeholder='请输入密码'></py-input> 
            </py-form-item>
            <py-form-item>
                <button class="login-btn" @click="login">登录</button>
            </py-form-item>
        </py-form>
    </div>
</template>

<script>
    import pyInput from '@/components/form/py-input'
    import pyFormItem from '@/components/form/py-form-item'
    import pyForm from '@/components/form/py-form'

    export default {
        data() {
            return {
                userInfo: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        {
                            required: true,
                            message: '用户名不能为空'
                        }
                    ],
                    password: [
                        {
                            required: true,
                            message: '密码不能为空'
                        }
                    ]
                }
            }
        },
        components: {
            pyInput,
            pyFormItem,
            pyForm
        },
        methods: {
            login() {
                this.$refs['loginForm'].validate(valid => {
                    console.log('valid:', valid);
                    if (valid) {
                        console.log('校验成功');
                    } else {
                        console.log('校验失败');
                    }
                })
            }
        },
    }
</script>
<style>
    .login-btn{text-align: center;padding:10px 20px;background: none;border:1px solid #eee;margin: 15px auto;border-radius: 4px;width: 100%;}
</style>