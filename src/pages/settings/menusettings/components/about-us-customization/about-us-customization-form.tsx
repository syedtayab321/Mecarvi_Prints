"use client";

import React, { useState } from "react";

const AboutUsCustomizationForm = () => {
  const [toggleStates, setToggleStates] = useState({
    aboutUs: true,
    middleBanner: true,
    aboutUsInfo: true,
    coreValues: true,
    printLocation: false,
    partners: true
  });

  const handleToggle = (field: keyof typeof toggleStates) => {
    setToggleStates(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with toggle states:", toggleStates);
    // Add your form submission logic here
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        {/* Form Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-6">
          <h1 className="text-2xl font-bold text-white">About Us Page Customization</h1>
          <p className="text-blue-100 mt-2">Toggle sections to show/hide on your About Us page</p>
        </div>

        {/* Main Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Toggle Items */}
          <div className="space-y-4">
            {/* About Us Section */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-800">About Us *</h3>
                <p className="text-sm text-gray-500">Main about us content section</p>
              </div>
              <button
                type="button"
                onClick={() => handleToggle('aboutUs')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${toggleStates.aboutUs ? 'bg-blue-600' : 'bg-gray-200'}`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${toggleStates.aboutUs ? 'translate-x-6' : 'translate-x-1'}`}
                />
              </button>
            </div>

            {/* Middle Banner Section */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-800">About us Middle Banner *</h3>
                <p className="text-sm text-gray-500">Middle banner section with image</p>
              </div>
              <button
                type="button"
                onClick={() => handleToggle('middleBanner')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${toggleStates.middleBanner ? 'bg-blue-600' : 'bg-gray-200'}`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${toggleStates.middleBanner ? 'translate-x-6' : 'translate-x-1'}`}
                />
              </button>
            </div>

            {/* About Us Info Section */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-800">About us Info *</h3>
                <p className="text-sm text-gray-500">Additional information section</p>
              </div>
              <button
                type="button"
                onClick={() => handleToggle('aboutUsInfo')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${toggleStates.aboutUsInfo ? 'bg-blue-600' : 'bg-gray-200'}`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${toggleStates.aboutUsInfo ? 'translate-x-6' : 'translate-x-1'}`}
                />
              </button>
            </div>

            {/* Core Values Section */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-800">Core Values *</h3>
                <p className="text-sm text-gray-500">Company core values display</p>
              </div>
              <button
                type="button"
                onClick={() => handleToggle('coreValues')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${toggleStates.coreValues ? 'bg-blue-600' : 'bg-gray-200'}`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${toggleStates.coreValues ? 'translate-x-6' : 'translate-x-1'}`}
                />
              </button>
            </div>

            {/* Print Location Section */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-800">Print Location *</h3>
                <p className="text-sm text-gray-500">Company location and map</p>
              </div>
              <button
                type="button"
                onClick={() => handleToggle('printLocation')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${toggleStates.printLocation ? 'bg-blue-600' : 'bg-gray-200'}`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${toggleStates.printLocation ? 'translate-x-6' : 'translate-x-1'}`}
                />
              </button>
            </div>

            {/* Partners Section */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-800">Partners *</h3>
                <p className="text-sm text-gray-500">Partner logos and information</p>
              </div>
              <button
                type="button"
                onClick={() => handleToggle('partners')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${toggleStates.partners ? 'bg-blue-600' : 'bg-gray-200'}`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${toggleStates.partners ? 'translate-x-6' : 'translate-x-1'}`}
                />
              </button>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-200 font-medium"
            >
              Reset Defaults
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-medium shadow-sm"
            >
              Save Visibility Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AboutUsCustomizationForm;