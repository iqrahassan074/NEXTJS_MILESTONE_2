
import React from 'react';
import { PiMailboxBold } from "react-icons/pi";
import { BsTelephoneForward } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
          <h2 className="text-6xl md:text-7xl font-bold text-black-800" data-aos="flip-left">CONTACT</h2>
          <p className="text-black-600 text-2xl md:text-3xl pt-4 leading-relaxed" data-aos="flip-left">
            I&apos;d love to hear from you! Whether you have questions, feedback, or want to discuss potential collaborations, feel free to reach out. Your thoughts and inquiries are always welcome!
          </p>

          <div className='flex gap-3 items-center' data-aos="flip-left">
            <PiMailboxBold size={30} />
            <span className='text-lg font-bold' data-aos="flip-left">iqra007@gmail.com</span>
          </div>
          <div className='flex gap-3 items-center' data-aos="flip-left">
            <BsTelephoneForward size={30} />
            <span className='text-lg font-bold' data-aos="flip-left">(03) 9998888833</span>
          </div>
        </div>

        <div className='flex flex-col gap-5'>
          <div className='flex flex-col'>
            <div className='flex flex-col w-full'>
              <label htmlFor="name" data-aos="flip-left" className='text-xl font-semibold text-black-700'>Name</label>
              <input type="text" className='neon-input' id='name' />
            </div>
            <div className='flex flex-col w-full mt-4'>
              <label htmlFor="email" data-aos="flip-left" className='text-xl font-semibold text-black-700'>Email</label>
              <input type="email" className='neon-input' id='email' />
            </div>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="msg" data-aos="flip-left" className='text-xl font-semibold text-black-700'>Message</label>
            <textarea className='neon-textarea' id='msg'></textarea>
          </div>

          <button className='bg-gradient-to-r from-blue-400 via-green-400 to-lime-400 text-white font-semibold py-2 px-6 rounded-full border-4 border-white shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl'>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
