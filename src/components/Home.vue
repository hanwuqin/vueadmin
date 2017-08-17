<template>
<div>
<app-header></app-header>
<app-sidebar></app-sidebar>
</div>
</template>
<script>
import Header from './Header';
import Sidebar from './Sidebar';
export default {
  name: 'Home',
  components: { 
    'app-header': Header,
    'app-sidebar':Sidebar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '/static/css/icon.css';
@import '/static/css/fonts.css';
.example-appbar {
    position: fixed;
    left: 256px;
    right: 0;
    top: 0;
    width: auto;
    -webkit-transition: all .45s cubic-bezier(.23,1,.32,1);
    transition: all .45s cubic-bezier(.23,1,.32,1);
}
</style>
