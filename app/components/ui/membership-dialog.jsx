"use client"
import React, { useState } from 'react';
import { X, Check, Star, Crown, Zap, User, Mail, Phone, Calendar, CreditCard } from 'lucide-react';

const MembershipModal = ({ isOpen, onClose, preSelectedPlan }) => {
  const [selectedPlan, setSelectedPlan] = useState(preSelectedPlan || 'premium');
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [currentStep, setCurrentStep] = useState('plans');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    emergencyContact: '',
    fitnessGoals: '',
    experience: '',
    startDate: ''
  });

  // Update selected plan when preSelectedPlan changes
  React.useEffect(() => {
    if (preSelectedPlan) {
      setSelectedPlan(preSelectedPlan);
      setCurrentStep('form'); // Skip plan selection if pre-selected
    } else {
      setCurrentStep('plans');
    }
  }, [preSelectedPlan, isOpen]);

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      monthlyPrice: 29,
      annualPrice: 24,
      icon: Zap,
      popular: false,
      description: 'Perfect for beginners',
      features: [
        'Access to gym equipment',
        'Locker room access',
        'Basic fitness assessment',
        'Mobile app access',
        'Community support'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      monthlyPrice: 49,
      annualPrice: 39,
      icon: Star,
      popular: true,
      description: 'Most popular choice',
      features: [
        'Everything in Basic',
        'Unlimited group classes',
        'Personal training session (1/month)',
        'Nutrition consultation',
        'Priority booking',
        'Guest passes (2/month)'
      ]
    },
    {
      id: 'elite',
      name: 'Elite',
      monthlyPrice: 89,
      annualPrice: 69,
      icon: Crown,
      popular: false,
      description: 'Premium experience',
      features: [
        'Everything in Premium',
        'Unlimited personal training',
        'Custom meal planning',
        'Body composition analysis',
        'Recovery services',
        '24/7 gym access'
      ]
    }
  ];

  const getCurrentPrice = (plan) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
  };

  const getSavings = (plan) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const annualCost = plan.annualPrice * 12;
    return monthlyCost - annualCost;
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCurrentStep('success');
  };

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
    setCurrentStep('form');
  };

  const selectedPlanData = plans.find(plan => plan.id === selectedPlan);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {currentStep === 'plans' && 'Choose Your Membership'}
            {currentStep === 'form' && 'Complete Your Registration'}
            {currentStep === 'success' && 'Welcome to FitZone!'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Plans Selection */}
        {currentStep === 'plans' && (
          <div className="p-6">
            {/* Billing Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 p-1 rounded-full">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    billingCycle === 'monthly'
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    billingCycle === 'annual'
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Annual <span className="text-green-500 text-sm ml-1">(Save up to $240)</span>
                </button>
              </div>
            </div>

            {/* Plans Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    plan.popular 
                      ? 'border-orange-500 shadow-lg' 
                      : 'border-gray-200 hover:border-orange-300'
                  }`}
                  onClick={() => handlePlanSelect(plan.id)}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                      plan.popular ? 'bg-orange-500' : 'bg-gray-100'
                    }`}>
                      <plan.icon className={`h-6 w-6 ${
                        plan.popular ? 'text-white' : 'text-gray-600'
                      }`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-gray-900">${getCurrentPrice(plan)}</span>
                      <span className="text-gray-600">/{billingCycle === 'monthly' ? 'month' : 'month'}</span>
                      {billingCycle === 'annual' && (
                        <div className="text-green-500 text-sm font-semibold mt-1">
                          Save ${getSavings(plan)}/year
                        </div>
                      )}
                    </div>

                    <ul className="space-y-2 mb-6 text-left">
                      {plan.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                      {plan.features.length > 4 && (
                        <li className="text-sm text-gray-500">
                          +{plan.features.length - 4} more features
                        </li>
                      )}
                    </ul>

                    <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-orange-500 text-white hover:bg-orange-600' 
                        : 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'
                    }`}>
                      Select {plan.name}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Registration Form */}
        {currentStep === 'form' && selectedPlanData && (
          <div className="p-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
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
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700 mb-2">
                        Emergency Contact
                      </label>
                      <input
                        type="text"
                        id="emergencyContact"
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
                        placeholder="Name and phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Start Date *
                      </label>
                      <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                      Fitness Experience
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
                    >
                      <option value="">Select your experience level</option>
                      <option value="beginner">Beginner (0-1 years)</option>
                      <option value="intermediate">Intermediate (1-3 years)</option>
                      <option value="advanced">Advanced (3+ years)</option>
                      <option value="athlete">Competitive Athlete</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="fitnessGoals" className="block text-sm font-medium text-gray-700 mb-2">
                      Fitness Goals
                    </label>
                    <textarea
                      id="fitnessGoals"
                      name="fitnessGoals"
                      value={formData.fitnessGoals}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Tell us about your fitness goals and what you hope to achieve..."
                    ></textarea>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setCurrentStep('plans')}
                      className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300"
                    >
                      Back to Plans
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center"
                    >
                      <CreditCard className="h-5 w-5 mr-2" />
                      Complete Registration
                    </button>
                  </div>
                </form>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-2xl p-6 sticky top-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-orange-500 p-2 rounded-lg">
                        <selectedPlanData.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{selectedPlanData.name} Plan</div>
                        <div className="text-sm text-gray-600">{billingCycle === 'monthly' ? 'Monthly' : 'Annual'} billing</div>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Plan Cost</span>
                        <span className="font-semibold">${getCurrentPrice(selectedPlanData)}/month</span>
                      </div>
                      {billingCycle === 'annual' && (
                        <div className="flex justify-between mb-2 text-green-600">
                          <span>Annual Discount</span>
                          <span>-${getSavings(selectedPlanData)}/year</span>
                        </div>
                      )}
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Setup Fee</span>
                        <span className="font-semibold line-through text-gray-400">$50</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold text-orange-500 border-t pt-2">
                        <span>Total</span>
                        <span>${getCurrentPrice(selectedPlanData)}/month</span>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="text-sm text-green-800">
                        <strong>7-Day Free Trial</strong><br />
                        No charges until {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                      </div>
                    </div>

                    <div className="text-xs text-gray-500">
                      By completing registration, you agree to our Terms of Service and Privacy Policy. Cancel anytime.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Success Screen */}
        {currentStep === 'success' && (
          <div className="p-6 text-center">
            <div className="max-w-md mx-auto">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-10 w-10 text-green-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Registration Complete!</h3>
              <p className="text-gray-600 mb-6">
                Welcome to FitZone! Your membership is now active and you can start your fitness journey today.
              </p>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-orange-800 mb-2">What's Next?</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Check your email for membership details</li>
                  <li>• Download our mobile app</li>
                  <li>• Schedule your free fitness assessment</li>
                  <li>• Visit us to get your access card</li>
                </ul>
              </div>

              <div className="space-y-3">
                <button
                  onClick={onClose}
                  className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300"
                >
                  Start Exploring
                </button>
                <button
                  onClick={onClose}
                  className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MembershipModal;