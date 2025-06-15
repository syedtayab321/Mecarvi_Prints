"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface RespondQuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  quotationData: {
    quoteNo: string;
    customerName: string;
    date: string;
  };
}

const RespondQuotationModal: React.FC<RespondQuotationModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  quotationData,
}) => {
  const [formData, setFormData] = useState({
    cost: "",
    shippingCost: "",
    details: "",
    validityDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Default to 7 days from now
    attachments: [] as File[],
  });

  const [attachmentNames, setAttachmentNames] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setFormData(prev => ({
        ...prev,
        validityDate: date
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFormData(prev => ({
        ...prev,
        attachments: [...prev.attachments, ...newFiles]
      }));
      setAttachmentNames(prev => [...prev, ...newFiles.map(file => file.name)]);
    }
  };

  const removeAttachment = (index: number) => {
    const newAttachments = [...formData.attachments];
    const newAttachmentNames = [...attachmentNames];
    
    newAttachments.splice(index, 1);
    newAttachmentNames.splice(index, 1);
    
    setFormData(prev => ({
      ...prev,
      attachments: newAttachments
    }));
    setAttachmentNames(newAttachmentNames);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically call an API to submit the quotation response
    console.log("Submitting quotation response:", {
      ...formData,
      attachments: formData.attachments.map(f => f.name)
    });
    onSuccess();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden border border-gray-100">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-5 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-white">Respond to Quotation</h2>
            <div className="text-purple-100 mt-1 flex flex-wrap gap-x-4">
              <span>Quote #: {quotationData.quoteNo}</span>
              <span>Customer: {quotationData.customerName}</span>
              <span>Date: {quotationData.date}</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors duration-200 p-1 rounded-full hover:bg-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cost */}
            <div className="space-y-1">
              <label htmlFor="cost" className="block text-sm font-medium text-gray-700">
                Cost <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500">$</span>
                <input
                  type="number"
                  id="cost"
                  name="cost"
                  value={formData.cost}
                  onChange={handleChange}
                  required
                  min="0"
                  step="0.01"
                  className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-800"
                  placeholder="e.g. 500.00"
                />
              </div>
            </div>

            {/* Shipping Cost */}
            <div className="space-y-1">
              <label htmlFor="shippingCost" className="block text-sm font-medium text-gray-700">
                Shipping Cost
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500">$</span>
                <input
                  type="number"
                  id="shippingCost"
                  name="shippingCost"
                  value={formData.shippingCost}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-800"
                  placeholder="e.g. 25.00"
                />
              </div>
            </div>

            {/* Validity Date */}
            <div className="space-y-1">
              <label htmlFor="validityDate" className="block text-sm font-medium text-gray-700">
                Quotation Validity Date <span className="text-red-500">*</span>
              </label>
              <DatePicker
                selected={formData.validityDate}
                onChange={handleDateChange}
                minDate={new Date()}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Total Cost (calculated field) */}
            <div className="space-y-1">
              <label htmlFor="totalCost" className="block text-sm font-medium text-gray-700">
                Total Cost
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500">$</span>
                <input
                  type="text"
                  id="totalCost"
                  className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg bg-gray-50"
                  value={(
                    parseFloat(formData.cost || "0") + 
                    parseFloat(formData.shippingCost || "0")
                  ).toFixed(2)}
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-1">
            <label htmlFor="details" className="block text-sm font-medium text-gray-700">
              Response Details <span className="text-red-500">*</span>
            </label>
            <textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-800"
              placeholder="Provide details about the quotation response, terms, conditions, etc."
            />
          </div>

          {/* Attachments */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Attachments
            </label>
            
            {/* Display existing attachments */}
            {attachmentNames.length > 0 && (
              <div className="space-y-2">
                {attachmentNames.map((name, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm text-gray-700 truncate max-w-xs">{name}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeAttachment(index)}
                      className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
            
            {/* Add more attachments button */}
            <div>
              <label className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Attachments
                <input
                  type="file"
                  className="sr-only"
                  onChange={handleFileChange}
                  multiple
                />
              </label>
              <p className="mt-1 text-xs text-gray-500">PDF, JPG, PNG up to 10MB</p>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex justify-end space-x-4 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-200 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-medium shadow-sm"
            >
              Submit Response
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RespondQuotationModal;