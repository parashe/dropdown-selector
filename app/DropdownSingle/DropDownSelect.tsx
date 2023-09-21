// Import necessary modules from the React library.
import React, { useState } from "react";

// Import the type "Option" from a separate module.
import type { Option } from "./types";

// Props interface for the DropDownSelect component
interface DropDownSelectProps {
  value: string; // The currently selected value
  onChange: (value: string) => void; // Callback function to handle changes in the selected value
  options: Option[]; // Array of options to be displayed in the dropdown
  label?: string; // Optional label to display above the dropdown
  errorMessage?: string;
  isEmpty?: boolean;
  disabled?: boolean;
  className?: string;
  required?: boolean;
}

// DropDownSelect component
export const DropDownSelect: React.FC<DropDownSelectProps> = ({
  value,
  onChange,
  options,
  label,
  errorMessage,
  isEmpty,
  disabled = false, // Default value is false (dropdown is not disabled)
  className,
  required,
}) => {
  // State to control the visibility of the dropdown menu
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle the visibility of the dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Declare a constant "staticClassName" with the value "h-full  w-full ".
  const staticClassName =
    "flex w-[350px] items-center justify-between   bg-gray-50 border  rounded-lg  bg- px-10 py-3 text-center text-sm text-black-500 focus:outline-none";

  // Concatenate "staticClassName" with the "className" prop, if available, otherwise use "staticClassName".
  const finalClassName = className
    ? staticClassName + " " + className
    : staticClassName;

  // Function to handle selection of an option in the dropdown
  const handleDropdownSelect = (selectedValue: string) => {
    // Call the onChange callback to inform the parent component about the selected value
    onChange(selectedValue);
    // Close the dropdown menu after selection
    setDropdownOpen(false);
  };

  // Find the option corresponding to the selected value
  const selectedOption = options.find((option) => option.value === value);

  return (
    <>
      <div className="relative inline-block">
        {/* Optional label for the dropdown */}
        <div className="pb-4 pl-3 pr-1 text-[12px] text-light-000">
          {label} &nbsp;
          {required && <span className="text-[14px] text-red-500">*</span>}
        </div>

        {/* Dropdown button */}
        <button
          id="dropdownHoverButton1"
          onClick={toggleDropdown}
          data-dropdown-toggle="dropdownHover"
          data-dropdown-trigger="hover"
          className={finalClassName}
          type="button"
          style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          disabled={disabled}
        >
          {/* Display the selected option label or the label of the first option if none is selected */}
          {selectedOption
            ? selectedOption.label
            : options
            ? options[0]?.label
            : null}{" "}
          {/* Dropdown icon */}
          <svg
            className={`ml-5 mr-0 h-2.5 w-2.5 ${
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
        {isDropdownOpen && !disabled && (
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
                      option.value === value ? "bg-dark-700" : ""
                    }`}
                    onClick={() => handleDropdownSelect(option.value)}
                  >
                    {/* Display option label */}
                    {option.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <br />
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
