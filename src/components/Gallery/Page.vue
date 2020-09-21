<template>
  <div
    class="page h-auto w-screen h-screen flex flex-col items-center justify-center bg-white"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  mixins: [],
  components: {},
  directives: {},
  filters: {},
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style lang="scss">
.page {
  background: #dbdafb;
  background: -moz-linear-gradient(to right, #dbdafb 0%, #fff7c1 100%);
  background: -webkit-linear-gradient(to right, #dbdafb 0%, #fff7c1 100%);
  background: linear-gradient(to right, #dbdafb 0%, #fff7c1 100%);
}
</style>
