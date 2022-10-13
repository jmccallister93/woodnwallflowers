import "./Contact.scss";

const Contact = () => {
  return (
    <>
    <span className="contact-title">Contact</span>
    <div className="contact">
      <p className="content">
        For all bookings and inqueries please reach out to us via;
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/woodnwallflowers/?hl=en"
          class="fa fa-instagram social"
        >{" "}
         Instagram - <br />@woodnwallflowers
        </a>
        <br />
        <a
          href="https://ms-my.facebook.com/watch/woodnwallflowers/"
          target="_blank"
          rel="noopener noreferrer"
          class="fa fa-facebook social"
        >
        Facebook - <br />@woodnwallflowers 
        </a>
        <br />
      
      </p>
    </div>
    </>
  );
};

export default Contact;
