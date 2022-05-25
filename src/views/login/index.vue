<template>
  <el-form :model="form" ref="formRef">
    <el-form-item prop="username">
      <el-input v-model="form.username" placeholder="Username" />
    </el-form-item>
    <el-form-item>
      <el-input v-model="form.password" type="password"  prop="password" placeholder="Password" show-password/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit(formRef)">Login</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import useUserStore from '@/store/user'

const router = useRouter()
const route = useRoute()
const formRef = ref()
const form = reactive({
  username: 'admin',
  password: '123',
})
const rules = reactive({
  username: [
    { required: true, message: ' 请输入账户名', trigger: ['blur', 'change'] },
  ],
  password: [
    { required: true, message: ' 请输入密码', trigger: ['blur', 'change'] },
  ],
})

const onSubmit = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

async function onSubmit() {
  if (!formEl) return
  try {
    const user = useUserStore()
    await user.login(form)
    const { redirect } = route.query
    console.log(redirect)
    router.push(redirect ? redirect : '/');
  } catch (e) {
    message.error(e)
  }
}
</script>

<style scoped lang="scss">
.ant-form {
  width: 300px;
  height: 400px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  .ant-col {
    width: 100%;
  }
}
</style>
