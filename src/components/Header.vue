<template>
<div>
<el-menu theme="dark" class="el-menu-demo" mode="horizontal">
  <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
  <el-menu-item index="1"><router-link to="user">添加管理员</router-link></el-menu-item>
</el-menu>
</div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style scoped>
</style>
