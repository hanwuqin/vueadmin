<template>
<div>
  <mu-paper class="mu-drawer mu-drawer open">
    <mu-appbar title="后台管理系统" class="example-appbar">
    </mu-appbar>
    <mu-menu>
      <mu-menu-item title="用户管理"/>
      <mu-menu>
        <mu-menu-item title="角色管理"/>
      </mu-menu>
    </mu-menu>
  </mu-paper>
  
</div>
</template>

<script>
export default {
  name: 'app-sidebar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mu-drawer {
    width: 256px;
    position: fixed;
    top: 0;
    bottom: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    -webkit-transition-property: visibility,-webkit-transform;
    transition-property: visibility,-webkit-transform;
    transition-property: transform,visibility;
    transition-property: transform,visibility,-webkit-transform;
    -webkit-transition-duration: .45s;
    transition-duration: .45s;
    -webkit-transform: translate3d(-100%,0,0);
    transform: translate3d(-100%,0,0);
    border-radius: 0;
    left: 0;
    visibility: hidden;
    z-index: 200;
}
.mu-drawer,.open {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    visibility: visible;
  }
</style>
