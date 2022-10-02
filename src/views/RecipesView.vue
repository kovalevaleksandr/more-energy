<template>
  <div class="recipes">
    <div class="recipes__list">
      <VPost
        class="recipes__item"
        v-for="recipe in recipes"
        :key="recipe.id"
        :object="recipe"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import VExercise from "@/components/page/exercises/VExercise.vue";
import { onMounted, ref } from "vue";
import axios from "axios";
import VPost from "@/components/VPost.vue";

const recipes = ref([]);

const getExercises = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos?_limit=6"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  getExercises().then((data) => {
    recipes.value = data;
  });
});
</script>
<style lang="scss">
.recipes {
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  &__item {
  }
}
</style>
