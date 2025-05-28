import React from "react";

interface CustomInputProps {
  label: string;
  name: string;
  register?: any; // Make register optional
  required?: boolean;
  placeholder: string;
  type?: string;
  errors?: any; // Make errors optional
  value?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomInput = ({
  label,
  name,
  register,
  required = false,
  placeholder,
  type = "text",
  errors = {},
  value,
  className = "",
  onChange,
}: CustomInputProps) => {
  // Helper function to get nested error
  const getError = (obj: any, path: string) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  const error = getError(errors, name);

  return (
    <div className={`space-y-1 ${className}`}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent placeholder-black ${
          error ? "border-red-300" : ""
        }`}
        {...(register ? register(name, { required }) : {})}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">This field is required</p>
      )}
    </div>
  );
};