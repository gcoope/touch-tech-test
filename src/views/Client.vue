<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { toGBP } from "@/utils/formatUtils";
import { useClientsStore } from "@/stores/clients";
import { useBookmarksStore } from "@/stores/bookmarks";
import { Bookmark, CTAButton } from "../components";

const route = useRoute();
const clientId = route.params.id as string;

const clientStore = useClientsStore();
const client = computed(() => clientStore.currentClient);
const bookmarksStore = useBookmarksStore();

const onContactClick = () => {
  console.log("Would open contact method");
};

onMounted(() => {
  clientStore.fetchClient(clientId);
});
</script>

<template>
  <div v-if="client" class="client-view">
    <section>
      <div class="portfolio-header">
        <div class="portfolio-header__heading">
          <h2>{{ client.name }}'s Portfolio</h2>
          <Bookmark
            @on-click="() => bookmarksStore.toggleBookmark(clientId)"
            :checked="bookmarksStore.hasBookmark(clientId)"
          />
        </div>
        <div>
          <CTAButton label="Contact Client" @on-click="() => onContactClick()"
            >Contact</CTAButton
          >
        </div>
      </div>
      <dl class="portfolio-stats">
        <div>
          <dt>Total value</dt>
          <dd>
            {{ toGBP(client.portfolioValue) }}
          </dd>
        </div>
        <div>
          <dt>No. of assets</dt>
          <dd>
            {{ client.assets.length }}
          </dd>
        </div>
      </dl>
    </section>
    <table>
      <tr>
        <th>Asset Name</th>
        <th>Asset ISIN</th>
        <th>% of portfolio</th>
      </tr>
      <tr v-for="asset in client.assets">
        <td>
          <router-link :to="`/asset/${asset.ISIN}`" :title="`${asset.name}`">{{
            asset.name
          }}</router-link>
        </td>
        <td>{{ asset.ISIN }}</td>
        <td>{{ asset.percentage }}</td>
      </tr>
    </table>
  </div>
  <div v-else>
    <p>{{ `Failed to find client with ID: ${clientId}` }}</p>
  </div>
</template>

<style scoped>
.portfolio-header {
  display: flex;
  justify-content: space-between;
}

.portfolio-header__heading {
  display: flex;
}

.portfolio-stats {
  display: flex;
}
.portfolio-stats > *:not(:last-child) {
  margin-right: var(--spacing-xxl);
}

.portfolio-header,
.portfolio-stats {
  margin-bottom: var(--spacing-md);
}

.portfolio-stats dd {
  font-weight: 600;
  font-size: 2em;
  color: var(--c-brand-primary);
}
</style>
