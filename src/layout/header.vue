<template>
  <div class="header">
    <div class="nav-left">
      <router-link to="/foo">Foo</router-link>
      <router-link to="/bar">Bar</router-link>
    </div>
    <div class="nav-right">右侧</div>
  </div>
</template>
<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.header {
  position: sticky;
  height: 60px;
  display: flex;
  background-color: powderblue;
}

.nav-left {
  flex: 1;
}
</style>