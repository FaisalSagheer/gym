"use client";

import React from "react";
import { Instagram, Twitter, Linkedin, Star } from "lucide-react";
import { trainers } from "../constant";

const Trainers = () => {
  return (
    <section id="trainers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Meet Our Team
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Expert Trainers Ready to
            <span className="text-orange-500 block">Guide Your Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our certified trainers bring years of experience and passion to help
            you achieve your fitness goals safely and effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-64 object-cover group-hover:scale-100 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={trainer.social.instagram}
                      className="bg-white p-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a
                      href={trainer.social.twitter}
                      className="bg-white p-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a
                      href={trainer.social.linkedin}
                      className="bg-white p-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {trainer.name}
                  </h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">
                      {trainer.rating}
                    </span>
                  </div>
                </div>

                <div className="text-orange-500 font-semibold mb-2">
                  {trainer.specialty}
                </div>
                <div className="text-gray-600 text-sm mb-4">
                  {trainer.experience} experience
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {trainer.bio}
                </p>

                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-900 mb-2">
                    Certifications:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {trainer.certifications.map((cert, certIndex) => (
                      <span
                        key={certIndex}
                        className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full border-2 border-orange-500 text-orange-500 py-2 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 justify-end">
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-100">
            View All Trainers
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trainers;
