import React from "react";

const Contact = () => {
  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contact
          </h2>
          <br />
        </div>
        <div className="flex flex-col items-center">
          <form className="space-y-8 w-full max-w-[780px]">
            <div className="flex gap-8">
              <input className="input" type="text" placeholder="Your name" />
              <input className="input" type="email" placeholder="Your email" />
            </div>
            <input className="input" type="text" placeholder="Subject" />
            <textarea
              className="textarea"
              placeholder="Your message"
            ></textarea>
            <button className="btn btn-lg bg-tertiary hover:bg-secondary">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
