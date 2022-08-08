<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "App",
})
</script>

<template>
  <h1 class="animate__animated animate__jello">The APP template</h1>
  <RouterView></RouterView>
</template>

<style rel="stylesheet/scss" lang="scss">
@import url("styles/main.scss");
</style>
