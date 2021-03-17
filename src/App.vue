<template>
  <div id="app">
    <navbar></navbar>
    <left_bar></left_bar>
    <right_bar></right_bar>
    <buttom></buttom>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import left_bar from '@/components/left_sidebar'
  import right_bar from '@/components/right_sidebar'
  import Footer from '@/components/Footer'

  export default {
    components : {
      'navbar' : Navbar,
      'buttom' : Footer,
      'left_bar':left_bar,
      'right_bar':right_bar,
    }
  }

</script>

<style>

</style>
