<template>
  <VInput :model-value="props.title" @getValue="getValue" />
</template>
<script setup lang="ts">
import VInput from "@/components/UI/VInput";
const props = defineProps<{
  title: string;
}>();
const emits = defineEmits(["update:modelValue"]);
const getValue = (event: { target: { value: string } }) => {
  emits("update:modelValue", event.target.value);
};
</script>
