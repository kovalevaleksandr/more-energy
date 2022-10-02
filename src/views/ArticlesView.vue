<template>
  <div class="articles">
    <div class="articles__toolbar">
      <VSearch />
      <VSort class="articles__sort" icon-color="#7CAF8A"
        ><span>Sort by date added</span></VSort
      >
      <VSort class="articles__sort" icon-color="#7CAF8A"
        ><span>Sort by name</span></VSort
      >
    </div>
    <div class="articles__list">
      <VPost
        class="articles__item"
        v-for="article in articles"
        :key="article.id"
        :object="article"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import VPost from "@/components/VPost.vue";
import VSearch from "@/components/UI/VSearch.vue";
import IconBase from "@/components/icons/IconBase.vue";
import IconSortDownAlt from "@/components/icons/IconSortDownAlt.vue";
import VSort from "@/components/UI/VSort.vue";

const articles = ref([]);

const getArticles = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos?_limit=2"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  getArticles().then((data) => {
    articles.value = data;
  });
});
</script>
<style lang="scss">
.articles {
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  &__item {
  }

  &__toolbar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
