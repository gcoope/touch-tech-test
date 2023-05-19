<script setup lang="ts">
import { ref } from "vue";
import { getClients } from "@/api/api";
import type { Client } from "@/types";
import { toGBP } from "@/utils/formatUtils";

const clients = ref([] as Client[]);
await getClients().then((res) => (clients.value = res));
</script>

<template>
  <div class="dashboard">
    <h2>Dashboard</h2>
    <table>
      <tr>
        <th>Client</th>
        <th>Value</th>
        <th>No. of assets</th>
      </tr>
      <tr v-for="client in clients">
        <td>
          <a
            :href="`/client/${client.id}`"
            :title="`View ${client.name}'s Portfolio`"
            >{{ client.name }}</a
          >
        </td>
        <td>{{ toGBP(client.portfolioValue) }}</td>
        <td>{{ client.assets.length }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped></style>
