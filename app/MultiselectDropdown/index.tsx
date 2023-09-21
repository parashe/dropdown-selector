// Import the "use client" module. This should be a custom module or library.
"use client";

// Import necessary modules from the React library.
import React, { useState } from "react";

//import type
import type { Option } from "./types";
import { MultiSelectDropdown } from "./multiselectDropdown";


// Define a functional component called "Index."
export const Index = () => {
  // Initialize a state variable "value" using the "useState" hook.
  const [value, setValue] = useState<string[]>([]);



  // Define an array "options" of objects with "value" and "label" properties.
  const options: Option[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
    { value: "option6", label: "Option 6" },
    { value: "option7", label: "Option 7" },
    { value: "option8", label: "Option 8" },
    { value: "option9", label: "Option 9" },
    { value: "option10", label: "Option 10" }
  ];

  // Define a function "handleDropdownSelect" that takes "selectedValue" as an argument.
  const handleDropdownSelect = (selectedValue: string[]) => {
    // Update the "value" state with the new selected values array.
    setValue(selectedValue);
  };

  // Log the current value of "value" to the console.
  console.log('value', value);

  // Return JSX elements for rendering.
  return (
    <>
      <div className="container mx-auto text-center p-10">
        <p className="text-xl font-bold underline p-10">
          Multi Select Dropdown
        </p>
        {/* Render the "MultiSelectDropdown" component with props */}
        <MultiSelectDropdown
          options={options}
          value={value}
          onChange={(value) => {
            handleDropdownSelect(value);
          }}
          label="Multi Select Dropdown"
          required={true}
        />
      </div>
    </>
  );
};
