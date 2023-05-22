<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getClientAsset, getClientAssetValue } from "@/utils/assetUtils";
import { toGBP } from "@/utils/formatUtils";
import { useClientsStore } from "@/stores/clients";

const route = useRoute();
const assetId = route.params.id as string;

const clientStore = useClientsStore();
const asset = computed(() => clientStore.currentAsset);
onMounted(() => {
  clientStore.fetchAsset(assetId);
});
</script>

<template>
  <div v-if="asset" class="asset-view">
    <section class="asset-overview">
      <h2>{{ asset.name }}</h2>
      <h3 class="subtitle">{{ asset.ISIN }}</h3>
    </section>
    <label for="asset-clients-table"><h2>Client Holdings</h2></label>
    <table id="asset-client-table">
      <tr>
        <th>Client Name</th>
        <th>Asset Investment</th>
        <th>Portfolio percentage</th>
      </tr>
      <tr v-for="client in asset.clients">
        <td>
          <router-link :to="`/client/${client.id}`">{{
            client.name
          }}</router-link>
        </td>
        <td>
          {{ toGBP(getClientAssetValue(client, asset.ISIN)) }}
        </td>
        <td>{{ `${getClientAsset(client, asset.ISIN)?.percentage}%` }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.asset-overview {
  margin-bottom: var(--spacing-lg);
}
.subtitle {
  color: var(--c-text-light);
}
</style>
