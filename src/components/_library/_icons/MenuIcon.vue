<template>
  <div class="icon flex flex-col">
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
.icon {
  width: 30px;
  height: 20px;
  .line {
    width: 100%;
    height: 2.5px;
    background-color: #88888e;
    border-radius: 10px;
    &:nth-of-type(1) {
      transform: scale(0.5, 1);
      transform-origin: left;
    }
    &:nth-of-type(2) {
      margin: auto 0;
    }
    &:nth-of-type(3) {
      transform: scale(0.5, 1);
      transform-origin: right;
    }
  }
}
</style>
