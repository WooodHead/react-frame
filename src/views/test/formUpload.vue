<template>
  <div class="view">
    <wlb-header><span slot="title">测试文件上传</span></wlb-header>
    <div class="wrap">
      <input type="file" />
    </div>
  </div>
</template>
<script>
  import { WlbHeader } from '@/components'
  export default {
    components: {
      WlbHeader
    }
  }
</script>
<style lang="sass" scoped>
  .view
    display: flex
    flex: 1
  .wrap
    display: flex
    justify-content: center
    align-items: center
    flex: 1
</style>
