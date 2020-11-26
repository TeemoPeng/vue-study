<template>
    <div>
        <!-- py-form -->
        <py-form :model='userInfo' :rules='rules'>
            <py-form-item label='用户名' prop='username'>
                <py-input v-model="userInfo.username" placeholder='请输入用户名'></py-input>   
            </py-form-item>
            <py-form-item label='密码' prop='password'>
                <py-input v-model="userInfo.password" type='password' placeholder='请输入密码'></py-input> 
            </py-form-item>
        </py-form>
        <p>{{userInfo.username}}</p>
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
                    username: 'pengyi',
                    password: '123456'
                },
                rules: {
                    username: [
                        {
                            required: true
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
    }
</script>
