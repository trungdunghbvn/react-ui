import React from "react";
import {
  currencyConvertDashboardUrl,
  emailWithLoveDashboardUrl,
  fbChatBoxDashboardUrl,
  salesPopDashboardUrl
} from "./config";
import styles from "./CrossSell.scss";

export function CrossSell({ title, shop, listCrossSell, app }) {
  const listApps = [
    {
      appName: "Currency Converter Box ‑ BEST",
      appIcon:
        "https://apps.shopifycdn.com/listing_images/2eb8bf799c282c87d7937f6a8e61e796/icon/0f9931d1ddccc42bb9723220926808ee.jpg?height=84&quality=90&width=84",
      price: "Free",
      description:
        "Best Currency Converter, Auto Currency Switcher On Location",
      dashboardUrl: `${currencyConvertDashboardUrl}?shop=${shop}`,
      listingPageUrl: "https://apps.shopify.com/currency-converter-master"
    },
    {
      appName: "Sales Pop Master ‑ Sales Popup",
      appIcon:
        "https://apps.shopifycdn.com/listing_images/18d54dc3ff21731dc43145d85b05aeec/icon/0f9931d1ddccc42bb9723220926808ee.jpg?height=84&quality=90&width=84",
      price: "Free",
      description:
        "Social Proof, Sales Pop Ups, Sales Pop, Countdown Timer-Stock",
      dashboardUrl: `${salesPopDashboardUrl}?shop=${shop}`,
      listingPageUrl: "https://apps.shopify.com/sales-pop-master"
    },
    {
      appName: "Email With Love",
      appIcon:
        "https://apps.shopifycdn.com/listing_images/7c320a641c5173b8b4fdda076318a836/icons/eb8d6fd691c55e91db1e37d0d3d23d69.png",
      price: "Free",
      description: "Automated thank-you email to customers",
      dashboardUrl: `${emailWithLoveDashboardUrl}?shop=${shop}`,
      listingPageUrl: "https://apps.shopify.com/email-with-love"
    },
    {
      appName: "Facebook Chat Box ‑ Live Chat",
      appIcon:
        "https://apps.shopifycdn.com/listing_images/af9c031fdb1813a12cd313ef0421a3fb/icon/0f9931d1ddccc42bb9723220926808ee.jpg?height=84&quality=90&width=84",
      price: "Free",
      description:
        "Live Chat, Free Chat Via Facebook Messenger, Facebook Channel",
      dashboardUrl: `${fbChatBoxDashboardUrl}?shop=${shop}`,
      listingPageUrl: "https://apps.shopify.com/facebook-chat-box"
    },
    {
      appName: "Discount Master ‑ Quantity",
      appIcon:
        "https://apps.shopifycdn.com/listing_images/f0d5c01083c0e2ebb750b334c88b548b/icon/0f9931d1ddccc42bb9723220926808ee.jpg?height=84&quality=90&width=84",
      price: "Free plan available",
      description:
        "Quantity Discounts/Tiered, Countdown Timer, Stock Countdown",
      dashboardUrl: "",
      listingPageUrl: "https://apps.shopify.com/discount-master"
    },
    {
      appName: "Upsell Cross‑Sell Smart Tool",
      appIcon:
        "https://apps.shopifycdn.com/listing_images/f0d5c01083c0e2ebb750b334c88b548b/icon/0f9931d1ddccc42bb9723220926808ee.jpg?height=84&quality=90&width=84",
      description:
        "Upsell Product, Cross-sell, Discounted Upsells, Upsell Bundles",
      dashboardUrl: "",
      listingPageUrl: "https://apps.shopify.com/upsell-cross-sell-smart-tool"
    },
    {
      appName: "Recommended Product – Sales",
      appIcon:
        "https://apps.shopifycdn.com/listing_images/f0d5c01083c0e2ebb750b334c88b548b/icon/0f9931d1ddccc42bb9723220926808ee.jpg?height=84&quality=90&width=84",
      description:
        "Recently Viewed Products, Personalized Recommendations, Sales",
      dashboardUrl: "",
      listingPageUrl: "https://apps.shopify.com/recommended-product-sales"
    }
  ];

  const listingPageUrl = (appName, app) => {
    let appSelected;
    switch (appName) {
      case "currency":
        appSelected = listApps[0];
        break;
      case "sales-pop":
        appSelected = listApps[1];
        break;
      case "email-with-love":
        appSelected = listApps[2];
        break;
      case "facebook-chat":
        appSelected = listApps[3];
        break;
      case "discount-master":
        appSelected = listApps[4];
        break;
      case "upsell-master":
        appSelected = listApps[5];
        break;
      case "top-pin":
        appSelected = listApps[6];
        break;
      default:
        break;
    }
    return `${
      appSelected.listingPageUrl
    }?utm_source=in_app_admin&utm_medium=${app}`;
  };

  const getApp =(appName)=>{
    let appSelected = listApps[0];
    switch (appName) {
      case "currency":
        appSelected = listApps[0];
        break;
      case "sales-pop":
        appSelected = listApps[1];
        break;
      case "email-with-love":
        appSelected = listApps[2];
        break;
      case "facebook-chat":
        appSelected = listApps[3];
        break;
      case "discount-master":
        appSelected = listApps[4];
        break;
      case "upsell-master":
        appSelected = listApps[5];
        break;
      case "top-pin":
        appSelected = listApps[6];
        break;
      default:
        break;
    }
    return appSelected;
  }

  const items = listCrossSell || [
    { app: "top-pin", highly: true },
    { app: "sales-pop"},
    { app: "currency"}
  ];

  const getListApp = () => {
    return items.map((item, index) => (
      <a key={index} target="_blank" href={listingPageUrl(item.app, app)}>
        <div className={styles.uiAppCard}>
          <div className={styles.uiAppCardIcon}>
            <img src={getApp(item.app).appIcon} alt="" />
          </div>
          <h4 className={styles.uiAppCardName}>{getApp(item.app).appName}</h4>
          <p className={styles.uiAppCardDetails}>{getApp(item.app).description}</p>
          {item.highly && <div className={styles.uiAppCardDetailsHighly}>Highly recommend</div>}
        </div>
      </a>
    ));
  };

  return (
    <div className={styles.CrossSell}>
      {/* eslint-disable react/jsx-no-target-blank */}
      <div className={styles.Card}>
        <div className={styles.Section}>
          <div className={styles.Title}>{title || "YOU MIGHT ALSO LIKE"}</div>
          <br />
          <section className={styles.displayFlex}>
            {getListApp()}
          </section>
        </div>
      </div>
    </div>
  );
}
