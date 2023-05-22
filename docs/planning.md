# Planning notes

Steps taken in rough order:

1. Consider data structure and (mock) API endpoints
2. Plan views and routes
3. Mock data endpoint(s)
4. Brief upskill on React vs Vue to understand key differences
5. Decide to use Single File Components (SFC) due to being most common
6. Implemented routing between views
7. Added tables for data in 3 views, using route param to load data
8. A little bit of styling and layout
9. Explored adding Pinia bookmark (I liked pinia's simplicity)
10. Some overall styling
11. Checked Lighthouse a11y tests
12. Discovered compnents can't share reserved element name (e.g. Button)
13. Looked into moving data fetching from component -> api calls, to pinia -> api calls

Things to try and cover:

- Unit testing
- Using a store: Pinia/VueX
- Component events
- Routing
- Extendable data retrival

---

## Data typing draft

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
