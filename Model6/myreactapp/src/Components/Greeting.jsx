// Import React to use JSX syntax
import React from 'react';

// Define the Greeting functional component that accepts props: name and children
function Greeting({ name, children }) {
  // Set default greeting message to "Hello" if children prop is not provided
  const greetingMessage = children || "Hello";
  // Set default name to "World" if name prop is not provided
  const displayName = name || "World";
  // Return JSX that renders the greeting message followed by the name
  return <div>{greetingMessage} {displayName}</div>;
}

// Export the Greeting component so it can be imported in other files
export default Greeting;