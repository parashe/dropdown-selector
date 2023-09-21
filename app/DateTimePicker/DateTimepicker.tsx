"use client";
import React, { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Spinner } from "./Spinner";

// Define two types for the possible values of the date pieces.
type ValuePiece = Dayjs | null;

export const DateTimepicker = () => {
  const now = new Date(); // Get the current date and time.
  const startTime = now.getTime() - 24 * 60 * 60 * 1000; // Calculate a start time 24 hours ago in milliseconds.
  const endTime = now.getTime(); // Get the current time in milliseconds.

  const [startTimestamp, setStartTimestamp] = useState<number | null>(
    startTime
  ); // Define a state variable for the start timestamp.
  const [endTimestamp, setEndTimestamp] = useState<number | null>(endTime); // Define a state variable for the end timestamp.

  // Define the TimeFilterForCurrentChart React functional component.
  const [isSearching, setIsSearching] = useState(false);

  // Get the current date and time
  const currentDate = new Date();
  // Initialize default start and end dates.
  const defaultStartDate = new Date(
    currentDate.getTime() - 24 * 60 * 60 * 1000
  ); // Note: Months are zero-based, so 5 represents June
  const defaultEndDate = new Date();

  // Initialize state variables to hold the selected start and end values.
  const [startValue, setStartValue] = useState<ValuePiece>(
    dayjs(defaultStartDate)
  );
  const [endValue, setEndValue] = useState<ValuePiece>(dayjs(defaultEndDate));

  // Function to handle changes in the start date and time.
  const handleStartDateTimeChange = (newValue: ValuePiece) => {
    setStartValue(newValue);
  };

  // Function to handle changes in the end date and time.
  const handleEndDateTimeChange = (newValue: ValuePiece) => {
    setEndValue(newValue);
  };

  // Function to handle the time filter button click.
  const handleTimeFilterOnClick = () => {
    setIsSearching(true); // Set searching state to true.

    // Convert selected dates to timestamps (assuming you want timestamps in milliseconds).
    const startTimestamp = startValue !== null ? startValue.valueOf() : null;
    const endTimestamp = endValue !== null ? endValue.valueOf() : null;

    // Check if both start and end timestamps are available.
    if (startTimestamp !== null && endTimestamp !== null) {

      // Call the API passing the startTimestamp and endTimestamp.
      
      // This section is for logging and looking at the data.
      // Handle the start and end timestamps here and pass them to the parent component or perform any other actions.
      setStartTimestamp(startTimestamp); // Update the start timestamp when the time filter is clicked.
      setEndTimestamp(endTimestamp); // Update the end timestamp when the time filter is clicked.
      const date1 = new Date(startTimestamp);
      console.log(date1.toLocaleString()); // Log the formatted start timestamp.
      const date2 = new Date(endTimestamp);
      console.log(date2.toLocaleString());

      // Set a timeout to simulate searching and then reset the searching state.
      setTimeout(() => {
        setIsSearching(false);
      }, 1000);
    }
  };


  // Render the JSX for the TimeFilterForCurrentChart component.
  return (
    <>
      <div className="flex gap-1 p-5 pl-4 pr-5 justify-center">
        <div className="flex flex-col">
          {/* Render the CustomDateTimePicker for the start date and time. */}
          <CustomDateTimeComponents
            value={startValue as any}
            onChange={handleStartDateTimeChange as any}
          />
        </div>
        <div className="flex flex-col">
          {/* Render the CustomDateTimePicker for the end date and time. */}
          <CustomDateTimeComponents
            value={endValue as any}
            onChange={handleEndDateTimeChange as any}
          />
        </div>

        <div className="ml-5 mt-0">
          {/* Render the button for applying the time filter. */}
          <button
            className="rounded-sm bg-blue-500 py-2 px-7 text-md transition-colors duration-300 hover:bg-blue-600 hover:text-white"
            onClick={handleTimeFilterOnClick}
          >
            {isSearching ? (
              <div className="flex justify-center">
                <Spinner
                  className="border-1 w-[20px] border-white"
                  ringWidth={3}
                />
              </div>
            ) : (
              <span className="py-0  text-sm tracking-wide text-white">
                Search
              </span>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default DateTimepicker;

interface CustomDateTimeProps {
  value: number | null;
  onChange: (newValue: Dayjs | string | null) => void; // Change the type to Dayjs
}

// Define a functional component named CustomDateTimeComponents with props.
export const CustomDateTimeComponents: React.FC<CustomDateTimeProps> = ({
  value,
  onChange,
}) => {
  // Initialize a state variable newvalue with a Dayjs object or null.
  const [newvalue, setNewValue] = React.useState<Dayjs | null>(
    dayjs(value) // Initialize with a Dayjs object
  );

  // Use the useEffect hook to update newvalue when the value prop changes.
  useEffect(() => {
    if (value !== null) {
      // Convert the timestamp (number) to a Dayjs object
      setNewValue(dayjs(value));
    } else {
      setNewValue(null);
    }
  }, [value]);

  // Define a function to handle changes in the date and time.
  const handleDateTimeChange = (newValue: Dayjs | null) => {
    setNewValue(newValue);
    // Format the Dayjs object as a string in "YYYY-MM-DD HH:mm:ss" format.
    const newValueString = newValue?.format("YYYY-MM-DD HH:mm:ss");
    // Call the parent component's callback with the formatted string.
    onChange(newValueString as string); // Call the parent component's callback with Dayjs object.
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="flex items-center justify-center bg-dark-400 px-6">
        {/* Commented-out code */}
        {/* <p className=" bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center px-5 py-3 text-white transition ">
          {dayjs(newvalue).format("ddd, MMM D, HH:mm")}
        </p> */}

        {/* Render the DateTimePicker component */}
        <DateTimePicker
          className="relative appearance-none "
          value={newvalue}
          onChange={handleDateTimeChange}
        />
      </div>
    </LocalizationProvider>
  );
};
