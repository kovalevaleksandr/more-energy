<template>
  <div class="exercises">
    <SearchToolbar class="exercises__toolbar" />
    <PostList class="exercises__list">
      <VPost
        class="exercises__item"
        v-for="exercise in exercises"
        :key="exercise.id"
        :object="exercise"
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
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
