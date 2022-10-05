<template>
  <div class="sort" @click="sort">
    <i class="sort__icon">
      <IconBase
        width="20"
        height="20"
        icon-name="write"
        :icon-color="props.iconColor"
      >
        <IconSortDownAlt v-if="sortPosition" />
        <IconSortUp v-else />
      </IconBase>
    </i>
    <span>Sort by {{ props.sortData.title }}</span>
  </div>
</template>
<script setup lang="ts">
import IconBase from "@/components/icons/IconBase.vue";
import IconSortDownAlt from "@/components/icons/IconSortDownAlt";
import IconSortUp from "@/components/icons/IconSortUp";
import { ref } from "vue";

const emit = defineEmits(["sort"]);

interface ISortData {
  title: string;
  variant: string;
}

const props = defineProps<{
  iconColor: string;
  sortData: ISortData;
}>();

const sortPosition = ref(true);

const sort = () => {
  sortPosition.value = !sortPosition.value;
  emit("sort", props.sortData.variant);
};
</script>
<style lang="scss" scoped>
.sort {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;

  &__icon {
    margin-right: 0.8rem;
  }
}
</style>
