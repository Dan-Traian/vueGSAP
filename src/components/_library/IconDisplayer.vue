<template>
  <ion-icon :name="pathToSVG ? pathToSVG : iconName"></ion-icon>
</template>
<script>
export default {
  props: {
    iconName: { required: true, type: String },
    size: { required: false, default: "md", type: String },
    pathToSVG: {
      required: false,
      default: null,
    },
  },
};
</script>
