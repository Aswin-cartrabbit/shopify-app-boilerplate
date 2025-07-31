import NavBar from "@/components/NavBar";
import NotifyBanner from "../NotifyBanner";
import { Page, Layout } from "@shopify/polaris";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <NavBar />
          <br />
          <br />
          {/* <NotifyBanner
            title="Enabling the Dynamic priceing Extension in the theme is required"
            tone="warning"
            description="Ensure the Dynamic priceing Extension is enabled in your theme for the proper execution of Referral links, Affiliate portal, Signup forms and Thank you page."
          /> */}
          {children}
        </Layout.Section>
      </Layout>
    </Page>
  );
}
