<template>
  <select class="select" :value="modelValue" @change="changeOption">
    <option class="select__option--disabled" disabled value="">
      Выберите из списка
    </option>
    <option
      class="select__option"
      v-for="option of options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
  options: object[];
}>();

const emit = defineEmits(["update:modelValue"]);

const changeOption = (event: { target: { value: string } }) => {
  emit("update:modelValue", event.target.value);
};
</script>
<style scoped lang="scss">
.select {
  display: block;
  background-color: transparent;
  width: 100%;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
}
</style>
