import { FooterStyled } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterStyled>
      <section className="main-footer">
        <div className="map">{/* Add google map api */}</div>
        <div className="contact">
          <h3>Contact Us</h3>
          <p>
            <span>Kin on the Go •</span> Active Rehabilitation
          </p>
          <p>
            <span>Servicing:</span> Vancouver, Burnaby, Surrey & New
            Westminister
          </p>
          <p>
            <span>Phone:</span> (604) 559 - 1660
          </p>
          <p>
            <span>Email:</span> contactus@kinonthego.ca
          </p>
        </div>
        <div className="hours">
          <h3>Hours</h3>
          <ul>
            <li>
              <span>Monday:</span>
              <p> 9:00 am - 7:00 pm</p>
            </li>
            <li>
              <span>Tuesday:</span>
              <p> 9:00 am - 7:00 pm</p>
            </li>
            <li>
              <span>Wednesday:</span>
              <p> 9:00 am - 7:00 pm</p>
            </li>
            <li>
              <span>Thursday:</span>
              <p> 9:00 am - 7:00 pm</p>
            </li>
            <li>
              <span>Friday:</span>
              <p> 9:00 am - 7:00 pm</p>
            </li>
            <li>
              <span>Saturday:</span> 10:00 am - 3:00 pm
            </li>
            <li>
              <span>Sunday:</span> Closed
            </li>
          </ul>
        </div>
        <div className="socials">{/* Add react icons: facebook, insta */}</div>
      </section>
      <section className="sub-footer">
        Sub-Footer: terms, privacy, logo, copyright
      </section>
    </FooterStyled>
  );
};

export default Footer;
