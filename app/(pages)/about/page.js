"use client"

import React from 'react';
import { Target, Heart, Award, Zap, Users, Trophy, Star, Clock } from 'lucide-react';
import Header from '@/app/components/HeaderHome';
import Footer from '@/app/components/Footer';
import HeaderCommon from '@/app/components/HeaderCommon';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Goal-Focused Training',
      description: 'We help you set and achieve realistic, measurable fitness goals tailored to your lifestyle and aspirations.'
    },
    {
      icon: Heart,
      title: 'Holistic Wellness',
      description: 'Our approach combines physical fitness with mental well-being for complete life transformation.'
    },
    {
      icon: Award,
      title: 'Expert Guidance',
      description: 'Certified trainers with years of experience provide personalized coaching every step of the way.'
    },
    {
      icon: Zap,
      title: 'High Energy Environment',
      description: 'Dynamic workouts and motivating atmosphere that keeps you engaged and excited to train.'
    }
  ];

  const milestones = [
    { year: '2014', title: 'Founded', description: 'PlatinumFitness opened its first location with a vision to transform lives through fitness.' },
    { year: '2017', title: 'Expansion', description: 'Opened three additional locations across the city to serve more communities.' },
    { year: '2020', title: 'Digital Innovation', description: 'Launched virtual training programs and mobile app during the pandemic.' },
    { year: '2023', title: 'Award Recognition', description: 'Named "Best Fitness Center" by City Health & Wellness Magazine.' },
    { year: '2025', title: 'Future Vision', description: 'Continuing to innovate with AI-powered fitness coaching and wellness programs.' }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Former professional athlete turned fitness entrepreneur with 15+ years in the industry.'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Head of Training',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Master trainer with expertise in strength conditioning and rehabilitation programs.'
    },
    {
      name: 'David Chen',
      role: 'Nutrition Director',
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Registered dietitian specializing in sports nutrition and metabolic health optimization.'
    }
  ];

  return (
    <>
    <div className="pt-18">
    <HeaderCommon/>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              About PlatinumFitness
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Transforming lives through fitness since 2014. We're more than a gym – 
              we're your partners in achieving extraordinary results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To empower individuals to achieve their fitness goals through innovative training methods, 
                expert guidance, and a supportive community that celebrates every milestone.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe fitness is not just about physical transformation – it's about building 
                confidence, discipline, and a lifestyle that enhances every aspect of your life.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Fitness mission"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-sm">Lives Transformed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape the experience we create for our members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From a single location to a fitness community that spans the city, 
              here's how we've grown together.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <div className="text-2xl font-bold text-orange-500 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the passionate leaders who drive our mission and ensure every member 
              receives exceptional service and results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-orange-500 font-semibold mb-4">{member.role}</div>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Users className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-orange-100">Active Members</div>
            </div>
            <div>
              <Trophy className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-orange-100">Expert Trainers</div>
            </div>
            <div>
              <Star className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">4.9</div>
              <div className="text-orange-100">Average Rating</div>
            </div>
            <div>
              <Clock className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-orange-100">Gym Access</div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
    </>

  );
};

export default About;