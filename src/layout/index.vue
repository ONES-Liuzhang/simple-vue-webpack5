<template>
  <div class="layout">
    <Header/>
    <router-view class="container"></router-view>
    <Footer/>
  </div>
</template>
<script>
import Header from './header.vue';
import Footer from './footer.vue';

export default {
  name: "Layout",
  components: {
    Header,
    Footer
  }
}
</script>
<style scoped>
.container {
  min-height: 500px;
  background-color: antiquewhite;
}
</style>