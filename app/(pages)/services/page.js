"use client"

import React from 'react';
import { Dumbbell, Users, Heart, Clock, Zap, Target, Calendar, Award, CheckCircle } from 'lucide-react';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/HeaderHome';
import HeaderCommon from '@/app/components/HeaderCommon';

const Services = () => {
  const mainServices = [
    {
      icon: Dumbbell,
      title: 'Strength Training',
      description: 'Build muscle and increase strength with our comprehensive weight training programs.',
      features: ['Free weights & machines', 'Powerlifting programs', 'Functional strength', 'Progressive overload'],
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: 'Included in membership'
    },
    {
      icon: Heart,
      title: 'Cardio Workouts',
      description: 'Improve cardiovascular health with high-energy cardio sessions and HIIT training.',
      features: ['HIIT classes', 'Cycling programs', 'Running coaching', 'Dance cardio'],
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: 'Included in membership'
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'Join our energetic group fitness classes led by certified instructors.',
      features: ['Yoga & Pilates', 'Zumba & Dance', 'CrossFit style', 'Boot camp'],
      image: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: 'Premium membership'
    },
    {
      icon: Target,
      title: 'Personal Training',
      description: 'One-on-one coaching tailored to your specific goals and fitness level.',
      features: ['Custom programs', 'Nutrition guidance', 'Progress tracking', 'Goal setting'],
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: 'Starting at $75/session'
    }
  ];

  const additionalServices = [
    {
      icon: Award,
      title: 'Nutrition Coaching',
      description: 'Personalized meal plans and nutrition guidance from certified dietitians.',
      price: '$150/month'
    },
    {
      icon: Calendar,
      title: 'Fitness Assessments',
      description: 'Comprehensive body composition analysis and fitness level evaluation.',
      price: '$50/assessment'
    },
    {
      icon: Zap,
      title: 'Recovery Services',
      description: 'Massage therapy, sauna, and recovery protocols to optimize your results.',
      price: '$80/session'
    },
    {
      icon: Clock,
      title: '24/7 Access',
      description: 'Round-the-clock access to our facilities with secure mobile app entry.',
      price: 'Elite membership'
    }
  ];

  const classSchedule = [
    { time: '6:00 AM', class: 'Morning HIIT', instructor: 'Sarah J.', duration: '45 min' },
    { time: '7:00 AM', class: 'Strength Training', instructor: 'Mike R.', duration: '60 min' },
    { time: '9:00 AM', class: 'Yoga Flow', instructor: 'Emily C.', duration: '60 min' },
    { time: '12:00 PM', class: 'Lunch Break Cardio', instructor: 'David T.', duration: '30 min' },
    { time: '5:30 PM', class: 'CrossFit Style', instructor: 'Sarah J.', duration: '45 min' },
    { time: '6:30 PM', class: 'Zumba Dance', instructor: 'Maria L.', duration: '45 min' },
    { time: '7:30 PM', class: 'Evening Yoga', instructor: 'Emily C.', duration: '60 min' }
  ];

  return (
    <div className="pt-18">
      <HeaderCommon/>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive fitness solutions designed to meet you wherever you are 
              in your wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Core Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our flagship services that form the foundation of your fitness transformation.
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-orange-500">{service.price}</span>
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Additional Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enhance your fitness journey with our specialized services and premium amenities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="text-2xl font-bold text-blue-500 mb-4">{service.price}</div>
                <button className="w-full border-2 border-blue-500 text-blue-500 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Today's Class Schedule</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our dynamic group classes throughout the day. All skill levels welcome!
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-orange-500 text-white p-6">
              <h3 className="text-2xl font-bold text-center">Monday Schedule</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {classSchedule.map((item, index) => (
                <div
                  key={index}
                  className="p-6 hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="text-2xl font-bold text-orange-500">{item.time}</div>
                      <div>
                        <div className="text-lg font-semibold text-gray-900">{item.class}</div>
                        <div className="text-gray-600">with {item.instructor}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {item.duration}
                      </span>
                      <button className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300">
                        Reserve
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
              View Full Schedule
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose the services that align with your goals and start your transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Book Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-500 transition-all duration-300">
              View Membership Plans
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Services;
