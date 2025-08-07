"use client"

import React, { useState } from 'react';
import { Check} from 'lucide-react';
import { plans } from '../constant';
import Link from 'next/link';
import MembershipModal from './ui/membership-dialog';

const Pricing = () => {
  const [isMembershipOpen,setMembershipOpen] = useState(false)
  const [selectedPlanId,setplanId] = useState('')

const handlePlanSelect = (planId) => {
    setplanId(planId);
    setMembershipOpen(true);
  };
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Membership Plans
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your
            <span className="text-orange-500 block">Membership Plan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Flexible membership options designed to fit your lifestyle and fitness goals. 
            All plans include access to our world-class facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-orange-500 shadow-2xl scale-105' 
                  : 'border-gray-200 shadow-lg hover:shadow-2xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                    plan.popular ? 'bg-orange-500' : 'bg-gray-100'
                  }`}>
                    <plan.icon className={`h-8 w-8 ${
                      plan.popular ? 'text-white' : 'text-gray-600'
                    }`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">Rs.{plan.price}</span>
                    {/* <span className="text-gray-600">/{plan.period}</span> */}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="bg-green-100 p-1 rounded-full mr-3">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${plan.buttonStyle}`}>
                  <span onClick={()=>handlePlanSelect(plan.name.toLowerCase())}>
                  {plan.buttonText}
                  {/* Join Now */}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            All memberships include a 7-day free trial • No setup fees • Cancel anytime
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300">
              <Link href="/pricing">
              View All Plans
              </Link>
            </button>
            {/* <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors duration-300">
              Have questions? Contact us →
            </button> */}
          </div>
        </div>
      </div>
      <MembershipModal 
      isOpen={isMembershipOpen}
      onClose={()=>{
        setMembershipOpen(false)
        setplanId('')
      }}
      preSelectedPlan={selectedPlanId}
      />
    </section>
  );
};

export default Pricing;