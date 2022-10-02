<template>
  <div class="page">
    <div class="page__container">
      <div class="page__wrapper">
        <div class="page__header">
          <div class="page__title">{{ page.title }}</div>
          <div class="page__user">
            <div class="page__user-icon">
              <span>{{ getUserIcon() }}</span>
            </div>
            <div class="page__user-name">{{ userName }}</div>
          </div>
        </div>
        <!--        <div class="page__content">-->
        <!--          <component :is="tab()" />-->
        <!--        </div>-->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { IMenuList } from "@/interfaces";

const userName = "David Fincher";

const getUserIcon = (): string => {
  return "DF";
};

const props = defineProps<{
  page: IMenuList;
}>();

// const tab = () => {
//   switch (props.page.id) {
//     case "clients":
//       return VClients;
//     case "coaches":
//       return VCoaches;
//     case "exercises":
//       return VExercises;
//     case "recipes":
//       return VRecipes;
//     case "articles":
//       return VArticles;
//   }
// };
</script>
<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.6rem 0;

  &__container {
    max-width: 132.8rem;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
  }

  &__title {
    font-family: "Anton", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 38px;
    letter-spacing: 0.25px;
    color: #616972;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__user {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-icon {
      width: 4rem;
      height: 4rem;
      padding: 1.2rem 1rem;
      background-color: #966789;
      border-radius: 50%;
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      text-align: center;
      letter-spacing: 0.15px;
      color: #ffffff;
    }
  }
}
</style>
