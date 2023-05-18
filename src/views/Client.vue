<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { getClient } from "@/api/api";
import type { Client } from "@/types";

const route = useRoute();
const clientId = route.params.id as string;

const client = ref({} as Client);
await getClient(clientId).then((res) => {
  if (res) client.value = res;
  else console.error(`Failed to get client with ID: ${clientId}`);
});
</script>

<template>
  <div class="client-view">
    <h2>Client view</h2>
    <p>{{ client.name }}</p>
    <p>{{ client.portfolioValue }}</p>
    <table>
      <tr>
        <th>Asset Name</th>
        <th>Asset ISIN</th>
        <th>% of portfolio</th>
      </tr>
      <tr v-for="asset in client.assets">
        <td>
          <a :href="`/asset/${asset.ISIN}`">{{ asset.name }}</a>
        </td>
        <td>{{ asset.ISIN }}</td>
        <td>{{ asset.percentage }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped></style>
