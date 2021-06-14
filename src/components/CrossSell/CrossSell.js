import React from "react";
import {
  currencyConvertDashboardUrl,
  emailWithLoveDashboardUrl,
  fbChatBoxDashboardUrl,
  salesPopDashboardUrl,
} from "./config";
import styles from "./CrossSell.scss";

export function CrossSell({ title, shop, listCrossSell, app, highlyText }) {
  const listApps = [
    {
      appName: "Currency Converter Box ‑ BEST",
      appIcon:
        "https://cdn.autoketing.org/sdk-cdn/sales-pop/logo-app.jpg",
      price: "Free",
      description:
        "Best Currency Converter, Auto Currency Switcher On Location",
      dashboardUrl: `${currencyConvertDashboardUrl}?shop=${shop}`,
      listingPageUrl: "https://apps.shopify.com/currency-converter-master",
    },
    {
      appName: "Sales Pop Master ‑ Countdown",
      appIcon:
        "https://cdn.autoketing.org/sdk-cdn/sales-pop/logo-app.jpg",
      price: "Free",
      description:
        "Sales Pop, Sales Pop Up, Notification, Countdown Timer-Stock",
      dashboardUrl: `${salesPopDashboardUrl}?shop=${shop}`,
      listingPageUrl: "https://apps.shopify.com/sales-pop-master",
    },
    {
      appName: "Thank You Email Marketing Tool",
      appIcon:
        "https://cdn.autoketing.org/sdk-cdn/sales-pop/logo-app.jpg",
      price: "Free",
      description: "Auto Thankyou email, Email marketing, Cart Recovery, Newsletter",
      dashboardUrl: `${emailWithLoveDashboardUrl}?shop=${shop}`,
      listingPageUrl: "https://apps.shopify.com/email-with-love",
    },
    {
      appName: "Facebook Chat Box ‑ Marketing",
      appIcon:
        "https://cdn.autoketing.org/sdk-cdn/sales-pop/logo-app.jpg",
      price: "Free",
      description:
        "Live Chat, Free Chat Via Facebook Messenger, Auto Marketing",
      dashboardUrl: `${fbChatBoxDashboardUrl}?shop=${shop}`,
      listingPageUrl: "https://apps.shopify.com/facebook-chat-box",
    },
    {
      appName: "Discount Master ‑ Quantity",
      appIcon:
        "https://cdn.autoketing.org/sdk-cdn/sales-pop/logo-app.jpg",
      price: "Free plan available",
      description:
        "Quantity Discounts/Tiered, Countdown Timer, Stock Countdown",
      dashboardUrl: "",
      listingPageUrl: "https://apps.shopify.com/discount-master",
    },
    {
      appName: "Upsell Cross‑Sell Smart Tool",
      appIcon:
        "https://cdn.autoketing.org/sdk-cdn/sales-pop/logo-app.jpg",
      description:
        "Product Bundle, Upsell Bundle, Cross-sell, Discounted Upsells",
      dashboardUrl: "",
      listingPageUrl: "https://apps.shopify.com/upsell-cross-sell-smart-tool",
    },
    {
      appName: "Recommended Product – Sales",
      appIcon:
        "https://cdn.autoketing.org/sdk-cdn/sales-pop/logo-app.jpg",
      description:
        "Recently Viewed Products, Personalized Recommendations, Sales",
      dashboardUrl: "",
      listingPageUrl: "https://apps.shopify.com/recommended-product-sales",
    },
    {
      appName: "Product Reviews Autoketing",
      appIcon:
        "https://cdn.autoketing.org/sdk-cdn/sales-pop/logo-app.jpg",
      description:
        "Auto Product Reviews, Reviews App, Photo Reviews, Ratings App",
      dashboardUrl: "",
      listingPageUrl: "https://apps.shopify.com/product-reviews-autoketing",
    },
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
      case "product-review":
        appSelected = listApps[7];
        break;
      default:
        break;
    }
    return `${appSelected.listingPageUrl}?utm_source=in_app_admin&utm_medium=${app}`;
  };

  const getApp = (appName) => {
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
      case "product-review":
        appSelected = listApps[7];
        break;
      default:
        break;
    }
    return appSelected;
  };

  const items = listCrossSell || [
    { app: "product-review", highly: true },
    { app: "top-pin" },
    { app: "sales-pop" },
  ];

  const getListApp = () => {
    return items.map((item, index) => (
      <a key={index} target="_blank" href={listingPageUrl(item.app, app)}>
        <div className={styles.uiAppCard}>
          <div className={styles.uiAppCardIcon}>
            <img src={getApp(item.app).appIcon} alt="" />
          </div>
          <h4 className={styles.uiAppCardName}>{getApp(item.app).appName}</h4>
          <p className={styles.uiAppCardDetails}>
            {getApp(item.app).description}
          </p>
          {item.highly && (
            <div className={styles.uiAppCardDetailsHighly}>
              {highlyText || "Highly recommend"}
            </div>
          )}
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
          <section className={styles.displayFlex}>{getListApp()}</section>
        </div>
      </div>
    </div>
  );
}
