<template>
  <el-container id="app-layout">
    <el-aside :width="wrapAsideWidth" class="scrollbar-none">
      <sidebar :collapse="collapse" />
    </el-aside>
    <el-container>
      <el-header>
        <div class="navigation">
          <collapsed-icon v-model:collapse="collapse" />
          <breadcrumb />
<!--          <navbar />-->
        </div>
        <tag-view />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Sidebar, CollapsedIcon, Breadcrumb, Navbar, TagView } from './components'

const collapse = ref(false)

const wrapAsideWidth = computed(() => collapse.value ? '65px' : '200px')

</script>

<style scoped lang="scss">
#app-layout {
  height: 100%;
  background: #f0f2f5;

  .el-aside {
    overflow-x: hidden;
    background: #fff;
    &>.el-menu {
      min-height: 100%;
    }
  }

  .el-header {
    background: #fff;
    padding: 0;
    height: auto;
    .navigation {
      display: flex;
      align-items: center;
      height: 50px;
      padding: 0 20px;
    }
  }

  .el-main {
    background: #fff;
    margin: 24px 16px;
  }
}
</style>
