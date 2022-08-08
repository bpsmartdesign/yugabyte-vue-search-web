<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "App",
})
</script>

<template>
  <main class="ss--main">
    <aside class="ss--aside"></aside>
    <section class="ss--app">
      <header class="ss--header">Vue Search app, with Northwind Database</header>
      <RouterView></RouterView>
    </section>
  </main>
</template>

<style rel="stylesheet/scss" lang="scss">
@import url("styles/main.scss");

.ss--main {
  width: 100vw;
  min-height: 100vh;
  display: inline-flex;

  .ss--aside {
    box-shadow: 0 0 2rem 0 rgb(136 152 170 / 15%);
    background: #ffffff;
    width: 300px;
    height: 100vh;
  }

  .ss--app {
    width: calc(100% - 300px);
    .ss--header {
      background: #5e72e4;
      height: 80px;
      width: 100%;
      display: flex;
      align-items: center;
      padding: 2rem;
      color: #ffffff;
    }

    .ss--app_container {
      min-height: 300px;
      padding: 1rem;
    }
  }
}
</style>
