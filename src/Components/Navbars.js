import { Layout, Menu } from "antd";
import React from "react";
import Profile from "../Components/ProfileText";
const { Header, Content, Footer, Sider } = Layout;
const items1 = ["About", "Portfolio", "Reference", "Contact"].map((key) => ({
  key,
  label: `${key}`,
  className: "item",
}));

const NavbarsList = () => (
  <Layout>
    <Header className="header">
      <Menu className="menu" mode="horizontal" items={items1} />
    </Header>
    <Profile />
  </Layout>
);

export default NavbarsList;
