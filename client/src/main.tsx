import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initGA } from "./lib/google-analytics";
import { initGoogleAds } from "./lib/google-ads";

// Initialize Google Analytics & Google Ads
initGA();
initGoogleAds();

createRoot(document.getElementById("root")!).render(<App />);
