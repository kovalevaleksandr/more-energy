<template>
  <input type="text" :value="modelValue" @input="getValue" />
</template>
<script setup lang="ts">
defineProps<{
  modelValue: string;
}>();

const emits = defineEmits(["update:modelValue"]);
const getValue = (event: { target: { value: string } }) => {
  emits("update:modelValue", event.target.value);
};
</script>
<style scoped lang="scss">
.input {
  //display: flex;
  //flex-direction: column;
  //font-family: "Roboto", sans-serif;
  //font-style: normal;
  //font-weight: 500;
  //font-size: 12px;
  //line-height: 14px;
  //letter-spacing: 0.15px;
  //color: #767f89;
  //height: 100%;
  //padding: 1.2rem 1.6rem;
  //background: #f6f8f9;
  //border: 1px solid #d5dce4;
  //border-radius: 4px;
}
</style>
