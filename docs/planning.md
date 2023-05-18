# Planning notes

Steps taken in rough order:

1. Consider data structure and (mock) API endpoints
2. Plan views and routes
3. Brief upskill on React vs Vue to understand key differences
4. Mock data endpoint(s)
5. Implemented routing between views
6. Added tables for data in 3 views, using route param to load data

Things to try and cover:

- Unit testing
- Using a store: Pinia/VueX
- Component events
- Routing
- Extendable data retrival

## Data typing

```
Client {
    id: string,
    name: string,
    portfolioValue: number,
    assets: ClientAsset[]
}

Asset {
    name: string,
    ISIN: string
}

ClientAsset extends Assets {
    percentage: number
}

AssetDetails extends Asset {
    clients: Client[]
}
```

## Views and routes

`/`: Dashboard page, fetches table of all clients. Shows: name, portfolio value, asset count. (Stretch: these rows could be exapandable)

`/client/:clientId`: Fetches `Client` data based on client's ID. Shows list of client's assets along with their percentages. Assets can be clicked to view assets. (Stretch: sortable/filterable table, pie chart of assets %s).

`/asset/:assetISIN`: Fetches `AssetDetails` data bsed on asset's ISIN (to my understanding these are unique). Display asset details. Shows table of client's along with their percentages (we can also calculate their investment amounts)
