<template>
<mu-appbar title="首页" class="example-appbar" v-bind:class="nav-hide">
  <mu-icon-button icon="menu" slot="left" @click="isHide"/>
  <mu-icon-button icon="expand_more" slot="right"/>
</mu-appbar>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      isnavhide:false
    }
  },
   methods:{
    	isHide(){
    		;
    	}
    }

}
</script>
<style scoped>
	.nav-hide{
		left:0;
	}
</style>
