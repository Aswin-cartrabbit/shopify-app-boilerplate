import { Banner, BannerTone } from "@shopify/polaris";
import React from "react";

const NotifyBanner = ({
  title,
  tone,
  description,
}: {
  title: string;
  tone: BannerTone;
  description: string;
}) => {
  return (
    <Banner
      title={title}
      tone={tone}
      action={{ content: "Edit variant weights", url: "" }}
      secondaryAction={{ content: "Learn more", url: "" }}
      onDismiss={() => {}}
    >
      <p>{description}</p>
    </Banner>
  );
};

export default NotifyBanner;
