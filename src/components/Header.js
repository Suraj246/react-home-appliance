import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function Header() {
    return (
        <div className="">
            <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#095296" }}>
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbar-dark-example">
                        {/* style={{ border: "none", outline: "none" }} */}
                        <i className="bx bx-menu"></i>
                    </Navbar.Toggle>
                    <Navbar.Collapse
                        id="navbar-dark-example"
                        className="container"
                        style={{ marginRight: "0" }}
                    >
                        <Nav>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="APPLIANCES CARE"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="HOME CARE"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="GADGET CARE"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="HANDYMAN"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="BEAUTY CARE"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="FITNESS CARE"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="BUSINESS CARE"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="ALL SERVICES"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="BLOG"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <span
                        className="text-white text-center p-1"
                        style={{ border: "1px solid white", marginRight: "4px" }}
                    ><i className='bx bx-phone'></i>
                        Service Helpline <br />
                        456 654 4567{" "}
                    </span>
                    <span className="text-white text-center">
                        <i className="bx bxl-whatsapp bx-lg"></i>
                    </span>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
{
    /* <div className="d-flex gap-4 align-items-center mx-3">
  <span
    className="text-white text-center p-1"
    style={{ border: "1px solid white" }}
  >
    Service Helpline <br />
    456 654 4567{" "}
  </span>
  <span className="text-white text-center">
    <i className="bx bxl-whatsapp bx-lg"></i>
  </span>
  </div> */
}
