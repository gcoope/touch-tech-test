<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { getAsset } from "@/api/api";
import type { AssetDetails } from "@/types";

const route = useRoute();
const assetId = route.params.id as string;

const asset = ref({} as AssetDetails);
await getAsset(assetId).then((res) => {
  if (res) asset.value = res;
  else console.error(`Failed to get asset with ID: ${assetId}`);
});
</script>

<template>
  <div class="asset-view">
    <h2>Asset View</h2>
    <p>{{ asset.name }}</p>
    <p>{{ asset.ISIN }}</p>
    <table>
      <tr>
        <th>Client Name</th>
        <th>Amount invested</th>
      </tr>
      <tr v-for="client in asset.clients">
        <td>
          <a :href="`/client/${client.id}`">{{ client.name }}</a>
        </td>
        <td>
          {{ client.portfolioValue * 0.01 * client.assets[0].percentage }}
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped></style>
