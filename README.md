
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

## Mục lục
  1. [Getting Started](#getting-started)
  2. [On Off component](#on-off)
  3. [Cross sell](#cross-sell)
  4. [Toast](#toast)

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


## Cross Sell

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

## Toast

```javascript
<Toast title="Success" duration={500000} open={active} onDismiss={tongleActive} />
```

**title: string**

**background: string**
Defaults: `#FFFFFF`

**color: string**
Defaults: `#FFF`

**duration: string**
Defaults: `#5000`

**error: Booleal**
Defaults: `false`