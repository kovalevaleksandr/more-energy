<template>
  <div class="sidebar">
    <div class="sidebar__logo">
      <router-link class="sidebar__link" to="/"
        ><img src="@/assets/images/logo.svg" alt="MORE/ENERGY"
      /></router-link>
    </div>
    <div class="sidebar__list">
      <div
        class="sidebar__item"
        v-for="item in menuList"
        :key="item.id"
        :class="{ 'menu__item--active': item.id === props.pageId }"
        @click="goTab(item)"
      >
        <router-link class="sidebar__link" :to="toPage(item.id)">
          <i class="sidebar__icon">
            <IconBase
              width="20"
              height="20"
              icon-name="write"
              icon-color="#bedcff"
            >
              <component :is="item.icon" />
            </IconBase>
          </i>
          <span class="menu__title">{{ item.title }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconCoach from "@/components/icons/IconCoach.vue";
import IconUser from "@/components/icons/IconUser.vue";
import IconRecipe from "@/components/icons/IconRecipe.vue";
import IconArticle from "@/components/icons/IconArticle.vue";
import IconSticker from "@/components/icons/IconSticker.vue";
import IconVegetable from "@/components/icons/IconVegetable.vue";
import IconBase from "@/components/icons/IconBase.vue";
import IconSampleMenu from "@/components/icons/IconSampleMenu.vue";
import IconDumbbell from "@/components/icons/IconDumbbell.vue";
import IconPieChart from "@/components/icons/IconPieChart .vue";
import { IMenuList } from "@/interfaces";

const toPage = (id: string) => {
  return "/" + id;
};

const emit = defineEmits(["goTab"]);

const props = defineProps<{
  pageId: string;
}>();

const menuList: IMenuList[] = [
  { id: "clients", title: "Clients", icon: IconUser },
  { id: "coaches", title: "Coaches", icon: IconCoach },
  { id: "exercises", title: "Exercises", icon: IconDumbbell },
  { id: "recipes", title: "Recipes", icon: IconRecipe },
  { id: "articles", title: "Articles", icon: IconArticle },
  { id: "sampleMenus", title: "Sample Menus", icon: IconSampleMenu },
  { id: "feelBest", title: "Feel Best", icon: IconVegetable },
  { id: "eatingLevel", title: "Eating Level", icon: IconPieChart },
  { id: "stickers", title: "Stickers", icon: IconSticker },
];

const goTab = (title: IMenuList): void => {
  emit("goTab", title);
};
</script>
<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2.8rem 0;
  background-color: #416186;

  &__logo {
    width: 5.6rem;
    height: 5.8rem;
    margin-bottom: 2.8rem;

    & img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  &__link {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.15px;
    color: #bedcff;
    padding: 1.4rem 0;
  }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    cursor: pointer;

    &:hover {
      background-color: #2f4a69;
    }

    &--active {
      background-color: #2f4a69;
    }
  }

  &__icon {
    margin-bottom: 1.6rem;
  }
}
</style>
