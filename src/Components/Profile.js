import React, { useState } from "react";
import image from "../images/Group 1.png";
import styled from "styled-components";
import Des from "../Des";
import { ReactComponent as Arrow } from "./Arrow.svg";
import { ReactComponent as Telegram } from "./Telegram.svg";
import { Button, Col, Row, Space, Typography } from "antd";
const { Title } = Typography;
const Container = styled.div``;
const heirMeBtn = {
  border: "none",
  outline: "none",
  color: "#FFFFFF",
  background: "#7996FC",
  boxShadow: "0px 0px 15px rgba(121, 150, 252, 0.15)",
  borderRadius: "6px",
  marginRight: "46px",
  fontSize: "20px",
  width: "174px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "5px",
  paddingBottom: "5px",
  marginBottom: "20px",
};
function Profile() {
  const [size, setSize] = useState("large");
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        // marginLeft: "100px",
        // marginRight: "100px",
        alignItems: "center",
        background: "red",
      }}
      className="mobile_screen"
    >
      <Row
        style={{ display: "flex", justifyContent: "center" }}
        className="bg_color"
      >
        <Space className="block">
          <div>
            <Col flex={3} className="responsive_prfile_iamge">
              <img src={image} alt="profile image" min-width="100px" />
            </Col>
          </div>
          <div>
            <Col flex={3}>
              <Row className="left">
                <Title level={1} className="textStyle">
                  Hello I'm a{" "}
                  <span>
                    UX/UI Designer <span>Illia Frunza</span>
                  </span>{" "}
                </Title>
              </Row>
              <div className="mobile_btn margin left">
                <Row>
                  <Col>
                    {" "}
                    <Button
                      size={size}
                      style={heirMeBtn}
                      className="responsive_hire_me_btn"
                    >
                      Hire me
                      <Arrow />
                    </Button>
                  </Col>
                  <Col>
                    {" "}
                    <Button
                      className="responsive_profile_btn"
                      size={size}
                      style={{
                        border: "none",
                        outline: "none",
                        color: "#FFFFFF",
                        background: "#414141",
                        boxShadow: "0px 0px 15px rgba(121, 150, 252, 0.15)",
                        borderRadius: "6px",
                        marginRight: "46px",
                        fontSize: "20px",
                        width: "174px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                        marginBottom: "20px",
                      }}
                    >
                      Portfolio
                      <Arrow />
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Button
                    className="responsive_main_btn"
                    size={size}
                    style={{
                      border: "none",
                      outline: "none",
                      color: "#FFFFFF",
                      background: "#414141",
                      boxShadow: "0px 0px 15px rgba(121, 150, 252, 0.15)",
                      borderRadius: "6px",
                      fontSize: "20px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      width: "397px",
                    }}
                  >
                    <Telegram className="responsive_icons" />
                    Get in touch by Instagram
                    <Arrow className="responsive_icons" />
                  </Button>
                </Row>
              </div>
            </Col>
          </div>
        </Space>
      </Row>
      <Des />
      {/* <img className="logo" src={image2} />
      <img className="figma" src={image3} /> */}
    </Container>
  );
}

export default Profile;
