'use client'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Link from 'next/link';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // EmailJS logic here (replace placeholders with your actual IDs)
        try {
            const result = await emailjs.sendForm('service_phnqrjh', 'template_qakio7u', event.currentTarget, 'y0GMqYQbROXjO_W7w');
            console.log(result.text);
            setFeedback('Your message has been sent!');
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Failed to send message:', error);
            setFeedback('Failed to send your message. Please try again later.');
        }
    };

    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1">Contact Us</h1>
                    </div>

                    {/* Form */}
                    <div className="max-w-sm mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="name">Name</label>
                                    <input id="name" type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} className="form-input w-full text-gray-300" placeholder="Your Name" required />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email</label>
                                    <input id="email" type="email" value={email} name='email' onChange={(e) => setEmail(e.target.value)} className="form-input w-full text-gray-300" placeholder="you@yourcompany.com" required />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="message">Message</label>
                                    <textarea id="message" value={message} name='message' onChange={(e) => setMessage(e.target.value)} className="form-input w-full text-gray-300" placeholder="Your message" required />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mt-6">
                                <div className="w-full px-3">
                                    <button type="submit" className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Send Message</button>
                                </div>
                            </div>
                        </form>
                        {feedback && <div className="text-center text-gray-400 mt-6">{feedback}</div>}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactForm;
