import React, { useState } from "react";
import image from "../src/images/Group 1.png";
import image2 from "../src/images/Group 3.png";
import image3 from "../src/images/Group 4.png";
import { ArrowRightOutlined, InstagramOutlined } from "@ant-design/icons";

import { Button, Col, Row, Space, Typography } from "antd";
import Des from "./Des";

const { Title } = Typography;

function Profile() {
  const [size, setSize] = useState("large");

  return (
    <>
      <Row className="row_margin">
        <Space className="reponsive_design">
          <div>
            <Col className="col1" flex={3}>
              <img src={image} />
            </Col>
          </div>
          <div>
            <Col className="col2" flex={3}>
              <Row>
                <Title className="description" level={1}>
                  Hello I'm a{" "}
                  <span>
                    UX/UI Designer <span>Illia Frunza</span>
                  </span>{" "}
                </Title>
              </Row>
              <div>
                <Row className="reponsive_btn">
                  <Col className="">
                    {" "}
                    <Button size={size} className="hire_me res_hire_me">
                      Hire me
                      <ArrowRightOutlined />
                    </Button>
                  </Col>
                  <Col className="res_btn_margin">
                    {" "}
                    <Button className="Portfolio res_hire_me" size={size}>
                      Portfolio
                      <ArrowRightOutlined />
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Button className="get_touch title" size={size}>
                    <InstagramOutlined />
                    Get in touch by Instagram
                    <ArrowRightOutlined />
                  </Button>
                  <Button className="get_touch title_responsive" size={size}>
                    <InstagramOutlined />
                    Instagram
                    <ArrowRightOutlined />
                  </Button>
                </Row>
              </div>
            </Col>
          </div>
        </Space>
      </Row>
      <Des />
      <img className="logo" src={image2} />
      <img className="figma" src={image3} />
    </>
  );
}

export default Profile;
