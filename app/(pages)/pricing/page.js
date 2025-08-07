"use client";

import React, { useState } from "react";
import {
  Check,
  Star,
  Crown,
  Zap,
  X,
  Calculator,
  CreditCard,
  Calendar,
} from "lucide-react";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/HeaderHome";
import HeaderCommon from "@/app/components/HeaderCommon";
import { BlogSection } from "../blog/Blog";
import MembershipModal from "@/app/components/ui/membership-dialog";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Basic",
      monthlyPrice: 29,
      annualPrice: 24,
      icon: Zap,
      popular: false,
      description: "Perfect for beginners starting their fitness journey",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Basic fitness assessment",
        "Mobile app access",
        "Community support",
        "Standard gym hours (5AM-11PM)",
      ],
      notIncluded: [
        "Group classes",
        "Personal training",
        "Nutrition consultation",
        "24/7 access",
      ],
      buttonText: "Get Started",
      buttonStyle:
        "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white",
      color: "orange",
    },
    {
      name: "Premium",
      monthlyPrice: 49,
      annualPrice: 39,
      icon: Star,
      popular: true,
      description: "Most popular choice for serious fitness enthusiasts",
      features: [
        "Everything in Basic",
        "Unlimited group classes",
        "Personal training session (1/month)",
        "Nutrition consultation",
        "Priority booking",
        "Guest passes (2/month)",
        "Towel service",
        "Locker rental included",
      ],
      notIncluded: [
        "Unlimited personal training",
        "Custom meal planning",
        "Recovery services",
      ],
      buttonText: "Most Popular",
      buttonStyle: "bg-orange-500 text-white hover:bg-orange-600",
      color: "orange",
    },
    {
      name: "Elite",
      monthlyPrice: 89,
      annualPrice: 69,
      icon: Crown,
      popular: false,
      description: "Premium experience with personalized attention",
      features: [
        "Everything in Premium",
        "Unlimited personal training",
        "Custom meal planning",
        "Body composition analysis",
        "Recovery services (massage, sauna)",
        "VIP locker room access",
        "24/7 gym access",
        "Dedicated parking spot",
        "Quarterly fitness assessments",
      ],
      notIncluded: [],
      buttonText: "Go Elite",
      buttonStyle:
        "border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white",
      color: "purple",
    },
  ];

  const addOns = [
    {
      name: "Personal Training Sessions",
      price: 75,
      unit: "per session",
      description: "One-on-one training with certified trainers",
      popular: true,
    },
    {
      name: "Nutrition Coaching",
      price: 150,
      unit: "per month",
      description: "Personalized meal plans and nutrition guidance",
      popular: false,
    },
    {
      name: "Recovery Package",
      price: 80,
      unit: "per session",
      description: "Massage therapy, sauna, and recovery protocols",
      popular: false,
    },
    {
      name: "Fitness Assessment",
      price: 50,
      unit: "per assessment",
      description: "Comprehensive body composition and fitness analysis",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "Can I cancel my membership anytime?",
      answer:
        "Yes, you can cancel your membership at any time with 30 days notice. No cancellation fees apply.",
    },
    {
      question: "Is there a joining fee?",
      answer:
        "No joining fees! We believe in transparent pricing with no hidden costs or setup fees.",
    },
    {
      question: "Can I freeze my membership?",
      answer:
        "Yes, you can freeze your membership for up to 3 months per year for medical reasons or extended travel.",
    },
    {
      question: "Do you offer student or senior discounts?",
      answer:
        "Yes! We offer 15% discounts for students with valid ID and seniors 65+. Military personnel receive 20% off.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, and bank transfers. Payments are processed securely monthly or annually.",
    },
  ];

  const getCurrentPrice = (plan) => {
    return billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice;
  };

  const getSavings = (plan) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const annualCost = plan.annualPrice * 12;
    return monthlyCost - annualCost;
  };

  const [isMembershipOpen, setMembershipOpen] = useState(false);
  const [selectedPlanId, setplanId] = useState("");

  const handlePlanSelect = (planId) => {
    setplanId(planId);
    setMembershipOpen(true);
  };
  return (
    <div className="pt-18">
      <HeaderCommon />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Membership Plans
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Flexible membership options designed to fit your lifestyle and
              fitness goals. All plans include access to our world-class
              facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-gray-100 p-1 rounded-full">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  billingCycle === "monthly"
                    ? "bg-orange-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  billingCycle === "annual"
                    ? "bg-orange-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Annual{" "}
                <span className="text-green-500 text-sm ml-1">
                  (Save up to $240)
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-4">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl border-2 transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular
                    ? "border-orange-500 shadow-2xl scale-105"
                    : "border-gray-200 shadow-lg hover:shadow-2xl"
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
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                        plan.popular ? "bg-orange-500" : `bg-${plan.color}-100`
                      }`}
                    >
                      <plan.icon
                        className={`h-8 w-8 ${
                          plan.popular ? "text-white" : `text-${plan.color}-600`
                        }`}
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>

                    <div className="mb-6">
                      <span className="text-5xl font-bold text-gray-900">
                        ${getCurrentPrice(plan)}
                      </span>
                      <span className="text-gray-600">
                        /{billingCycle === "monthly" ? "month" : "month"}
                      </span>
                      {billingCycle === "annual" && (
                        <div className="text-green-500 text-sm font-semibold mt-1">
                          Save ${getSavings(plan)}/year
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      What's included:
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="bg-green-100 p-1 rounded-full mr-3">
                            <Check className="h-4 w-4 text-green-600" />
                          </div>
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {plan.notIncluded.length > 0 && (
                      <div className="mt-6">
                        <h4 className="font-semibold text-gray-900 mb-4">
                          Not included:
                        </h4>
                        <ul className="space-y-3">
                          {plan.notIncluded.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center"
                            >
                              <div className="bg-red-100 p-1 rounded-full mr-3">
                                <X className="h-4 w-4 text-red-600" />
                              </div>
                              <span className="text-gray-500 text-sm">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <button
                    className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${plan.buttonStyle}`}
                  >
                    <span
                      onClick={() => handlePlanSelect(plan.name.toLowerCase())}
                    >
                      {plan.buttonText}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Add-On Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enhance your membership with additional services tailored to your
              specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-2xl border-2 transition-all duration-300 transform hover:-translate-y-2 ${
                  addon.popular
                    ? "border-orange-500 shadow-xl"
                    : "border-gray-200 shadow-lg hover:shadow-xl"
                }`}
              >
                {addon.popular && (
                  <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">
                    Popular
                  </div>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {addon.name}
                </h3>
                <div className="text-2xl font-bold text-orange-500 mb-2">
                  ${addon.price}{" "}
                  <span className="text-sm text-gray-600 font-normal">
                    {addon.unit}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {addon.description}
                </p>
                <button className="w-full border-2 border-orange-500 text-orange-500 py-2 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Pricing Calculator */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Calculator className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pricing Calculator
            </h2>
            <p className="text-lg text-gray-600">
              Calculate your total monthly cost with add-ons and see potential
              savings.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Your Plan
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                    <span className="font-semibold">Premium Membership</span>
                    <span className="text-orange-500 font-bold">$49/month</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span>Personal Training (4 sessions)</span>
                    <span className="font-bold">$300/month</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span>Nutrition Coaching</span>
                    <span className="font-bold">$150/month</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Summary
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>$499/month</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Annual Discount (20%)</span>
                    <span>-$100/month</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span className="text-orange-500">$399/month</span>
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      Save $1,200 per year with annual billing
                    </div>
                  </div>
                </div>
                <button className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold mt-6 hover:bg-orange-600 transition-colors duration-300">
                  Get This Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Got questions about our pricing? We've got answers.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BlogSection className="bg-gray-50" />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of members who have transformed their lives. Start
            with a 7-day free trial - no commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <CreditCard className="h-5 w-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-500 transition-all duration-300 flex items-center justify-center">
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Tour
            </button>
          </div>
          <p className="text-orange-100 mt-6 text-sm">
            7-day free trial • No setup fees • Cancel anytime • Money-back
            guarantee
          </p>
        </div>
      </section>
      <Footer />
      <MembershipModal
        isOpen={isMembershipOpen}
        onClose={() => {
          setMembershipOpen(false);
          setplanId("");
        }}
        preSelectedPlan={selectedPlanId}
      />
    </div>
  );
};

export default Pricing;
