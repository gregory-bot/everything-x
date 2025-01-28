import React from 'react';
import { Mail, Phone, MapPin, Github as GitHub, Twitter, Linkedin as LinkedIn } from 'lucide-react';

const Profile = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Profile</h1>

      <div className="bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="p-6">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="h-20 w-20 rounded-full"
            />
            <div className="ml-6">
              <h2 className="text-2xl font-bold text-gray-900">John Doe</h2>
              <p className="text-sm text-gray-500">Software Engineer</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-200 px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
          <div className="space-y-3">
            <div className="flex items-center text-gray-500">
              <Mail className="h-5 w-5 mr-3" />
              <span>john.doe@example.com</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Phone className="h-5 w-5 mr-3" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center text-gray-500">
              <MapPin className="h-5 w-5 mr-3" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-200 px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Profiles</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <GitHub className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <LinkedIn className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;