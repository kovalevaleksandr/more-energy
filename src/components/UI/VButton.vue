<template>
  <button class="btn" @click="click">
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
// import IconBase from "@/components/UI/IconBase.vue";
//
// const props = defineProps<{
//
// }>();

const emit = defineEmits(["click"]);

const click = (): void => {
  emit("click");
};
</script>

<style scoped lang="scss">
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &__icon {
    margin-right: 0.8rem;
  }
}
</style>
