import type { Client } from "../types";

// This info would realistically be held in the data, this is for demonstrative purposes
export const getClientAssetValue = (
  client: Client,
  assetId: string
): number => {
  const assetIndex = client.assets.findIndex((asset) => asset.ISIN === assetId);
  if (assetIndex < 0) return 0;
  return client.portfolioValue * 0.01 * client.assets[assetIndex].percentage;
};
