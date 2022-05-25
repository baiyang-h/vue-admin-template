<template>
  <div>
    <el-row align="middle">
      <span class="h-m-r-10">{{ copyText }}</span>
      <el-button type="primary" @click="onCopy">复制</el-button>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { copy } from 'libs/util'
import { ElMessage } from 'element-plus'

const copyText = ref('我是需要被复制的内容')

const onCopy = () => {
  copy(copyText.value).then(() => {
    this.$message.success('复制成功');
    ElMessage.success('复制成功')
  }, () => {
    ElMessage.error('复制失败')
  })
}
</script>
