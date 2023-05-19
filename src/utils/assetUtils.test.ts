import type { Client } from "../types";
import { getClientAssetValue } from "./assetUtils";

const client: Client = {
  id: "0001",
  name: "it Client Name",
  portfolioValue: 125000,
  assets: [
    {
      name: "Holding A",
      ISIN: "AAA001",
      percentage: 25,
    },
    {
      name: "Holding B",
      ISIN: "BBB002",
      percentage: 45,
    },
    {
      name: "Holding C",
      ISIN: "CCC003",
      percentage: 30,
    },
  ],
};

describe("getClientAssetValue", () => {
  it("returns correct values of client's holding", () => {
    // 25% of 125000 = 31250
    expect(getClientAssetValue(client, "AAA001")).toBe(31250);
    // 45% of 125000 = 56250
    expect(getClientAssetValue(client, "BBB002")).toBe(56250);
    // 30% of 125000 = 37500
    expect(getClientAssetValue(client, "CCC003")).toBe(37500);
  });

  it("returns 0 if asset cannot be found in client's holding", () => {
    expect(getClientAssetValue(client, "ZZZ999")).toBe(0);
  });
});
