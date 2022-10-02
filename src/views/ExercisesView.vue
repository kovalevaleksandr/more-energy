<template>
  <div class="exercises">
    <div class="exercises__list">
      <VPost
        class="exercises__item"
        v-for="exercise in exercises"
        :key="exercise.id"
        :object="exercise"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import VExercise from "@/components/page/exercises/VExercise.vue";
import { onMounted, ref } from "vue";
import axios from "axios";
import VPost from "@/components/VPost.vue";

const exercises = ref([]);

const getExercises = async () => {
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
  getExercises().then((data) => {
    exercises.value = data;
  });
});
</script>
<style lang="scss">
.exercises {
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  &__item {
  }
}
</style>
