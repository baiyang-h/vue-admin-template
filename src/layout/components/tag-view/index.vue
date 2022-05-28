<template>
  <div class="tag-view">
    tag-view
  </div>
</template>

<script setup>
import {ref, reactive} from 'vue';

defineProps({})
defineEmits([])
defineExpose({})

const a = ref()

</script>

<style scoped lang="scss">
.tag-view {
  position: relative;
  height: 34px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
  padding: 5px 10px 0;
  box-sizing: border-box;
  user-select:none;
  white-space: nowrap;

  .tags-scroll-container-hidden {
    height: 100%;
    overflow: hidden;
  }

  .tags-scroll-container {
    height: 50px;
    overflow-x: auto;
  }
}
</style>
