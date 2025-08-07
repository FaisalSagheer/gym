"use client"

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare, Calendar, Users, Award } from 'lucide-react';
import Header from '@/app/components/HeaderHome';
import Footer from '@/app/components/Footer';
import HeaderCommon from '@/app/components/HeaderCommon';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Fitness Street', 'New York, NY 10001', 'Near Central Park'],
      color: 'bg-blue-500',
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', 'Mon-Fri: 6AM-10PM', 'Sat-Sun: 7AM-9PM'],
      color: 'bg-green-500',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@platinumfitness.com', 'support@platinumfitness.com', 'Response within 24hrs'],
      color: 'bg-purple-500',
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Gym Hours',
      details: ['Mon-Fri: 5AM-11PM', 'Sat-Sun: 6AM-9PM', '24/7 for Elite members'],
      color: 'bg-orange-500',
      action: 'View Schedule'
    }
  ];

  const locations = [
    {
      name: 'Downtown Location',
      address: '123 Fitness Street, NY 10001',
      phone: '+1 (555) 123-4567',
      hours: 'Mon-Fri: 5AM-11PM, Weekends: 6AM-9PM',
      features: ['Main gym floor', 'Group fitness studios', 'Pool', 'Sauna'],
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      name: 'Uptown Branch',
      address: '456 Health Avenue, NY 10002',
      phone: '+1 (555) 123-4568',
      hours: 'Mon-Fri: 6AM-10PM, Weekends: 7AM-8PM',
      features: ['Strength training', 'Cardio equipment', 'Personal training', 'Nutrition center'],
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      name: 'Westside Facility',
      address: '789 Wellness Blvd, NY 10003',
      phone: '+1 (555) 123-4569',
      hours: 'Mon-Sun: 24/7 Access',
      features: ['24/7 access', 'CrossFit box', 'Rock climbing wall', 'Recovery center'],
      image: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  const contactReasons = [
    'General Information',
    'Membership Inquiry',
    'Personal Training',
    'Group Classes',
    'Facility Tour',
    'Corporate Wellness',
    'Billing Support',
    'Feedback/Complaint',
    'Other'
  ];

  const stats = [
    { icon: Users, number: '5K+', label: 'Happy Members' },
    { icon: Award, number: '4.9', label: 'Average Rating' },
    { icon: MessageSquare, number: '24hr', label: 'Response Time' },
    { icon: Calendar, number: '7 Days', label: 'Free Trial' }
  ];

  return (
    <div className="pt-18">
        <HeaderCommon/>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Ready to start your fitness journey? We're here to help you every step of the way. 
              Reach out and let's make it happen together.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                <stat.icon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`${info.color} p-3 rounded-lg`}>
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 text-sm mb-1">
                            {detail}
                          </p>
                        ))}
                        <button className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors duration-300 mt-2">
                          {info.action} →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h4>
                    <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
                        >
                          <option value="">Select a subject</option>
                          {contactReasons.map((reason, index) => (
                            <option key={index} value={reason}>{reason}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
                        placeholder="Tell us about your fitness goals, questions, or how we can help you..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Locations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find the platinumfitness location nearest to you. Each facility offers unique amenities 
              and the same commitment to your fitness success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{location.name}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 text-gray-400 mt-1 mr-2" />
                      <span className="text-gray-600 text-sm">{location.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-600 text-sm">{location.phone}</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-4 w-4 text-gray-400 mt-1 mr-2" />
                      <span className="text-gray-600 text-sm">{location.hours}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {location.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 bg-orange-500 text-white py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300">
                      Visit
                    </button>
                    <button className="flex-1 border-2 border-orange-500 text-orange-500 py-2 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
                      Directions
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Visit Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a free facility tour and see why platinumfitness is the perfect place 
            to achieve your fitness goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Schedule Free Tour
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-teal-600 transition-all duration-300">
              Start 7-Day Trial
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Contact;