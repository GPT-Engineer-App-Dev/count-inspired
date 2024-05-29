import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#7f1d1d", // Dark red
    800: "#991b1b", // Red
    700: "#b91c1c", // Light red
    600: "#dc2626", // Lighter red
    500: "#ef4444", // Even lighter red
    400: "#f87171", // Lightest red
    300: "#fca5a5", // Pale red
    200: "#fecaca", // Very pale red
    100: "#fee2e2", // Almost white red
  },
  background: {
    900: "#1a1a1a", // Dark background
    800: "#2e2e2e", // Medium dark background
    700: "#4a4a4a", // Medium background
    600: "#6b6b6b", // Medium light background
    500: "#8c8c8c", // Light background
    400: "#adadad", // Lighter background
    300: "#cecece", // Lightest background
    200: "#e0e0e0", // Almost white background
    100: "#f5f5f5", // White background
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
