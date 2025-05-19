import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show the modal popup
    setShowModal(true);

    // Clear form
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container my-5" id="contact">
      <h2 className="text-center fw-bold text-info-emphasis">Let’s Connect!</h2>
      <p className="text-center text-muted fs-5 mb-5">
        We'd love to hear from you. Fill out the form below to get in touch.
      </p>

      {/* Form Container */}
      <div
        className="mx-auto col-12 col-md-8 col-lg-6"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend className="mb-4">Send a Message</legend>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Email Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Enter subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Write your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-success">
              Send
            </button>
          </fieldset>
        </form>
      </div>

      {/* Popup Modal */}
      {showModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-success">Message Sent!</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  ✅ Your message has been successfully sent. We'll get back to
                  you soon!
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
