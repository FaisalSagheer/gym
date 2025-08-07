"use client"

import React from 'react';
import { values } from '../constant';
import Link from 'next/link';

const About = () => {
 

  return (
    <section id="about" className="pt-40 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              About PlatinumFitness
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Fitness Journey
              <span className="text-orange-500 block">Starts Here</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              For over a decade, PlatinumFitness has been the premier destination for fitness enthusiasts 
              of all levels. We believe that everyone deserves access to world-class fitness 
              facilities, expert guidance, and a supportive community that celebrates every victory.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
              <Link href="/about">
              Learn More About Us
              </Link>
            </button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
                alt="Fitness training"
                className="rounded-2xl shadow-lg"
              />
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Gym equipment"
                  className="rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Group fitness"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">50K+</div>
                  <div className="text-sm text-gray-600">Transformations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;