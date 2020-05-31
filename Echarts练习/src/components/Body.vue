<template>
  <div id="main" class="body_container"></div>
</template>

<script>
export default {
  props: {
    init: Function
  },
  mounted() {
    this.$emit("init");
  }
};
</script>


<style scoped>
.body_container {
  width: 100%;
  height: 80vh;
}
</style>