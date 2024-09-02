import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="container " id="contact">
        <div className="row w-100 p-2 mt-5 justify-content-center">
          <div className="col-md-12">
            <h3 className="text-white text-center">Contact Me</h3>
          </div>
          <div className="col-md-7">
            <form
              action="https://formspree.io/f/xwkzkven"
              method="POST"
              class="emailform"
              onsubmit="this.submit()"
            >
              <label> Name : </label>
              <input
                type="text"
                className="from-contorl"
                name="name"
                required
              />
              <label> Email : </label>
              <input
                type="email"
                className="from-contorl"
                name="email"
                required
              />
              <label> Mobile : </label>
              <input
                type="text"
                className="from-contorl"
                name="mobile"
                required
              />
              <textarea
                placeholder="Type Message Here"
                className="mt-3"
                name="msg"
                required
              ></textarea>
              <button className="btn btn-success">Send Message</button>
            </form>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.14200242542!2d73.72287515247785!3d18.52456485551234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2z4KSq4KWB4KSj4KWHLCDgpK7gpLngpL7gpLDgpL7gpLfgpY3gpJ_gpY3gpLA!5e0!3m2!1smr!2sin!4v1669825201815!5m2!1smr!2sin"
          className="w-100 mt-5"
          style={{ height: "400px" }}
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
