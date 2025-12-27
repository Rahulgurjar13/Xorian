import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initializeSecurity, preventScreenCapture, monitorSecurity } from "./utils/security.ts";

// Initialize all security measures
initializeSecurity();
preventScreenCapture();
monitorSecurity();

createRoot(document.getElementById("root")!).render(<App />);
