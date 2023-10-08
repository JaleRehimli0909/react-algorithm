import React from "react";
import "./style.css";
import { logo } from "../images";

import { Layout, Col, Row, Menu } from "antd";
// import type { MenuProps } from 'antd';

const { Header } = Layout;

const Nav = ({ nav, bgColor, children }) => {
  return (
    <Layout>
      <Header style={{ backgroundColor: "white" }}>
        <Row>
          <Col style={{ backgroundColor: bgColor }} span={8}>
            {children ? children : (
              <img width="150px" height="35px" src={logo} alt="logo" />
            )}
          </Col>
          <Col style={{ backgroundColor: "yellow" }} span={16}>
            <Menu selectedKeys={["0"]} mode="horizontal" items={nav} />
          </Col>
        </Row>
      </Header>
    </Layout>
  );
};

export default Nav;
