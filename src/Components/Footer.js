import React from "react";
import { Col, Row, Typography } from "antd";

const { Title } = Typography;

function Footer() {
  return (
    <div>
      {" "}
      <Row className="footer" justify="space-around" align="middle">
        <Row style={{ display: "block" }}>
          <Col className="color_change">
            <p>Based in Maidstone, United Kingdom</p>
            <p>+44 7360 784977</p>
            <p>illia_frunza@ukr.net</p>
          </Col>
        </Row>
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

export default Footer;
