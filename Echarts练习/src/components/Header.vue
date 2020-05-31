<template>
  <h1 class="header_container">
    <slot name="header"></slot>
    <br />
    <slot name="btn"></slot>
  </h1>
</template>

<script>
export default {
  methods: {}
};
</script>

<style scoped>
.header_container {
  width: 100%;
  min-width: 200px;
  text-align: center;
}
</style>