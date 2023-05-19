<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { getAsset } from "@/api/api";
import { getClientAssetValue } from "@/utils/assetUtils";
import { toGBP } from "@/utils/formatUtils";
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
    <h2>{{ asset.name }}</h2>
    <h3 class="subtitle">{{ asset.ISIN }}</h3>
    <label for="asset-clients-table"> Client Holdings </label>
    <table id="asset-client-table">
      <tr>
        <th>Client Name</th>
        <th>Asset Investment</th>
      </tr>
      <tr v-for="client in asset.clients">
        <td>
          <a :href="`/client/${client.id}`">{{ client.name }}</a>
        </td>
        <td>
          {{ toGBP(getClientAssetValue(client, asset.ISIN)) }}
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.subtitle {
  color: var(--c-text-light);
}
</style>
