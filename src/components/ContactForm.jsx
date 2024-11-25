import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="bg-gray-100 py-0 px-2">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-600">Contact Us</h2>
        <p className="mt-4 text-gray-800">We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.</p>
        
        <form action='https://getform.io/f/bwnnqoxa' className="mt-10 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg" method='POST'>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="fullname"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              name="message"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-red-600 text-white font-semibold py-2 rounded hover:bg-red-700">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
