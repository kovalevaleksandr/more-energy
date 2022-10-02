<template>
  <div class="coaches">
    <div class="coaches__toolbar">
      <VToolbar @addNewUser="addNewCoaches" @editUser="editCoaches" />
    </div>
    <div class="coaches__table">
      <MyTable
        :table-headers="coachesHeaders"
        :table-row="coaches"
        type="coaches"
      />
    </div>

    <teleport to="body">
      <VModal v-model:show="addCoachModel"><DataModal /></VModal>
    </teleport>

    <teleport to="body">
      <VModal v-model:show="editCoachModel">
        <DataModal />
      </VModal>
    </teleport>
  </div>
</template>
<script setup lang="ts">
import VToolbar from "@/components/toolbars/TableToolbar.vue";
import MyTable from "@/components/UI/VTable.vue";
import VModal from "@/components/UI/VModal.vue";
import VButton from "@/components/UI/VButton.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import VInput from "@/components/UI/VInput.vue";

const newUser = ref({ name: "", email: "" });

const coachesHeaders: object[] = [
  { id: "id", title: "ID" },
  { id: "name", title: "NAME" },
  { id: "email", title: "EMAIL" },
  { id: "phoneNumber", title: "PHONE NUMBER" },
  { id: "assignedClients", title: "ASSIGNED CLIENTS" },
  { id: "permission", title: "Permission" },
];

const coaches = ref([]);
const addCoachModel = ref(false);
const editCoachModel = ref(false);

onMounted(() => {
  getCoaches().then((data) => {
    coaches.value = data;
  });
});

const getCoaches = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const addNewCoaches = () => {
  addCoachModel.value = true;
};

const editCoaches = () => {
  addCoachModel.value = true;
};
</script>
<style lang="scss" scoped>
.add-coach {
  &__btn-cancel {
    padding: 1.2rem 2rem;
    background-color: #ffffff;
    border: 1px solid #616972;
    border-radius: 24px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.15px;
    color: #616972;
  }

  &__btn-add {
    background: #ddaf45;
    border-radius: 24px;
    padding: 1.2rem 2rem;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.15px;
    color: #ffffff;
  }
}
</style>
