<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { toGBP } from "@/utils/formatUtils";
import { useClientsStore } from "@/stores/clients";
import { useBookmarksStore } from "@/stores/bookmarks";
import Bookmark from "../components/Bookmark";

const clientStore = useClientsStore();
const bookmarksStore = useBookmarksStore();

const clients = computed(() => clientStore.clients);

onMounted(() => {
  clientStore.fetchClients();
});
</script>

<template>
  <div v-if="clients" class="dashboard">
    <h2>Client List</h2>
    <table>
      <tr>
        <th>Name</th>
        <th>Value</th>
        <th>No. of assets</th>
        <th>Saved</th>
      </tr>
      <tr v-if="clients.length > 0" v-for="client in clients">
        <td>
          <router-link
            :to="`/client/${client.id}`"
            :title="`View ${client.name}'s Portfolio`"
            >{{ client.name }}</router-link
          >
        </td>
        <td>{{ toGBP(client.portfolioValue) }}</td>
        <td class="center-align-cell">{{ client.assets.length }}</td>
        <td class="center-align-cell">
          <Bookmark
            @on-click="() => bookmarksStore.toggleBookmark(client.id)"
            :checked="bookmarksStore.hasBookmark(client.id)"
          />
        </td>
      </tr>
      <tr v-else>
        <div class="empty-table">No clients found</div>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.dashboard > h2 {
  margin-bottom: var(--spacing-lg);
}
</style>
