<template>
  <el-sub-menu
    v-if="menuItem.children && menuItem.children.length"
    :index="menuItem.path"
  >
    <template #title>
      <span>
        <el-icon><icon-menu /></el-icon>
        <span>{{ menuItem.meta && menuItem.meta.title }}</span>
      </span>
    </template>
    <sidebar-item
      v-for="child in menuItem.children"
      :key="child.path"
      :menuItem="child"
    />
  </el-sub-menu>
  <el-menu-item
    v-else
    :index="menuItem.path"
  >
    <el-icon><icon-menu /></el-icon>
    <span>{{ menuItem.meta && menuItem.meta.title }}</span>
  </el-menu-item>
</template>

<script setup>
import { Menu as IconMenu } from '@element-plus/icons-vue'

defineProps({
  menuItem: {
    type: Object,
    required: true
  },
})
</script>
