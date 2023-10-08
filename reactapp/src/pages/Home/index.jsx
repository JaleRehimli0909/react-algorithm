import React from "react";
import "./style.css";

import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";

import { Nav, Slider, Content, Footer } from "../../components/index";

const items = [
  {
    label: "Navigation One",
    key: "0",
    icon: <MailOutlined />,
  },
  {
    label: "Navigation Two",
    key: "1",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Navigation Two",
    key: "1",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Navigation Two",
    key: "1",
    icon: <AppstoreOutlined />,
  },
];

const Home = () => {
  return (
    <>
      <Nav nav ={items} bgColor='yellow'/>
      <Slider />
      <Content />
      <Footer />
    </>
  );
};

export default Home;
