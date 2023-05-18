import type { Client, ClientAsset, AssetDetails, Asset } from "@/types";
import data from "./data.json";

// Helper to build a list of unique assets for querying, see comment in getAsset()
const getAssetList = (): Asset[] => {
  const allAssets = data.clients
    .map((client: Client) => {
      return client.assets.map((asset: ClientAsset) => {
        return {
          name: asset.name,
          ISIN: asset.ISIN,
        };
      });
    })
    .flat();
  const assetMap = new Map(allAssets.map((a) => [a.ISIN, a]));
  return [...assetMap.values()];
};

// Helper to get clients who's assets contain ISIN, see comment in getAsset()
const getClientsWithISIN = (ISIN: string): Client[] => {
  return data.clients.filter(
    (client: Client) =>
      client.assets.findIndex(
        (clientAsset: ClientAsset) => clientAsset.ISIN === ISIN
      ) > -1
  );
};

// /clients
export const getClients = async (): Promise<Client[]> => {
  return Promise.resolve(data.clients);
};

// /client/:clientId
export const getClient = async (
  clientId: string
): Promise<Client | undefined> => {
  const client = data.clients.find((c: Client) => c.id === clientId);
  return Promise.resolve(client);
};

// /asset/:assetISIN
export const getAsset = async (
  assetISIN: string
): Promise<AssetDetails | undefined> => {
  // In reality this would likely be an xref table of clientId and assetISIN
  // I'm building it here to satisfy what the frontend API would expect
  const asset = getAssetList().find((asset: Asset) => asset.ISIN === assetISIN);

  if (asset === undefined) {
    return Promise.resolve(undefined);
  }

  const assetDetail = {
    ...asset,
    clients: getClientsWithISIN(assetISIN),
  };
  return Promise.resolve(assetDetail);
};
