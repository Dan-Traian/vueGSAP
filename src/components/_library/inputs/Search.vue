<template>
  <div class="input flex items-center justify-between px-4 py-3 bg-white">
    <p class="text-lg text-gray-500">Search</p>
    <IconDisplayer class="text-gray-800 text-2xl" icon-name="search"></IconDisplayer>
  </div>
</template>

<script>
import IconDisplayer from "@/components/_library/IconDisplayer";
export default {
  mixins: [],

  components: { IconDisplayer },
};
</script>
<style scoped>
.input {
  border-radius: 60px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
}
</style>
