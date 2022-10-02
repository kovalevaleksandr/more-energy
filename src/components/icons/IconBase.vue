<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="props.width"
    :height="props.height"
    viewBox="0 0 20 20"
    :aria-labelledby="iconName"
    role="img"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{
  iconName: string;
  width: number | string;
  height: number | string;
  iconColor: string;
}>();
</script>
<style scoped lang="scss">
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px; /* yes, I'm that particular about formatting */
}
</style>
