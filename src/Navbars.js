import { Layout, Menu } from "antd";
import React from "react";
import Profile from "./Profile";
const { Header, Content, Footer, Sider } = Layout;
const items1 = ["About", "Portfolio", "Reference", "Contact"].map((key) => ({
  key,
  label: `${key}`,
  className: "item",
}));

const NavbarsList = () => (
  <Layout>
    <Header className="header">
      <Menu
        className="menu"
        // theme="dark"
        mode="horizontal"
        items={items1}
      />
    </Header>
    <Profile />
  </Layout>
);

export default NavbarsList;
