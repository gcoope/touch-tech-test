export type Client = {
  id: string;
  name: string;
  portfolioValue: number;
  assets: ClientAsset[];
};

export type Asset = {
  name: string;
  ISIN: string;
};

export type ClientAsset = Asset & {
  percentage: number;
};

export type AssetDetails = Asset & {
  clients: Client[];
};
