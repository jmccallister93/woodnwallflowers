import "./Socials.scss"

const Socials = () => {
  return (
    <ul class="social__ul">
      <li class="social__li">
        <a
          href="https://www.instagram.com/woodnwallflowers/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          class="fa fa-instagram"
        > </a>
      </li>
      <li class="social__li">
        <a
          href="https://ms-my.facebook.com/watch/woodnwallflowers/"
          target="_blank"
          rel="noopener noreferrer"
          class="fa fa-facebook"
        > </a>
      </li>
      {/* <li class="social__li">
        <a
          href="mailto:woodnwallflowers.com"
          subject="New Inquiry"
          target="_blank"
          class="fa fa-google"
        ></a>
      </li> */}
    </ul>
  );
};

export default Socials;
