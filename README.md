
# Documents
------------------------------------------
```yarn link```

```yarn build```

```yarn publish```

------------------------------------------
## Index

- [Getting Started](#getting-started)
- [On Off component](#on-off)
- [Cross sell](#cross-sell)

## Getting Started

```sh
npm i autoketing-new --save
```

```sh
yarn add autoketing-new
```
### On Off component

##### Component
```$xslt
<OnOff changeStatus={()=>{}} status={} size={} color={} />
```
##### Options

**`size?: string`**
Defaults to `large` (`medium`, `large`)

**`status?: Booleal`**
Defaults to `true` (`true`, `false`)

**`color?: string`**
--------------------


### Cross Sell component

##### Component
```$xslt
<CrossSell app="top-pin" title="" listCrossSell="" shop=""/>
```
##### Options

**`title?: string`**
Defaults `YOU MIGHT ALSO LIKE`

**`listCrossSell?: Array`**
Defaults to `[{ app: "sales-pop", highly: true }, { app: "currency"}, { app: "upsell-master"}]`
list app `"currency", "sales-pop", "email-with-love", "facebook-chat", "discount-master", "upsell-master"`
**`shop?: string`**

**`app?: string`**
--------------------
