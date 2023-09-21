"use client";
import React, { useState } from "react";

//import type
import type { Option } from "./types";

// Props interface for the MultiSelectDropdown component
interface MultipleDropDownSelectProps {
  onChange: (values: string[]) => void; // Callback function to handle changes in selected values
  options: Option[]; // Array of options to be displayed in the dropdown
  label?: string; // Optional label to display above the dropdown
  value: string[]; // Array of currently selected values
  errorMessage?: string;
  isEmpty?: boolean;
  required?: boolean;
}

// MultiSelectDropdown component
export const MultiSelectDropdown: React.FC<MultipleDropDownSelectProps> = ({
  onChange,
  options,
  value,
  label,
  errorMessage,
  isEmpty,
  required,
}) => {
  // State to keep track of selected values in the dropdown
  const [selectedValues, setSelectedValues] = useState<string[]>(value);

  // State to control the visibility of the dropdown menu
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle the visibility of the dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Function to handle selection or deselection of an option in the dropdown
  const handleDropdownSelect = (selectedValue: string) => {
    // Create a copy of the current selected values array
    const updatedValues = [...selectedValues];

    // Check if the selectedValue is already in the array
    const valueIndex = updatedValues.indexOf(selectedValue);

    // If the value is not in the array, add it; otherwise, remove it
    if (valueIndex === -1) {
      updatedValues.push(selectedValue);
    } else {
      updatedValues.splice(valueIndex, 1);
    }

    // Update the state with the new selected values array
    setSelectedValues(updatedValues);

    // Call the onChange callback to inform the parent component about the updated selected values
    onChange(updatedValues);
  };

  return (
    <>
      <div className="relative inline-block">
        {/* Optional label for the dropdown */}
        <div className="pb-4 pl-3 pr-1 text-[12px] text-black-500">
          {label} &nbsp;
          {required && <span className="text-[14px] text-red-500">*</span>}
        </div>

        {/* Dropdown button */}
        <button
          id="dropdownHoverButton2"
          onClick={toggleDropdown}
          data-dropdown-toggle="dropdownHover"
          data-dropdown-trigger="hover"
          className="flex w-[350px] items-center justify-between   bg-gray-50 border  rounded-lg  bg- px-10 py-3 text-center text-sm text-black-500 focus:outline-none"
          type="button"
        >
          {/* Display the selected values or the first option label */}
          {selectedValues.length > 0
            ? selectedValues.length === 1
              ? options.find((option) => option.value === selectedValues[0])
                  ?.label
              : selectedValues
                  .map(
                    (value) =>
                      options.find((option) => option.value === value)?.label
                  )
                  .join(", ")
            : options
            ? options[0]?.label
            : null}{" "}
          {/* Dropdown icon */}
          <svg
            className={`ml-6 mr-0 h-2.5 w-2.5  ${
              isDropdownOpen ? "rotate-180 transform" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="red"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {/* Dropdown menu */}
        {isDropdownOpen && (
          <div
            id="dropdownHover"
            className="top-15 absolute left-0 z-10 w-full divide-y divide-gray-100 rounded-lg bg-dark-500 shadow dark:bg-gray-700"
          >
            <ul
              className={` h-[250px] overflow-y-scroll  py-2 text-lg text-black-500 dark:text-gray-200`}
              aria-labelledby="dropdownHoverButton"
            >
              {/* Display all the available options as list items */}
              {options.map((option) => (
                <li key={option.value}>
                  <a
                    href="#"
                    className={` flex items-center justify-between px-5 py-3 border-t text-center text-sm hover:bg-gray-50 dark:hover:bg-gray-600 dark:hover:text-white ${
                      selectedValues.includes(option.value) ? "bg-gray-50" : ""
                    }`}
                    onClick={() => handleDropdownSelect(option.value)}
                  >
                    {/* Display option label */}
                    <span>{option.label}</span>

                    {/* Display checkmark icon if the option is selected */}
                    {selectedValues.includes(option.value) && (
                      <span className="ml-2">
                        <CheckMark color="red" className="h-[10px] w-[25px]" />
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {isEmpty && errorMessage && (
          <div className="ml-2 mt-0  ">
            <span className="text-[11px] italic text-ui-red">
              {errorMessage}
            </span>
          </div>
        )}
      </div>
    </>
  );
};

//This is reusable svg for checkmark
export const CheckMark: React.FC<{
  color: string;
  className?: string;
}> = ({ color, className }) => (
  <svg
    viewBox="0 0 25 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M2.25781 11.0966L7.87485 16.5448L22.3004 2.55298"
      stroke={color}
      strokeWidth="3.49795"
      strokeLinecap="round"
    />
  </svg>
);
