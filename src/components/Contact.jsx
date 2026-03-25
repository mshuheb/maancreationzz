import { FaWhatsapp, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-heading">Contact Us</h2>

      <div className="contact-icons">
        {/* WhatsApp */}
        <a
          href="https://wa.me/919187329274"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaWhatsapp />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/maancreationzz"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaInstagram />
        </a>

        {/* Phone */}
        <a href="tel:+919187329274" className="contact-icon">
          <FaPhone />
        </a>

        {/* Gmail */}
        <a href="mailto:maancreationzz@gmail.com" className="contact-icon">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}
