import React, { useState } from "react";
import image from "../images/Group 1.png";
import image2 from "../images/Group 3.png";
import image3 from "../images/Group 4.png";
import { ArrowRightOutlined, InstagramOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space, Typography } from "antd";
import UserDetails from "../Components/UserDetails";
const { Title } = Typography;
function Profile() {
  const [size, setSize] = useState("large");
  return (
    <>
      <Row
        // style={{
        //   margin: "0% auto",
        // }}
        className="responsive_row"
      >
        <Space className="reponsive_design">
          <div>
            <Col className="image_col" flex={3}>
              <img src={image} />
            </Col>
          </div>
          <div>
            <Col flex={3}>
              <Row>
                <Title className="text_description" level={1}>
                  Hello I'm a
                  <span>
                    UX/UI Designer <span>Illia Frunza</span>
                  </span>
                </Title>
              </Row>
              <div>
                <Row className="reponsive_btn">
                  <Col>
                    <Button size={size} className="hire_me res_hire_me">
                      Hire me
                      {/* <ArrowRightOutlined width={"400px"} size={"400px"} /> */}
                    </Button>
                  </Col>
                  <Col className="res_btn_margin">
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
      <UserDetails />
      {/* <img className="logo" src={image2} />
      <img className="figma" src={image3} /> */}
    </>
  );
}

export default Profile;
