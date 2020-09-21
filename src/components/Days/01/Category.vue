<template>
  <span
    class="px-5 py-3 flex items-cent:er justify-center text-center rounded-full hover:text-purple-600 hover:bg-purple-200 general-transition pointer"
    :class="!active ? 'bg-white text-gray-400' : 'text-purple-600 bg-purple-200 bold'"
    ><slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    active: {
      required: false,
      default: false,
    },
  },
};
</script>
