<template>
  <div class="field">
    <label class="field__label">
      <span class="field__label-name">{{ props.nameLabel }}</span>
      <slot></slot>
    </label>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  nameLabel: string;
}>();
</script>
<style lang="scss" scoped>
.field {
  background: #f6f8f9;
  border: 1px solid #d5dce4;
  border-radius: 4px;
  position: relative;

  &__label {
    width: 100%;

    &-name {
      position: absolute;
      top: 1.2rem;
      left: 1.6rem;
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.15px;
      color: #767f89;
    }
  }
}
</style>
