<template>
  <div class="clients">
    <div class="clients__toolbar">
      <TableToolbar
        @showAddModal="showAddModal"
        @editUser="editClient"
        @resetPassword="resetPassword"
        :userSelectedId="userSelected.id || null"
      />
    </div>
    <div class="clients__table">
      <MyTable
        :tableHeaders="clientsHeaders"
        :tableRow="clientsData"
        :clientsColumn="clientsColumn"
        type="clients"
        @selectUser="selectUser"
        :userSelectedId="userSelected.id"
      />
    </div>

    <teleport to="body">
      <VModal v-model:show="addClientModel">
        <AddModal
          title="New Client"
          btnFirstName="cancel"
          btnTwoName="save"
          @addNewUser="addNewUser"
        />
      </VModal>
    </teleport>

    <teleport to="body">
      <VModal v-model:show="editClientModel">
        <EditModal
          title="Edit Client"
          btnFirstName="cancel"
          btnTwoName="save"
          :userSelected="userSelected"
          @changeClient="changeClient"
          @hideEditModal="hideEditModal"
        />
      </VModal>
    </teleport>

    <teleport to="body">
      <VModal v-model:show="resetClientModel">
        <manage-data><reset-pass-modal /></manage-data>
        <EditModal
          title="Edit Client"
          btnFirstName="cancel"
          btnTwoName="save"
          :userSelected="userSelected"
          @changeClient="changeClient"
          @hideEditModal="hideEditModal"
        />
      </VModal>
    </teleport>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import TableToolbar from "@/components/toolbars/TableToolbar.vue";
import MyTable from "@/components/UI/VTable.vue";
import VModal from "@/components/UI/VModal.vue";
import EditModal from "@/components/modal/EditModal.vue";
import AddModal from "@/components/modal/AddModal.vue";
import { IClientsHeader } from "@/interfaces/Clients";
import ResetPassModal from "@/components/modal/ResetPassModal.vue";
import ManageData from "@/components/modal/ManageData.vue";

const clientsData = ref([]);

const userSelected = ref({});

const addClientModel = ref(false);
const editClientModel = ref(false);
const resetClientModel = ref(false);

const showAddModal = () => {
  addClientModel.value = true;
};
const editClient = () => {
  editClientModel.value = true;
};

const changeClient = (changeClientData: object, newValue: object): void => {
  const currentClientData = clientsData.value.find(
    (i) => i.id === changeClientData.id
  );
  currentClientData.email = newValue.email;
  currentClientData.name = newValue.name;
  editClientModel.value = false;
};

const getPost = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users?_limit=6"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const resetPassword = () => {
  resetClientModel.value = true;
};

onMounted(() => {
  getPost()
    .then((data) => {
      clientsData.value = data;
      return data;
    })
    .then((data) => {
      clientsColumn.value = data.map((i: object) => Object.keys(i))[0];

      const arr = clientsHeaders.map((i) => i.id);

      clientsColumn.value = clientsColumn.value.filter(
        (i) => arr.indexOf(i) !== -1
      );
    });
});

const addNewUser = (newUser: object): void => {
  clientsData.value.push(JSON.parse(JSON.stringify(newUser)));
};

const clientsColumn = ref([]);

const clientsHeaders: IClientsHeader[] = [
  { id: "id", title: "ID" },
  { id: "name", title: "NAME" },
  { id: "email", title: "EMAIL" },
  { id: "mobile", title: "MOBILE" },
  { id: "coaches", title: "Coaches" },
];

const selectUser = (th: object) => {
  userSelected.value = th;
};

const hideEditModal = () => {
  editClientModel.value = false;
};
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
