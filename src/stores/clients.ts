import { defineStore } from "pinia";
import * as api from "@/api/api";
import type { AssetDetails, Client } from "@/types";
import { ref } from "vue";

export const useClientsStore = defineStore("clients", () => {
  const clients = ref<Client[]>([]);
  const currentClient = ref<Client | null>(null);
  const currentAsset = ref<AssetDetails | null>(null);

  function fetchClients(): void {
    api
      .getClients()
      .then((data) => {
        if (data) clients.value = data;
      })
      .catch((err) => console.error(err));
  }

  function fetchClient(clientId: string) {
    api
      .getClient(clientId)
      .then((data) => {
        if (data) currentClient.value = data;
      })
      .catch((err) => console.error(err));
  }

  function fetchAsset(assetISIN: string) {
    api
      .getAsset(assetISIN)
      .then((data) => {
        if (data) currentAsset.value = data;
      })
      .catch((err) => console.error(err));
  }

  return {
    clients,
    currentAsset,
    currentClient,
    fetchClients,
    fetchClient,
    fetchAsset,
  };
});
