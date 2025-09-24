import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Bell, Upload } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUser } from '../context/UserContext';
import emblem from '../assets/emblem1.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const { isAuthenticated } = useUser();

  // ✅ Support 3 languages: English, Marathi, Hindi
  const supportedLanguages = ['en', 'mr', 'hi'];
  const toggleLanguage = () => {
    const currentIndex = supportedLanguages.indexOf(language);
    const nextIndex = (currentIndex + 1) % supportedLanguages.length;
    setLanguage(supportedLanguages[nextIndex]);
  };

  const navItems = [
    { path: '/', key: 'nav.home' },
    { path: '/search', key: 'nav.search' },
    { path: '/profile', key: 'nav.profile', requireAuth: true },
    { path: '/about', key: 'nav.about' },
  ];

  const handleResumeUpload = () => {
    setShowResumeModal(true);
    setTimeout(() => {
      setShowResumeModal(false);
      alert(
        '🎯 AI Analysis Complete!\n\nBased on your resume, we found 3 perfect matches:\n• AICTE AI Research Internship (95% match)\n• Digital India Fellowship (88% match)\n• PM Kaushal Vikas Program (82% match)\n\nCheck your profile for detailed recommendations!'
      );
    }, 3000);
  };

  const notifications = [
    { id: 1, title: 'New AICTE Match Found!', time: '2 min ago', isNew: true },
    { id: 2, title: 'Application Status Update', time: '1 hour ago', isNew: true },
    { id: 3, title: 'PM Scheme Deadline Alert', time: '3 hours ago', isNew: false },
    { id: 4, title: 'Profile View Notification', time: '1 day ago', isNew: false },
  ];

  const newNotificationCount = notifications.filter(n => n.isNew).length;

  const getLanguageLabel = (lang: string) => {
    switch (lang) {
      case 'en':
        return 'मराठी';
      case 'mr':
        return 'हिंदी';
      case 'hi':
        return 'English';
      default:
        return 'Language';
    }
  };

  return (
    <>
      <nav className="bg-black text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* ✅ Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img src={emblem} alt="Emblem" className="h-7 w-7" />
              <span className="text-xl font-bold">{t('hero.title')}</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => {
                if (item.requireAuth && !isAuthenticated) return null;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm hover:text-yellow-400 transition duration-200 px-3 py-2 rounded ${
                      location.pathname === item.path ? 'bg-gray-800' : ''
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                );
              })}

              {isAuthenticated && (
                <button
                  onClick={handleResumeUpload}
                  className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-3 py-2 rounded-md transition-all duration-200 hover:scale-105"
                >
                  <Upload className="h-4 w-4" />
                  <span>Upload Resume</span>
                </button>
              )}

              {isAuthenticated && (
                <div className="relative">
                  <button
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="relative hover:text-yellow-400 transition"
                  >
                    <Bell className="h-5 w-5" />
                    {newNotificationCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                        {newNotificationCount}
                      </span>
                    )}
                  </button>

                  {showNotifications && (
                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 animate-slide-up">
                      <div className="p-4 border-b">
                        <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
                      </div>
                      <div className="max-h-64 overflow-y-auto">
                        {notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`p-3 border-b hover:bg-gray-100 cursor-pointer ${
                              notification.isNew ? 'bg-gray-100' : ''
                            }`}
                          >
                            <div className="flex justify-between">
                              <div>
                                <p className="text-sm font-medium text-gray-800">{notification.title}</p>
                                <p className="text-xs text-gray-500">{notification.time}</p>
                              </div>
                              {notification.isNew && <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="p-3 text-right border-t">
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          View All
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {!isAuthenticated && (
                <Link
                  to="/login"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-md transition hover:scale-105"
                >
                  Login
                </Link>
              )}

              {/* ✅ Language Switch */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 hover:text-yellow-400 transition"
              >
                <Globe className="h-4 w-4" />
                <span>{getLanguageLabel(language)}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              <button onClick={() => setIsOpen(!isOpen)} className="hover:text-yellow-400 transition">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-black rounded-b-md px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => {
                if (item.requireAuth && !isAuthenticated) return null;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-white hover:text-yellow-400 px-3 py-2 rounded ${
                      location.pathname === item.path ? 'bg-gray-800' : ''
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                );
              })}
              {isAuthenticated && (
                <button
                  onClick={() => {
                    handleResumeUpload();
                    setIsOpen(false);
                  }}
                  className="w-full text-left bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-3 py-2 rounded-md"
                >
                  Upload Resume
                </button>
              )}
              {!isAuthenticated && (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block text-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-3 py-2 rounded-md"
                >
                  Login
                </Link>
              )}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-white hover:text-yellow-400"
              >
                <Globe className="h-4 w-4" />
                <span>{getLanguageLabel(language)}</span>
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Resume Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full animate-fade-in text-center">
            <div className="animate-spin h-16 w-16 border-b-4 border-yellow-500 rounded-full mx-auto mb-4"></div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">🤖 AI Processing Your Resume</h2>
            <div className="space-y-1 text-gray-600 text-sm">
              <p><span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>Analyzing skills and experience…</p>
              <p><span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>Matching with government schemes…</p>
              <p><span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></span>Finding private opportunities…</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
