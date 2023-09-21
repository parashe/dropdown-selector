import React from "react";

// Define a functional component named Spinner with optional props for color, ringWidth, and className.
export const Spinner: React.FC<{
  color?: string;        // Optional prop for the spinner color.
  ringWidth?: number;    // Optional prop for the spinner's ring width.
  className?: string;   // Optional prop for additional CSS classes.
}> = ({ color, ringWidth, className }) => {
  // Define a constant staticClassName with default CSS classes.
  const staticClassName = "relative aspect-square";

  // Create the finalClassName by concatenating the staticClassName and the provided className (if any).
  const finalClassName = className
    ? staticClassName + " " + className
    : staticClassName;

  return (
    // Render the spinner container div with the finalClassName.
    <div className={finalClassName}>
      {/* Create an array of 4 elements and map over them to create spinner elements. */}
      {Array.from({ length: 4 }, (_, i) => (
        <div
          key={i} // Provide a unique key for each spinner element.
          style={{
            borderTopColor: color ?? "#D9D9D9",  // Set the border color with the provided color or a default color.
            borderWidth: ringWidth ?? 6,         // Set the border width with the provided ringWidth or a default width.
            animationDelay: `${0 - i * 0.15}s`,  // Apply animation delay to create a spinning effect.
          }}
          className="absolute inset-0 animate-[spinner-ring_1.2s_cubic-bezier(0.5,0,0.5,1)_infinite] rounded-full border border-transparent"
        />
      ))}
    </div>
  );
};
