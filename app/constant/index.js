
import { Target, Heart, Award, Zap, Facebook, Instagram, Twitter, Youtube, Dumbbell, Users, Clock, Star, Crown, Mail, Phone, MapPin } from 'lucide-react';

export const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Trainers", href: "/trainers" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export const values = [
  {
    icon: Target,
    title: "Goal-Focused",
    description:
      "We help you set and achieve realistic, measurable fitness goals tailored to your lifestyle.",
  },
  {
    icon: Heart,
    title: "Holistic Wellness",
    description:
      "Our approach combines physical fitness with mental well-being for complete transformation.",
  },
  {
    icon: Award,
    title: "Expert Guidance",
    description:
      "Certified trainers with years of experience provide personalized coaching every step of the way.",
  },
  {
    icon: Zap,
    title: "High Energy",
    description:
      "Dynamic workouts and motivating environment that keeps you engaged and excited to train.",
  },
];


export const footerLinks = {
    'Quick Links': ['Home', 'About', 'Services', 'Trainers', 'Pricing', 'Contact'],
    'Services': ['Personal Training', 'Group Classes', 'Nutrition Coaching', 'Online Training', 'Corporate Wellness'],
    'Support': ['Help Center', 'Membership Portal', 'Schedule', 'Mobile App', 'Community Forum']
  };

export const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

export  const services = [
    {
      icon: Dumbbell,
      title: 'Strength Training',
      description: 'Build muscle and increase strength with our comprehensive weight training programs.',
      features: ['Free weights', 'Machine training', 'Powerlifting', 'Functional strength'],
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      icon: Heart,
      title: 'Cardio Workouts',
      description: 'Improve cardiovascular health with high-energy cardio sessions and HIIT training.',
      features: ['HIIT classes', 'Cycling', 'Running programs', 'Dance cardio'],
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600'
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'Join our energetic group fitness classes led by certified instructors.',
      features: ['Yoga', 'Pilates', 'Zumba', 'CrossFit'],
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    },
    {
      icon: Target,
      title: 'Personal Training',
      description: 'One-on-one coaching tailored to your specific goals and fitness level.',
      features: ['Custom programs', 'Nutrition guidance', 'Progress tracking', 'Goal setting'],
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600'
    },
    {
      icon: Zap,
      title: 'HIIT Training',
      description: 'High-intensity interval training for maximum results in minimum time.',
      features: ['Circuit training', 'Metabolic conditioning', 'Fat burning', 'Athletic performance'],
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600'
    },
    {
      icon: Clock,
      title: '24/7 Access',
      description: 'Train on your schedule with round-the-clock access to our facilities.',
      features: ['Flexible hours', 'Mobile app access', 'Secure entry', 'Always available'],
      color: 'bg-indigo-500',
      hoverColor: 'hover:bg-indigo-600'
    }
  ];
  
  export const trainers = [
    {
      name: 'Mike Rodriguez',
      specialty: 'HIIT & Cardio',
      experience: '6 years',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
      bio: 'High-energy trainer focused on metabolic conditioning and fat loss conditioning and fat loss.',
      certifications: ['ACSM-CPT', 'HIIT Specialist','NASM-CPT',],
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Emily Chen',
      specialty: 'Yoga & Flexibility',
      experience: '10 years',
      rating: 5.0,
      image: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
      bio: 'Experienced yoga instructor promoting mind-body wellness and flexibility.',
      certifications: ['RYT-500', 'Yin Yoga', 'Meditation','NASM-CPT'],
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'David Thompson',
      specialty: 'Personal Training',
      experience: '12 years',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
      bio: 'Veteran personal trainer with expertise in body transformation and nutrition.',
      certifications: ['NASM-CPT', 'Nutrition Coach', 'Corrective Exercise'],
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    }
  ];

export const plans = [
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
      name: 'Premium',
      price: 49,
      period: 'month',
      icon: Star,
      popular: true,
      description: 'Most popular choice for serious fitness enthusiasts',
      features: [
        'Everything in Basic',
        'Unlimited group classes',
        'Personal training session (1/month)',
        'Nutrition consultation',
        'Priority booking',
        'Guest passes (2/month)'
      ],
      buttonText: 'Most Popular',
      buttonStyle: 'bg-orange-500 text-white hover:bg-orange-600'
    },
    {
      name: 'Elite',
      price: 89,
      period: 'month',
      icon: Crown,
      popular: false,
      description: 'Premium experience with personalized attention',
      features: [
        'Everything in Premium',
        'Unlimited personal training',
        'Custom meal planning',
        'Body composition analysis',
        'Recovery services (massage, sauna)',
        'VIP locker room access',
        '24/7 gym access'
      ],
      buttonText: 'Go Elite',
      buttonStyle: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'
    }
  ];

export const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["4th Floor, Emerald Tower, Block-5, Do Talwar, Main Clifton Road Karachi, Pakistan"],
      color: "bg-blue-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(+92) 21-35147727","(+92) 334 1110496"],
      color: "bg-green-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@platinumfitnesspk.com"],
      color: "bg-purple-500",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri:","6:30 am to 11 pm", "Sat: 8 am to 10pm","Sun: 1pm to 7pm"],
      color: "bg-orange-500",
    },
  ];

  export const FullblogPosts = [
  {
    id: 1,
    title: "Why I Wrote a Book at 83 (And Why You Should Read It)",
    slug: "why-i-wrote-a-book",
    href: "/",
    content: `
      <p>At 83, people expect you to slow down, stay quiet, or stick to bingo. But I believe aging isn't the end of expression, it's the peak of perspective. After decades of living, teaching, painting, raising eyebrows, and asking too many questions, I found myself on my back porch in rural Florida, surrounded by trees, birds, and the kind of stillness that makes you wonder: what if I tried to write it all down?</p>
      
      <h2 class="py-2">So I did.</h2>
      <p>Some Observations and Opinions is the result. It’s not a manifesto. It’s not a self-help manual. It’s a meandering, thoughtful, sometimes funny, sometimes dead-serious collection of essays and reflections on everything from politics and God to abstract painting and the quiet genius of Taoism. It's what happens when a guy who's lived long enough finally stops worrying about what others think, and just writes.</p>
      
      <h2 class="py-2">Why should you read it?</h2>
      <p>Because maybe, just maybe, you'll see your own thoughts, half-formed and unexplored, finally written down by someone who’s walked a few more miles. Or maybe you’ll just enjoy reading the kind of book that doesn’t try to sell you answers, just a bit of honest company.</p>
      
      <h2 class="pt-2">So pull up a chair. Let’s talk.</h2>
    `,
    excerpt:
      "I didn’t write this book to become famous. I wrote it because I still had something to say.",
    image:
      "https://i0.wp.com/platinumfitnesspk.com/wp-content/uploads/2023/09/top-view-showing-hands-eating-healthy-lunch-with-bulgur-meat-fresh-vegetables-fruit-wooden-table-fitness-healthy-lifestyle-concept-lunchbox-top-view-scaled-1.jpg?w=720&ssl=1",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Health Tips",
    author: "Joel Smith",
  },
  {
    id: 2,
    title: "The Kind of Books I Write",
    slug: "the-kind-of-books-i-write",
    href: "/",
    content: `
      <p>You won't find my books under “bestsellers” at the airport. They don’t have a three-step plan to improve your life. They aren’t thrillers. And I’m not trying to “build a brand.”</p>
      
      <p>What I write are books for thinkers, wanderers, and anyone willing to slow down and listen to a stranger’s point of view, one formed over 80+ years of living, doubting, learning, and sitting quietly.</p>
      <p>My books drift between memoir, philosophy, theology, social commentary, and the kind of humor that sneaks up on you like a raccoon at midnight. I write about Zen and Judaism in the same breath. I question God, praise Him, and roll my eyes at organized religion, sometimes all in the same paragraph.</p>
      
      <p>You could say my writing is unfiltered. You could also say it’s deeply personal. Both are true.</p>
      
      <p>If you're tired of polished platitudes and just want a voice that feels real, a little cranky, a little curious, and always looking for the truth behind the noise, then I invite you to read my work.</p>
      <p>You don’t have to agree with me. You just have to listen.</p>
    `,
    excerpt:
      "Learn how to transform ordinary experiences into extraordinary stories that captivate your audience.",
    image:
      "https://i0.wp.com/platinumfitnesspk.com/wp-content/uploads/2023/09/top-view-hummus-with-assortment-vegetables-measuring-tape-scaled-1.jpg?w=720&ssl=1",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Diet Tips",
    author: "Joel Smith",
  },
];
