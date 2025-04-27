// apps/accounts/pages/MyProfile.jsx
import React from 'react';
import UpdatePasswordForm from '../components/UpdatePasswordForm';
import UpdateProfileForm from '../components/UpdateProfileForm';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">

            
          <div className="md:w-3/3 space-y-8">

            <div className="bg-gray-200 shadow-md rounded-2xl p-6 transition-all duration-300">
              <UpdatePasswordForm />
            </div>

            <div className="border-t border-gray-300 pt-4">
              <div className="bg-gray-200 shadow-md rounded-2xl p-6 transition-all duration-300">
                <UpdateProfileForm />
              </div>
            </div>

          </div>
        </div>
    </div>
  );
};

export default Dashboard;
