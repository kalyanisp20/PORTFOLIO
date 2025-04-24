import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        message: '',
        toEmail: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (result.success) {
                alert('Message sent successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    message: '',
                    toEmail: '',
                });
            } else {
                alert('Failed to send message.');
            }
        } catch (err) {
            console.error('Error:', err);
            alert('Error sending message');
        }
    };

    return (
        <div id='contact' className="flex items-center justify-center min-h-screen bg-gray-900">
            <form 
                onSubmit={handleSubmit} 
                className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl w-full ring ring-pink-500"
            >
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-400">First Name</label>
                        <input 
                            type="text" 
                            name="firstName" 
                            value={formData.firstName} 
                            onChange={handleChange} 
                            className="w-full px-3 py-2 mt-1 text-white bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" 
                            placeholder="Bonnie"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400">Last Name</label>
                        <input 
                            type="text" 
                            name="lastName" 
                            value={formData.lastName} 
                            onChange={handleChange} 
                            className="w-full px-3 py-2 mt-1 text-white bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" 
                            placeholder="Green"
                            required
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <label className="block text-gray-400">Email</label>
                    <input 
                        type="email" 
                        name="toEmail" 
                        value={formData.toEmail} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 mt-1 text-white bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" 
                        placeholder="friend@example.com"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-gray-400">Phone Number</label>
                    <input 
                        type="tel" 
                        name="phoneNumber" 
                        value={formData.phoneNumber} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 mt-1 text-white bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" 
                        placeholder="+12 345 6789"
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-gray-400">Your Message</label>
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 mt-1 text-white bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" 
                        placeholder="Leave a comment..."
                        rows="4"
                        required
                    ></textarea>
                </div>
                <button 
                    type="submit" 
                    className="cursor-pointer w-50 px-4 py-2 mt-6 text-white bg-gradient-to-br from-yellow-400 to-purple-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-purple-500 hover:scale-110 ease-in duration-200"
                >
                    Send message
                </button>
            </form>
        </div>
    );
};

export default Contact;
