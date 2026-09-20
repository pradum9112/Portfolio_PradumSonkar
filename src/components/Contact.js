import React, { useRef, useState } from "react";
import contactImg from "../assets/img/contact-img.svg";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ message: "", success: false });

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ message: "", success: false });

    // Ensure your EmailJS Service ID, Template ID, and Public Key are correct
    const SERVICE_ID = "service_6pu0s02";
    const TEMPLATE_ID = "template_qpajp64";
    const PUBLIC_KEY = "qG5YGmPoBUyWdLsLg";

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      
      console.log("Email sent successfully:", result.text);
      setStatus({ message: "Message sent successfully! I will get back to you soon.", success: true });
      formRef.current.reset();
    } catch (error) {
      console.error("Email send error detail:", error);
      setStatus({ 
        message: error?.text || "Something went wrong. Please verify EmailJS keys or try again.", 
        success: false 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="connect" style={styles.section}>
      {/* Dynamic Modern Dark Styling & Focus Glow Effects */}
      <style>{`
        .contact_header {
          font-size: 2.8rem;
          font-weight: 800;
          letter-spacing: 1px;
          background: linear-gradient(90deg, #ff007f, #00dfd8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 25px;
        }

        .contact_input, .contact_textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.05) !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          border-radius: 14px;
          color: #ffffff !important;
          padding: 14px 18px;
          font-size: 0.95rem;
          margin-bottom: 16px;
          outline: none;
          transition: all 0.3s ease;
        }

        .contact_input::placeholder, .contact_textarea::placeholder {
          color: #a1a1aa;
        }

        .contact_input:focus, .contact_textarea:focus {
          border-color: #00dfd8 !important;
          box-shadow: 0 0 12px rgba(0, 223, 216, 0.3);
          background: rgba(255, 255, 255, 0.08) !important;
        }

        .contact_submit_btn {
          background: linear-gradient(90deg, #ff007f, #7928ca);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 12px 36px;
          font-weight: 600;
          font-size: 1rem;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 0, 127, 0.3);
          margin-top: 10px;
        }

        .contact_submit_btn:hover:not(:disabled) {
          background: linear-gradient(90deg, #7928ca, #00dfd8);
          box-shadow: 0 6px 20px rgba(0, 223, 216, 0.4);
          transform: translateY(-2px);
        }

        .contact_submit_btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .contact_img {
          width: 100%;
          max-width: 480px;
          height: auto;
          filter: drop-shadow(0 0 20px rgba(255, 0, 127, 0.2));
          animation: floatImg 4s ease-in-out infinite;
        }

        @keyframes floatImg {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>

      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center mb-5 mb-md-0">
            <img src={contactImg} alt="Contact Us" className="contact_img" />
          </Col>

          <Col md={6}>
            <h2 className="contact_header">Get In Touch</h2>
            <form onSubmit={sendEmail} ref={formRef}>
              <Row>
                <Col sm={6} className="px-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="from_name"
                    className="contact_input"
                    required
                  />
                </Col>
                <Col sm={6} className="px-2">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="from_email"
                    className="contact_input"
                    required
                  />
                </Col>
                <Col sm={12} className="px-2">
                  <textarea
                    rows="6"
                    placeholder="Message"
                    name="message"
                    className="contact_textarea"
                    required
                  ></textarea>

                  <button type="submit" disabled={loading} className="contact_submit_btn">
                    <span>{loading ? "Sending..." : "Send Message"}</span>
                  </button>

                  {status.message && (
                    <p
                      style={{
                        marginTop: "15px",
                        color: status.success ? "#25d366" : "#ea4335",
                        fontWeight: "500",
                      }}
                    >
                      {status.message}
                    </p>
                  )}
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 0",
    backgroundColor: "#000000",
    position: "relative",
  },
};

export default Contact;