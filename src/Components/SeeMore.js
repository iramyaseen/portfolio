import React, { useState } from "react";
import { Button, Card, Col, Row, Typography } from "antd";

import {
  ArrowRightOutlined,
  PhoneFilled,
  PlusOutlined,
} from "@ant-design/icons";
const { Title } = Typography;
function SeeMore() {
  const [size, setSize] = useState("large");
  return (
    <>
      <div>
        <Row className="see_more">
          <div>
            <Col>
              <Title level={3} className="text_color ">
                See more
              </Title>
            </Col>
          </div>
          <div className="see_more_btn">
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
          </div>
        </Row>
        <Row>
          <Title level={2} className="title_color">
            Reference
          </Title>
        </Row>
        <Row className="responsive_margin card_row">
          <Card className="card_item">
            <p>CEO of IT2School</p>
            <Title className="txt" level={3}>
              Valentina Gorodetki
            </Title>
            <Col className="linkedIn">
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
            <Col className="linkedIn">
              <Button className="Portfolio btn_style" size={size}>
                LinkedIn
                <ArrowRightOutlined />
              </Button>
              <Button className="btn" style={{ height: "48px" }}>
                <PhoneFilled className="call_btn" />
              </Button>
            </Col>
          </Card>
          <Card className="card_item responsive_card_item">
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
      </div>
    </>
  );
}

export default SeeMore;
