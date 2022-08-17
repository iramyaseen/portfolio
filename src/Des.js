import { Row, Col, Typography, Card } from "antd";
import React from "react";
import forApp from "./images/appDesign.png";
import foBrower from "./images/brower.png";
import forWeb from "./images/Web.png";
import SeeMore from "./SeeMore";
const { Title } = Typography;

function Des() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Row
        className="row_margin"
        style={{ color: "white", paddingTop: "40px" }}
      >
        <Col>
          <Title level={2} className="title_color">
            Massimo Vignelli:
          </Title>
        </Col>
        <Col className="description2">
          “The life of a designer is a constant struggle. Fight against
          ugliness. Just like a doctor fights a disease. For us, visual disease
          is what we have around us, and what we are trying to do is, one way or
          another, cure the environment through design.”
        </Col>
      </Row>
      <Row className="row_margin">
        <Title level={2} className="title_color">
          Portfolio
        </Title>
      </Row>
      <Row className="project_image row_margin">
        <Col>
          <img src={forApp} />

          <Col>
            {" "}
            <Title level={2} className="title_color">
              App Design
            </Title>
          </Col>
        </Col>
        <Col>
          <img src={foBrower} />

          <Col>
            {" "}
            <Title level={2} className="title_color">
              Browse Service
            </Title>
          </Col>
        </Col>
        <Col>
          <img src={forWeb} />

          <Col>
            {" "}
            <Title level={2} className="title_color">
              Web Design
            </Title>
          </Col>
        </Col>
      </Row>
      <SeeMore />
    </div>
  );
}

export default Des;
