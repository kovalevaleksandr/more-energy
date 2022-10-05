<template>
  <div class="coaches">
    <div class="coaches__toolbar">
      <VToolbar @addNewUser="addNewCoaches" @editUser="editCoaches" />
    </div>
    <div class="coaches__table">
      <MyTable
        :table-headers="coachesHeaders"
        :table-row="coaches"
        :clientsColumn="coachesColumn"
        type="coaches"
      />
    </div>

    <teleport to="body">
      <VModal v-model:show="addCoachModel">
        <AddModal
          title="New Coach"
          btnFirstName="save"
          @addNewUser="addNewUser"
        />
      </VModal>
    </teleport>

    <teleport to="body">
      <VModal v-model:show="editCoachModel">
        <AddModal title="Edit Coach" btnFirstName="cancel" btnTwoName="save" />
      </VModal>
    </teleport>
  </div>
</template>
<script setup lang="ts">
import VToolbar from "@/components/toolbars/TableToolbar.vue";
import MyTable from "@/components/UI/VTable.vue";
import VModal from "@/components/UI/VModal.vue";
import AddModal from "@/components/modal/AddModal.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

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

const addNewUser = (user: object) => {
  coaches.value.push(user);
};

const addNewCoaches = () => {
  addCoachModel.value = true;
};

const editCoaches = () => {
  editCoachModel.value = true;
};

onMounted(() => {
  getCoaches()
    .then((data) => {
      coaches.value = data;
      return data;
    })
    .then((data) => {
      coachesColumn.value = data.map((i: object) => Object.keys(i))[0];
    });
});

const coachesColumn = ref([]);

const getCoaches = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users?_limit=2"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
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
