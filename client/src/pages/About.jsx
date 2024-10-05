import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto text-center">
      {/* About Us Section */}
      <h1 className="text-4xl font-extrabold mb-6 text-navy-900">
        About <span className="text-gold-600">VastuVilla</span>
      </h1>
      <p className="mb-6 text-slate-700 text-lg leading-7">
        At <span className="font-semibold text-gold-600">VastuVilla</span>, we specialize in connecting buyers and sellers directly, ensuring a seamless and transparent real estate experience. Our platform empowers you to navigate the market with confidence, free from traditional agent fees.
      </p>
      <p className="mb-6 text-slate-700 text-lg leading-7">
        Our mission is to simplify the buying and selling process by providing the tools and resources you need. With our comprehensive listings and user-friendly interface, we ensure that each transaction is straightforward and rewarding.
      </p>

      {/* Contact Section */}
      <h2 className="text-3xl font-bold mt-12 mb-4 text-navy-900">Get in Touch</h2>
      <p className="text-slate-600 mb-8 text-lg leading-7">
        We're here to assist you with any questions or inquiries. Feel free to contact us via email, phone, or follow us on social media for the latest updates!
      </p>

      {/* Social Media Links */}
      <div className="flex justify-center gap-8 mb-12">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-3xl text-blue-700 hover:text-blue-800 transition" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-3xl text-pink-600 hover:text-pink-700 transition" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-3xl text-sky-500 hover:text-sky-600 transition" />
        </a>
      </div>

      {/* Contact Info */}
      <div className="grid gap-8 sm:grid-cols-2 max-w-2xl mx-auto">
        <div className="flex items-center justify-center bg-slate-100 p-6 rounded-lg shadow-md">
          <FaEnvelope className="text-2xl text-navy-900 mr-4" />
          <span className="text-slate-700 font-semibold">info@vastuvilla.com</span>
        </div>
        <div className="flex items-center justify-center bg-slate-100 p-6 rounded-lg shadow-md">
          <FaPhone className="text-2xl text-navy-900 mr-4" />
          <span className="text-slate-700 font-semibold">+91 98765 43210</span>
        </div>
      </div>
    </div>
  );
}
