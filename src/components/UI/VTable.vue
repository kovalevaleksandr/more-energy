<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="th of props.tableHeaders" :key="th.key">
          {{ th.title }}
        </th>
      </tr>
    </thead>
    <tbody v-if="props.type === 'clients'">
      <tr v-for="td of props.tableRow" :key="td.id">
        <td>{{ td.id }}</td>
        <td>{{ td.name }}</td>
        <td>{{ td.email }}</td>
        <td>{{ td.mobile }}</td>
        <td>{{ td.coaches }}</td>
      </tr>
    </tbody>
    <tbody v-if="props.type === 'coaches'">
      <tr v-for="td of props.tableRow" :key="td.id">
        <td>{{ td.id }}</td>
        <td>{{ td.name }}</td>
        <td>{{ td.phoneNumber }}</td>
        <td>{{ td.assignedClients }}</td>
        <td>{{ td.permission }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
const props = defineProps<{
  tableHeaders: object[];
  tableRow: object[];
  type: string;
}>();
</script>
<style lang="scss" scoped>
.table {
  background: #ffffff;

  & thead tr {
  }

  & th {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #a4adb6;
    padding: 1.2rem 1.6rem;

    &:nth-child(1) {
      width: 4.5%;
    }
    &:nth-child(2) {
      width: 14%;
    }
    &:nth-child(3) {
      width: 14%;
    }
    &:nth-child(4) {
      width: 13%;
    }
    &:nth-child(5) {
      width: 53%;
    }
  }

  & tr {
    cursor: pointer;

    &:hover td {
      border-bottom: 1px solid #bcc4cd;
      border-top: 1px solid #bcc4cd;
    }
  }

  & td {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #383e45;
    padding: 1.2rem 1.6rem;
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }
}
</style>
