<template>
<mu-appbar title="首页" class="example-appbar">
  <mu-icon-button icon="menu" slot="left"/>
  <mu-flat-button label="expand_more" slot="right"/>
  <mu-icon-button icon="expand_more" slot="right"/>
</mu-appbar>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: ''
    }
  }
}
</script>
