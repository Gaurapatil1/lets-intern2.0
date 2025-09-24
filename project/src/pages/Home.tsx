import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Bell,
  Users,
  BookOpen,
  Award,
  TrendingUp
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { pmSchemes } from '../data/internships';
import pmInternshipImage from '../assets/pm-intership.jpeg';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const [currentScheme, setCurrentScheme] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScheme((prev) => (prev + 1) % pmSchemes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextScheme = () => {
    setCurrentScheme((prev) => (prev + 1) % pmSchemes.length);
  };

  const prevScheme = () => {
    setCurrentScheme((prev) => (prev - 1 + pmSchemes.length) % pmSchemes.length);
  };

  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-gray-900" />,
      title: 'AI-Powered Matching',
      description: 'Smart recommendations based on your skills and preferences'
    },
    {
      icon: <Users className="h-8 w-8 text-gray-700" />,
      title: 'Government Schemes',
      description: 'Access to AICTE, PM Kaushal Vikas, and other official programs'
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-600" />,
      title: 'Quality Internships',
      description: 'Verified opportunities from trusted government and private partners'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-gray-600" />,
      title: 'Career Growth',
      description: 'Build skills and network for your professional journey'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Notification Banner */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black py-3 overflow-hidden">
        <div className="animate-scroll-left whitespace-nowrap">
          <span className="inline-flex items-center space-x-2">
            <Bell className="h-4 w-4" />
            <span className="font-semibold">{t('notification.banner')}</span>
          </span>
        </div>
      </div>

      {/* Hero Section (Final Version) */}
      <section
        className="relative bg-gray-900 text-white py-28 bg-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.7), rgba(50, 50, 50, 0.6)), url(${pmInternshipImage})`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold animate-fade-in-up text-white drop-shadow-lg">
            {t('hero.title')}
          </h1>
          <h2 className="text-2xl md:text-3xl text-yellow-400 font-semibold animate-fade-in-up animation-delay-200">
            {t('hero.subtitle')}
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl animate-fade-in-up animation-delay-400">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <Link
              to="/signup?type=student"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              {t('button.student')}
            </Link>
            <Link
              to="/signup?type=professional"
              className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('button.professional')}
            </Link>
          </div>
        </div>
      </section>

      {/* PM Schemes Carousel */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Upcoming PM Schemes
          </h3>

          <div className="relative bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-8">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                {pmSchemes[currentScheme].title}
              </h4>
              <p className="text-gray-700 mb-4">
                {pmSchemes[currentScheme].description}
              </p>
              <p className="text-sm text-red-600 font-semibold">
                Application Deadline: {pmSchemes[currentScheme].deadline}
              </p>
            </div>

            <button
              onClick={prevScheme}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 p-2 rounded-full shadow-md transition-all duration-200"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>

            <button
              onClick={nextScheme}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 p-2 rounded-full shadow-md transition-all duration-200"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {pmSchemes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentScheme(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentScheme ? 'bg-gray-900' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Let's Intern?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Internship Journey?
          </h3>
          <p className="text-xl mb-8">
            Join thousands of students who have found their perfect internship match
          </p>
          <Link
            to="/signup"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;


