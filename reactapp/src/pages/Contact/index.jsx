import React from "react";
import "./style.css";
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';

import { Nav, Slider, Footer } from "../../components/index";

const items = [
  {
    label: 'Navigation One',
    key: '0',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: '1',
    icon: <AppstoreOutlined />,
  },

];



const Contact = () => {
  return (
    <>
      <Nav nav={items}  bgColor='green'>salam</Nav>
      <Slider />
      <Footer />
    </>
  );
};

export default Contact;
