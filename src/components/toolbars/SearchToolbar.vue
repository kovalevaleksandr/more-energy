<template>
  <div class="toolbar">
    <VSearch class="toolbar__search" />
    <VSort
      class="toolbar__sort"
      icon-color="#7CAF8A"
      @sort="sort"
      :sort-data="{ title: 'date added', variant: 'id' }"
    ></VSort>
    <VSort
      class="toolbar__sort"
      icon-color="#7CAF8A"
      @sort="sort"
      :sort-data="{ title: 'name', variant: 'title' }"
    ></VSort>
  </div>
</template>
<script setup lang="ts">
import VSearch from "@/components/UI/VSearch.vue";
import VSort from "@/components/UI/VSort.vue";

const emit = defineEmits(["sort"]);

const sort = (variant: string) => {
  emit("sort", variant);
};
</script>
<style lang="scss" scoped>
.toolbar {
  display: flex;
  align-items: center;

  &__search {
    margin-right: 3.2rem;
  }

  &__sort {
    margin-right: 3.2rem;
  }
}
</style>
