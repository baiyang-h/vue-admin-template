<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @select="selectMenuItem"
  >
    <sidebar-item
      v-for="menuItem in menu"
      :key="menuItem.path"
      :menuItem="menuItem"
    />
  </el-menu>
</template>

<script setup>
import { computed, ref, watch, onMounted } from "vue";
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '@/store'
import SidebarItem from './sidebar-item';

const router = useRouter()
const route = useRoute()

// 有权限的菜单路由
const menu = computed(() => useAppStore().menu)

const selectMenuItem = () => {

}
</script>