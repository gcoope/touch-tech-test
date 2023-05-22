import type { Client, ClientAsset } from "../types";

// This info would realistically be held in the data, this is for demonstrative purposes
export const getClientAssetValue = (
  client: Client,
  assetId: string
): number => {
  const asset = getClientAsset(client, assetId);
  if (!asset) return 0;
  return client.portfolioValue * 0.01 * asset.percentage;
};

export const getClientAsset = (
  client: Client,
  assetId: string
): ClientAsset | null => {
  const assetIndex = client.assets.findIndex((asset) => asset.ISIN === assetId);
  if (assetIndex < 0) return null;
  return assetIndex >= 0 ? client.assets[assetIndex] : null;
};
