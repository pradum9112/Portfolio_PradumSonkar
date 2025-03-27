import React, { useRef, useState } from "react";
import contactImg from "../assets/img/contact-img.svg";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        "service_b965ik2",
        "template_qpajp64",
        formRef.current, // Correct way to send form data
        "qG5YGmPoBUyWdLsLg"
      );
      console.log("Email sent successfully:", result.text);
      formRef.current.reset();
    } catch (error) {
      console.error("Email send error:", error.text);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={sendEmail} ref={formRef}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="from_name" // Ensure this matches your EmailJS template
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email_id" // Ensure this matches your EmailJS template
                    required
                  />
                </Col>
                <Col>
                  <textarea
                    rows="6"
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                  <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send"}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
