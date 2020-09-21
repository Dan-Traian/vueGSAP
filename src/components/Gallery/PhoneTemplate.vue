<template>
  <div class="iphone-7-plus overflow-hidden">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
.iphone-7-plus {
  width: 450px;
  height: calc(500px * 1.777777778);
  border-radius: 60px;
  box-shadow: 0 10px 30px rgba(38, 66, 237, 0.1);
  background: rgb(254, 222, 214);
  background: linear-gradient(
    222deg,
    rgba(254, 222, 214, 1) 0%,
    rgba(251, 252, 254, 1) 80%
  );
  padding: 30px;
}
</style>
