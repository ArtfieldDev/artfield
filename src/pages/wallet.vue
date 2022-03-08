<template>
  <q-card flat>
    <q-tabs
      v-model="tab"
      no-caps
      outside-arrows
      mobile-arrows
      class="text-grey-5"
      indicator-color="transparent"
      active-color="primary"
    >
      <q-tab name="transaction" label="Transaction Histories" />
      <q-tab name="royalities" label="Royalities" />
      <q-chip>
      <q-select  v-model="transactionSelect" :options="options"  />
      </q-chip>
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="transaction">
        <!--TRANSACTION HISTORY TABLE-->

        <q-table
          :rows="rows"
          :columns="columns"
          row-key="name"
          flat
          style="margin: -15px; height:65vh"
        >
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th auto-width />
              <q-th v-for="col in props.cols" :key="col.name" :props="props">
                {{ col.label }}
              </q-th>
            </q-tr>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props" @click="props.expand = !props.expand">
              <q-td auto-width>
                <q-icon
                  size="sm"
                  :color="props.row.iconColor"
                  round
                  flat
                  :name="props.row.icon"
                />
              </q-td>
              <q-td v-for="col in props.cols" :key="col.name" :props="props">
                {{ col.value }}
              </q-td>
            </q-tr>
            <q-tr v-show="props.expand" :props="props">
              <q-td colspan="100%">
                <div class="text-left text-grey-7">
                  {{ props.row.innerData.address1 }}
                  {{ props.row.innerData.description }}
                  {{ props.row.innerData.address2 }} for
                  <img :src="props.row.innerData.item" />
                </div>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>
import { ref } from "vue";
const columns = [
  {
    name: "address",
    required: true,
    label: "Address",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "amount",
    align: "center",
    label: "Amount",
    field: "amount",
    sortable: true,
  },
  { name: "fees", label: "Fees", field: "fees", sortable: true },
  { name: "activity", label: "Activity", field: "activity" },
];

const rows = [
  {
    icon: "mdi-arrow-bottom-left",
    iconColor: "green",
    name: "GH0378...",
    amount: 100.0041,
    fees: 0.00001,
    activity: "select",
    innerData: {
      address1: "GHOOOO",
      address2: "GXXXCC",
      description: "Credited your account",
      item: "piture.png",
    },
  },
  {
    icon: "mdi-arrow-top-right",
    iconColor: "red",
    name: "GH0471...",
    amount: 100.0041,
    fees: 0.00001,
    activity: "select",
    innerData: {
      address1: "GHOOOO",
      address2: "GXXXCC",
      description: "Credited your account",
      item: "piture.png",
    },
  },
  {
    icon: "mdi-arrow-bottom-left",
    iconColor: "green",
    name: "GH0478...",
    amount: 100.0041,
    fees: 0.00001,
    activity: "select",
    innerData: {
      address1: "GHOOOO",
      address2: "GXXXCC",
      description: "Credited your account",
      item: "piture.png",
    },
  },
   {
    icon: "mdi-arrow-bottom-left",
    iconColor: "green",
    name: "GH0378...",
    amount: 100.0041,
    fees: 0.00001,
    activity: "select",
    innerData: {
      address1: "GHOOOO",
      address2: "GXXXCC",
      description: "Credited your account",
      item: "piture.png",
    },
  },
  {
    icon: "mdi-arrow-top-right",
    iconColor: "red",
    name: "GH0471...",
    amount: 100.0041,
    fees: 0.00001,
    activity: "select",
    innerData: {
      address1: "GHOOOO",
      address2: "GXXXCC",
      description: "Credited your account",
      item: "piture.png",
    },
  },
  {
    icon: "mdi-arrow-bottom-left",
    iconColor: "green",
    name: "GH0478...",
    amount: 100.0041,
    fees: 0.00001,
    activity: "select",
    innerData: {
      address1: "GHOOOO",
      address2: "GXXXCC",
      description: "Credited your account",
      item: "piture.png",
    },
  },
   {
    icon: "mdi-arrow-bottom-left",
    iconColor: "green",
    name: "GH0378...",
    amount: 100.0041,
    fees: 0.00001,
    activity: "select",
    innerData: {
      address1: "GHOOOO",
      address2: "GXXXCC",
      description: "Credited your account",
      item: "piture.png",
    },
  },
  {
    icon: "mdi-arrow-top-right",
    iconColor: "red",
    name: "GH0471...",
    amount: 100.0041,
    fees: 0.00001,
    activity: "select",
    innerData: {
      address1: "GHOOOO",
      address2: "GXXXCC",
      description: "Credited your account",
      item: "piture.png",
    },
  },
  {
    icon: "mdi-arrow-bottom-left",
    iconColor: "green",
    name: "GH0478...",
    amount: 100.0041,
    fees: 0.00001,
    activity: "select",
    innerData: {
      address1: "GHOOOO",
      address2: "GXXXCC",
      description: "Credited your account",
      item: "piture.png",
    },
  },
   {
    icon: "mdi-arrow-bottom-left",
    iconColor: "green",
    name: "GH0378...",
    amount: 100.0041,
    fees: 0.00001,
    activity: "select",
    innerData: {
      address1: "GHOOOO",
      address2: "GXXXCC",
      description: "Credited your account",
      item: "piture.png",
    },
  },
  {
    icon: "mdi-arrow-top-right",
    iconColor: "red",
    name: "GH0471...",
    amount: 100.0041,
    fees: 0.00001,
    activity: "select",
    innerData: {
      address1: "GHOOOO",
      address2: "GXXXCC",
      description: "Credited your account",
      item: "piture.png",
    },
  },
  {
    icon: "mdi-arrow-bottom-left",
    iconColor: "green",
    name: "GH0478...",
    amount: 100.0041,
    fees: 0.00001,
    activity: "select",
    innerData: {
      address1: "GHOOOO",
      address2: "GXXXCC",
      description: "Credited your account",
      item: "piture.png",
    },
  },
];

export default {
  setup() {
    return {
      columns,
      rows,
      tab: ref("transaction"),
      transactionSelect:ref('All'),
       options: [
        'All', 'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ]
    };
  },
};
</script>
