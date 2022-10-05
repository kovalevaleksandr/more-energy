<template>
  <div class="recipes">
    <SearchToolbar class="recipes__toolbar" @sort="sortRecipes" />
    <PostList class="recipes__list">
      <PostItem
        class="recipes__item"
        v-for="recipe in sortByName"
        :key="recipe.id"
        :object="recipe"
      />
    </PostList>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import axios from "axios";
import PostItem from "@/components/post/PostItem.vue";
import PostList from "@/components/post/PostList.vue";
import SearchToolbar from "@/components/toolbars/SearchToolbar.vue";

const recipes = ref([]);

const pfckcal = [
  { id: 0, kCal: "13", fat: "35g", protein: "7g", carbohyd: "56g" },
];

const getExercises = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos?_limit=3"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const ascend = ref(true);
const sortBy = ref("");

const sortRecipes = (variant: string) => {
  sortBy.value = variant;
  if (variant === sortBy.value) {
    ascend.value = !ascend.value;
  }
};

const sort = {
  id: (ascend: boolean, recipes: []) => {
    if (ascend) {
      return [...recipes].sort((a, b) => a.title?.localeCompare(b.title));
    } else {
      return [...recipes].sort((a, b) => b.title?.localeCompare(a.title));
    }
  },
  title: (ascend: boolean, recipes: []) => {
    if (ascend) {
      return [...recipes].sort((a, b) => a.id - b.id);
    } else {
      return [...recipes].sort((a, b) => b.id - a.id);
    }
  },
};

const sortByName = computed(() => {
  if (!sortBy.value) {
    return recipes.value;
  }
  return sort[sortBy.value](ascend.value, recipes.value);
});

onMounted(() => {
  getExercises().then((data) => {
    recipes.value = data;
  });
});
</script>
<style lang="scss">
.recipes {
  display: flex;
  flex-direction: column;

  &__toolbar {
    margin-bottom: 3.6rem;
  }
}
</style>
