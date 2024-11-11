"use client";
import Image from 'next/image';
import { useState, FormEvent } from 'react';
import { Card } from '@/components/card';
import { SectionHeader } from '@/components/SectionHeader';

export const ContactForm = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [mail, setMail] = useState('');

  const sendMail = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        subject,
        message,
        mail,
      })
    });

    const responseData = await response.json();
    console.log("Response status:", response.status);
    console.log("Response data:", responseData);

    if (response.status === 200) {
      alert("Email sent successfully!");
    } else {
      alert("Failed to send email. Please check the console for details.");
    }
  }

  return ( 
    
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 lg:p-24">
      <SectionHeader eyebrow="Just A Message Away" title="We&rsquo;d Love to Hear from You"description="Have a question, need assistance, or want to discuss our services? Fill out the form below, and our team will get back to you as soon as possible."/>
      <Card className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl p-6 sm:p-10 lg:p-16 shadow-lg hover:shadow-2xl hover:bg-slate-500/30 hover:shadow-yellow-400/50 rounded-xl transition-shadow duration-300 bg-white/10 mt-8">
        <form onSubmit={sendMail} className="space-y-6">
          <div className="flex flex-col items-start gap-4">
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white">Contact Us</h1>
          </div>
          <hr className="border-t-2 border-gray-200 mt-4" />
          
          <div className="relative flex flex-col space-y-2">
            <label htmlFor="title" className="text-md sm:text-lg font-medium text-white">
              Subject
            </label>
            <input
              name="title"
              type="text"
              id="title"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter the subject"
              className="w-full p-3 sm:p-4 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative flex flex-col space-y-2">
            <label htmlFor="title" className="text-md sm:text-lg font-medium text-white">
              Email
            </label>
            <input
              name="email"
              type="text"
              id="email"
              required
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 sm:p-4 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="relative flex flex-col space-y-2">
            <label htmlFor="description" className="text-md sm:text-lg font-medium text-white">
              Message
            </label>
            <textarea
              name="description"
              id="description"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              className="w-full p-3 sm:p-4 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 sm:py-4 rounded-lg bg-blue-600 text-white text-md sm:text-lg font-medium hover:bg-blue-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </Card>
    
    </div>
  );
};
