<template>
  <div class="test-list">
    <ul>
      <router-link :to="{ name: 'testFormUpload'}" tag="li"><span>测试上传</span></router-link>
    </ul>
  </div>
</template>
<style lang="sass" scoped>
  .test-list
    margin: .2rem
    ul
      li
        margin-top: .2rem
        span
          font-size: .3rem
</style>
