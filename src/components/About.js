import React from "react";
import Card from "react-bootstrap/Card";

function About({ data }) {
  return (
    <div>
      <Card style={{ backgroundColor: "green", color: "white" }}>
        <div className="about d-flex container align-items-center justify-content-center py-4">
          {data.map((elem, id) => {
            return (
              <div key={id}>
                <Card.Body style={{ width: "50rem" }}>
                  <Card.Title
                    style={{
                      padding: "10px",
                      width: "fit-content",
                      borderRadius: "50px",
                      backgroundColor: "#21669D",
                      textAlign: "center",
                    }}
                  >
                    {elem.banner4.title}
                  </Card.Title>
                  <Card.Text>{elem.banner4.description}</Card.Text>
                </Card.Body>
                <Card.Body className="about-img">
                  <Card.Text className="about-img-container">
                    <div className="single-line">
                      <img
                        src="https://i.ibb.co/vst2cwv/Group-7121.webp"
                        alt=""
                      />
                      <img
                        src="https://i.ibb.co/WDKWtBL/Group-7122.webp"
                        alt=""
                      />
                    </div>
                    <div className="single-line">
                      <img
                        src="https://i.ibb.co/gdBfDfv/Group-7123.webp"
                        alt=""
                      />
                      <img
                        src="https://i.ibb.co/L6bbzz8/Group-7124.webp"
                        alt=""
                      />
                    </div>
                  </Card.Text>
                </Card.Body>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

export default About;
