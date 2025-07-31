import {
  NotificationIcon,
  PersonIcon,
  SettingsIcon,
} from "@shopify/polaris-icons";
import { ChartNoAxesColumnIncreasing, HelpCircle, Tag } from "lucide-react";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import NotifyBanner from "./NotifyBanner";

const NavBar = () => {
  const router = useRouter();

  const tabs = useMemo(
    () => [
      { path: "/", label: "Dashboard", Icon: ChartNoAxesColumnIncreasing },
      { path: "/flows", label: "Flows", Icon: Tag },
      { path: "/customers", label: "Customers", Icon: PersonIcon },
      { path: "/setup-alert", label: "Setup Alert", Icon: NotificationIcon },
      { path: "/settings", label: "Settings", Icon: SettingsIcon },
      { path: "/help", label: "Help", Icon: HelpCircle },
    ],
    []
  );

  const navLinkStyle = useMemo(
    () => ({
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      color: "black",
      fontWeight: "bold",
      padding: "5px 10px",
      marginRight: "10px",
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      borderRadius: "7px",
    }),
    []
  );

  const activeNavLinkStyle = useMemo(
    () => ({
      backgroundColor: "#303030",
      color: "white",
    }),
    []
  );

  const rowStyle = useMemo(() => ({ display: "flex" }), []);

  const handleNavigationTabChange = useCallback(
    (path) => {
      if (path !== router.pathname) {
        router.push(path);
      }
    },
    [router]
  );

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 100,
        backgroundColor: "#f7f7f7",
        padding: "10px 5px",
      }}
    >
      <nav style={rowStyle} aria-label="Primary">
        {tabs.map(({ path, label, Icon }) => {
          const isActive = router.pathname === path;
          return (
            <button
              key={path}
              type="button"
              style={{
                ...navLinkStyle,
                ...(isActive ? activeNavLinkStyle : {}),
              }}
              onMouseEnter={(e) => {
                if (!isActive)
                  e.currentTarget.style.backgroundColor = "#e5e5e5";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = isActive
                  ? "#303030"
                  : "transparent";
              }}
              onClick={() => handleNavigationTabChange(path)}
              aria-current={isActive ? "page" : undefined}
            >
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  marginRight: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                }}
              >
                <Icon
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "5px",
                    color: isActive ? "white" : "#303030",
                  }}
                />
              </div>
              <span>{label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default NavBar;
