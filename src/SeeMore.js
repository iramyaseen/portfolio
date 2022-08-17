import React, { useState } from "react";
import { Button, Card, Col, Row, Space, Typography, Layout } from "antd";

import {
  ArrowRightOutlined,
  PhoneFilled,
  PlusOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

function SeeMore() {
  const [size, setSize] = useState("large");

  return (
    <div>
      <Row className="resp_btns resp_btns2 see_more">
        <div>
          <Col>
            <Title level={3} className="text_color ">
              See more
            </Title>
          </Col>
        </div>
        <div>
          <Col>
            <Button className="Portfolio Dribbble res_hire_me" size={size}>
              Dribbble
              <ArrowRightOutlined />
            </Button>
          </Col>
        </div>
        <div>
          <Col>
            <Button
              className="Portfolio Dribbble hire_me2 res_hire_me"
              size={size}
            >
              Behance
              <ArrowRightOutlined />
            </Button>
          </Col>
        </div>
        <div>
          <Col>
            <Button className="Portfolio Dribbble res_hire_me" size={size}>
              Figma files
              <ArrowRightOutlined />
            </Button>
          </Col>
        </div>
      </Row>
      <Row className="row_margin">
        <Title style={{ marginTop: "50px" }} level={2} className="title_color">
          Reference
        </Title>
      </Row>
      <Row className="responsive_margin card_row">
        <Card className="card_item">
          <p>CEO of IT2School</p>
          <Title className="txt" level={3}>
            Valentina Gorodetki
          </Title>
          <Col style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Button className="Portfolio btn_style" size={size}>
              LinkedIn
              <ArrowRightOutlined />
            </Button>
            <Button className="btn" style={{ height: "48px" }}>
              <PhoneFilled className="call_btn" />
            </Button>
          </Col>
        </Card>
        <Card className="card_item">
          <p>CEO and Founder of Atom Space</p>
          <Title className="txt" level={3}>
            Ann Derevyanko
          </Title>
          <Col style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Button className="Portfolio btn_style" size={size}>
              LinkedIn
              <ArrowRightOutlined />
            </Button>
            <Button className="btn" style={{ height: "48px" }}>
              <PhoneFilled className="call_btn" />
            </Button>
          </Col>
        </Card>
        <Card className="card_item">
          <Col
            style={{
              textAlign: "center",
              marginTop: "30px",
              color: "#C9C9C9",
            }}
          >
            <PlusOutlined style={{ fontSize: "40px" }} />
            <Title style={{ color: "#C9C9C9" }} level={2}>
              You can be next
            </Title>
          </Col>
        </Card>
      </Row>
      <Row className="footer" justify="space-around" align="middle">
        <Row style={{ display: "block" }}>
          <Col className="color_change">
            <p>Based in Maidstone, United Kingdom</p>
            <p>+44 7360 784977</p>
            <p>illia_frunza@ukr.net</p>
          </Col>
        </Row>
        {/*  */}
        <Row style={{ display: "block" }}>
          <Col>
            <Col>
              <Title className="prot" level={3}>
                Portfolio
              </Title>
            </Col>
            <p>Dribbble</p>
            <p>Behance</p>
            <p>Figma Files</p>
          </Col>
        </Row>
        {/*  */}
        <Row style={{ display: "block" }}>
          <Col>
            <Col>
              <Title className="prot" level={3}>
                Social media
              </Title>
            </Col>
            <p>LinkedIn</p>
            <p>Facebook</p>
            <p>Instagram</p>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default SeeMore;
