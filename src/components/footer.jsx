const Footer = () => {
  return (
    <>
      <div className="footer py-5 flex justify-between px-60">
        <div>
          <p>
            @2024 Arvind Jadhav <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="space-x-5">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/licensing" className="hover:underline">
            Licensing
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};
export default Footer;
