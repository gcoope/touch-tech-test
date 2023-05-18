# Planning notes

Steps taken in rough order:

1. Consider data structure and (mock) API endpoints
2. Plan views and routes
3. Brief upskill on React vs Vue to understand key differences
4. Mock data endpoint(s)

## Data typing

```
clients: Client[]

Client {
    id: string,
    name: string,
    portfolioValue: number,
    assets: ClientAsset[]
}

ClientAsset {
    asset: Asset,
    percentage: number
}

Asset {
    name: string,
    ISIN: string
}
```

## Views and routes

`/`: Landing page, fetches table of all clients. Shows: name, portfolio value, asset count. (Stretch: these rows could be exapandable)

`/client/:clientId`: Fetches `Client` data based on client's ID. Shows list of client's assets along with their percentages. Assets can be clicked to view assets. (Stretch: sortable/filterable table, pie chart of assets %s).

`/asset/:assetISIN`: Fetches `Asset` data bsed on asset's ISIN (to my understanding these are unique). Display asset details. Shows table of client's along with their percentages (we can also calculate their investment amounts)
