<template>
  <main class="main">
    <LeftMenu @goTab="goTab" :pageId="page.id" />
    <router-view />
    <PageAdmin class="" :page="page" />
  </main>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import LeftMenu from "@/components/SideBar.vue";
import PageAdmin from "@/components/PageAdmin.vue";
import { IMenuList } from "@/interfaces";
import { ref } from "vue";
import IconUser from "@/components/icons/IconUser.vue";

const page = ref({ id: "clients", title: "Clients", icon: IconUser });
const goTab = (items: IMenuList): void => {
  console.log(123);
  page.value = items;
};
</script>

<style lang="scss">
#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1 1 auto;
}
</style>
