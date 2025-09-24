import React, { useState } from 'react';
import { User, Mail, MapPin, GraduationCap, Award, Upload, Bell, CheckCircle } from 'lucide-react';
import { useUser } from '../context/UserContext';

const Profile: React.FC = () => {
  const { user } = useUser();
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(true);

  const notifications = [
    {
      id: '1',
      title: 'New AICTE AI Research Internship Match!',
      message: 'Based on your Machine Learning skills, we found a perfect match.',
      time: '2 minutes ago',
      type: 'match',
      isNew: true
    },
    {
      id: '2',
      title: 'Application Status Update',
      message: 'Your application for PM Kaushal Vikas Internship is under review.',
      time: '1 hour ago',
      type: 'status',
      isNew: true
    },
    {
      id: '3',
      title: 'New Government Scheme Alert',
      message: 'Digital India Fellowship 2025 applications are now open!',
      time: '3 hours ago',
      type: 'alert',
      isNew: false
    },
    {
      id: '4',
      title: 'Profile Completion',
      message: 'Complete your profile to get better internship recommendations.',
      time: '1 day ago',
      type: 'info',
      isNew: false
    }
  ];

  const handleResumeUpload = () => {
    setShowResumeModal(true);
    // Simulate upload process
    setTimeout(() => {
      setShowResumeModal(false);
      alert('Based on your skills, AICTE AI Research Internship recommended!');
    }, 2000);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Please log in to view your profile</h2>
          <a href="/login" className="text-blue-600 hover:text-blue-800">Go to Login</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <User className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
                    <p className="text-gray-600 capitalize">{user.userType}</p>
                  </div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                  Edit Profile
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium">{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-600">
                        {user.userType === 'student' ? 'College' : 'Company'}
                      </p>
                      <p className="font-medium">{user.college}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-600">
                        {user.userType === 'student' ? 'Marks' : 'Experience'}
                      </p>
                      <p className="font-medium">
                        {user.marks}{user.userType === 'student' ? '%' : ' years'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-600">Location</p>
                      <p className="font-medium">{user.location}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-2">Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {user.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Resume Upload Section */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Upload className="h-6 w-6 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Resume</h3>
                      <p className="text-sm text-gray-600">Upload your latest resume for AI recommendations</p>
                    </div>
                  </div>
                  <button
                    onClick={handleResumeUpload}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                  >
                    Upload Resume
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Notifications Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                  <Bell className="h-5 w-5 mr-2 text-blue-600" />
                  Notifications
                </h2>
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {notifications.filter(n => n.isNew).length}
                </span>
              </div>

              <div className="space-y-4 max-h-96 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-3 rounded-lg border-l-4 ${
                      notification.isNew 
                        ? 'bg-blue-50 border-blue-500' 
                        : 'bg-gray-50 border-gray-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-800 mb-1">
                          {notification.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-500">{notification.time}</p>
                      </div>
                      {notification.isNew && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full ml-2 mt-1"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Applications Sent</span>
                  <span className="font-semibold text-blue-600">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Profile Views</span>
                  <span className="font-semibold text-green-600">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Recommendations</span>
                  <span className="font-semibold text-yellow-600">5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Success Rate</span>
                  <span className="font-semibold text-purple-600">85%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Upload Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 animate-fade-in">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Analyzing Your Resume
              </h3>
              <p className="text-gray-600">
                Our AI is processing your resume to find the best internship matches...
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;