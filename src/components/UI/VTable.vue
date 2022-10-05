<template>
  <table>
    <thead>
      <tr>
        <th
          v-for="th of props.tableHeaders"
          :key="th.key"
          @click="sortTable(th.id)"
        >
          {{ th.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="td of sortedEntries"
        :key="td.id"
        @click="selectUser(td)"
        :class="{ 'tr--active': td.id === props.userSelectedId }"
      >
        <td v-for="(item, index) of props.clientsColumn" :key="index">
          {{ td[item] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps<{
  tableHeaders: object[];
  tableRow: object[];
  type: string;
  clientsColumn: [];
  userSelectedId: number;
}>();

const emit = defineEmits(["selectUser"]);

const ascendTable = ref(true);
const sortByColumn = ref("");

const sortTable = (id: string) => {
  sortByColumn.value = id;
  if (id === sortByColumn.value) {
    ascendTable.value = !ascendTable.value;
  }
};

const sorted = {
  idTh: (ascendTable: boolean, tableData: []) => {
    if (ascendTable) {
      return [...tableData].sort((a, b) => a.id - b.id);
    } else {
      return [...tableData].sort((a, b) => b.id - a.id);
    }
  },
  valueTh: (ascendTable: boolean, tableData: []) => {
    if (ascendTable) {
      return [...tableData].sort((a, b) =>
        a[sortByColumn.value]?.localeCompare(b[sortByColumn.value])
      );
    } else {
      return [...tableData].sort((a, b) =>
        b[sortByColumn.value]?.localeCompare(a[sortByColumn.value])
      );
    }
  },
};

const sortedEntries = computed(() => {
  if (!sortByColumn.value) {
    return props.tableRow;
  }
  if (sortByColumn.value === "id") {
    return sorted.idTh(ascendTable.value, props.tableRow);
  } else {
    return sorted.valueTh(ascendTable.value, props.tableRow);
  }
});

const selectUser = (th: object) => {
  emit("selectUser", th);
};
</script>
<style lang="scss" scoped>
table {
  width: 100%;
  background: #ffffff;
  border-collapse: collapse;
  table-layout: auto;
}

th {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #a4adb6;
  padding: 1.2rem 1.6rem;
}

tr {
  cursor: pointer;
  //border-bottom: 1px solid transparent;
  border-top: 1px solid transparent;

  tbody &:hover {
    border-bottom: 1px solid #bcc4cd !important;
    border-top: 1px solid #bcc4cd !important;
  }
}

td {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  color: #383e45;
  padding: 1.2rem 1.6rem;
}

td:first-child {
  text-align: center;
}

.tr--active {
  border-bottom: 1px solid #bcc4cd !important;
  border-top: 1px solid #bcc4cd !important;
}

tbody tr:hover + tr td {
  border-top-color: red; /* change any cells without a bottom border - make the next row have top border go red (so it looks like current row bottom border) */
}
</style>
