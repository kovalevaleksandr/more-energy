<template>
  <div class="articles">
    <SearchToolbar class="recipes__toolbar" />
    <PostList class="articles__list">
      <VPost
        class="articles__item"
        v-for="article in articles"
        :key="article.id"
        :object="article"
      />
    </PostList>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import VPost from "@/components/post/PostItem.vue";
import PostList from "@/components/post/PostList.vue";
import SearchToolbar from "@/components/toolbars/SearchToolbar.vue";

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
  display: flex;
  flex-direction: column;
}
</style>
