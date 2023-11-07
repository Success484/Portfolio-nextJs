'use client'
import React, { useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

export default function EmailSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://success.trenalyze.com/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.status) {
        // Message sent successfully
        alert('Message sent successfully');
      } else {
        // Show a popup with the API message response
        alert(result.message);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle error appropriately
    }
  };

  return (
    <section id='contact-section' className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2"></div>
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let us Connect</h5>
        <p className="text-[#adb7be] mb-4 max-w-md">
          I'm currently looking for new opportunities, and my inbox is always open.
          Whether you have a question or just want to say hi, I will try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com" target="_blank">
            <AiFillGithub size={40} color="white" />
          </Link>

          <Link href="github.com" target="_blank">
            <AiFillLinkedin size={40} color="white" />
          </Link>
        </div>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col"
        >
          <div className="mb-6">
            <label htmlFor="name" className="text-white block text-sm font-medium mb-2">
              Your name
            </label>
            <input
              value={formData.name}
              onChange={handleChange}
              name="name"
              type="text"
              id="name"
              required
              className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-600 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="text-white block text-sm font-medium mb-2">
              Email
            </label>
            <input
              value={formData.email}
              onChange={handleChange}
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-600 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={handleChange}
              name="message"
              id="message"
              className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-600 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
