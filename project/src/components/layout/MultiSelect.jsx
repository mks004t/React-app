import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

const MultiSelect = ({
  label,
  options,
  value,
  onChange,
  required = false,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggleOption = (optionValue) => {
    if (value.includes(optionValue)) {
      onChange(value.filter(val => val !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="mb-4" ref={dropdownRef}>
      <label className="block text-gray-700 font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full px-4 py-2 text-left rounded-lg border ${
            error ? 'border-red-500 bg-red-50' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 flex justify-between items-center`}
        >
          <span className={value.length > 0 ? 'text-gray-800' : 'text-gray-400'}>
            {value.length > 0
              ? `${value.length} selected`
              : 'Select options'}
          </span>
          <ChevronDown
            size={18}
            className={`transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        {isOpen && (
          <div className="absolute z-10 mt-1 w-full rounded-lg bg-white shadow-lg border border-gray-200 max-h-60 overflow-auto">
            {options.map(option => (
              <div
                key={option.value}
                onClick={() => handleToggleOption(option.value)}
                className="px-4 py-2 hover:bg-indigo-50 cursor-pointer transition-colors duration-150 flex items-center"
              >
                <div className={`w-5 h-5 border rounded-md mr-3 flex items-center justify-center transition-colors duration-200 ${
                  value.includes(option.value)
                    ? 'bg-indigo-600 border-indigo-600'
                    : 'border-gray-300'
                }`}>
                  {value.includes(option.value) && (
                    <Check size={14} className="text-white" />
                  )}
                </div>
                <span className={value.includes(option.value) ? 'font-medium' : ''}>
                  {option.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default MultiSelect;import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

const MultiSelect = ({
  label,
  options,
  value,
  onChange,
  required = false,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggleOption = (optionValue) => {
    if (value.includes(optionValue)) {
      onChange(value.filter(val => val !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="mb-4" ref={dropdownRef}>
      <label className="block text-gray-700 font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full px-4 py-2 text-left rounded-lg border ${
            error ? 'border-red-500 bg-red-50' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 flex justify-between items-center`}
        >
          <span className={value.length > 0 ? 'text-gray-800' : 'text-gray-400'}>
            {value.length > 0
              ? `${value.length} selected`
              : 'Select options'}
          </span>
          <ChevronDown
            size={18}
            className={`transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        {isOpen && (
          <div className="absolute z-10 mt-1 w-full rounded-lg bg-white shadow-lg border border-gray-200 max-h-60 overflow-auto">
            {options.map(option => (
              <div
                key={option.value}
                onClick={() => handleToggleOption(option.value)}
                className="px-4 py-2 hover:bg-indigo-50 cursor-pointer transition-colors duration-150 flex items-center"
              >
                <div className={`w-5 h-5 border rounded-md mr-3 flex items-center justify-center transition-colors duration-200 ${
                  value.includes(option.value)
                    ? 'bg-indigo-600 border-indigo-600'
                    : 'border-gray-300'
                }`}>
                  {value.includes(option.value) && (
                    <Check size={14} className="text-white" />
                  )}
                </div>
                <span className={value.includes(option.value) ? 'font-medium' : ''}>
                  {option.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default MultiSelect;
