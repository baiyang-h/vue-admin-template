<template>
  <el-container>
    <el-aside width="200px">
      <sidebar />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import sidebar from './components/sidebar'
</script>

<style scoped lang="scss">

</style>
