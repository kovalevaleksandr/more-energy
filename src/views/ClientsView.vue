<template>
  <div class="clients">
    <div class="clients__toolbar">
      <VToolbar />
    </div>
    <div class="clients__table">
      <MyTable
        :tableHeaders="clientsHeaders"
        :tableRow="clients"
        type="clients"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import VToolbar from "@/components/toolbars/TableToolbar.vue";
import MyTable from "@/components/UI/VTable.vue";

const clients = ref([]);

onMounted(() => {
  const getPost = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  getPost().then((data) => {
    clients.value = data;
  });
});

const clientsHeaders: object[] = [
  { id: "id", title: "ID" },
  { id: "name", title: "NAME" },
  { id: "email", title: "EMAIL" },
  { id: "mobile", title: "MOBILE" },
  { id: "coaches", title: "Coaches" },
];
</script>
<style lang="scss" scoped>
.clients {
  background: #f6f8f9;
  border: 1px solid #e8ecf1;

  &__toolbar {
  }

  &__btn {
    background: #7caf8a;
    border-radius: 24px;
    padding: 0.7rem 1.6rem;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.15px;
    color: #ffffff;

    &:not(:last-of-type) {
      margin-right: 0.8rem;
    }

    &:last-of-type {
      margin-right: 2.4rem;
    }
  }

  &__reset {
    cursor: pointer;
  }

  &__table {
    width: 100%;

    & th {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #a4adb6;
    }

    & tr {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #383e45;
    }
  }
}
</style>
