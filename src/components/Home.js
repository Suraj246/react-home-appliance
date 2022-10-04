import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

function Home({ data }) {
  return (
    <div>
      {data.map((elem, id) => {
        return (
          <div key={id}>
            <Card className="text-white" style={{ border: "none" }}>
              <Card.Img
                src={elem.heroSection.webBanner}
                style={{ height: "50vh", objectFit: "cover" }}
                alt="Card image"
              />
              <Card.ImgOverlay className="card-info">
                <div className="info">
                  <Card.Title>{elem.heroSection.title}</Card.Title>
                  <Card.Text>
                    <strong className="heading">
                      {elem.heroSection.heading}
                    </strong>
                  </Card.Text>
                  <Card.Text> {elem.heroSection.description}</Card.Text>
                  <div
                    className="bg-light p-3"
                    style={{ width: "20rem", bold: "bold" }}
                  >
                    <Card.Text className="text-dark">
                      <strong> Where do you need a service?</strong>
                    </Card.Text>
                    <Form.Select aria-label="Default select example">
                      <option>Select your city </option>
                      {/* <option value="1" className='text-dark'>{elem.heroSection.form.dropdownItem}</option> */}
                      <option value="1" className="text-dark">
                        Delhi/ncr
                      </option>
                    </Form.Select>
                  </div>
                </div>
              </Card.ImgOverlay>
            </Card>
            <div className="services">
              <div className="service-img">
                <Card.Img src={elem.banner5.img} className="service-img1" />
              </div>
              <div className="card-body-service">
                <Card.Title>Why People Choose Us</Card.Title>
                <li>
                  <strong> Affordable Rates</strong>
                </li>
                <li>
                  <strong> On Time Service</strong>
                </li>
                <li>
                  <strong> Verified Professions</strong>
                </li>
                <li>
                  <strong> Excellent Service</strong>
                </li>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
