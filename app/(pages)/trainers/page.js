"use client";

import React from "react";
import {
  Instagram,
  Twitter,
  Linkedin,
  Star,
  Award,
  Calendar,
  Users,
  Trophy,
} from "lucide-react";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/HeaderHome";
import HeaderCommon from "@/app/components/HeaderCommon";

const Trainers = () => {
  const trainers = [
    {
      name: "Sarah Johnson",
      specialty: "Strength & Conditioning",
      experience: "8 years",
      rating: 4.9,
      image:
        "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      bio: "Former collegiate athlete turned certified strength coach. Sarah specializes in powerlifting, functional movement, and helping clients break through strength plateaus.",
      certifications: [
        "NASM-CPT",
        "CSCS",
        "FMS Level 2",
        "Precision Nutrition",
      ],
      achievements: [
        "Regional Powerlifting Champion",
        "500+ Client Transformations",
        "Featured in Fitness Magazine",
      ],
      specialties: [
        "Powerlifting",
        "Functional Training",
        "Injury Prevention",
        "Competition Prep",
      ],
      availability: "Mon-Fri: 6AM-2PM",
      rate: "$85/session",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Mike Rodriguez",
      specialty: "HIIT & Cardio",
      experience: "6 years",
      rating: 4.8,
      image:
        "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      bio: "High-energy trainer with a passion for metabolic conditioning and fat loss. Mike creates challenging yet fun workouts that deliver real results.",
      certifications: [
        "ACSM-CPT",
        "HIIT Specialist",
        "TRX Certified",
        "Kettlebell Instructor",
      ],
      achievements: [
        "Transformed 300+ Lives",
        "Group Fitness Instructor of the Year",
        "Marathon Finisher",
      ],
      specialties: [
        "HIIT Training",
        "Weight Loss",
        "Metabolic Conditioning",
        "Group Fitness",
      ],
      availability: "Mon-Sat: 5AM-1PM, 4PM-8PM",
      rate: "$75/session",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Emily Chen",
      specialty: "Yoga & Flexibility",
      experience: "10 years",
      rating: 5.0,
      image:
        "https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      bio: "Experienced yoga instructor promoting mind-body wellness. Emily combines traditional yoga practices with modern flexibility training for optimal results.",
      certifications: [
        "RYT-500",
        "Yin Yoga Certified",
        "Meditation Teacher",
        "Anatomy Specialist",
      ],
      achievements: [
        "1000+ Hours Teaching",
        "Yoga Alliance Certified",
        "Mindfulness Workshop Leader",
      ],
      specialties: [
        "Hatha Yoga",
        "Vinyasa Flow",
        "Meditation",
        "Flexibility Training",
      ],
      availability: "Daily: 7AM-11AM, 5PM-9PM",
      rate: "$70/session",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "David Thompson",
      specialty: "Personal Training",
      experience: "12 years",
      rating: 4.9,
      image:
        "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      bio: "Veteran personal trainer with expertise in body transformation and nutrition. David has helped hundreds achieve their dream physiques through personalized programs.",
      certifications: [
        "NASM-CPT",
        "Nutrition Coach",
        "Corrective Exercise Specialist",
        "Youth Fitness",
      ],
      achievements: [
        "12 Years Experience",
        "Body Transformation Specialist",
        "Published Fitness Author",
      ],
      specialties: [
        "Body Transformation",
        "Nutrition Coaching",
        "Corrective Exercise",
        "Senior Fitness",
      ],
      availability: "Mon-Fri: 6AM-6PM",
      rate: "$90/session",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Jessica Martinez",
      specialty: "Pilates & Core",
      experience: "7 years",
      rating: 4.9,
      image:
        "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      bio: "Certified Pilates instructor specializing in core strengthening and postural alignment. Jessica helps clients build a strong foundation for all movement.",
      certifications: [
        "PMA Certified",
        "Mat Pilates",
        "Reformer Certified",
        "Barre Instructor",
      ],
      achievements: [
        "Pilates Method Alliance Certified",
        "Core Conditioning Expert",
        "Posture Specialist",
      ],
      specialties: [
        "Classical Pilates",
        "Core Strengthening",
        "Posture Correction",
        "Barre Fitness",
      ],
      availability: "Tue-Sat: 8AM-4PM",
      rate: "$80/session",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Marcus Williams",
      specialty: "Athletic Performance",
      experience: "9 years",
      rating: 4.8,
      image:
        "https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      bio: "Former professional athlete specializing in sports performance and athletic conditioning. Marcus trains everyone from weekend warriors to professional athletes.",
      certifications: [
        "CSCS",
        "USAW Level 1",
        "Speed & Agility Specialist",
        "Sports Nutrition",
      ],
      achievements: [
        "Former Pro Athlete",
        "Olympic Lifting Coach",
        "Performance Enhancement Specialist",
      ],
      specialties: [
        "Athletic Performance",
        "Olympic Lifting",
        "Speed Training",
        "Sports Conditioning",
      ],
      availability: "Mon-Thu: 3PM-9PM, Sat: 8AM-2PM",
      rate: "$95/session",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  const stats = [
    { icon: Users, number: "15+", label: "Expert Trainers" },
    { icon: Trophy, number: "50+", label: "Certifications" },
    { icon: Star, number: "4.9", label: "Average Rating" },
    { icon: Award, number: "5000+", label: "Sessions Completed" },
  ];

  return (
    <div className="pt-18">
      <HeaderCommon />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Meet Our Trainers
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              World-class certified trainers dedicated to helping you achieve
              extraordinary results safely and effectively.
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
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each trainer brings unique expertise and passion to help you reach
              your goals. Find the perfect match for your fitness journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {trainers.map((trainer, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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

                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {trainer.name}
                        </h3>
                        <div className="text-orange-500 font-semibold">
                          {trainer.specialty}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="text-lg font-semibold ml-1">
                          {trainer.rating}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {trainer.bio}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Specialties
                        </h4>
                        <div className="space-y-1">
                          {trainer.specialties.map((specialty, specIndex) => (
                            <div
                              key={specIndex}
                              className="text-sm text-gray-600"
                            >
                              • {specialty}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Certifications
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {trainer.certifications.map((cert, certIndex) => (
                            <span
                              key={certIndex}
                              className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs font-medium"
                            >
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-600">
                              {trainer.experience}
                            </span>
                          </div>
                          <div className="text-2xl font-bold text-orange-500">
                            {trainer.rate}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 mb-4">
                        {trainer.availability}
                      </div>
                      <button className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300">
                        Book Session with {trainer.name.split(" ")[0]}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How to Book Your Session
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Getting started with personal training is easy. Follow these
              simple steps to book your first session.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Choose Your Trainer
              </h3>
              <p className="text-gray-600">
                Browse our trainer profiles and select the one that best matches
                your goals and preferences.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Schedule Your Session
              </h3>
              <p className="text-gray-600">
                Pick a convenient time from your trainer's availability and book
                your session online or by phone.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Start Training
              </h3>
              <p className="text-gray-600">
                Arrive ready to work and let your trainer guide you through a
                personalized workout experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work with a Pro?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take your fitness to the next level with personalized training from
            our certified experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Book Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              View Training Packages
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Trainers;
