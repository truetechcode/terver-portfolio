import React from 'react'

function ContactForm(props) {
const {name, email, phone, message, onChangeEvent, onSubmitEvent} = props
  return (
    <form id="contactForm" name="sentMessage" onSubmit={onSubmitEvent} noValidate="noValidate">
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <input className="form-control" id="name" type="text" value={name} onChange={onChangeEvent} placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
          <p className="help-block text-danger"></p>
        </div>
        <div className="form-group">
          <input className="form-control" id="email" type="email" value={email} onChange={onChangeEvent} placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
          <p className="help-block text-danger"></p>
        </div>
        <div className="form-group">
          <input className="form-control" id="phone" type="tel" value={phone} onChange={onChangeEvent} placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
          <p className="help-block text-danger"></p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <textarea className="form-control" id="message" value={message} onChange={onChangeEvent} placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
          <p className="help-block text-danger"></p>
        </div>
      </div>
      <div className="clearfix"></div>
      <div className="col-lg-12 text-center">
        <div id="success"></div>
        <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
      </div>
    </div>
  </form>
  )
}

export default ContactForm
