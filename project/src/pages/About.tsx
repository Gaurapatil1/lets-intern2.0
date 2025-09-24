import React from 'react';
import { CheckCircle, MessageCircle, Bell, Languages, Zap, Shield, Users, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-yellow-400" />,
      title: 'Resume-based AI Recommendations',
      description: 'Our advanced AI analyzes your resume and matches you with perfect internship opportunities',
      highlight: true
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-cyan-400" />,
      title: 'Interactive Chatbot Support',
      description: 'Get instant answers to your queries about applications, eligibility, and processes',
      highlight: true
    },
    {
      icon: <Bell className="h-6 w-6 text-green-400" />,
      title: 'Real-time Notifications',
      description: 'Stay updated with new opportunities, application status, and important deadlines',
      highlight: true
    },
    {
      icon: <Languages className="h-6 w-6 text-purple-400" />,
      title: 'Multi-language Support',
      description: 'Access the platform in English and Marathi for better user experience',
      highlight: false
    },
    {
      icon: <Shield className="h-6 w-6 text-red-400" />,
      title: 'Verified Opportunities',
      description: 'All internships are verified and from trusted government and private organizations',
      highlight: false
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-400" />,
      title: 'Student & Professional Support',
      description: 'Tailored experiences for both students and working professionals',
      highlight: false
    }
  ];

  const aicteComparison = [
    'Limited to AICTE registered institutions only',
    'Basic search functionality',
    'No personalized recommendations',
    'Limited notification system',
    'Single language support',
    'Manual application tracking'
  ];

  const letsInternFeatures = [
    'Open to all students and professionals',
    'AI-powered smart search and filtering',
    'Personalized internship recommendations',
    'Real-time notifications and alerts',
    'Multi-language support (English/Marathi)',
    'Automated application tracking with chatbot support'
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            About Let's Intern
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Revolutionizing internship discovery through AI-powered recommendations and seamless user experience
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">
            What Makes Us Different
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
                  feature.highlight ? 'ring-2 ring-yellow-400' : ''
                }`}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
                {feature.highlight && (
                  <div className="mt-3">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                      Unique Feature
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">
            Let's Intern vs Traditional AICTE Portal
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AICTE Portal */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-100 mb-6 text-center">
                Traditional AICTE Portal
              </h3>
              <div className="space-y-3">
                {aicteComparison.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Let's Intern */}
            <div className="bg-gray-700 p-6 rounded-lg border-2 border-yellow-400">
              <h3 className="text-xl font-semibold text-yellow-400 mb-6 text-center">
                Let's Intern Platform
              </h3>
              <div className="space-y-3">
                {letsInternFeatures.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Language Toggle Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            Multi-Language Support
          </h2>
          <p className="text-xl mb-8">
            Experience the platform in your preferred language
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setLanguage('en')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                language === 'en'
                  ? 'bg-yellow-400 text-gray-900'
                  : 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('mr')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                language === 'mr'
                  ? 'bg-yellow-400 text-gray-900'
                  : 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900'
              }`}
            >
              मराठी (Marathi)
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">
            Our Impact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-400 text-gray-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-100 mb-2">10,000+</h3>
              <p className="text-gray-300">Registered Students</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-400 text-gray-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-100 mb-2">500+</h3>
              <p className="text-gray-300">Available Internships</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-500 text-gray-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-100 mb-2">85%</h3>
              <p className="text-gray-300">Success Rate</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-400 text-gray-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-100 mb-2">24/7</h3>
              <p className="text-gray-300">AI Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-800 text-yellow-400">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Internship Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Join the future of internship discovery with AI-powered recommendations
          </p>
          <a
            href="/signup"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
