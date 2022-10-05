<template>
  <v-header class="header" :page="page" />
  <v-sidebar class="sidebar" @goTab="goTab" :pageId="page.id" />
  <main class="main">
    <div class="container"><router-view /></div>
  </main>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { IMenuList } from "@/interfaces";
import VSidebar from "@/components/layout/VSidebar.vue";
import IconUser from "@/components/icons/IconUser.vue";
import VHeader from "@/components/layout/VHeader.vue";

const page = ref({ id: "clients", title: "Clients", icon: IconUser });
const goTab = (items: IMenuList): void => {
  page.value = items;
};
</script>

<style lang="scss">
#app {
  min-height: 100%;
  display: grid;
  grid-template-areas:
    "sidebar header"
    "sidebar content";
  grid-template-columns: 5% 1fr;
  grid-template-rows: 11.2rem 1fr;
}

.sidebar {
  grid-area: sidebar;
  position: fixed;
  height: 100vh;
}

.header {
  grid-area: header;
}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 4rem;
}

.main {
  width: 100%;
  grid-area: content;
}
</style>
