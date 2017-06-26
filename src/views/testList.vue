<template>
  <div class="test-list">
    <wlb-header><span slot="title">测试列表</span></wlb-header>
    <ul>
      <router-link :to="{ name: 'testFormUpload'}" tag="li"><span>测试上传</span></router-link>
    </ul>
  </div>
</template>
<script>
  import { WlbHeader } from '../components'
  export default {
    components: {
      WlbHeader
    }
  }
</script>
<style lang="sass" scoped>
  .test-list
    ul
      margin: .4rem
      list-style: none
      li
        margin-top: .2rem
        span
          font-size: .3rem
</style>
