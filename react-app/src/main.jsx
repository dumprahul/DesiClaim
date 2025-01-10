import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { AnonAadhaarProvider } from "@anon-aadhaar/react";


createRoot(document.getElementById('root')).render(
  <AnonAadhaarProvider 
  _useTestAadhaar={true}
  _artifactslinks={{
    zkey_url: "/circuit_final.zkey",
    vkey_url: "/vkey.json",
    wasm_url: "/aadhaar-verfier.wasm",
  }}>
  <StrictMode>
    <App />
  </StrictMode>
  </AnonAadhaarProvider>,
)
