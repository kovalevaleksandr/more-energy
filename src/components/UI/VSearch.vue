<template>
  <form class="search" @click.prevent>
    <VInput class="search__input" v-model="searchInput" placeholder="Search" />
    <VButton class="search__btn"
      ><IconBase icon-name="search" width="20" icon-color="#767F89" height="20">
        <IconSearch /> </IconBase
    ></VButton>
  </form>
</template>
<script setup lang="ts">
import IconBase from "@/components/icons/IconBase.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import VInput from "@/components/UI/VInput.vue";
import { ref } from "vue";
import VButton from "@/components/UI/VButton.vue";
const searchInput = ref("");
</script>
<style lang="scss" scoped>
.search {
  display: flex;
  background: rgba(31, 52, 76, 0.08);
  border-radius: 7.4rem;
  padding: 1.1rem 1.6rem;

  &__input {
    &::placeholder {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      /* identical to box height, or 129% */

      display: flex;
      align-items: center;

      /* Black/60 */

      color: #767f89;
    }
  }

  &__btn,
  &__input {
    background: transparent;
  }
}
</style>
