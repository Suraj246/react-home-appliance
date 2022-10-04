import React from "react";

function Footer() {
  return (
    <div className="d-flex flex-column align-items-center pt-5 px-2" style={{ backgroundColor: '#343434', color: '#FFFFFF' }}>
      <div className="locations">
        <div className="location">
          <h5 style={{ color: '#56FBFF' }}>TOP LOCATION</h5>
        </div>
        <div className="city">

          Noida • Delhi • Gurgaon • Ghaziabad • Faridabad • Agra • Ahmedabad • Amritsar • Aurangabad • Bangalore • Bhopal • Bhubaneswar • Chandigarh • Chennai • Coimbatore • Dehradun • Greater Noida • Guwahati • Gwalior • Hyderabad • Indore • Jabalpur • Jaipur • Jamshedpur • Kanpur • Kochi •
          Gwalior • Hyderabad • Indore • Jabalpur • Jaipur • Jamshedpur • Kanpur • Kochi • Kolkata • Kota • Lucknow • Ludhiana • Meerut • Mohali • Mumbai • Navi Mumbai • Mysore • Nagpur • Nashik • Patna • Panipat • Prayagraj • Pune • Raipur • Ranchi • Surat • Thiruvananthapuram • Vadodara • Varanasi • Vijayawada • Visakhapatnam

        </div>
      </div>
      <div className="contact-container">
        <div className="contact">
          <h5 style={{ color: '#56FBFF' }}>CONTACT US</h5>
        </div>

        <div>
          <div className="contact-info">
            <span>Phone : +91 7689756789</span>
            <span>Email : support@example.com</span>
          </div>
          <div className="contact-footer">
            <span>About Us</span>
            <span>Blog</span>
            <span>Near me</span>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
            <span>Contact Us</span>
          </div>
        </div>

      </div>
      <footer>
        <div>
          <span><i className='bx bxl-instagram-alt'></i></span>
          <span><i className='bx bxl-twitter' ></i></span>
          <span><i className='bx bxl-linkedin-square' ></i></span>
          <span><i className='bx bxl-facebook-square' ></i></span>
          <span><i className='bx bxl-youtube' ></i></span>
          <span><i className='bx bxl-pinterest' ></i></span>
        </div>
        <div>
          <span>@2021 OyeBusy Technologies Pvt Ltd</span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
