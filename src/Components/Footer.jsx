import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-footerColor text-white">
      {/* Main Container which holds grid elements */}
      <div
        className="py-8 mx-4 lg:mx-8  flex flex-col text-center gap-10 items-center md:flex-row md:justify-between"
      >
        {/* App Name */}
        <div className=" md:col-start-1 col-end-3 font-bold text-3xl md:text-4xl">
          Orange Delight
        </div>
        {/* Nav Elements */}
        <div className="footerNav">
          <h3 className="footerHeading">Features</h3>
          <p>Link Sharing</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>
        <div className="footerNav">
          <h3 className="footerHeading">Resources</h3>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>
        <div className="footerNav">
          <h3 className="footerHeading">Company</h3>
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Conatact</p>
        </div>
        {/* Social Icons */}
        <div className="col-start-7 col-end-8 justify-center flex items-center gap-4">
          <FaFacebook  className="icons"/>
          <FaTwitter className="icons" />
          <FaInstagram  className="icons"/>
          <FaYoutube  className="icons"/>
        </div>
      </div>
      <p className="text-center pb-3">
        © 2024 Orange Delight. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
