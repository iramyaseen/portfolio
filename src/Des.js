import { Row, Col, Typography, Card } from "antd";
import React from "react";
import styled from "styled-components";
import forApp from "./images/appDesign.png";
import foBrower from "./images/brower.png";
import forWeb from "./images/Web.png";
import SeeMore from "./SeeMore";
const { Title } = Typography;
const Container = styled.div``;
function Des() {
  return (
    <div
      className="mobile_btn"
      style={{ marginLeft: "100px", marginRight: "100px" }}
    >
      <Row style={{ marginTop: "60px" }}>
        <Col>
          <Title level={2} className="title_color ">
            Massimo Vignelli:
          </Title>
        </Col>
        <Col
          style={{
            color: "#FFFFFF",
            fontSize: "32px",
            // marginRight: "100px",
          }}
          className="responsive_text text"
        >
          “The life of a designer is a constant struggle. Fight against
          ugliness. Just like a doctor fights a disease. For us, visual disease
          is what we have around us, and what we are trying to do is, one way or
          another, cure the environment through design.”
        </Col>
      </Row>
      <Row style={{ marginTop: "100px" }}>
        <Title level={2} style={{ color: "white", paddingBottom: "20px" }}>
          Portfolio
        </Title>
      </Row>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
          // marginRight: "100px",
        }}
        className="responsive_text center center2"
      >
        <Container>
          <Col className="Portfolio_image">
            <img
              src={forApp}
              width="250px"
              height="200px"
              style={{ borderRadius: "10px" }}
            />
            <Col>
              {" "}
              <Title style={{ color: "white", marginTop: "15px" }} level={2}>
                App Design
              </Title>
            </Col>
          </Col>
        </Container>
        <Container>
          <Col className="Portfolio_image">
            <img
              src={foBrower}
              width="250px"
              height="200px"
              style={{ borderRadius: "10px" }}
            />

            <Col>
              {" "}
              <Title style={{ color: "white", marginTop: "15px" }} level={2}>
                Browse Service
              </Title>
            </Col>
          </Col>
        </Container>
        <Container>
          <Col className="Portfolio_image">
            <img
              src={forWeb}
              width="250px"
              height="200px"
              style={{ borderRadius: "10px" }}
            />

            <Col>
              {" "}
              <Title style={{ color: "white", marginTop: "15px" }} level={2}>
                Web Design
              </Title>
            </Col>
          </Col>
        </Container>
      </Row>
      <SeeMore />
    </div>
  );
}

export default Des;
